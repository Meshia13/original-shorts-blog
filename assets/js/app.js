/**
 * Global Variables
 */

// Select explore stories link
const exploreLink = document.querySelector('a[href="#features"');

// Selecting features section
const featuresSection = document.querySelector('#features');

/**
 * End Global Variables
 */


/**
 * Main Functions
 */

// Smooth scroll to the features section when "Explore Stories" is clicked
function setupSmoothScroll() {
    if (exploreLink && featuresSection) {
        exploreLink.addEventListener('click', function (e) {
            e.preventDefault();
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// DOM fully loaded
document.addEventListener('DOMContentLoaded', function () {
    setupSmoothScroll();
});