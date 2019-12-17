// package: chinajuanbob.todo.v1
// file: proto/todo-js/todo.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Todo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  getStatus(): TodoStatusMap[keyof TodoStatusMap];
  setStatus(value: TodoStatusMap[keyof TodoStatusMap]): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    id: number,
    content: string,
    status: TodoStatusMap[keyof TodoStatusMap],
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface TodoStatusMap {
  NEW: 0;
  INPROGRESS: 1;
  DONE: 2;
}

export const TodoStatus: TodoStatusMap;

