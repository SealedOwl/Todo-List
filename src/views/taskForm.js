import { createElement } from "../utils/createElement";

export function renderTaskForm() {
	const $taskForm = document.querySelector(".task-form");

	const form = createElement("form");

	form.innerHTML = `
    <div class="task-input-container">
        <label for="task-title">Title:</label>
        <input type="text" name="task-title" id="task-title" placeholder="What to do?" maxlength="24" autocomplete="off" />
        <label for="task-details">Details(optional):</label>
        <textarea name="task-details" id="task-details" wrap="hard" placeholder="Eg: I'm just gonna procrastinate, aren't I?"></textarea>
        <label for="priority">Priority: </label>
        <select name="priority" id="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
        </select>
        <label for="task-date">Date:</label>
        <input type="date" name="task-date" id="task-date" />
    </div>
    <div class="projectForm-btn-container">
        <button type="submit" class="taskForm-btn" data-action = "add" >Add</button>
        <button type="reset" class="taskForm-btn" data-action = "cancel" >Cancel</button>
    </div>
    `;

	$taskForm.appendChild(form);
}
