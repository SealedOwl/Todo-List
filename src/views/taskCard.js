import { createElement } from "../utils/createElement";

export function renderTaskCards(tasksArray) {
	const $taskLists = document.querySelector(".task-lists");

	$taskLists.innerHTML = "";

	tasksArray.forEach((task) => {
		const taskCard = createTaskCard(task);
		$taskLists.appendChild(taskCard);
	});
}

function createTaskCard(task) {
	const taskCard = createElement("div", ["task-card"]);
	taskCard.classList.add(`${task.priority.toLowerCase()}-priority`);
	taskCard.dataset.id = task.id;

	// Left Section
	const cardLeft = createElement("div", ["task-card-left"]);

	const isComplete = createElement("div", ["unchecked"]);

	const title = createElement("p", ["task-title"], task.title);

	// Right Section
	const cardRight = createElement("div", ["task-card-right"]);

	const dueDate = createElement("div", ["due-date"], task.dueDate);

	const details = createElement("div", ["details"], "Details");

	const important = createElement("div", ["mark-important"]);
	important.innerHTML = `<i class="fa-regular fa-star"></i>`;

	// Options
	const moreOption = createElement("div", ["task-more-option"]);
	moreOption.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;

	const optionsList = createElement("div", ["task-options-list"]);

	const editBtn = createElement("button", ["options-item"], "Edit");
	editBtn.dataset.action = "edit";

	const dltBtn = createElement("button", ["options-item"], "Delete");
	dltBtn.dataset.action = "delete";

	// Append

	optionsList.appendChild(editBtn);
	optionsList.appendChild(dltBtn);
	moreOption.appendChild(optionsList);

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
