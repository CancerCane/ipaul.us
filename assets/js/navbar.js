/**
 * Navbar Scroll Transition Handler
 * Adds/removes classes to create a sticky navbar with color-changing behavior on scroll
 */

(function() {
    'use strict';
    
    // Configuration
    const SCROLL_THRESHOLD = 50; // Pixels to scroll before triggering the transition
    const NAVBAR_SELECTOR = '.navbar';
    const SCROLLED_CLASS = 'navbar-scrolled';
    
    let navbar = null;
    let isScrolled = false;
    
    /**
     * Initialize the navbar scroll handler
     */
    function init() {
        navbar = document.querySelector(NAVBAR_SELECTOR);
        
        if (!navbar) {
            console.warn('Navbar element not found');
            return;
        }
        
        // Add initial scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Check initial scroll position on page load
        handleScroll();
    }
    
    /**
     * Handle scroll events and toggle navbar classes
     */
    function handleScroll() {
        const scrollY = window.scrollY;
        const shouldBeScrolled = scrollY > SCROLL_THRESHOLD;
        
        // Only update if state has changed to avoid unnecessary DOM manipulation
        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            
            if (isScrolled) {
                navbar.classList.add(SCROLLED_CLASS);
            } else {
                navbar.classList.remove(SCROLLED_CLASS);
            }
        }
    }
    
    /**
     * Handle navbar collapse functionality
     */
    function initNavbarCollapse() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (!navbarToggler || !navbarCollapse) {
            return;
        }
        
        // Toggle navbar on button click
        navbarToggler.addEventListener('click', function(e) {
            e.preventDefault();
            
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Collapse the navbar
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
                navbarToggler.classList.add('collapsed');
            } else {
                // Expand the navbar
                navbarCollapse.classList.add('show');
                navbarToggler.setAttribute('aria-expanded', 'true');
                navbarToggler.classList.remove('collapsed');
            }
        });
        
        // Close navbar when clicking outside
        document.addEventListener('click', function(e) {
            const isClickInsideNav = navbar.contains(e.target);
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            
            if (!isClickInsideNav && isExpanded) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
                navbarToggler.classList.add('collapsed');
            }
        });
        
        // Close navbar when clicking on nav links
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
                navbarToggler.classList.add('collapsed');
            });
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            init();
            initNavbarCollapse();
        });
    } else {
        init();
        initNavbarCollapse();
    }
    
})();
