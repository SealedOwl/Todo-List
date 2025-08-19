import { initFormToggle } from "../utils/formToggleHelper";
import { initOptionsDropdownToggle } from "../utils/optionsDropdownHelper";

export function initTaskFormEvents() {
	// Keeping these commented for future reference

	// const $addTaskBtn = document.querySelector(".add-task");
	// const $taskForm = document.querySelector(".task-form");
	// const $cancelBtn = document.querySelector(
	// 	".taskForm-btn[data-action='cancel']"
	// );
	// const $submitBtn = document.querySelector(".taskForm-btn[data-action='add']");

	// $addTaskBtn.addEventListener("click", () => {
	// 	toggleForm(true, $taskForm);
	// });

	// $cancelBtn.addEventListener("click", () => {
	// 	toggleForm(false, $taskForm);
	// });

	// $submitBtn.addEventListener("click", (e) => {
	// 	e.preventDefault();
	// 	toggleForm(false, $taskForm);
	// });

	// Refactored above to helper:

	initFormToggle({
		addBtnSelector: ".add-task",
		formSelector: ".task-form",
		cancelBtnSelector: '.taskForm-btn[data-action="cancel"]',
		submitBtnSelector: '.taskForm-btn[data-action="add"]',
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
