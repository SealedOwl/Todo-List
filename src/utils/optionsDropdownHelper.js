export function initOptionsDropdownToggle(
	containerSelector,
	toggleSelector,
	panelSelector
) {
	const $container = document.querySelector(containerSelector);

	$container.addEventListener("click", (e) => {
		const $toggler = e.target.closest(toggleSelector);

		if (!$toggler) return;

		const $panel = $toggler.querySelector(panelSelector);

		const isVisible = $panel.classList.contains("visible");

		// Remove all other .active

		$container.querySelectorAll(`${panelSelector}.visible`).forEach((panel) => {
			panel.classList.remove("visible");
		});

		if (!isVisible) {
			$panel.classList.add("visible");
		}

		// Remove .active if  clicked anywhere else
		document.addEventListener("click", (e) => {
			const $isInsideMoreOptions = e.target.closest(toggleSelector);

			if (!$isInsideMoreOptions) {
				$panel.classList.remove("visible");
			}
		});
	});
}
