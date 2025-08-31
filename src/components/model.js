const projects = {
	// default: [],
};

function saveToLocalStorage() {
	try {
		localStorage.setItem("projects", JSON.stringify(projects));
	} catch (err) {
		console.error("Error saving to local storage :", err);
	}
}

function loadFromLocalStorage() {
	try {
		const data = localStorage.getItem("projects");
		if (data) {
			const parsed = JSON.parse(data);

			Object.keys(parsed).forEach((key) => {
				projects[key] = parsed[key];
			});
		} else {
			projects["Study"] = [
				{
					id: crypto.randomUUID(),
					title: "Odin Project",
					details: "Please dont procrastinate and study",
					dueDate: "27-08-2025",
					priority: "High",
					important: true,
					completed: false,
				},
			];

			saveToLocalStorage();
		}
	} catch (err) {
		console.error("Error loading from local storage:", err);
	}
}

function createProject(name) {
	if (!projects[name]) {
		projects[name] = [];
		saveToLocalStorage();
	}
}

function deleteProject(projectName) {
	if (projectName) {
		delete projects[projectName];
		saveToLocalStorage();
	}
}

function renameProject(oldName, newName) {
	if (projects[oldName] && !projects[newName]) {
		projects[newName] = projects[oldName]; // Move tasks
		delete projects[oldName];
		saveToLocalStorage();
	}
}

function addTask(projectName, taskObj) {
	if (projects[projectName]) {
		projects[projectName].push(taskObj);
		saveToLocalStorage();
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
		saveToLocalStorage();
	}
}

function editTask(oldTaskId, newTaskObj) {
	for (const [key, items] of Object.entries(projects)) {
		const indexToReplace = items.findIndex((obj) => obj.id === oldTaskId);

		if (indexToReplace !== -1) {
			items[indexToReplace] = { ...items[indexToReplace], ...newTaskObj }; // replace only the fields that changed
			saveToLocalStorage();
			return true;
		}
	}
	return false;
}

function toggleTaskComplete(taskId) {
	let projectName = "";

	for (const key in projects) {
		const items = projects[key];

		if (items.some((item) => item.id === taskId)) {
			projectName = key;
			break;
		}
	}

	const tasks = projects[projectName];

	const task = tasks.find((task) => task.id === taskId);
	if (task) {
		task.completed = !task.completed;
		saveToLocalStorage();
	}
}

function toggleTaskImportant(taskId) {
	// let projectName = "";

	// for (const key in projects) {
	// 	const items = projects[key];

	// 	if (items.some((item) => item.id === taskId)) {
	// 		projectName = key;
	// 		break;
	// 	}
	// }

	// const tasks = projects[projectName];

	const task = getTask(taskId);
	if (task) {
		task.important = !task.important;
		saveToLocalStorage();
	}
}

function getTask(taskId) {
	let projectName = "";

	for (const key in projects) {
		const items = projects[key];

		if (items.some((item) => item.id === taskId)) {
			projectName = key;
			break;
		}
	}

	const tasks = projects[projectName];

	const task = tasks.find((task) => task.id === taskId);
	return task;
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
	toggleTaskComplete,
	toggleTaskImportant,
	getTask,
	loadFromLocalStorage,
};
