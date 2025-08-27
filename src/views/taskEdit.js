import { createElement } from "../utils/createElement";

export function enableTaskEditMode(taskCard, task) {
	taskCard.innerHTML = "";

	const form = createElement("form", ["task-edit-form"]);

	form.innerHTML = `
    <div class="task-input-container">
        <label for="task-title">Title:</label>
        <input type="text" name="task-title" id="task-title" placeholder="What to do?" maxlength="24" autocomplete="off" value="${
					task.title
				}" />
        <label for="task-details">Details(optional):</label>
        <textarea name="task-details" id="task-details" wrap="hard" placeholder="Eg: I'm just gonna procrastinate, aren't I?">${
					task.details || ""
				}</textarea>
        <label for="priority">Priority: </label>
        <select name="priority" id="priority">
        <option value="high" ${
					task.priority === "high" ? "selected" : ""
				}>High</option>
			<option value="medium" ${
				task.priority === "medium" ? "selected" : ""
			}>Medium</option>
			<option value="low" ${task.priority === "low" ? "selected" : ""}>Low</option>
        </select>
        <label for="task-date">Date:</label>
        <input type="date" name="task-edit-date" id="task-edit-date" />
    </div>
    <div class="projectForm-btn-container">
        <button type="submit" class="taskForm-btn" data-action = "edit" >Edit</button>
        <button type="reset" class="taskForm-btn" data-action = "cancel" >Cancel</button>
    </div>
    `;

	const $dateInput = form.querySelector("#task-edit-date");
	if (task.dueDate && task.dueDate !== "No Due Date") {
		//  tasks usea "dd-MM-yyyy" format, need to convert for <input type="date">
		const [day, month, year] = task.dueDate.split("-");
		$dateInput.value = `${year}-${month}-${day}`;
	}

	taskCard.appendChild(form);
}
