import addIcon from "../assets/add-circle.svg";

export default function createMainContent() {
	const main = document.createElement("main");
	main.classList.add("main-content");

	const taskName = document.createElement("div");
	taskName.classList.add("task-name");

	const taskPara = document.createElement("p");
	taskPara.textContent = "All Tasks";
	taskName.appendChild(taskPara);

	const taskLists = document.createElement("div");
	taskLists.classList.add("task-lists");

	const noTask = document.createElement("p");
	noTask.classList.add("no-task");
	noTask.textContent = "Yay! No Tasks!";
	taskLists.appendChild(noTask);

	const taskForm = document.createElement("div");
	taskForm.classList.add("task-form");

	const addTaskBtn = document.createElement("button");
	addTaskBtn.classList.add("add-task");
	addTaskBtn.dataset.action = "add-task";
	addTaskBtn.innerHTML = `<img src="${addIcon}" alt="Add Task" /> Add Task `;

	main.appendChild(taskName);
	main.appendChild(taskLists);
	main.appendChild(taskForm);
	main.appendChild(addTaskBtn);

	return main;
}
