const button = document.getElementById("button");
const navMenu = document.getElementById("navMenu");

button.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    button.classList.toggle("active");
});

