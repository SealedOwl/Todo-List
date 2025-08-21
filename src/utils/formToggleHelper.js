export function initFormToggle({
	addBtnSelector,
	formSelector,
	cancelBtnSelector,
	submitBtnSelector,
}) {
	const $addBtn = document.querySelector(addBtnSelector);
	const $form = document.querySelector(formSelector);
	const $cancelBtn = document.querySelector(cancelBtnSelector);
	const $submitBtn = document.querySelector(submitBtnSelector);

	$addBtn.addEventListener("click", () => {
		toggleForm(true, $form);
	});

	$cancelBtn.addEventListener("click", () => {
		toggleForm(false, $form);
	});

	$submitBtn.addEventListener("click", (e) => {
		toggleForm(false, $form);
	});
}

function toggleForm(show, form) {
	if (show) {
		form.classList.add("visible");

		// Auto-focus on first input
		const $firstInput = form.querySelector("input");
		$firstInput.focus();
	} else {
		form.classList.remove("visible");
	}
}
