/* Part 2: Functions, Scope & Return Values */

// Global variable
let globalCount = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b;
}

// Function demonstrating local scope
function incrementGlobal() {
  let local = 1; // only visible inside this function
  globalCount += local;
  return globalCount;
}

// Part 3: Combine JS + CSS
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

animateBtn.addEventListener("click", () => {
  box.classList.add("move");
  console.log("Sum test:", addNumbers(3, 4)); // shows return value
  console.log("Global count:", incrementGlobal()); // shows scope use
});

resetBtn.addEventListener("click", () => {
  box.classList.remove("move", "pulsing");
});

// Example of toggling a continuous animation
box.addEventListener("dblclick", () => {
  box.classList.toggle("pulsing");
});

// Modal Logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.onclick = () => modal.style.display = "block";
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
};
