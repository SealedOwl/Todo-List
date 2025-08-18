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
	const $projectsList = document.querySelector(".projects-list");

	$projectsList.addEventListener("click", (e) => {
		const $moreOptions = e.target.closest(".project-more-option");

		if (!$moreOptions) return;

		const $panel = $moreOptions.querySelector(".project-options-list");

		const isVisible = $panel.classList.contains("visible");

		// Remove all other .active

		$projectsList
			.querySelectorAll(".project-options-list.visible")
			.forEach((panel) => {
				panel.classList.remove("visible");
			});

		if (!isVisible) {
			$panel.classList.add("visible");
		}

		// Remove .active if clicked anywhere else
		document.addEventListener("click", (e) => {
			const $isInsideMoreOptions = e.target.closest(".project-more-option");

			if (!$isInsideMoreOptions) {
				$panel.classList.remove("visible");
			}
		});
	});
}
