(function() {
    'use strict';

    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contact-form');

    function init() {
        navbarScrollEffect();
        mobileMenuToggle();
        smoothScroll();
        revealAnimations();
        formValidation();
    }

    function navbarScrollEffect() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    function mobileMenuToggle() {
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
                
                const spans = mobileMenuBtn.querySelectorAll('span');
                if (navMenu.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });

            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    
                    const spans = mobileMenuBtn.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                });
            });
        }
    }

    function smoothScroll() {
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerHeight = navbar.offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function() {
                const servicios = document.getElementById('servicios');
                if (servicios) {
                    const headerHeight = navbar.offsetHeight;
                    const targetPosition = servicios.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    function revealAnimations() {
        const reveals = document.querySelectorAll('.reveal');
        
        if (reveals.length > 0) {
            const revealOnScroll = function() {
                reveals.forEach(function(element) {
                    const windowHeight = window.innerHeight;
                    const elementTop = element.getBoundingClientRect().top;
                    const revealPoint = 100;
                    
                    if (elementTop < windowHeight - revealPoint) {
                        element.classList.add('active');
                    }
                });
            };
            
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
        }
    }

    function formValidation() {
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                const requiredFields = contactForm.querySelectorAll('[required]');
                
                requiredFields.forEach(function(field) {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.style.borderColor = '#D84315';
                    } else {
                        field.style.borderColor = '#A5D6A7';
                    }
                });
                
                if (isValid) {
                    const name = document.getElementById('name').value;
                    const service = document.getElementById('service').value;
                    const message = document.getElementById('message').value;
                    
                    const whatsappMessage = encodeURIComponent(
                        `Hola! Soy ${name}. Me interesa el servicio de: ${service}. Mi mensaje: ${message}`
                    );
                    
                    const phone = '5491100000000';
                    const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;
                    
                    window.open(whatsappUrl, '_blank');
                    
                    contactForm.reset();
                    
                    showNotification('¡Consulta enviada! Te contactaremos pronto.');
                }
            });

            const inputs = contactForm.querySelectorAll('input, textarea, select');
            inputs.forEach(function(input) {
                input.addEventListener('input', function() {
                    this.style.borderColor = '#A5D6A7';
                });
            });
        }
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #1B5E20;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(function() {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(function() {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
