let button = document.getElementById("submit");

button.addEventListener("click", function (event) {
	event.preventDefault();

	let titv = document.getElementById("title").value;
	let auv = document.getElementById("author").value;
	let isbv = document.getElementById("isbn").value;

	if (!titv || !auv || !isbv) return; // Prevent adding empty rows

	let row = document.createElement("tr");

	let title = document.createElement("td");
	title.textContent = titv;

	let auth = document.createElement("td");
	auth.textContent = auv;

	let isbn = document.createElement("td");
	isbn.textContent = isbv;

	let action = document.createElement("td");
	let delbt = document.createElement("button");
	delbt.classList.add("delete");
	delbt.textContent = "X";

	delbt.addEventListener("click", function () {
		row.remove();
	});

	action.appendChild(delbt);

	row.appendChild(title);
	row.appendChild(auth);
	row.appendChild(isbn);
	row.appendChild(action);

	document.getElementById("book-list").appendChild(row);

	document.getElementById("form").reset();
});
