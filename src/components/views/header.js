import sidebar from "../../assets/bars-solid-full.svg";
import checkLogo from "../../assets/check_logo.png";

export default function createHeader() {
	const header = document.createElement("header");

	const sidebarImg = document.createElement("img");
	sidebarImg.classList.add("logo-img", "sidebar-img");
	sidebarImg.src = sidebar;
	sidebarImg.alt = "sidebar image";
	sidebarImg.loading = "lazy";

	const logo = document.createElement("div");
	logo.classList.add("logo");

	const logoImg = document.createElement("img");
	logoImg.classList.add("logo-img");
	logoImg.src = checkLogo;
	logoImg.alt = "logo image";
	logoImg.loading = "lazy";

	const title = document.createElement("h1");
	title.textContent = "To-Do List";

	logo.appendChild(logoImg);
	logo.appendChild(title);

	header.appendChild(sidebarImg);
	header.appendChild(logo);

	return header;
}
