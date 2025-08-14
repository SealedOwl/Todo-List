import sidebar from "../assets/bars-solid-full.svg";
import checkLogo from "../assets/check_logo.png";
import { createElement } from "../utils/createElement";

export default function createHeader() {
	const header = createElement("header");

	const sidebarImg = createElement("img", ["logo-img", "sidebar-img"]);
	sidebarImg.src = sidebar;
	sidebarImg.alt = "sidebar image";
	sidebarImg.loading = "lazy";

	const logo = createElement("div", ["logo"]);

	const logoImg = createElement("img", ["logo-img"]);
	logoImg.classList.add("logo-img");
	logoImg.src = checkLogo;
	logoImg.alt = "logo image";
	logoImg.loading = "lazy";

	const title = createElement("h1");
	title.textContent = "To-Do List";

	logo.appendChild(logoImg);
	logo.appendChild(title);

	header.appendChild(sidebarImg);
	header.appendChild(logo);

	return header;
}
