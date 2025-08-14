import "./styles.css";

import { renderApp, renderTasksFor } from "./components/view";

import {
	handleCreateProject,
	handleAddTask,
	handleGetTasks,
	handleGetAllProjects,
	handleDeleteTask,
} from "./components/controller";

renderApp();

// ----------------------------------------------------------------

handleCreateProject("Study");

handleAddTask("Study", {
	id: crypto.randomUUID(),
	title: "Odin Project",
	dueDate: "2025-08-05",
	details: "Please dont procrastinate and study",
	priority: "High",
	important: true,
});

handleAddTask("Study", {
	id: crypto.randomUUID(),
	title: "Cloud computing",
	dueDate: "2025-08-15",
	details: "Coursera course",
	priority: "medium",
	important: true,
});

console.log(handleGetTasks("Study"));
console.log(handleGetAllProjects());

renderTasksFor("Study");
