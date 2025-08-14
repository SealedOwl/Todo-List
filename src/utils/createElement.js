export function createElement(tag, classNames = [], text = "") {
	const el = document.createElement(tag);
	if (classNames.length) el.classList.add(...classNames);
	if (text) el.textContent = text;
	return el;
}
