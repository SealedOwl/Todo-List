import {
	createProject,
	addTask,
	getTasks,
	getAllProjects,
	deleteTask,
} from "./model";

import { renderProjectCards } from "../views/projectCard";

function handleCreateProject(name) {
	if (!name.trim()) return;

	createProject(name);

	const projects = getAllProjects();

	renderProjectCards(projects);
}

function handleAddTask(projectName, taskObj) {
	if (!taskObj.title.trim()) return;
	addTask(projectName, taskObj);
}

function handleGetTasks(projectName) {
	if (!projectName.trim()) return;
	return getTasks(projectName);
}

function handleGetAllProjects() {
	return getAllProjects();
}

function handleDeleteTask(projectName, taskId) {
	deleteTask(projectName, taskId);
}

export {
	handleCreateProject,
	handleAddTask,
	handleGetTasks,
	handleGetAllProjects,
	handleDeleteTask,
};
