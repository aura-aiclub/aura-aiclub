/* =========================================================
   AURA — MAIN WEBSITE JAVASCRIPT
   Global Theme + Cyber Blue / Futuristic Theme
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

        });

    });

}


/* =========================================================
   2. NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   3. SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".info-card, .activity-item, .latest-issue, .archive-box"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("revealed");

    });

}


/* =========================================================
   4. HERO CORE ANIMATION
   ========================================================= */

const core = document.querySelector(".core");

if (core) {

    let rotation = 45;

    function animateCore() {

        rotation += 0.08;

        core.style.transform =
            `rotate(${rotation}deg)`;

        requestAnimationFrame(animateCore);

    }

    animateCore();

}


/* =========================================================
   5. HERO MOUSE GLOW
   ========================================================= */

const hero = document.querySelector(".hero");

if (hero) {

    hero.addEventListener("mousemove", event => {

        const rect =
            hero.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width) * 100;

        const y =
            ((event.clientY - rect.top) / rect.height) * 100;

        hero.style.setProperty(
            "--mouse-x",
            `${x}%`
        );

        hero.style.setProperty(
            "--mouse-y",
            `${y}%`
        );

    });

}


/* =========================================================
   6. NEWSLETTER ARCHIVE MODAL
   ========================================================= */

const archiveModal =
    document.querySelector("#archiveModal");

const openArchive =
    document.querySelector("#openArchive");

const closeArchive =
    document.querySelector("#closeArchive");


/* Open archive */

if (openArchive && archiveModal) {

    openArchive.addEventListener("click", () => {

        archiveModal.classList.add("active");

        document.body.classList.add("modal-open");

    });

}


/* Close archive */

if (closeArchive && archiveModal) {

    closeArchive.addEventListener("click", () => {

        closeArchiveModal();

    });

}


/* Close when clicking outside the box */

if (archiveModal) {

    archiveModal.addEventListener("click", event => {

        if (event.target === archiveModal) {

            closeArchiveModal();

        }

    });

}


/* Close with Escape key */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        archiveModal &&
        archiveModal.classList.contains("active")
    ) {

        closeArchiveModal();

    }

});


function closeArchiveModal() {

    if (!archiveModal) return;

    archiveModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   7. SMOOTH INTERNAL LINKS
   ========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =========================================================
   8. CURRENT YEAR
   ========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


/* =========================================================
   9. PAGE LOADED
   ========================================================= */

document.body.classList.add("page-loaded");


/* =========================================================
   10. GLOBAL AURA THEME SYSTEM
   =========================================================

   Light = Glass Horizon
   Dark  = Dark Futuristic

   The selected theme is stored in localStorage so it
   remains active when navigating between:

   Main Page
   Issue 01
   Issue 02
   Future Issues
   Archive
   ========================================================= */


/* Theme elements */

const themeToggle =
    document.querySelector("#themeToggle");


const htmlElement =
    document.documentElement;


/* Storage key */

const THEME_STORAGE_KEY =
    "aura-theme";


/* ---------------------------------------------------------
   Apply theme
   --------------------------------------------------------- */

function applyTheme(theme) {

    if (theme !== "light" && theme !== "dark") {

        theme = "light";

    }


    htmlElement.setAttribute(
        "data-theme",
        theme
    );


    updateThemeButton(theme);

}


/* ---------------------------------------------------------
   Update theme button
   --------------------------------------------------------- */

function updateThemeButton(theme) {

    if (!themeToggle) return;


    const sunIcon =
        themeToggle.querySelector(".sun-icon");

    const moonIcon =
        themeToggle.querySelector(".moon-icon");


    if (theme === "dark") {

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );


        if (sunIcon) {

            sunIcon.style.display =
                "inline";

        }


        if (moonIcon) {

            moonIcon.style.display =
                "none";

        }

    } else {

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );


        if (sunIcon) {

            sunIcon.style.display =
                "none";

        }


        if (moonIcon) {

            moonIcon.style.display =
                "inline";

        }

    }

}


/* ---------------------------------------------------------
   Get saved theme
   --------------------------------------------------------- */

function getSavedTheme() {

    const savedTheme =
        localStorage.getItem(
            THEME_STORAGE_KEY
        );


    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {

        return savedTheme;

    }


    return "light";

}


/* ---------------------------------------------------------
   Toggle theme
   --------------------------------------------------------- */

function toggleTheme() {

    const currentTheme =
        htmlElement.getAttribute(
            "data-theme"
        ) || "light";


    const newTheme =
        currentTheme === "light"
            ? "dark"
            : "light";


    applyTheme(newTheme);


    localStorage.setItem(
        THEME_STORAGE_KEY,
        newTheme
    );

}


/* ---------------------------------------------------------
   Theme button click
   --------------------------------------------------------- */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );

}


/* ---------------------------------------------------------
   Initialise theme
   --------------------------------------------------------- */

const initialTheme =
    getSavedTheme();


applyTheme(initialTheme);


/* =========================================================
   11. SYSTEM READY
   ========================================================= */

console.log(
    "AURA theme system initialized:",
    initialTheme
);