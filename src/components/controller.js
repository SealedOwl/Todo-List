import {
	createProject,
	deleteProject,
	renameProject,
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

function handleDeleteProject(projectName) {
	deleteProject(projectName);
	const projects = getAllProjects();
	renderProjectCards(projects);
}

function handleRenameProject(oldName, newName) {
	renameProject(oldName, newName);
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
	handleDeleteProject,
	handleRenameProject,
	handleAddTask,
	handleGetTasks,
	handleGetAllProjects,
	handleDeleteTask,
};
