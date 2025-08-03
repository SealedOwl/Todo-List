import "./styles.css";

import createHeader from "./components/header";
import createSidebar from "./components/sidebar";

const $content = document.querySelector("#content");

$content.appendChild(createHeader());
$content.appendChild(createSidebar());
