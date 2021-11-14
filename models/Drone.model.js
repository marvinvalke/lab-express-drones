// Iteration #1

//Connecting to the DB
const mongoose = require("mongoose");

// Create a Schema for the drones
const DroneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  propellers: {
    type: Number,
    required: true,
  },
  maxSpeed: {
    type: Number,
    required: true,
  },
});

// Export the schema
const DroneModel = mongoose.model("Drone", DroneSchema);

module.exports = DroneModel;
