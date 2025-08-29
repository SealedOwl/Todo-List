import { initFormToggle } from "../utils/formToggleHelper";
import { initOptionsDropdownToggle } from "../utils/optionsDropdownHelper";
import { renderProjectCards } from "../views/projectCard";
import { enableProjectRenameMode } from "../views/projectRename";
import { enableTaskEditMode } from "../views/taskEdit";
import {
	handleGetAllProjects,
	handleCreateProject,
	handleDeleteProject,
	handleRenameProject,
	handleAddTask,
	setCurrentProject,
	getCurrentProject,
	handleDeleteTask,
	handleGetTasks,
	handleEditTask,
	handleToggleTaskComplete,
	handleToggleTaskImportant,
} from "./controller";

import { getAllTasks } from "./model";

import { format, parseISO, isValid } from "date-fns";
import { renderTasksFor, renderTasksForHome } from "./view";

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

export function initTaskFormEvents() {
	initFormToggle({
		addBtnSelector: ".add-task",
		formSelector: ".task-form",
		cancelBtnSelector: '.taskForm-btn[data-action="cancel"]',
		submitBtnSelector: '.taskForm-btn[data-action="add"]',
	});

	// handle task form submit
	const $taskForm = document.querySelector(".task-form form");

	$taskForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const $currentProject = getCurrentProject();

		const $title = $taskForm.querySelector("#task-title").value.trim();
		const $details = $taskForm.querySelector("#task-details").value.trim();
		const $priority = $taskForm.querySelector("#priority").value.trim();
		const rawDate = $taskForm.querySelector("#task-date").value.trim();

		let $date = "No Due Date";
		if (rawDate) {
			const parsed = parseISO(rawDate);
			if (isValid(parsed)) {
				$date = format(parsed, "dd-MM-yyyy");
			}
		}

		const taskObj = {
			id: crypto.randomUUID(),
			title: $title,
			details: $details,
			priority: $priority,
			dueDate: $date,
			important: false,
			completed: false,
		};

		handleAddTask($currentProject, taskObj);

		$taskForm.reset();
	});
}

export function initTaskOptionsEvents() {
	initOptionsDropdownToggle(
		".task-lists",
		".task-more-option",
		".task-options-list"
	);

	// Tasks edit and delete options
	const $taskLists = document.querySelector(".task-lists");

	$taskLists.addEventListener("click", (e) => {
		const $taskCard = e.target.closest(".task-card");

		if (!$taskCard) return;

		const taskId = $taskCard.dataset.id;

		// Edit option

		if (e.target.dataset.action === "edit") {
			handleTaskEditOption($taskCard, taskId);
		}

		// Delete optiom

		if (e.target.dataset.action === "delete") {
			handleDeleteTask(taskId);
		}

		// Task complete toggle
		if (
			e.target.classList.contains("checked") ||
			e.target.classList.contains("unchecked")
		) {
			handleToggleTaskComplete(taskId);
		}

		// mark Task important
		if (
			e.target.classList.contains("fa-star") ||
			e.target.classList.contains("mark-important")
		) {
			handleToggleTaskImportant(taskId);
		}
	});
}

function handleTaskEditOption(taskCard, taskId) {
	// find the old task object from model
	const currentProject = getCurrentProject();
	let tasks = [];
	if (
		currentProject !== "allTask" &&
		currentProject !== "todayTask" &&
		currentProject !== "weekTask" &&
		currentProject !== "importantTask"
	) {
		tasks = handleGetTasks(currentProject);
	} else {
		// home sections pull all tasks
		tasks = getAllTasks();
	}
	const taskObj = tasks.find((t) => t.id === taskId);
	if (!taskObj) return;

	// replace card with edit form
	enableTaskEditMode(taskCard, taskObj);

	// wire form actions
	const $taskEditForm = taskCard.querySelector(".task-edit-form");
	if (!$taskEditForm) return;

	const $editBtn = $taskEditForm.querySelector('[data-action="edit"]');
	const $cancelBtn = $taskEditForm.querySelector('[data-action="cancel"]');

	$editBtn.addEventListener("click", (e) => {
		e.preventDefault();

		const newTitle = $taskEditForm.querySelector("#task-title").value.trim();
		const newDetails = $taskEditForm
			.querySelector("#task-details")
			.value.trim();
		const newPriority = $taskEditForm.querySelector("#priority").value;
		const rawDate = $taskEditForm.querySelector("#task-edit-date").value;

		let formattedDate = "No Due Date";
		if (rawDate) {
			const parsed = parseISO(rawDate);
			if (isValid(parsed)) {
				formattedDate = format(parsed, "dd-MM-yyyy");
			}
		}

		const updatedTask = {
			title: newTitle,
			details: newDetails,
			priority: newPriority,
			dueDate: formattedDate,
		};

		handleEditTask(taskId, updatedTask);
	});

	$cancelBtn.addEventListener("click", () => {
		// just re-render the current project
		const currentProject = getCurrentProject();
		if (
			currentProject !== "allTask" &&
			currentProject !== "todayTask" &&
			currentProject !== "weekTask" &&
			currentProject !== "importantTask"
		) {
			renderTasksFor(currentProject);
		} else {
			renderTasksForHome(currentProject);
		}
	});
}

// Render tasks for selected project
export function initProjectSelection() {
	const $projectsList = document.querySelector(".projects-list");
	const $homeSectionProjects = document.querySelector(".home-section");

	if (!$projectsList || !$homeSectionProjects) return;

	$projectsList.addEventListener("click", (e) => {
		const $card = e.target.closest(".project-card");
		const $addTaskBtn = document.querySelector(".add-task");

		if (!$card) return;

		clearActive();
		$card.classList.add("active");
		$addTaskBtn.style.display = "flex";

		const projectName = $card.dataset.project;
		setCurrentProject(projectName);

		const $title = document.querySelector(".task-name p");
		if ($title) $title.textContent = projectName;

		renderTasksFor(projectName);
	});

	$homeSectionProjects.addEventListener("click", (e) => {
		const $tile = e.target.closest("button");

		if (!$tile) return;

		clearActive();
		$tile.classList.add("active");

		const projectName = $tile.id;
		setCurrentProject(projectName);

		const $title = document.querySelector(".task-name p");
		if ($title)
			$title.textContent = document.querySelector(
				`#${projectName}`
			).textContent;

		renderTasksForHome(projectName);
	});
}

function clearActive() {
	const currentActive = document.querySelector(".active");
	if (currentActive) currentActive.classList.remove("active");
}
