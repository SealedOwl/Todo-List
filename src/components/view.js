import createHeader from "../views/header";
import createSidebar from "../views/sidebar";
import createMainContent from "../views/mainContent";
import { createElement } from "../utils/createElement";
import { renderTaskCards } from "../views/taskCard";
import { handleGetTasks } from "./controller";
import { getTasks } from "./model";

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
