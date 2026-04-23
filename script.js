document.addEventListener("DOMContentLoaded", () => {

  /* ================= TYPING EFFECT ================= */
  const words = ["UI/UX Design", "Frontend Development", "Full-Stack Development"];
  let i = 0, j = 0, isDeleting = false;

  function type() {
    const el = document.querySelector(".typing");
    if (!el) return;

    const word = words[i];
    el.textContent = isDeleting
      ? word.substring(0, j--)
      : word.substring(0, j++);

    if (!isDeleting && j === word.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
    setTimeout(type, isDeleting ? 60 : 120);
  }
  type();

  /* ================= SECTION NAVIGATION ================= */
  const sections = document.querySelectorAll(".section");
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);

      sections.forEach(sec => sec.classList.remove("active"));
      const activeSection = document.getElementById(id);
      activeSection.classList.add("active");

      // Trigger section-specific animations
      if (id === "education") animateEducation();
      if (id === "skills") animateSkills();
      if (id === "experience") animateExperience();
      if (id === "contact") animateContact();
    });
  });

  /* ================= SECTION ANIMATIONS ================= */
  function animateEducation() {
    document.querySelectorAll(".edu-animate").forEach((el, i) => {
      el.classList.remove("active");
      setTimeout(() => el.classList.add("active"), i * 250);
    });
  }

  function animateSkills() {
    document.querySelectorAll(".skill-card").forEach((card, i) => {
      card.classList.remove("active");
      setTimeout(() => card.classList.add("active"), i * 150);
    });
  }

  function animateExperience() {
    document.querySelectorAll(".experience-card").forEach((card, i) => {
      card.classList.remove("active");
      setTimeout(() => card.classList.add("active"), i * 200);
    });
  }

  function animateContact() {
    document.querySelectorAll(".contact-animate").forEach((el, i) => {
      el.classList.remove("active");
      setTimeout(() => el.classList.add("active"), i * 200);
    });
  }

  /* ================= MAILTO FORM ================= */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);

      window.location.href =
        `mailto:deepalak0017@gmail.com?subject=${encodeURIComponent(
          data.get("subject")
        )}&body=${encodeURIComponent(
          `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`
        )}`;
    });
  }

  /* ================= PROJECT TABS ================= */
  const projectTabs = document.querySelectorAll(".project-tab");
  const projects = document.querySelectorAll(".project-item");

  projectTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      projectTabs.forEach(t => t.classList.remove("active"));
      projects.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      projects[index].classList.add("active");
    });
  });

  /* ================= CERTIFICATIONS TABS ================= */
  
// Internal tab switching for credentials section
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    tabBtns.forEach(b => b.classList.remove("active"));
    // Add active to clicked button
    btn.classList.add("active");

    // Hide all tab contents
    tabContents.forEach(c => c.classList.remove("active"));
    // Show selected tab
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

});