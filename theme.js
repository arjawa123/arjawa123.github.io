const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

// init theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
  toggleBtn.textContent = "☀️";
}

// toggle
toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", current);
  localStorage.setItem("theme", current);
  toggleBtn.textContent = current === "dark" ? "☀️" : "🌙";
  // Efek animasi kecil saat ganti tema
  toggleBtn.style.transform = "scale(0.8)";
  setTimeout(() => {
    toggleBtn.style.transform = "scale(1)";
  }, 100);
});