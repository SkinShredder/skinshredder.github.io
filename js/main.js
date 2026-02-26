/*
===============================================
FILE: main.js
PURPOSE: Minimal interactivity for the portfolio (navbar toggle, scroll effects)
PROJECT: 1.1 Personal Developer Portfolio
AUTHOR: Sebastian Larsen (SkinShredder)
DATE: 2026-02-17
===============================================
*/

/* ==================== MOBILE NAVIGATION TOGGLE ==================== */

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--open');
});

// --- Close menu when a nav link is clicked ---
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav__menu--open');
    });
});


/* ==================== HEADER SCROLL EFFECT ==================== */

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});


/* ==================== PROJECT FILTERING ==================== */

let activeTypeFilter = 'all';
let activeLangFilter = 'all';

const projectCards = document.querySelectorAll('.project-card');
const emptyMessage = document.getElementById('projects-empty');

// Type filter buttons
document.querySelectorAll('[data-filter-type]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter-type]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeTypeFilter = btn.dataset.filterType;
        applyFilters();
    });
});

// Language filter buttons
document.querySelectorAll('[data-filter-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter-lang]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeLangFilter = btn.dataset.filterLang;
        applyFilters();
    });
});

// Apply both filters at once
function applyFilters() {
    let visibleCount = 0;

    projectCards.forEach(card => {
        const matchType = activeTypeFilter === 'all' || card.dataset.type === activeTypeFilter;
        const matchLang = activeLangFilter === 'all' || card.dataset.lang === activeLangFilter;

        if (matchType && matchLang) {
            card.classList.remove('project-card--hidden');
            visibleCount++;
        } else {
            card.classList.add('project-card--hidden');
        }
    });

    // Show/hide empty message
    if (visibleCount === 0) {
        emptyMessage.classList.remove('hidden');
    } else {
        emptyMessage.classList.add('hidden');
    }
}
