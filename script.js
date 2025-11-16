// Jony Ive Inspired Presentation - Smooth, Refined Interactions

class Presentation {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isAnimating = false;

        this.init();
    }

    init() {
        // Set up navigation buttons
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressFill = document.getElementById('progressFill');

        // Event listeners
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));

        // Touch/swipe support
        this.addTouchSupport();

        // Initial state
        this.updateProgress();
        this.updateButtons();
    }

    goToSlide(index) {
        if (this.isAnimating || index === this.currentSlide || index < 0 || index >= this.totalSlides) {
            return;
        }

        this.isAnimating = true;

        // Determine direction
        const direction = index > this.currentSlide ? 'next' : 'prev';

        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');
        if (direction === 'next') {
            this.slides[this.currentSlide].classList.add('prev');
        }

        // Add active class to new slide
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        if (direction === 'prev') {
            this.slides[this.currentSlide].classList.remove('prev');
        }

        // Clean up classes after animation
        setTimeout(() => {
            this.slides.forEach((slide, i) => {
                if (i !== this.currentSlide) {
                    slide.classList.remove('prev', 'active');
                }
            });
            this.isAnimating = false;
        }, 600);

        // Update UI
        this.updateProgress();
        this.updateButtons();

        // Trigger animations for new slide
        this.animateSlideContent();
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    updateProgress() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    updateButtons() {
        // Disable prev button on first slide
        this.prevBtn.disabled = this.currentSlide === 0;

        // Disable next button on last slide
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
    }

    handleKeyPress(e) {
        if (this.isAnimating) return;

        switch(e.key) {
            case 'ArrowRight':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                this.previousSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                this.goToSlide(this.totalSlides - 1);
                break;
        }
    }

    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        const minSwipeDistance = 50;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX, minSwipeDistance);
        }, { passive: true });
    }

    handleSwipe(startX, endX, minDistance) {
        const diff = startX - endX;

        if (Math.abs(diff) > minDistance) {
            if (diff > 0) {
                // Swipe left - next slide
                this.nextSlide();
            } else {
                // Swipe right - previous slide
                this.previousSlide();
            }
        }
    }

    animateSlideContent() {
        const currentSlideElement = this.slides[this.currentSlide];
        const animatedElements = currentSlideElement.querySelectorAll('.fade-in');

        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';

            setTimeout(() => {
                el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new Presentation();

    // Add subtle parallax effect to cards on mouse move
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.challenge-card, .importance-card, .reference-card');

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;

            card.style.transform = `perspective(1000px) rotateY(${percentX * 2}deg) rotateX(${-percentY * 2}deg)`;
        });
    });

    // Reset card transform when mouse leaves
    document.addEventListener('mouseleave', (e) => {
        if (e.target.classList.contains('challenge-card') ||
            e.target.classList.contains('importance-card') ||
            e.target.classList.contains('reference-card')) {
            e.target.style.transform = '';
        }
    });

    // Hide shortcuts hint after 5 seconds
    setTimeout(() => {
        const hint = document.querySelector('.shortcuts-hint');
        if (hint) {
            hint.style.transition = 'opacity 0.5s ease';
            hint.style.opacity = '0';
            setTimeout(() => hint.remove(), 500);
        }
    }, 5000);

    // Add smooth scroll behavior for any internal links
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

    // Prevent accidental page refresh
    window.addEventListener('beforeunload', (e) => {
        if (presentation.currentSlide > 0) {
            e.preventDefault();
            e.returnValue = '';
        }
    });

    // Add fullscreen support (F key)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'f' || e.key === 'F') {
            toggleFullscreen();
        }
    });

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Add print support (Ctrl/Cmd + P shows all slides)
    window.addEventListener('beforeprint', () => {
        document.querySelectorAll('.slide').forEach(slide => {
            slide.style.opacity = '1';
            slide.style.transform = 'none';
            slide.style.position = 'relative';
        });
    });

    // Add Easter egg - press 'i' for Ive quote
    let ivePressed = false;
    document.addEventListener('keydown', (e) => {
        if (e.key === 'i' && !ivePressed) {
            ivePressed = true;
            showIveQuote();
        }
    });

    function showIveQuote() {
        const quote = document.createElement('div');
        quote.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.95);
            color: white;
            padding: 40px 60px;
            border-radius: 24px;
            font-size: 24px;
            font-style: italic;
            text-align: center;
            z-index: 1000;
            max-width: 600px;
            backdrop-filter: blur(20px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: fadeInScale 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        quote.innerHTML = `
            <p>"We are at our best when we focus on a singular, clear idea and relentlessly pursue its perfect execution."</p>
            <p style="margin-top: 20px; font-size: 16px; opacity: 0.7;">— Inspired by Jony Ive</p>
        `;

        document.body.appendChild(quote);

        setTimeout(() => {
            quote.style.transition = 'opacity 0.5s ease';
            quote.style.opacity = '0';
            setTimeout(() => quote.remove(), 500);
            ivePressed = false;
        }, 4000);
    }

    // Add CSS for quote animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    console.log('%c Presentation Design Inspired by Jony Ive ', 'background: #0071e3; color: white; padding: 8px 16px; border-radius: 4px; font-size: 14px;');
    console.log('%c Focus. Simplicity. Elegance. ', 'color: #6e6e73; font-style: italic; font-size: 12px;');
});
