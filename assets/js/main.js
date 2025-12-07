// ============================================
// PCB Design Pro - Main JavaScript
// ============================================

// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Active navigation link
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === '#home')) {
            link.classList.add('active');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#home') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
    
    // Resources tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Add scroll reveal to topic cards
    document.querySelectorAll('.topic-card').forEach(card => {
        card.classList.add('scroll-reveal');
    });
    
    // Add scroll reveal to calculator cards
    document.querySelectorAll('.calculator-card').forEach(card => {
        card.classList.add('scroll-reveal');
    });
    
    // Parallax effect for hero section
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && currentScroll < window.innerHeight) {
            const parallaxValue = currentScroll * 0.5;
            hero.style.transform = `translateY(${parallaxValue}px)`;
        }
        
        lastScroll = currentScroll;
    });
});

// Utility Functions
const utils = {
    // Format number with commas
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    
    // Round to decimal places
    round: (num, decimals = 2) => {
        return parseFloat(num.toFixed(decimals));
    },
    
    // Convert units
    convertUnits: (value, fromUnit, toUnit) => {
        const conversions = {
            'mm': { 'mil': 39.3701, 'inch': 0.0393701 },
            'mil': { 'mm': 0.0254, 'inch': 0.001 },
            'inch': { 'mm': 25.4, 'mil': 1000 }
        };
        
        if (fromUnit === toUnit) return value;
        if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
            return value * conversions[fromUnit][toUnit];
        }
        return value;
    }
};

// Export for use in other scripts
window.PCBDesignPro = {
    utils: utils
};
