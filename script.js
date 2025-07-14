document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Add scroll animation
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const elements = document.querySelectorAll('.project-card, .gradient-text');
            
            elements.forEach(element => {
                const elementPosition = element.offsetTop;
                const distance = scrollPosition - elementPosition;
                
                if (distance < 500 && distance > -300) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Initialize elements with opacity 0 for animation
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.project-card, .gradient-text');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
            
            // Trigger initial animation for hero section
            setTimeout(() => {
                const heroElements = document.querySelectorAll('h1, p, .scroll-down');
                heroElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }, 300);
        });