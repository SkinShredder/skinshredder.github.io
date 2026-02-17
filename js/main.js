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
