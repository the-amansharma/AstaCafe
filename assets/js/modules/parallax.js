/**
 * Parallax Module
 * Creates a parallax scrolling effect for the hero section
 */

export function initParallax() {
    const parallaxHero = document.getElementById("parallax-hero")
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset
  
      // Move the background image at a slower rate than the scroll
      parallaxHero.style.backgroundPosition = `center ${50 + scrollPosition * 0.05}%`
    })
  }