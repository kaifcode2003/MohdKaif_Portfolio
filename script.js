// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        // Add a click event listener to the hamburger icon button
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the menu element
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Close Mobile Menu on Link Click ---
    // The smooth scrolling is handled by CSS, but this script ensures the menu closes
    // after a selection is made on mobile devices.
    
    // Select all navigation links that point to a section on the page
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if the mobile menu is currently open
            if (!mobileMenu.classList.contains('hidden')) {
                // If it's open, hide it.
                mobileMenu.classList.add('hidden');
            }
        });
    });
});
