const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", MessageSchema);
