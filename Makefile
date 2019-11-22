
GOOS=linux
GOARCH=amd64
GOPATH:=$(shell go env GOPATH)

.PHONY: proto
proto:
	protoc --proto_path=${GOPATH}/src:. --micro_out=. --go_out=. proto/health/health.proto
	protoc --proto_path=${GOPATH}/src:. --micro_out=. --go_out=. proto/todo/todo.proto

.PHONY: test
test:
	go test -v ./... -cover

.PHONY: changlog
changlog:
	git-chglog -o CHANGELOG.md
