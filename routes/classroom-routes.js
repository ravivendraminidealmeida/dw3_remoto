const express = require('express');
const classroomRouter = express.Router();
const classroomController = require('../controller/classroom-controller');

classroomRouter.get("/", classroomController.GetAllSalasDeAulas);
classroomRouter.post("/", classroomController.InsertSalasDeAula);

classroomRouter.get("/{:id}", classroomController.GetSalasDeAulaByID);
classroomRouter.put("/{:id}", classroomController.UpdateSalasDeAula);
classroomRouter.delete("/{:id}", classroomController.DeleteSalasDeAula);

module.exports = classroomRouter;
