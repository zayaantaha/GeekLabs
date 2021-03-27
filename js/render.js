function renderHomePage(element, template, fileName) {

    const render = (array) => {
		for (const json of array) {
			const child = template.content.cloneNode(true);
			child.querySelector('.codeTitle').innerHTML = json.title;
			child.querySelector('.codeContent').innerHTML = json.text;
			element.appendChild(child);
		}
    };
    
    fetch(fileName)
	.then(response => response.json())
	.then(json => render(json));
}
