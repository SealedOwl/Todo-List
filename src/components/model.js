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

function deleteTask(taskId) {
	let projectName = "";

	for (const key in projects) {
		const items = projects[key];

		if (items.some((item) => item.id === taskId)) {
			projectName = key;
			break;
		}
	}
	if (projects[projectName]) {
		projects[projectName] = projects[projectName].filter(
			(task) => task.id !== taskId
		);
	}
}

function editTask(oldTaskId, newTaskObj) {
	for (const [key, items] of Object.entries(projects)) {
		const indexToReplace = items.findIndex((obj) => obj.id === oldTaskId);

		if (indexToReplace !== -1) {
			items[indexToReplace] = { ...items[indexToReplace], ...newTaskObj }; // replace only the fields that changed
			return true;
		}
	}
	return false;
}

export {
	createProject,
	deleteProject,
	renameProject,
	addTask,
	getTasks,
	getAllProjects,
	deleteTask,
	editTask,
	getAllTasks,
};
