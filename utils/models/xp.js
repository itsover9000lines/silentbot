const mongoose = require("mongoose");

const xpSchema = mongoose.Schema({
  userID: String,
  serverID: String, 
  serverName: String,
  xp: Number
});

module.exports = mongoose.model("xp", xpSchema);