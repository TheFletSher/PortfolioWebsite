const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});