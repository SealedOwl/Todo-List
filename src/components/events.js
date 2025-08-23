import { initFormToggle } from "../utils/formToggleHelper";
import { initOptionsDropdownToggle } from "../utils/optionsDropdownHelper";
import { renderProjectCards } from "../views/projectCard";
import { enableProjectRenameMode } from "../views/projectRename";
import {
	handleGetAllProjects,
	handleCreateProject,
	handleDeleteProject,
	handleRenameProject,
} from "./controller";

export function initTaskFormEvents() {
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

	// handle project form submit
	const $projectForm = document.querySelector(".project-form form");

	$projectForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const $input = $projectForm.querySelector(".project-input");
		const projectName = $input.value.trim();

		handleCreateProject(projectName);
		$input.value = "";
	});
}

export function initProjectOptionsEvents() {
	initOptionsDropdownToggle(
		".projects-list",
		".project-more-option",
		".project-options-list"
	);

	// handle rename and delete options for poject card

	const $projectsList = document.querySelector(".projects-list");

	$projectsList.addEventListener("click", (e) => {
		const $projectCard = e.target.closest(".project-card");

		if (!$projectCard) return;

		const projectName = $projectCard.dataset.project;

		// Rename option

		if (e.target.dataset.action === "rename") {
			handleProjectRenameOption($projectCard, projectName);
		}

		// Delete option
		if (e.target.dataset.action === "delete") {
			handleDeleteProject(projectName);
		}
	});
}

function handleProjectRenameOption($projectCard, oldName) {
	enableProjectRenameMode($projectCard, oldName);

	// rename and cancel functions
	const $projectRenameForm = $projectCard.querySelector(".project-rename-form");

	if (!$projectRenameForm) return;

	const $renameBtn = $projectRenameForm.querySelector(
		".projectForm-btn[data-action='rename']"
	);
	const $cancelBtn = $projectRenameForm.querySelector(
		".projectForm-btn[data-action='cancel']"
	);

	const $renameInput = $projectRenameForm.querySelector(
		".project-rename-input"
	);

	$renameBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const newName = $renameInput.value.trim();
		if (newName && newName !== oldName) {
			handleRenameProject(oldName, newName);
		} else {
			renderProjectCards(handleGetAllProjects());
		}
	});

	$cancelBtn.addEventListener("click", () => {
		renderProjectCards(handleGetAllProjects());
	});
}

export function initTaskOptionsEvents() {
	initOptionsDropdownToggle(
		".task-lists",
		".task-more-option",
		".task-options-list"
	);
}
