/**
 * Dr. Aishwarya Lal - Consultant Nephrologist & Kidney Specialist
 * Main Interactive Script & Application Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initIntroScreen();
  initConditionTabs();
  initBookingForm();
});

/* --------------------------------------------------------------------------
   Theme Management (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("tg");
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme) {
    root.setAttribute("data-theme", storedTheme);
  } else if (prefersDark) {
    root.setAttribute("data-theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
  }

  updateToggleIcon();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateToggleIcon();
    });
  }
}

function updateToggleIcon() {
  const toggleBtn = document.getElementById("tg");
  if (!toggleBtn) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  toggleBtn.innerHTML = isDark ? "&#9788;" : "&#9680;"; // Sun or Moon/Half-circle
  toggleBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
}

/* --------------------------------------------------------------------------
   Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a, .mobile-nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPath = href.split("/").pop();

    if (
      linkPath === currentPath ||
      (currentPath === "" && linkPath === "index.html") ||
      (currentPath.startsWith("service-") && linkPath === "services.html") ||
      (currentPath.startsWith("condition-") && linkPath === "conditions.html") ||
      (currentPath.startsWith("blog-") && linkPath === "blog.html")
    ) {
      link.classList.add("on");
    } else {
      link.classList.remove("on");
    }
  });

  // Mobile menu button
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      menuBtn.innerHTML = isOpen ? "&#10005;" : "&#9776;";
    });

    document.addEventListener("click", (e) => {
      if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target) && mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open");
        menuBtn.innerHTML = "&#9776;";
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Intro Screen Animation (Homepage only, with SessionStorage check)
   -------------------------------------------------------------------------- */
function initIntroScreen() {
  const intro = document.getElementById("intro");
  const nameBox = document.getElementById("nm");
  const skipBtn = document.getElementById("sk");

  if (!intro) return;

  let seen = false;
  try {
    seen = sessionStorage.getItem("seen_aishwarya_intro") === "1";
  } catch (e) {}

  if (seen) {
    intro.style.display = "none";
    return;
  }

  if (nameBox && nameBox.children.length === 0) {
    const doctorName = "Dr. Aishwarya Lal";
    doctorName.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00a0" : char;
      span.style.animationDelay = `${0.15 + index * 0.05}s`;
      nameBox.appendChild(span);
    });
  }

  function dismissIntro() {
    intro.classList.add("up");
    setTimeout(() => {
      intro.style.display = "none";
    }, 900);
    try {
      sessionStorage.setItem("seen_aishwarya_intro", "1");
    } catch (e) {}
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", dismissIntro);
  }

  setTimeout(dismissIntro, 3500);
}

/* --------------------------------------------------------------------------
   Condition Tabs Component (Dynamic Rendering from CONFIG)
   -------------------------------------------------------------------------- */
function initConditionTabs() {
  const tabsContainer = document.getElementById("tabs");
  const panelsContainer = document.getElementById("tps");

  if (!tabsContainer || !panelsContainer || typeof CONFIG === "undefined") return;

  tabsContainer.innerHTML = "";
  panelsContainer.innerHTML = "";

  CONFIG.conditions.forEach((cond, index) => {
    // Create button tab
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = `<span>${cond.title}</span><span style="color:var(--gold);font-size:0.9rem">&rarr;</span>`;
    btn.addEventListener("click", () => selectTab(index));
    tabsContainer.appendChild(btn);

    // Create panel
    const panel = document.createElement("div");
    panel.className = "tp";
    panel.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="font-size:1.8rem;background:var(--tint);width:50px;height:50px;display:grid;place-items:center;border-radius:12px">${cond.icon}</span>
        <div>
          <h2 style="margin:0;font-size:1.8rem;">${cond.title}</h2>
          <small style="color:var(--mu);font-weight:600">${cond.tagline}</small>
        </div>
      </div>
      <p style="font-size:1.02rem;line-height:1.7;margin-bottom:18px;">${cond.overview}</p>
      <h4 style="margin:0 0 8px;color:var(--hd);">Common Symptoms &amp; Warning Signs:</h4>
      <ul>
        ${cond.symptoms.map(s => `<li>${s}</li>`).join("")}
      </ul>
      <div class="callout" style="margin:20px 0;">
        <strong>When to see Dr. Aishwarya Lal:</strong>
        <p style="margin:0;font-size:0.92rem;color:var(--mu);">${cond.whenToVisit}</p>
      </div>
      <div class="row">
        <a class="btn" href="${cond.slug}">Read Detailed Guide &rarr;</a>
        <a class="btn navy" href="appointment.html">Book Appointment</a>
      </div>
    `;
    panelsContainer.appendChild(panel);
  });

  function selectTab(idx) {
    const allButtons = tabsContainer.querySelectorAll("button");
    const allPanels = panelsContainer.querySelectorAll(".tp");

    allButtons.forEach((b, i) => b.classList.toggle("on", i === idx));
    allPanels.forEach((p, i) => p.classList.toggle("on", i === idx));
  }

  selectTab(0);
}

/* --------------------------------------------------------------------------
   Appointment & WhatsApp Booking Form
   -------------------------------------------------------------------------- */
function initBookingForm() {
  const form = document.getElementById("fm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("a")?.value || "").trim();
    const phone = (document.getElementById("b")?.value || "").trim();
    const date = (document.getElementById("c")?.value || "").trim();
    const time = (document.getElementById("d")?.value || "").trim();
    const visitType = (document.getElementById("e")?.value || "In-person consultation").trim();
    const reason = (document.getElementById("h")?.value || "").trim();
    const okBadge = document.getElementById("ok");

    const doctorName = (typeof CONFIG !== "undefined" && CONFIG.doctor?.name) ? CONFIG.doctor.name : "Dr. Aishwarya Lal";
    const waNumber = (typeof CONFIG !== "undefined" && CONFIG.doctor?.clinic?.wa) ? CONFIG.doctor.clinic.wa : "919745866333";

    let message = `Hello ${doctorName},\nI would like to book a nephrology consultation.\n`;
    message += `• Patient Name: ${name}\n`;
    message += `• Mobile: ${phone}\n`;
    if (date) message += `• Preferred Date: ${date}\n`;
    if (time) message += `• Preferred Time: ${time}\n`;
    message += `• Consultation Mode: ${visitType}\n`;
    if (reason) message += `• Chief Concern: ${reason}\n`;

    if (okBadge) {
      okBadge.style.display = "inline";
      okBadge.textContent = "Opening WhatsApp...";
    }

    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  });
}
