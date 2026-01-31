// ============================================
// SHREE SHYAM POLYMERS - Interactive Scripts
// ============================================

// ============================================
// SMOOTH MOMENTUM SCROLLING
// ============================================
class SmoothScroll {
    constructor() {
        this.scrolling = false;
        this.currentScroll = window.pageYOffset;
        this.targetScroll = window.pageYOffset;
        this.ease = 0.08; // Optimized for smoothness without jitters

        this.init();
    }

    init() {
        // Update target scroll on mouse wheel
        window.addEventListener('wheel', (e) => {
            this.targetScroll += e.deltaY;
            this.targetScroll = Math.max(0, this.targetScroll);
            this.targetScroll = Math.min(this.targetScroll, document.body.scrollHeight - window.innerHeight);

            if (!this.scrolling) {
                this.scrolling = true;
                this.animate();
            }
        }, { passive: true });

        // Handle manual scroll (scrollbar, touch)
        let isManualScroll = false;
        window.addEventListener('scroll', () => {
            if (!this.scrolling) {
                isManualScroll = true;
                this.currentScroll = window.pageYOffset;
                this.targetScroll = window.pageYOffset;
            }
        }, { passive: true });

        // Update on resize
        window.addEventListener('resize', () => {
            this.currentScroll = window.pageYOffset;
            this.targetScroll = window.pageYOffset;
        });
    }

    animate() {
        // Calculate the difference
        const diff = this.targetScroll - this.currentScroll;

        // Apply easing
        this.currentScroll += diff * this.ease;

        // Update scroll position
        window.scrollTo(0, this.currentScroll);

        // Continue animation if not close enough
        if (Math.abs(diff) > 0.5) {
            requestAnimationFrame(() => this.animate());
        } else {
            this.scrolling = false;
            this.currentScroll = this.targetScroll;
            window.scrollTo(0, this.targetScroll);
        }
    }
}

// Initialize smooth scrolling (DISABLED - was causing jitters)
// if (window.innerWidth > 768 && !('ontouchstart' in window)) {
//     const smoothScroll = new SmoothScroll();
// }

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for Stats Animation
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate all stat numbers
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });

                // Only observe once
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statsObserver.observe(statsSection);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll for ALL page elements
const observeElements = document.querySelectorAll(`
    .category-card, 
    .product-card, 
    .stat-item,
    .timeline-item,
    .vm-card,
    .value-card,
    .segment,
    .standard-item,
    .product-detail,
    .advantage-card,
    .commitment-item,
    .trust-card,
    .benefit-item,
    .faq-item,
    .contact-method,
    .product-category-badge,
    .page-header,
    .section-header
`);

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50); // Faster stagger for more elements
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is in view
});

observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// Product Card Hover Effect - Add dynamic gradient
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Category Card Click - Add ripple effect
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function (e) {
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        // Position ripple
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .category-card,
    .advantage-card,
    .value-card,
    .vm-card,
    .benefit-item,
    .trust-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(20, 184, 166, 0.5);
        transform: translate(-50%, -50%) scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: translate(-50%, -50%) scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Form Validation (for contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Success message
        showNotification('Thank you! We will contact you soon.', 'success');
        contactForm.reset();
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification styles
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 10000;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        background: linear-gradient(135deg, #10b981, #059669);
    }
    
    .notification-error {
        background: linear-gradient(135deg, #ef4444, #dc2626);
    }
`;
document.head.appendChild(notificationStyle);

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// ENHANCED ANIMATIONS FOR ALL PAGES
// ============================================

// Timeline Animation (About Page)
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
    item.style.transition = 'all 0.6s ease';
});

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => timelineObserver.observe(item));

// Product Images Parallax Effect (Products Page)
const productImages = document.querySelectorAll('.product-image-large img');
productImages.forEach(img => {
    img.style.transition = 'transform 0.3s ease';

    const parent = img.closest('.product-detail');
    if (parent) {
        parent.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        parent.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    }
});

// Advantage Cards Hover Animation (Why Us Page)
const advantageCards = document.querySelectorAll('.advantage-card, .vm-card, .value-card');
advantageCards.forEach(card => {
    card.style.transition = 'all 0.3s ease';
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// FAQ Accordion Effect
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.style.transition = 'all 0.3s ease';

    item.addEventListener('click', function () {
        this.classList.toggle('expanded');
        const paragraph = this.querySelector('p');
        if (paragraph) {
            if (this.classList.contains('expanded')) {
                paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
                this.style.transform = 'scale(1.02)';
            } else {
                paragraph.style.maxHeight = '0';
                this.style.transform = 'scale(1)';
            }
        }
    });

    // Initially collapse
    const paragraph = item.querySelector('p');
    if (paragraph) {
        paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
        paragraph.style.overflow = 'hidden';
        paragraph.style.transition = 'max-height 0.3s ease';
    }
});

// Contact Form Input Animation
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.2s ease';
    });

    input.addEventListener('blur', function () {
        this.parentElement.classList.remove('focused');
        this.style.transform = 'scale(1)';
    });
});

// Number Count Animation for Trust Cards (Why Us Page)
const trustStats = document.querySelectorAll('.trust-stat');
const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target.textContent;
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');
            const number = parseInt(text.replace(/[^0-9]/g, ''));

            if (!isNaN(number)) {
                animateCounter(entry.target, number);
                setTimeout(() => {
                    if (hasPlus) entry.target.textContent += '+';
                    if (hasPercent) entry.target.textContent += '%';
                }, 2000);
            }

            trustObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

trustStats.forEach(stat => trustObserver.observe(stat));

// Button Hover Effects - Enhanced
const allButtons = document.querySelectorAll('.btn, .product-link');
allButtons.forEach(btn => {
    btn.style.transition = 'all 0.3s ease';

    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
    });
});

// Page Header Animation
const pageHeaders = document.querySelectorAll('.page-header');
pageHeaders.forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(-30px)';
    header.style.transition = 'all 0.8s ease';

    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});

// Segment Cards Animation (About Page)
const segments = document.querySelectorAll('.segment');
segments.forEach(segment => {
    segment.style.transition = 'all 0.3s ease';
    segment.addEventListener('mouseenter', function () {
        this.style.backgroundColor = 'rgba(20, 184, 166, 0.05)';
        this.style.transform = 'translateX(10px)';
    });
    segment.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '';
        this.style.transform = 'translateX(0)';
    });
});

console.log('🌱 SHREE SHYAM POLYMERS - Website Loaded Successfully');
console.log('✨ All page animations activated!');
