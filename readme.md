# Asta Café Website

A minimal-but-elegant multipage website for a Nordic-inspired café with warm sunset peach accents.

## Quick Start

To run the website locally, you'll need PHP 7.4 or higher installed on your system.

1. Clone or download this repository
2. Navigate to the project directory in your terminal
3. Start the PHP development server:

\`\`\`bash
php -S localhost:8000
\`\`\`

4. Open your browser and visit `http://localhost:8000`

## Project Structure

\`\`\`
/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── (original images)
│   │   ├── *-400w.jpg (small responsive images)
│   │   ├── *-800w.jpg (medium responsive images)
│   │   └── *-mobile.jpg (mobile-specific crops)
│   ├── js/
│   │   ├── main.js
│   │   └── modules/
│   │       ├── dark-mode.js
│   │       ├── parallax.js
│   │       ├── gallery.js
│   │       ├── contact-form.js
│   │       └── responsive-images.js
│   └── php/
│       └── mailer.php
├── index.html
├── about.html
├── gallery.html
├── contact.php
└── README.md
\`\`\`

## Features

- **Responsive Design**: Adapts seamlessly to all screen sizes
- **Responsive Images**: Uses srcset, sizes, and picture elements to serve optimized images
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Animated Hero**: CSS keyframes animations and JS parallax effect
- **Masonry Gallery**: Responsive image gallery with lazy loading
- **AJAX Contact Form**: Client-side validation and asynchronous form submission
- **Accessibility**: Semantic HTML, ARIA attributes, and keyboard navigation

## Responsive Images Implementation

The website uses modern responsive image techniques to optimize performance:

- **srcset and sizes attributes**: Provides multiple image sizes for browsers to choose from based on viewport and device pixel ratio
- **Picture element**: Used for art direction to serve different image crops based on screen size
- **Lazy loading**: Images load only when they enter the viewport
- **Blur-up effect**: Low-quality image placeholders that transition to full-quality images
- **Optimized image formats**: Multiple sizes of each image to reduce bandwidth usage

## Technologies Used

- HTML5
- CSS (Pure CSS, no frameworks)
- Vanilla JavaScript (ES6 modules)
- PHP 7.4+ for server-side functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add blog section with filtering capabilities
- Implement a CMS for easy content management
- Add e-commerce functionality for online ordering
- Integrate with social media APIs
- Add internationalization support

## License

This project is for demonstration purposes only.

## Screenshots

See the `/screenshots` directory for desktop and mobile views of the website.
