document.addEventListener('DOMContentLoaded', function() {
    initHeaderScroll();
    initFadeInAnimations();
    initSmoothScroll();
    initMobileMenu();
    initCarousel();
    initPDFViewer();
});

function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initFadeInAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Close mobile menu if open
                const mobileNav = document.getElementById('mobileNav');
                mobileNav.classList.remove('active');
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (toggle && mobileNav) {
        toggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Animate hamburger
            const spans = toggle.querySelectorAll('span');
            if (mobileNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                const spans = toggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    let autoplayInterval;
    const autoplayDelay = 5000;
    
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoplay();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoplay();
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            startAutoplay();
        });
    });
    
    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const carouselSection = document.querySelector('.carousel-section');
        if (!carouselSection) return;
        
        const rect = carouselSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                startAutoplay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                startAutoplay();
            }
        }
    });
    
    // Start autoplay
    startAutoplay();
}

function initPDFViewer() {
    const canvas = document.getElementById('pdf-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let pdfDoc = null;
    let pageNum = 1;
    let pageRendering = false;
    let pageNumPending = null;
    
    const pdfPath = 'Propuesta Casa Yagüe-Host, Angus & Wines - Bodega.pdf';
    
    pdfjsLib.getDocument(pdfPath).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        renderPage(pageNum);
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
        canvas.style.display = 'none';
    });
    
    function renderPage(num) {
        pageRendering = true;
        pdfDoc.getPage(num).then(function(page) {
            const viewport = page.getViewport({scale: 1.5});
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            
            page.render(renderContext).promise.then(function() {
                pageRendering = false;
                if (pageNumPending !== null) {
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
            
            document.getElementById('page-num').textContent = 'Página ' + num + ' de ' + pdfDoc.numPages;
        });
        
        if (pageNum > 1) {
            document.getElementById('prev-page').disabled = false;
        } else {
            document.getElementById('prev-page').disabled = true;
        }
        
        if (pageNum < pdfDoc.numPages) {
            document.getElementById('next-page').disabled = false;
        } else {
            document.getElementById('next-page').disabled = true;
        }
    }
    
    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }
    
    document.getElementById('prev-page').addEventListener('click', function() {
        if (pageNum <= 1) return;
        pageNum--;
        queueRenderPage(pageNum);
    });
    
    document.getElementById('next-page').addEventListener('click', function() {
        if (pageNum >= pdfDoc.numPages) return;
        pageNum++;
        queueRenderPage(pageNum);
    });
}
