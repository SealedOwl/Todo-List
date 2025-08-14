const projects = {
	default: [],
};

function createProject(name) {
	if (!projects[name]) {
		projects[name] = [];
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

export { createProject, addTask, getTasks, getAllProjects, deleteTask };
