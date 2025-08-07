import "./styles.css";

import { renderApp } from "./components/view";

import {
	handleCreateProject,
	handleAddTasks,
	handleGetTasks,
	handleGetAllProjects,
	handleDeleteTask,
} from "./components/controller";

import { renderTaskCards } from "./components/views/taskCard";

renderApp();

// ----------------------------------------------------------------

handleCreateProject("Study");

handleAddTasks("Study", {
	title: "Odin Project",
	dueDate: "05-08-2025",
	details: "Please dont procrastinate and study",
	priority: "High",
	important: true,
});

console.log(handleGetTasks("Study"));
console.log(handleGetAllProjects());

const tasks = handleGetTasks("Study");

renderTaskCards(tasks);
