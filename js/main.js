let nav__links = document.querySelector(".nav__Links");
let bars = document.querySelector("#bars");
bars.addEventListener("click", function () {
	// alert("hello evening class");
	nav__links.classList.toggle("show");
	bars.classList.toggle("fa-times");
});
