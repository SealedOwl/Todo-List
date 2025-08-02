import "./styles.css";

import createHeader from "./components/header";

const $content = document.querySelector("#content");

$content.appendChild(createHeader());
