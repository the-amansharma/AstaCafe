/**
 * Dark Mode Module
 * Handles the dark mode toggle functionality and localStorage persistence
 */

export function initDarkMode() {
    const themeToggleBtn = document.getElementById("theme-toggle-btn")
  
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
    // Apply theme based on saved preference or system preference
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.body.classList.add("dark-mode")
    }
  
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode")
  
      // Save preference to localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark")
      } else {
        localStorage.setItem("theme", "light")
      }
    })
  }