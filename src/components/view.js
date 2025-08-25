import createHeader from "../views/header";
import createSidebar from "../views/sidebar";
import createMainContent from "../views/mainContent";
import { createElement } from "../utils/createElement";
import { renderTaskCards } from "../views/taskCard";
import { handleGetTasks } from "./controller";
import { getAllTasks } from "./model";

import {
	format,
	isToday,
	isWithinInterval,
	addDays,
	parse,
	startOfDay,
	endOfDay,
} from "date-fns";

export function renderApp() {
	const $content = document.querySelector("#content");

	const header = createHeader();
	const sidebar = createSidebar();
	const main = createMainContent();

	const container = createElement("div", ["container"]);

	$content.appendChild(header);

	container.appendChild(sidebar);
	container.appendChild(main);

	$content.appendChild(container);
}

export function renderTasksFor(projectName) {
	const tasks = handleGetTasks(projectName);
	renderTaskCards(tasks);
}

// Home Section Projects Render

export function renderTasksForHome(projectName) {
	const $taskLists = document.querySelector(".task-lists");
	const $addTaskBtn = document.querySelector(".add-task");

	$taskLists.innerHTML = "";

	// All Tasks
	let tasks = getAllTasks();

	if (projectName === "todayTask") {
		const todayTasks = tasks.filter((t) => {
			const taskDate = parse(t.dueDate, "dd-MM-yyyy", new Date());
			return isToday(taskDate);
		});

		tasks = todayTasks;
		console.log(tasks);
	} else if (projectName === "weekTask") {
		const weekTasks = tasks.filter((t) => {
			const taskDate = parse(t.dueDate, "dd-MM-yyyy", new Date());
			return isWithinInterval(taskDate, {
				start: startOfDay(new Date()),
				end: endOfDay(addDays(new Date(), 7)),
			});
		});

		tasks = weekTasks;
		console.log(tasks);
	} else if (projectName === "importantTask") {
		tasks = tasks.filter((t) => t.important === true);
		console.log(tasks);
	}

	// Hide add task button for home section projects
	if ($addTaskBtn) $addTaskBtn.style.display = "none";

	if (tasks.length === 0) {
		const noTask = document.createElement("p");
		noTask.classList.add("no-task");
		noTask.textContent = "Yay! No Tasks!";
		$taskLists.appendChild(noTask);
	} else {
		renderTaskCards(tasks);
	}
}
