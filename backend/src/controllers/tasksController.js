const tasksmodel = require("../models/tasksModel");

const getALL = async (request, response) => {
    const tasks = await tasksmodel.getAll();
    return response.status(200).json(tasks);
};
const createdTask = async (request, response) => {
    const createTask = await tasksmodel.createTask(request.body);
    return response.status(201).json(createTask);
};

const deleteTask = async (request, response) => {
    const { id } = request.params;

    await tasksmodel.deleteTask(id);
    return response.status(204).json();
};
const updateTask = async (request, response) => {
    const { id } = request.params;
    await tasksmodel.updateTask(id, request.body);
    return response.status(204).json();
};

module.exports = {
    getALL,
    createdTask,
    deleteTask,
    updateTask
};
