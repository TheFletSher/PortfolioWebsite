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

window.addEventListener("load", () => {
    const splash = document.getElementById("splash-screen");

    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
        // First visit: show and then fade out the splash screen
        setTimeout(() => {
            splash.classList.add("fade-out");

            // After fade-out, optionally remove it from the DOM
            setTimeout(() => splash.style.display = "none", 2000);
        }, 100); // slight delay to ensure CSS transition kicks in

        // Mark as visited
        localStorage.setItem("hasVisited", "true");
    } else {
        // If already visited, skip splash screen entirely
        splash.style.display = "none";
    }
});