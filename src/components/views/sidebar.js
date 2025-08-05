import allTaskIcon from "../../assets/inbox.png";
import todayIcon from "../../assets/today1.png";
import weekIcon from "../../assets/week2.png";
import importantIcon from "../../assets/star.png";
import addIcon from "../../assets/add-circle.svg";

export default function createSidebar() {
	const sidebar = document.createElement("aside");
	sidebar.classList.add("sidebar");

	const homeSection = document.createElement("div");
	homeSection.classList.add("sidebar-section");

	homeSection.innerHTML = `
    <h3>Home</h3>
    <nav class="nav">
    <button id="allTask" class="nav-btn active"><img src="${allTaskIcon}" alt="All Tasks" />All Tasks </button>
    <button id="todayTask" class="nav-btn"><img src="${todayIcon}" alt="Today" />Today </button>
    <button id="weekTask" class="nav-btn"><img src="${weekIcon}" alt="Next 7 Days" />Next 7 Days </button>
    <button id="importantTask" class="nav-btn"><img src="${importantIcon}" alt="Important" />Important </button>
    <nav>
    `;

	const projectSection = document.createElement("div");
	projectSection.classList.add("sidebar-section");

	projectSection.innerHTML = `
    <h3>Projects</h3>
    <ul class="projects-list"></ul>
    <button class="add-project"><img src="${addIcon}" alt="Add Project" /> Add Project </button>
    `;

	sidebar.appendChild(homeSection);
	sidebar.appendChild(projectSection);

	return sidebar;
}
