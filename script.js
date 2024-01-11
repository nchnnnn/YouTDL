const scrollButtons = document.querySelectorAll('button[href^="#"]');

scrollButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    document.body.style.height = "300dvh";
    event.preventDefault(); // Prevent page jump

    const targetId = button.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Optional: customize scrolling behavior here
    document.body.classList.toggle("body-short");
    targetElement.scrollIntoView({ behavior: "instant" }); // Example: instant jump
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
});
