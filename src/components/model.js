const projects = {
	default: [],
};

function createProject(name) {
	if (!projects[name]) {
		projects[name] = [];
	}
}

function addTasks(projectName, taskObj) {
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

function deleteTask(projectName, index) {
	if (projects[projectName]) {
		projects[projectName].splice(index, 1);
	}
}

export { createProject, addTasks, getTasks, getAllProjects, deleteTask };
