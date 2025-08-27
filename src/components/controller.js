import {
	createProject,
	deleteProject,
	renameProject,
	addTask,
	getTasks,
	getAllProjects,
	deleteTask,
	editTask,
} from "./model";

import { renderProjectCards } from "../views/projectCard";
import { renderTasksFor, renderTasksForHome } from "./view";

let currentProject = "allTask";

function setCurrentProject(projectName) {
	currentProject = projectName;
}

function getCurrentProject() {
	return currentProject;
}

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

	renderTasksFor(projectName);
}

function handleGetTasks(projectName) {
	return getTasks(projectName);
}

function handleGetAllProjects() {
	return getAllProjects();
}

function handleDeleteTask(taskId) {
	deleteTask(taskId);
	const currentProject = getCurrentProject();
	if (
		currentProject !== "allTask" &&
		currentProject !== "todayTask" &&
		currentProject !== "weekTask" &&
		currentProject !== "importantTask"
	) {
		renderTasksFor(currentProject);
	} else {
		// Re-render Home sections properly
		renderTasksForHome(currentProject);
	}
}

function handleEditTask(taskId, newTaskObj) {
	editTask(taskId, newTaskObj);
	const currentProject = getCurrentProject();
	if (
		currentProject !== "allTask" &&
		currentProject !== "todayTask" &&
		currentProject !== "weekTask" &&
		currentProject !== "importantTask"
	) {
		renderTasksFor(currentProject);
	} else {
		renderTasksForHome(currentProject);
	}
}

export {
	handleCreateProject,
	handleDeleteProject,
	handleRenameProject,
	handleAddTask,
	handleGetTasks,
	handleGetAllProjects,
	handleDeleteTask,
	setCurrentProject,
	getCurrentProject,
	handleEditTask,
};
