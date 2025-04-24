/**
 * Responsive Images Module
 * Handles responsive image loading and optimization
 */

export function initResponsiveImages() {
    // Add blur-up effect for images with data-src
    const blurUpImages = document.querySelectorAll("img[data-src]:not([data-srcset])")
  
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target
              const src = img.dataset.src
  
              if (src) {
                // Create a new image to preload
                const newImg = new Image()
                newImg.src = src
  
                // When the image is loaded, update the visible image
                newImg.onload = () => {
                  img.src = src
                  img.classList.add("lazy-loaded")
                  img.removeAttribute("data-src")
                }
  
                observer.unobserve(img)
              }
            }
          })
        },
        {
          rootMargin: "50px 0px",
          threshold: 0.01,
        },
      )
  
      blurUpImages.forEach((img) => {
        // Add blur-up class
        img.classList.add("blur-up")
  
        // Start observing
        imageObserver.observe(img)
      })
    } else {
      // Fallback for browsers without IntersectionObserver
      blurUpImages.forEach((img) => {
        img.src = img.dataset.src
        img.removeAttribute("data-src")
      })
    }
  
    // Handle picture elements with responsive sources
    const pictures = document.querySelectorAll("picture")
  
    pictures.forEach((picture) => {
      const sources = picture.querySelectorAll("source")
      const img = picture.querySelector("img")
  
      // Add loading="lazy" to img if not present and not a hero image
      if (
        img &&
        !img.hasAttribute("loading") &&
        !img.classList.contains("hero-img") &&
        !img.classList.contains("page-header-img")
      ) {
        img.setAttribute("loading", "lazy")
      }
    })
  
    // Add sizes attribute to images that don't have it but have srcset
    const imagesWithSrcset = document.querySelectorAll("img[srcset]:not([sizes])")
  
    imagesWithSrcset.forEach((img) => {
      // Default responsive sizes attribute
      img.sizes = "(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
    })
  }
  
  // Helper function to generate srcset string from multiple sources
  export function generateSrcset(basePath, widths, extension = "jpg") {
    return widths.map((width) => `${basePath}-${width}w.${extension} ${width}w`).join(", ")
  }