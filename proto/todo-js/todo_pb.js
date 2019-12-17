// source: proto/todo-js/todo.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.chinajuanbob.todo.v1.Todo', null, global);
goog.exportSymbol('proto.chinajuanbob.todo.v1.TodoStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chinajuanbob.todo.v1.Todo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chinajuanbob.todo.v1.Todo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chinajuanbob.todo.v1.Todo.displayName = 'proto.chinajuanbob.todo.v1.Todo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chinajuanbob.todo.v1.Todo.prototype.toObject = function(opt_includeInstance) {
  return proto.chinajuanbob.todo.v1.Todo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chinajuanbob.todo.v1.Todo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chinajuanbob.todo.v1.Todo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chinajuanbob.todo.v1.Todo}
 */
proto.chinajuanbob.todo.v1.Todo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chinajuanbob.todo.v1.Todo;
  return proto.chinajuanbob.todo.v1.Todo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chinajuanbob.todo.v1.Todo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chinajuanbob.todo.v1.Todo}
 */
proto.chinajuanbob.todo.v1.Todo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {!proto.chinajuanbob.todo.v1.TodoStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chinajuanbob.todo.v1.Todo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chinajuanbob.todo.v1.Todo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chinajuanbob.todo.v1.Todo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chinajuanbob.todo.v1.Todo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.chinajuanbob.todo.v1.Todo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.chinajuanbob.todo.v1.Todo.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.chinajuanbob.todo.v1.Todo.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.chinajuanbob.todo.v1.Todo.prototype.setContent = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TodoStatus status = 3;
 * @return {!proto.chinajuanbob.todo.v1.TodoStatus}
 */
proto.chinajuanbob.todo.v1.Todo.prototype.getStatus = function() {
  return /** @type {!proto.chinajuanbob.todo.v1.TodoStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.chinajuanbob.todo.v1.TodoStatus} value */
proto.chinajuanbob.todo.v1.Todo.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp last_updated = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.chinajuanbob.todo.v1.Todo.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.chinajuanbob.todo.v1.Todo.prototype.setLastUpdated = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.chinajuanbob.todo.v1.Todo.prototype.clearLastUpdated = function() {
  this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.chinajuanbob.todo.v1.Todo.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * @enum {number}
 */
proto.chinajuanbob.todo.v1.TodoStatus = {
  NEW: 0,
  INPROGRESS: 1,
  DONE: 2
};

goog.object.extend(exports, proto.chinajuanbob.todo.v1);
