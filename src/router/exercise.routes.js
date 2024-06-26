const express = require("express");
const router = express.Router();

const exerciseController = require("../controllers/exercise_controller");

router.get("/", exerciseController.getAllExercises);
router.get("/:id", exerciseController.getExerciseById);
router.get("/instrument/:id", exerciseController.getInstrumentById);
router.get("/id/:name", exerciseController.getIdByName);

router.post("/", exerciseController.addExercise);

router.put("/:id", exerciseController.updateExerciseById);

router.delete("/:id", exerciseController.deleteExerciseById);

module.exports = router;
