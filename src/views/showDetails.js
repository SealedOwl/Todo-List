import { createElement } from "../utils/createElement";

export function createShowDetailsModal(task) {
	const modal = createElement("dialog", ["modal"]);

	const title = createElement("h2", ["modal-title"], task.title);

	const details = createElement(
		"p",
		["modal-details"],
		`Details : ${task.details}`
	);

	const priority = createElement(
		"p",
		["modal-priority"],
		`${task.priority} Priority`
	);

	const dueDate = createElement(
		"p",
		["modal-date"],
		`Due-date : ${task.dueDate}`
	);

	modal.appendChild(title);
	modal.appendChild(details);
	modal.appendChild(priority);
	modal.appendChild(dueDate);

	return modal;
}
