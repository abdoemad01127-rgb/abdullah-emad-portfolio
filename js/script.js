// تفاعلات الموقع: القائمة، الوضع اللوني، ظهور العناصر والتنقل
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");
const backToTop = document.getElementById("back-to-top");

// استرجاع الوضع اللوني المحفوظ إن وجد
const savedTheme = localStorage.getItem("abdullah-portfolio-theme");
if (savedTheme === "light") body.classList.add("light-theme");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const theme = body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("abdullah-portfolio-theme", theme);
  themeToggle.setAttribute("aria-label", theme === "light" ? "التبديل إلى الوضع الداكن" : "التبديل إلى الوضع الفاتح");
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// إظهار الأقسام تدريجيًا عند التمرير، مع دعم المتصفحات التي لا تدعم IntersectionObserver
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// تحديد رابط القسم الظاهر حاليًا
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}

// زر العودة إلى الأعلى
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 450);
}, { passive: true });

// السنة الحالية تلقائيًا
document.getElementById("year").textContent = new Date().getFullYear();
