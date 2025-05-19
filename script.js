  
        document.addEventListener('DOMContentLoaded', function() {
            
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                this.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            
            const header = document.getElementById('header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            
            const animateOnScroll = function() {
                const serviceCards = document.querySelectorAll('.service-card');
                const aboutImage = document.querySelector('.about-image');
                const aboutText = document.querySelector('.about-text');
                const articleCards = document.querySelectorAll('.article-card');
                
                serviceCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 150);
                    }
                });
                
                if (aboutImage.getBoundingClientRect().top < window.innerHeight / 1.3) {
                    aboutImage.classList.add('animated');
                    aboutText.classList.add('animated');
                }
                
                articleCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 150);
                    }
                });
            };
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); 
            
           
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    if (this.getAttribute('href') === '#') return;
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                       
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                });
            });
        });
 