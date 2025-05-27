const toggleButton = document.getElementById("darkModeToggle");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

toggleButton.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden"); 
});

dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});