import { createElement } from "../utils/createElement";

export function enableProjectRenameMode(projectCard, oldName) {
	const existingForm = document.querySelector(".project-rename-form");
	if (existingForm) return;

	projectCard.innerHTML = "";

	// create rename form
	const form = createElement("form", ["project-rename-form"]);

	const inputContainer = createElement("div", [
		"project-rename-input-container",
	]);

	inputContainer.innerHTML = `
     <i class="project-icon  fa-solid fa-bars"></i>
     <input type="text" class="project-rename-input"  maxlength="24" />
    `;

	const $input = inputContainer.querySelector(".project-rename-input");
	$input.value = oldName;
	setTimeout(() => $input.focus(), 0);

	const buttonsContainer = createElement("div", ["projectForm-btn-container"]);

	buttonsContainer.innerHTML = `
    <button type="submit" class="projectForm-btn" data-action = "rename" >Rename</button>
    <button type="reset" class="projectForm-btn" data-action = "cancel" >Cancel</button>
    `;

	form.appendChild(inputContainer);
	form.appendChild(buttonsContainer);

	projectCard.appendChild(form);
}
