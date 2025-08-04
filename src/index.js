import "./styles.css";

import createHeader from "./components/header";
import createSidebar from "./components/sidebar";
import createMainContent from "./components/mainContent";

const $content = document.querySelector("#content");

$content.appendChild(createHeader());

const container = document.createElement("div");
container.classList.add("container");

container.appendChild(createSidebar());
container.appendChild(createMainContent());

$content.appendChild(container);
