import "./styles.css";

import createHeader from "./components/views/header";
import createSidebar from "./components/views/sidebar";
import createMainContent from "./components/views/mainContent";

import {
	handleCreateProject,
	handleAddTasks,
	handleGetTasks,
	handleGetAllProjects,
	handleDeleteTask,
} from "./components/controller";

const $content = document.querySelector("#content");

$content.appendChild(createHeader());

const container = document.createElement("div");
container.classList.add("container");

container.appendChild(createSidebar());
container.appendChild(createMainContent());

$content.appendChild(container);

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
