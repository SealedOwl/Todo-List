import { createElement } from "../utils/createElement";

export function createFooter() {
	const footer = createElement("div", ["footer"]);
	footer.innerHTML = `
    <p>2025 © SealedOwl</p>
    <a href="https://github.com/SealedOwl/Todo-List" target="_blank">
    <i class="fa-brands fa-github"></i>
    </a>
    `;

	return footer;
}
