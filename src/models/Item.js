const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  condition: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  }
});

module.exports = mongoose.model("Items", itemSchema);