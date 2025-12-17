// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // 1. تأثير تحميل الصفحة
    initPageLoad();
    
    // 2. تأثيرات التنقل
    initNavigation();
    
    // 3. تأثيرات الكروت
    initCardEffects();
    
    // 4. تأثيرات المهارات
    initSkillsEffects();
    
    // 5. تأثيرات المشاريع
    initProjectsEffects();
    
    // 6. تأثيرات التواصل
    initContactEffects();
    
    // 7. إضافة سنة التحديث التلقائي في الفوتر
    updateFooterYear();
    
    // 8. تأثير التمرير السلس
    initSmoothScrolling();
    
    // 9. تأثير الظهور عند التمرير
    initScrollAnimations();
    
    // 10. مؤشر التقدم في التمرير
    initScrollProgress();
});

// 1. تأثير تحميل الصفحة
function initPageLoad() {
    // إضافة كلاس للجسم لإظهار التأثيرات
    document.body.classList.add('loaded');
    
    // تأثير تحميل الصفحة
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loadingOverlay);
    
    // إخفاء تأثير التحميل بعد 1.5 ثانية
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }, 1500);
}

// 2. تأثيرات التنقل
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav a');
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        // تحديد الصفحة النشطة
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
        
        // تأثير hover للتنقل
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // إضافة تأثير النقر
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                return;
            }
            
            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

// 3. تأثيرات الكروت
function initCardEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // تأثير عند المرور على الكارد
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.zIndex = '1';
        });
        
        // تأثير عند النقر على الكارد
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return;
            
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

// 4. تأثيرات المهارات
function initSkillsEffects() {
    const skills = document.querySelectorAll('.skill-category');
    
    skills.forEach((skill, index) => {
        // تأثير ظهور المهارات بالتتابع
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, index * 100);
        
        // تأثير تفصيلي عند المرور على المهارة
        skill.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateY(-50%) scale(1.2)';
            }
        });
        
        skill.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateY(-50%) scale(1)';
            }
        });
    });
}

// 5. تأثيرات المشاريع
function initProjectsEffects() {
    const projectCards = document.querySelectorAll('.projects-page .card');
    const projectLinks = document.querySelectorAll('.project-links a');
    
    // تأثيرات خاصة بالبطاقات في صفحة المشاريع
    projectCards.forEach((card, index) => {
        // تأخير ظهور المشاريع
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
        
        // تأثير عند النقر على رابط المشروع
        const projectLink = card.querySelector('a[target="_blank"]');
        if (projectLink) {
            projectLink.addEventListener('click', function(e) {
                // إضافة مؤشر تحميل
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 1000);
            });
        }
    });
    
    // تأثيرات على روابط المشاريع
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// 6. تأثيرات التواصل
function initContactEffects() {
    const contactIcons = document.querySelectorAll('.icon');
    const contactItems = document.querySelectorAll('.contact-item');
    
    // تأثيرات على أيقونات التواصل
    contactIcons.forEach((icon, index) => {
        // تأخير ظهور الأيقونات
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'scale(1)';
        }, index * 150);
        
        // تأثير النقر على الأيقونة
        icon.addEventListener('click', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('title') || 'Click!';
            tooltip.style.position = 'absolute';
            tooltip.style.top = '-40px';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.background = '#0d6efd';
            tooltip.style.color = 'white';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.fontSize = '12px';
            tooltip.style.zIndex = '1000';
            
            this.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.remove();
            }, 1000);
        });
    });
    
    // تأثيرات على عناصر التواصل
    contactItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
        
        // نسخ النص عند النقر
        item.addEventListener('click', function() {
            const textElement = this.querySelector('p');
            if (textElement) {
                const textToCopy = textElement.textContent.trim();
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        // عرض رسالة تأكيد
                        const originalText = textElement.textContent;
                        textElement.textContent = 'Copied to clipboard!';
                        textElement.style.color = '#198754';
                        
                        setTimeout(() => {
                            textElement.textContent = originalText;
                            textElement.style.color = '';
                        }, 1500);
                    })
                    .catch(err => {
                        console.error('Failed to copy: ', err);
                    });
            }
        });
    });
}

// 7. تحديث سنة الفوتر تلقائياً
function updateFooterYear() {
    const footer = document.querySelector('.footer');
    if (footer) {
        const currentYear = new Date().getFullYear();
        const yearSpan = document.createElement('span');
        yearSpan.textContent = `© ${currentYear} Samir Mohamed | Backend Developer`;
        
        // استبدل النص القديم إذا كان موجوداً
        if (footer.textContent.includes('2025')) {
            footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
        }
    }
}

// 8. التمرير السلس للروابط
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 9. تأثير الظهور عند التمرير
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // مراقبة جميع العناصر التي نريد إضافة تأثير لها
    document.querySelectorAll('.card, .skill-category, .contact-item, .project-card').forEach(el => {
        observer.observe(el);
    });
}

// 10. مؤشر التقدم في التمرير
function initScrollProgress() {
    // إنشاء شريط التقدم
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, #0d6efd 0%, #198754 100%)';
    progressBar.style.zIndex = '1000';
    progressBar.style.transition = 'width 0.2s ease';
    document.body.appendChild(progressBar);
    
    // تحديث شريط التقدم أثناء التمرير
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // إضافة زر للرجوع للأعلى
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '30px';
    backToTop.style.right = '30px';
    backToTop.style.width = '50px';
    backToTop.style.height = '50px';
    backToTop.style.background = 'linear-gradient(135deg, #0d6efd 0%, #198754 100%)';
    backToTop.style.color = 'white';
    backToTop.style.border = 'none';
    backToTop.style.borderRadius = '50%';
    backToTop.style.cursor = 'pointer';
    backToTop.style.zIndex = '999';
    backToTop.style.opacity = '0';
    backToTop.style.transform = 'translateY(20px)';
    backToTop.style.transition = 'all 0.3s ease';
    backToTop.style.boxShadow = '0 4px 15px rgba(13, 110, 253, 0.3)';
    document.body.appendChild(backToTop);
    
    // إظهار/إخفاء زر الرجوع للأعلى
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.transform = 'translateY(0)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(20px)';
        }
    });
    
    // وظيفة زر الرجوع للأعلى
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// دالة مساعدة: توليد ألوان عشوائية
function getRandomColor() {
    const colors = [
        '#0d6efd', '#198754', '#6610f2', '#dc3545', 
        '#fd7e14', '#20c997', '#0dcaf0', '#ffc107'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// دالة مساعدة: تأثير الكتابة
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}