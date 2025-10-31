// Get elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
btn.onclick = function() {
  modal.style.display = "block";
};

// Close modal on X click
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};