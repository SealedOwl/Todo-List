import { initOptionsDropdownToggle } from "../utils/optionsDropdownHelper";

export function initTaskFormEvents() {
	const $addTaskBtn = document.querySelector(".add-task");
	const $taskForm = document.querySelector(".task-form");
	const $cancelBtn = document.querySelector(
		".taskForm-btn[data-action='cancel']"
	);
	const $submitBtn = document.querySelector(".taskForm-btn[data-action='add']");

	$addTaskBtn.addEventListener("click", () => {
		toggleForm(true, $taskForm);
	});

	$cancelBtn.addEventListener("click", () => {
		toggleForm(false, $taskForm);
	});

	$submitBtn.addEventListener("click", (e) => {
		e.preventDefault();
		toggleForm(false, $taskForm);
	});
}

export function initProjectFormEvents() {
	const $addProjectBtn = document.querySelector(".add-project");
	const $projectForm = document.querySelector(".project-form");
	const $cancelBtn = document.querySelector(
		".projectForm-btn[data-action='cancel']"
	);
	const $submitBtn = document.querySelector(
		".projectForm-btn[data-action='add']"
	);

	$addProjectBtn.addEventListener("click", () => {
		toggleForm(true, $projectForm);
	});

	$cancelBtn.addEventListener("click", () => {
		toggleForm(false, $projectForm);
	});

	$submitBtn.addEventListener("click", (e) => {
		e.preventDefault();
		toggleForm(false, $projectForm);
	});
}

function toggleForm(show, form) {
	if (show) {
		form.classList.add("visible");
	} else {
		form.classList.remove("visible");
	}
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
