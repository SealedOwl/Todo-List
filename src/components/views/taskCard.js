export function renderTaskCards(tasksArray) {
	const $taskLists = document.querySelector(".task-lists");

	$taskLists.innerHTML = "";

	tasksArray.forEach((task) => {
		const taskCard = createTaskCard(task);
		$taskLists.appendChild(taskCard);
	});
}

function createTaskCard(task) {
	const taskCard = document.createElement("div");
	taskCard.classList.add(
		"task-card",
		`${task.priority.toLowerCase()}-priority`
	);
	taskCard.dataset.title = task.title;

	// Left Section
	const cardLeft = document.createElement("div");
	cardLeft.classList.add("task-card-left");

	const isComplete = document.createElement("div");
	isComplete.classList.add("unchecked");

	const title = document.createElement("p");
	title.classList.add("task-title");
	title.textContent = task.title;

	// Right Section
	const cardRight = document.createElement("div");
	cardRight.classList.add("task-card-right");

	const dueDate = document.createElement("div");
	dueDate.classList.add("due-date");
	dueDate.textContent = task.dueDate;

	const details = document.createElement("div");
	details.classList.add("details");
	details.textContent = "Details";

	const important = document.createElement("div");
	important.classList.add("mark-important");
	important.innerHTML = `<i class="fa-regular fa-star"></i>`;

	const moreOption = document.createElement("div");
	moreOption.classList.add("more-option");
	moreOption.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;

	// Append
	cardLeft.appendChild(isComplete);
	cardLeft.appendChild(title);

	cardRight.appendChild(dueDate);
	cardRight.appendChild(details);
	cardRight.appendChild(important);
	cardRight.appendChild(moreOption);

	taskCard.appendChild(cardLeft);
	taskCard.appendChild(cardRight);

	return taskCard;
}
