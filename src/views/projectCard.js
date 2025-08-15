import { createElement } from "../utils/createElement";

export function renderProjectCards(projects) {
	const $projectsList = document.querySelector(".projects-list");

	$projectsList.innerHTML = "";

	projects.forEach((project) => {
		const projectCard = createProjectCard(project);

		$projectsList.appendChild(projectCard);
	});
}

function createProjectCard(project) {
	const projectCard = createElement("div", ["project-card"]);

	// Left section
	const projectInfo = createElement("div", ["project-info"]);

	projectInfo.innerHTML = `
    <i class="project-icon  fa-solid fa-bars"></i>
    <div class="project-name">${project}</div>
    `;
	//Right Section
	const moreOption = createElement("div", ["project-more-option"]);
	moreOption.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;

	const optionsList = createElement("div", ["project-options-list"]);

	const renameBtn = createElement("button", ["options-item"], "Rename");
	renameBtn.dataset.action = "rename";

	const dltBtn = createElement("button", ["options-item"], "Delete");
	dltBtn.dataset.action = "delete";

	// Append

	optionsList.appendChild(renameBtn);
	optionsList.appendChild(dltBtn);
	moreOption.appendChild(optionsList);

	projectCard.appendChild(projectInfo);
	projectCard.appendChild(moreOption);

	return projectCard;
}
