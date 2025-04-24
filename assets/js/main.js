/**
 * Asta Café - Main JavaScript
 * Handles animations, interactions, and functionality
 */

// Import modules
import { initDarkMode } from "./modules/dark-mode.js"
import { initParallax } from "./modules/parallax.js"
import { initGallery } from "./modules/gallery.js"
import { initContactForm } from "./modules/contact-form.js"
import { initResponsiveImages } from "./modules/responsive-images.js"

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Initialize responsive images
  initResponsiveImages()

  // Initialize dark mode toggle
  initDarkMode()

  // Initialize parallax effect on hero section
  if (document.getElementById("parallax-hero")) {
    initParallax()
  }

  // Initialize gallery on gallery page
  if (document.getElementById("masonry-gallery")) {
    initGallery()
  }

  // Initialize contact form on contact page
  if (document.getElementById("contact-form")) {
    initContactForm()
  }
})