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

	main.appendChild(taskName);
	main.appendChild(taskLists);

	return main;
}
