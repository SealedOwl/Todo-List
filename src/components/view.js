import createHeader from "./views/header";
import createSidebar from "./views/sidebar";
import createMainContent from "./views/mainContent";

export function renderApp() {
	const $content = document.querySelector("#content");

	const header = createHeader();
	const sidebar = createSidebar();
	const main = createMainContent();

	const container = document.createElement("div");
	container.classList.add("container");

	$content.appendChild(header);

	container.appendChild(sidebar);
	container.appendChild(main);

	$content.appendChild(container);
}
