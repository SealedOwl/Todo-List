import "./styles.css";

import { renderApp } from "./components/view";

import {
	handleCreateProject,
	handleAddTasks,
	handleGetTasks,
	handleGetAllProjects,
	handleDeleteTask,
} from "./components/controller";

renderApp();

// ----------------------------------------------------------------

handleCreateProject("Study");

handleAddTasks("Study", {
	title: "Odin Project",
	dueDate: "05-08-2025",
	priority: "High",
	important: true,
});

console.log(handleGetTasks("Study"));
console.log(handleGetAllProjects());
