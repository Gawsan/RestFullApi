const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
    default: "JS",
  },
  designation: {
    type: String,
    default: "Intern",
  },
});
module.exports = mongoose.model("Person", personSchema);
