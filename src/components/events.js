import { initFormToggle } from "../utils/formToggleHelper";
import { initOptionsDropdownToggle } from "../utils/optionsDropdownHelper";
import { handleCreateProject } from "./controller";

export function initTaskFormEvents() {
	initFormToggle({
		addBtnSelector: ".add-task",
		formSelector: ".task-form",
		cancelBtnSelector: '.taskForm-btn[data-action="cancel"]',
		submitBtnSelector: '.taskForm-btn[data-action="add"]',
	});

	// handle project form submit
	const $projectForm = document.querySelector(".project-form form");

	$projectForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const $input = document.querySelector(".project-input");
		const projectName = $input.value.trim();

		handleCreateProject(projectName);
		$input.value = "";
	});
}

export function initProjectFormEvents() {
	initFormToggle({
		addBtnSelector: ".add-project",
		formSelector: ".project-form",
		cancelBtnSelector: '.projectForm-btn[data-action="cancel"]',
		submitBtnSelector: '.projectForm-btn[data-action="add"]',
	});
}

export function initProjectOptionsEvents() {
	initOptionsDropdownToggle(
		".projects-list",
		".project-more-option",
		".project-options-list"
	);
}

export function initTaskOptionsEvents() {
	initOptionsDropdownToggle(
		".task-lists",
		".task-more-option",
		".task-options-list"
	);
}
