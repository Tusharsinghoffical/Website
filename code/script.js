

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}



// Typing Effect

const textArray = ["Data Analyst", "Web Developer", "Database Designer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.querySelector(".typing");
  const currentText = textArray[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % textArray.length;
    }
    setTimeout(typeEffect, 1000);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll to Work Experience
const workBtn = document.querySelector(".work-btn");
if (workBtn) {
  workBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector("#work-experience")
      .scrollIntoView({ behavior: "smooth" });
  });
}

// Animate Skills Progress Bars
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    let percent = bar.getAttribute("data-percent");
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = percent + "%";
    }
  });
});

// Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    let filter = this.getAttribute("data-filter");
    projectCards.forEach((card) => {
      card.style.display =
        filter === "all" || card.getAttribute("data-category") === filter
          ? "block"
          : "none";
    });
  });
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    successMessage.style.display = "none";

    let valid = true;

    if (!name) {
      nameError.textContent = "Name is required.";
      nameError.style.display = "block";
      valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      valid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email.";
      emailError.style.display = "block";
      valid = false;
    }

    if (!message) {
      messageError.textContent = "Message cannot be empty.";
      messageError.style.display = "block";
      valid = false;
    }

    if (valid) {
      successMessage.textContent = "Message sent successfully!";
      successMessage.style.display = "block";
      contactForm.reset();
    }
  });
}
