// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Header scroll effect with transparent state
    let lastScroll = 0;
    const header = document.getElementById('header');
    const heroVideo = document.querySelector('.hero-video');
    const isDesktop = window.innerWidth > 768;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Desktop only: transparent header at top
        if (isDesktop) {
            if (currentScroll < 50) {
                header.classList.add('transparent');
            } else {
                header.classList.remove('transparent');
            }
        }

        // Adjust padding based on scroll
        if (currentScroll > 100) {
            header.style.padding = '0.5rem 0';
        } else {
            header.style.padding = '1rem 0';
        }

        lastScroll = currentScroll;
    });

    // Hero video visibility observer - pause when less than 50% visible
    if (heroVideo) {
        const videoObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.intersectionRatio < 0.5) {
                    heroVideo.pause();
                } else {
                    heroVideo.play();
                }
            });
        }, {
            threshold: [0, 0.5, 1]
        });

        videoObserver.observe(heroVideo);
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .client-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Animated Counter for Statistics
    function animateCounter(element, target, suffix = '') {
        let current = 0;
        const increment = target / 50; // Will complete in ~50 steps
        const duration = 2000; // 2 seconds
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, stepTime);
    }

    // Observer for stat numbers
    const statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-target'));
                const label = statNumber.nextElementSibling.textContent;

                // Determine suffix based on label
                let suffix = '+';
                if (label.includes('Satisfaction')) {
                    suffix = '%';
                }

                animateCounter(statNumber, target, suffix);
                statsObserver.unobserve(statNumber);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe all stat numbers with data-target attribute
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        statsObserver.observe(el);
    });

    // Section Heading Animations
    const headingObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                headingObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all section titles and subtitles
    document.querySelectorAll('.section-title, .section-subtitle, .section-subtitle-dark, .clients-subtitle').forEach(el => {
        headingObserver.observe(el);
    });


    // Form validation (for contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Add active class to current page navigation
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
// Go To Top Button Functionality
document.addEventListener('DOMContentLoaded', function () {
    const btnTop = document.getElementById('btnTop');

    if (btnTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                btnTop.classList.add('show');
            } else {
                btnTop.classList.remove('show');
            }
        });

        btnTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});


// Client Marquee Auto-Scroll
document.addEventListener('DOMContentLoaded', function () {
    const marquee = document.querySelector('.clients-marquee');
    if (!marquee) return;

    // Clone content once for seamless loop
    const content = marquee.innerHTML;
    marquee.innerHTML += content;

    // Calculate width of one set of items to know when to reset
    // We can estimate half scrollWidth after cloning
    // But better to accept slight imperfection or measure

    let scrollSpeed = 3; // Faster as requested (was 2)
    let isPaused = false;
    let animationId;

    // Pause on hover or touch interaction
    marquee.addEventListener('mouseenter', () => isPaused = true);
    marquee.addEventListener('mouseleave', () => isPaused = false);
    marquee.addEventListener('touchstart', () => isPaused = true);
    marquee.addEventListener('touchend', () => {
        setTimeout(() => isPaused = false, 2000); // Resume after delay
    });

    function autoScroll() {
        if (!isPaused) {
            marquee.scrollLeft += scrollSpeed;

            // Seamless loop: roughly when half is scrolled (original content width)
            // we jump back to start (0). 
            // Since we doubled content, scrollWidth is approx 2x original width.
            // Reset when scrollLeft >= scrollWidth / 2
            if (marquee.scrollLeft >= (marquee.scrollWidth / 2)) {
                marquee.scrollLeft = 0;
            }
        }
        animationId = requestAnimationFrame(autoScroll);
    }

    autoScroll();
});
