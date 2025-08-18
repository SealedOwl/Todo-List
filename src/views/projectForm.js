import { createElement } from "../utils/createElement";

export function renderProjectForm() {
	const $projectForm = document.querySelector(".project-form");

	const form = createElement("form");

	const inputContainer = createElement("div", ["project-input-container"]);

	inputContainer.innerHTML = `
     <i class="project-icon  fa-solid fa-bars"></i>
     <input type="text" class="project-input" placeholder="Enter Project Name" maxlength="24" />
    `;

	const buttonsContainer = createElement("div", ["projectForm-btn-container"]);

	buttonsContainer.innerHTML = `
    <button type="submit" class="projectForm-btn" data-action = "add" >Add</button>
    <button type="reset" class="projectForm-btn" data-action = "cancel" >Cancel</button>
    `;

	form.appendChild(inputContainer);
	form.appendChild(buttonsContainer);

	$projectForm.appendChild(form);
}
