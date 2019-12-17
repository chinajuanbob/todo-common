
GOOS=linux
GOARCH=amd64
GOPATH:=$(shell go env GOPATH)

.PHONY: setup
setup:
	GO111MODULE=off go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
	GO111MODULE=off go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
	GO111MODULE=off go get -u github.com/golang/protobuf/protoc-gen-go

.PHONY: proto
proto:
	protoc --proto_path=${GOPATH}/src:. --micro_out=. --go_out=. proto/health/health.proto
	protoc --proto_path=${GOPATH}/src:. \
		-I$(GOPATH)/src/github.com/grpc-ecosystem/grpc-gateway \
		-I$(GOPATH)/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		--micro_out=. --go_out=. \
		proto/todo/todo.proto
	cp -f proto/todo/todo.proto proto/todo-gw/todo.proto
	protoc --proto_path=${GOPATH}/src:. \
		-I$(GOPATH)/src/github.com/grpc-ecosystem/grpc-gateway \
		-I$(GOPATH)/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		--go_out=plugins=grpc:. \
		proto/todo-gw/todo.proto
	protoc --proto_path=${GOPATH}/src:. \
		-I$(GOPATH)/src/github.com/grpc-ecosystem/grpc-gateway \
		-I$(GOPATH)/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		--grpc-gateway_out=logtostderr=true:. \
		proto/todo-gw/todo.proto
	protoc --proto_path=${GOPATH}/src:. \
		-I$(GOPATH)/src/github.com/grpc-ecosystem/grpc-gateway \
		-I$(GOPATH)/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
		--swagger_out=logtostderr=true:. \
		proto/todo-gw/todo.proto
	mv -f proto/todo-gw/todo.swagger.json static/swagger/swagger.json

.PHONY: genjs
genjs:
	npm install ts-protoc-gen
	protoc \
		--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
		--js_out="import_style=commonjs,binary:." \
		--ts_out=. \
		proto/todo-js/todo.proto

.PHONY: test
test:
	go test -v ./... -cover

.PHONY: changlog
changlog:
	git-chglog -o CHANGELOG.md
