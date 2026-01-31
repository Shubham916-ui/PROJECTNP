// ============================================
// SMOOTH MOMENTUM SCROLLING - Bug-Free Implementation
// Based on Lenis/Studio Freight smooth scroll
// ============================================

class PremiumSmoothScroll {
    constructor(options = {}) {
        this.options = {
            lerp: options.lerp || 0.1,
            smoothWheel: options.smoothWheel !== false,
        };

        this.targetScrollY = 0;
        this.currentScrollY = 0;
        this.rafId = null;

        this.init();
    }

    init() {
        // Get initial scroll position
        this.targetScrollY = window.scrollY;
        this.currentScrollY = window.scrollY;

        // Bind wheel event
        if (this.options.smoothWheel) {
            window.addEventListener('wheel', this.onWheel.bind(this), { passive: false });
        }

        // Handle resize
        window.addEventListener('resize', this.onResize.bind(this));

        // Start animation loop
        this.animate();
    }

    onWheel(e) {
        e.preventDefault();

        // Update target scroll
        this.targetScrollY += e.deltaY;

        // Clamp to valid range
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        this.targetScrollY = Math.max(0, Math.min(this.targetScrollY, maxScroll));
    }

    onResize() {
        this.targetScrollY = window.scrollY;
        this.currentScrollY = window.scrollY;
    }

    animate() {
        // Calculate difference
        const delta = this.targetScrollY - this.currentScrollY;

        // Apply lerp (linear interpolation)
        this.currentScrollY += delta * this.options.lerp;

        // Round to prevent sub-pixel jitter
        const rounded = Math.round(this.currentScrollY * 100) / 100;

        // Update scroll position
        window.scrollTo(0, rounded);

        // Continue loop
        this.rafId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        window.removeEventListener('wheel', this.onWheel);
        window.removeEventListener('resize', this.onResize);
    }
}

// Initialize only on desktop
if (window.innerWidth > 1024 && !('ontouchstart' in window)) {
    window.smoothScroll = new PremiumSmoothScroll({
        lerp: 0.1 // Lower = smoother, Higher = more responsive
    });
    console.log('✨ Premium smooth scrolling enabled!');
}
