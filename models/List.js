const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  strA: String,
  strB: String
});

module.exports = mongoose.model("List", ListSchema);
