const db = require("mongoose");

const settings = db.Schema({
  serverID: String, 
  serverName: String,
  log: String
});
module.exports = db.model("settings", settings)