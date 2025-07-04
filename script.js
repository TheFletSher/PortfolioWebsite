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

// Fading back when going to loading another
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Stop the link from navigating right away
    document.body.classList.add("fade-out"); // Add fade-out class

    setTimeout(() => {
      window.location = this.href; // Navigate after fade
    }, 500); // Match this with your CSS animation duration
  });
});