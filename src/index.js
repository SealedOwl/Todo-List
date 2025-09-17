import "./styles.css";

import { renderApp, renderTasksForHome } from "./components/view";
import { renderProjectCards } from "./views/projectCard";
import { renderProjectForm } from "./views/projectForm";
import { renderTaskForm } from "./views/taskForm";

import { getAllProjects, loadFromLocalStorage } from "./components/model";
import {
	initTaskFormEvents,
	initProjectFormEvents,
	initProjectOptionsEvents,
	initTaskOptionsEvents,
	initProjectSelection,
	initToggleSidebar,
} from "./components/events";

// Load data
loadFromLocalStorage();

// Render app
renderApp();

// Show default screen
renderTasksForHome("allTasks");

// Render static forms
renderProjectForm();
renderTaskForm();

// Render projects list from model
const projects = getAllProjects();
renderProjectCards(projects);

// Initialize event listeners
initTaskFormEvents();
initProjectFormEvents();
initProjectOptionsEvents();
initTaskOptionsEvents();
initProjectSelection();
initToggleSidebar();
