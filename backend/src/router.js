const express = require("express");

const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");
const router = express.Router();

router.get("/tasks", tasksController.getALL);
router.post(
    "/tasks",
    tasksMiddleware.validadeFieldTitle,
    tasksController.createdTask
);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
    "/tasks/:id",
    tasksMiddleware.validadeFieldTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask
);

module.exports = router;
