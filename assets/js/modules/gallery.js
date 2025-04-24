/**
 * Gallery Module
 * Handles the masonry gallery layout and lazy loading of images
 */

export function initGallery() {
    const galleryContainer = document.getElementById("masonry-gallery")
  
    // Gallery image data with responsive image sources
    const galleryImages = [
      {
        alt: "Barista preparing coffee with precision",
        srcset: {
          small: "assets/img/gallery-1.jpg",
          medium: "assets/img/gallery-1.jpg",
          large: "assets/img/gallery-1.jpg",
        },
      },
      {
        alt: "Latte art in a ceramic cup",
        srcset: {
          small: "assets/img/gallery-2.jpg",
          medium: "assets/img/gallery-2.jpg",
          large: "assets/img/gallery-2.jpg",
        },
      },
      {
        alt: "Cozy corner with books and coffee",
        srcset: {
          small: "assets/img/gallery-3.jpg",
          medium: "assets/img/gallery-3.jpg",
          large: "assets/img/gallery-3.jpg",
        },
      },
      {
        alt: "Fresh pastries on display",
        srcset: {
          small: "assets/img/gallery-4.jpg",
          medium: "assets/img/gallery-4.jpg",
          large: "assets/img/gallery-4.jpg",
        },
      },
      {
        alt: "Coffee beans being roasted",
        srcset: {
          small: "assets/img/gallery-5.jpg",
          medium: "assets/img/gallery-5.jpg",
          large: "assets/img/gallery-5.jpg",
        },
      },
      {
        alt: "Customers enjoying conversation over coffee",
        srcset: {
          small: "assets/img/gallery-6.jpg",
          medium: "assets/img/gallery-6.jpg",
          large: "assets/img/gallery-6.jpg",
        },
      },
      {
        alt: "Minimalist café interior with natural light",
        srcset: {
          small: "assets/img/gallery-7.jpg",
          medium: "assets/img/gallery-7.jpg",
          large: "assets/img/gallery-7.jpg",
        },
      },
      {
        alt: "Seasonal specialty drink with garnish",
        srcset: {
          small: "assets/img/gallery-8.jpg",
          medium: "assets/img/gallery-8.jpg",
          large: "assets/img/gallery-8.jpg",
        },
      },
      {
        alt: "Outdoor seating area with plants",
        srcset: {
          small: "assets/img/gallery-9.jpg",
          medium: "assets/img/gallery-9.jpg",
          large: "assets/img/gallery-9.jpg",
        },
      },
    ]
  
    // Create and append gallery items with lazy loading and responsive images
    galleryImages.forEach((image) => {
      const galleryItem = document.createElement("div")
      galleryItem.className = "gallery-item"
  
      const img = document.createElement("img")
      img.alt = image.alt
  
      // Set data attributes for lazy loading
      img.dataset.srcset = `${image.srcset.small} 400w, ${image.srcset.medium} 800w, ${image.srcset.large} 1200w`
      img.dataset.src = image.srcset.medium // Fallback src
      img.dataset.sizes = "(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
  
      galleryItem.appendChild(img)
      galleryContainer.appendChild(galleryItem)
    })
  
    // Implement lazy loading with srcset support
    const lazyLoadImages = () => {
      const lazyImages = document.querySelectorAll("img[data-srcset]")
  
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target
  
              // Apply srcset, sizes, and src attributes
              if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset
                img.removeAttribute("data-srcset")
              }
  
              if (img.dataset.sizes) {
                img.sizes = img.dataset.sizes
                img.removeAttribute("data-sizes")
              }
  
              if (img.dataset.src) {
                img.src = img.dataset.src
                img.removeAttribute("data-src")
              }
  
              imageObserver.unobserve(img)
            }
          })
        })
  
        lazyImages.forEach((img) => {
          imageObserver.observe(img)
        })
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach((img) => {
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset
            img.removeAttribute("data-srcset")
          }
  
          if (img.dataset.sizes) {
            img.sizes = img.dataset.sizes
            img.removeAttribute("data-sizes")
          }
  
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute("data-src")
          }
        })
      }
    }
  
    // Initialize lazy loading
    lazyLoadImages()
  }