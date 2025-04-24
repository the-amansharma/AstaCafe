/**
 * Contact Form Module
 * Handles form validation and AJAX submission
 */

export function initContactForm() {
    const contactForm = document.getElementById("contact-form")
    const formStatus = document.getElementById("form-status")
  
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()
  
      // Basic form validation
      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const subject = document.getElementById("subject").value.trim()
      const message = document.getElementById("message").value.trim()
  
      if (!name || !email || !subject || !message) {
        showFormStatus("Please fill in all fields", "error")
        return
      }
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        showFormStatus("Please enter a valid email address", "error")
        return
      }
  
      // Prepare form data
      const formData = new FormData(contactForm)
  
      try {
        // Show loading state
        showFormStatus("Sending message...", "loading")
  
        // Send form data via AJAX
        const response = await fetch("assets/php/mailer.php", {
          method: "POST",
          body: formData,
        })
  
        const data = await response.json()
  
        if (data.status === "ok") {
          showFormStatus(data.message, "success")
          contactForm.reset()
        } else {
          showFormStatus(data.message || "An error occurred. Please try again.", "error")
        }
      } catch (error) {
        showFormStatus("An error occurred. Please try again later.", "error")
        console.error("Form submission error:", error)
      }
    })
  
    // Function to show form status messages
    function showFormStatus(message, type) {
      formStatus.textContent = message
      formStatus.className = "form-status"
  
      if (type === "success") {
        formStatus.classList.add("success")
      } else if (type === "error") {
        formStatus.classList.add("error")
      }
  
      // Ensure the status is visible
      formStatus.style.display = "block"
  
      // Scroll to status message
      formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  
    // Handle newsletter form
    const newsletterForm = document.getElementById("newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.getElementById("newsletter-email").value.trim()
  
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert("Please enter a valid email address")
          return
        }
  
        // In a real implementation, you would send this to a server
        alert("Thank you for subscribing to our newsletter!")
        newsletterForm.reset()
      })
    }
  }