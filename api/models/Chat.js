const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    receiverid: { type: String, required: true },
    text: { type: Array, default: [] },
  },
);

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;
