
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const reason = document.getElementById("reason").value;
  const message = document.getElementById("message").value.trim();

  if (!firstName || !lastName || !email || !reason || !message) {
    alert("Please complete all required fields.");
    return;
  }

  const responseDiv = document.getElementById("formResponse");
  responseDiv.classList.remove("hidden");
  responseDiv.innerHTML = `✅ Thank you, <strong>${firstName}</strong>. Your message regarding <strong>${reason}</strong> has been received. We will reply to <strong>${email}</strong> shortly.`;

  this.reset();
});

document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
document.getElementById('hamburgerMenu').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('show');
});
