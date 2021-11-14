const express = require("express");
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
    .then((drone) => {
      res.render("drones/list.hbs", { drone });
    })
    .catch(() => {
      next("fail to list the drones");
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones");
    })
    .catch(() => {
      next("fail to create the drone");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code her

  const { id } = req.params;

  DroneModel.findById(id)
    .then((theDrone) => {
      console.log("the drone Id is", theDrone);
      res.render("drones/update-form.hbs", { theDrone });
    })
    .catch(() => {
      next("update form is not available");
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;

  const { id } = req.params;

  DroneModel.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => {
      console.log("IT S IN THE THEN");
      res.redirect("/drones");
    })
    .catch(() => {
      console.log("IT S IN THE CATCH");
      next("drone update failed");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;

  DroneModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch(() => {
      next("Failed to delete the drone");
    });
});

module.exports = router;
