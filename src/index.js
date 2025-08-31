import "./styles.css";

import {
	renderApp,
	renderTasksFor,
	renderTasksForHome,
} from "./components/view";
import { renderProjectCards } from "./views/projectCard";
import { renderProjectForm } from "./views/projectForm";
import { renderTaskForm } from "./views/taskForm";

import {
	handleCreateProject,
	handleAddTask,
	handleGetTasks,
	handleGetAllProjects,
} from "./components/controller";

import { getAllProjects, loadFromLocalStorage } from "./components/model";
import {
	initTaskFormEvents,
	initProjectFormEvents,
	initProjectOptionsEvents,
	initTaskOptionsEvents,
	initProjectSelection,
	initToggleSidebar,
} from "./components/events";

loadFromLocalStorage();
renderApp();

renderTasksForHome("allTasks");
// ----------------------------------------------------------------

// handleCreateProject("Study");

// handleAddTask("Study", {
// 	id: crypto.randomUUID(),
// 	title: "Odin Project",
// 	dueDate: "27-08-2025",
// 	details: "Please dont procrastinate and study",
// 	priority: "High",
// 	important: true,
// });

// handleAddTask("Study", {
// 	id: crypto.randomUUID(),
// 	title: "Cloud computing",
// 	details: "Coursera course",
// 	priority: "medium",
// 	dueDate: "15-08-2025",
// 	important: true,
// });

// console.log(handleGetTasks("Study"));
// console.log(handleGetAllProjects());

const projects = getAllProjects();
renderProjectCards(projects);
// renderTasksFor("Study");

// Testing

renderProjectForm();
renderTaskForm();
initTaskFormEvents();
initProjectFormEvents();
initProjectOptionsEvents();
initTaskOptionsEvents();
initProjectSelection();
initToggleSidebar();
