import {
	createProject,
	addTasks,
	getTasks,
	getAllProjects,
	deleteTask,
} from "./model";

function handleCreateProject(name) {
	if (!name.trim()) return;
	createProject(name);
}

function handleAddTasks(projectName, taskObj) {
	if (!taskObj.title.trim()) return;
	addTasks(projectName, taskObj);
}

function handleGetTasks(projectName) {
	if (!projectName.trim()) return;
	return getTasks(projectName);
}

function handleGetAllProjects() {
	return getAllProjects();
}

function handleDeleteTask(projectName, index) {
	deleteTask(projectName, index);
}

export {
	handleCreateProject,
	handleAddTasks,
	handleGetTasks,
	handleGetAllProjects,
	handleDeleteTask,
};
