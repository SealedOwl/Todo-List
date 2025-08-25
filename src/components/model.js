const projects = {
	default: [],
};

function createProject(name) {
	if (!projects[name]) {
		projects[name] = [];
	}
}

function deleteProject(projectName) {
	if (projectName) {
		delete projects[projectName];
	}
}

function renameProject(oldName, newName) {
	if (projects[oldName] && !projects[newName]) {
		projects[newName] = projects[oldName]; // Move tasks
		delete projects[oldName];
	}
}

function addTask(projectName, taskObj) {
	if (projects[projectName]) {
		projects[projectName].push(taskObj);
	}
}

function getTasks(projectName) {
	return projects[projectName] || [];
}

function getAllTasks() {
	return Object.values(projects).flat();
}

function getAllProjects() {
	return Object.keys(projects);
}

function deleteTask(projectName, taskId) {
	if (projects[projectName]) {
		projects[projectName] = projects[projectName].filter(
			(task) => task.id !== taskId
		);
	}
}

export {
	createProject,
	deleteProject,
	renameProject,
	addTask,
	getTasks,
	getAllProjects,
	deleteTask,
	getAllTasks,
};
