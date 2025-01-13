document.addEventListener('DOMContentLoaded', function () {
    // Language texts
    const translations = {
        en: {
            "logo-text": "TERMAVIS ENGINEERING | CONSULTING SERVICES",
            "cta-btn": "Get in Touch",
            "linkedin-text": "Follow us on LinkedIn",
            "connect-link": "Connect on LinkedIn",
            "services-title": "Services",
            "dropdown-design": "Design",
            "dropdown-analyse": "Analyse",
            "dropdown-build": "Build",
            "dropdown-test": "Test",
            "recent-works": "Recent Works",
            "recent-description": "Explore our recent services and solutions.",
            "about-us": "About Us",
            "contact-us": "Contact Us",
            "explore-link": "Explore more",
            "learn-link": "Learn more",
            "footer-text": "&copy; 2024 Termavis Engineering. All rights reserved.",

            "test-header": "Test it.",
            "test-description": "Before your project reaches full-scale production, rigorous testing is essential. At Termavis, we thoroughly test and evaluate prototypes to ensure they meet both industry standards and your performance requirements. By validating every aspect of the design and function, we help you identify potential improvements and guarantee optimal results in real-world applications.",
            "explore-solutions": "Explore our solutions"
        },

        tr: {
            "logo-text": "TERMAVIS MÜHENDİSLİK | DANIŞMANLIK HİZMETLERİ",
            "cta-btn": "İletişime Geç",
            "linkedin-text": "LinkedIn'de Takip Edin",
            "connect-link": "LinkedIn'de Takip Edin",
            "services-title": "Hizmetler",
            "dropdown-design": "Tasarim",
            "dropdown-analyse": "Analiz",
            "dropdown-build": "Üretim",
            "dropdown-test": "Test",
            "recent-works": "Güncel Çalışmalarımız",
            "recent-description": "Son hizmet ve çözümlerimizi keşfedin.",
            "about-us": "Hakkımızda",
            "contact-us": "Bize Ulaşın",
            "explore-link": "Daha fazla keşfedin",
            "learn-link": "Daha fazla bilgi",
            "footer-text": "&copy; 2024 Termavis Mühendislik. Tüm hakları saklıdır.",

            "test-header": "Test Edin.",
            "test-description": "Projeniz tam ölçekli üretime ulaşmadan önce titiz testler hayati öneme sahiptir. Termavis olarak prototipleri detaylı bir şekilde test eder ve değerlendiririz, böylece hem sektör standartlarını hem de performans gereksinimlerinizi karşıladığından emin oluruz. Tasarımın ve işlevin her yönünü doğrulayarak potansiyel iyileştirmeleri belirlemenize yardımcı olur ve gerçek dünya uygulamalarında en iyi sonuçları garanti ederiz.",
            "explore-solutions": "Çözümlerimizi Keşfedin"
        }
    };

     // Function to update the page text based on the selected language
     function updateTexts(lang) {
        document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.getAttribute("data-translate");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; // Use innerHTML for special characters
            }
        });
    }

    // Function to set the selected language
    function setLanguage(lang) {
        const langText = lang === 'en' ? 'ENG' : 'TR';
        const flagSrc = lang === 'en' ? 'images/flags/en.webp' : 'images/flags/tr.webp';

        const languageButton = document.getElementById('selected-language');
        languageButton.innerHTML = `<img src="${flagSrc}" alt="${langText} Flag" class="flag-icon"> ${langText} <i class="fas fa-caret-down"></i>`;

        // Save the selected language to localStorage
        localStorage.setItem('selectedLanguage', lang);

        // Update the text on the page
        updateTexts(lang);
    }

    // Load the saved language or default to English
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLang);

    // Event listener for language options
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function () {
            const langText = this.textContent.trim(); // Get text content (e.g., "ENG" or "TR")
            const lang = langText === 'ENG' ? 'en' : 'tr'; // Convert to language code
            setLanguage(lang);
        });
    });
    
       // Replace the current URL without reloading
       if (window.location.hash === "#resapp-hero") {
        history.replaceState({}, "", "/test");
    }

    document.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    
    let dropdownTimeout;

    // Show dropdown on hover
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout); // Clear any previous close timeout
        dropdownContent.style.display = 'block'; // Show dropdown
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            dropdownContent.style.display = 'none'; // Hide dropdown after delay
        }, 300); // 300ms delay before closing
    });

    // Also add event listeners to dropdownContent itself to avoid closing while hovering over it
    dropdownContent.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
    });
    dropdownContent.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            dropdownContent.style.display = 'none';
        }, 350);
    });
    let activeDropdown = null;

    // Event delegation for nested dropdowns only
    document.addEventListener('click', function (e) {
        const nestedButton = e.target.closest('.dropdown-content .dropdown > button');

        if (nestedButton) {
            console.log("Nested dropdown button clicked");

            const nestedMenu = nestedButton.nextElementSibling;
            const isExpanded = nestedButton.getAttribute('aria-expanded') === 'true';

            // If there's an active dropdown that's not the current one, close it
            if (activeDropdown && activeDropdown !== nestedMenu) {
                closeDropdown(activeDropdown);
            }

            // Toggle the current dropdown
            if (!isExpanded) {
                openDropdown(nestedMenu, nestedButton);
                activeDropdown = nestedMenu;
                console.log("Nested dropdown opened");
            } else {
                closeDropdown(nestedMenu);
                activeDropdown = null;
                console.log("Nested dropdown closed");
            }

            e.stopPropagation();
        } else {
            console.log("Clicked outside of dropdowns");
            // Close all nested dropdowns if clicking outside
            closeAllNestedDropdowns();
        }
    });

    // Close all dropdowns when the mouse leaves the dropdown area
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("mouseleave", closeAllNestedDropdowns);
    });

    // Function to open a dropdown
    function openDropdown(menu, button) {
        menu.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
    }

    // Function to close a specific dropdown
    function closeDropdown(menu) {
        menu.classList.remove('open');
        menu.previousElementSibling.setAttribute('aria-expanded', 'false');
    }

    // Function to close all nested dropdowns
    function closeAllNestedDropdowns() {
        console.log("Closing all nested dropdowns");
        document.querySelectorAll('.dropdown-content .dropdown-content').forEach(function(menu) {
            closeDropdown(menu);
        });
        activeDropdown = null;
    }

    function applyScrollOffset() {
        const hash = window.location.hash.substring(1);
        const targetElement = document.getElementById(hash);

        if (targetElement) {
            const headerOffset = 110;
            const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }

    // Apply offset on initial load if hash is present after full page load
    window.addEventListener('load', () => {
        if (window.location.hash) {
            applyScrollOffset();
        }
    });

    // Handle all navigation clicks in one listener for better performance
    document.body.addEventListener('click', function (e) {
        const target = e.target.closest('a[href*="#"]');
        if (target) {
            const urlParts = target.getAttribute('href').split("#");
            const targetId = urlParts[1];
            const isSamePage = urlParts[0] === '' || urlParts[0] === window.location.pathname.split('/').pop();

            if (isSamePage) {
                e.preventDefault();
                history.pushState(null, null, `#${targetId}`);
                applyScrollOffset();
            }
        }
    });

    // Reapply offset on popstate (back/forward navigation)
    window.addEventListener('popstate', () => {
        if (window.location.hash) {
            applyScrollOffset();
        }
    });


    // IntersectionObserver for section appearance on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        });
    }, { threshold: 0.05 });
    
    document.querySelectorAll('section').forEach(section => observer.observe(section));

        // Background animations for service cards triggered on hover only
        function applyBackgroundAnimation(canvas, title) {
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
    
            const animations = {
                "Residential Energy Systems": animateResidentialEnergy,
                "Intelligent Residential Heat Pump Solutions": animateResidentialHeatPump
            };

            let animationFrameId; // Store the requestAnimationFrame ID
            
            function startAnimation() {
                const animationFunction = animations[title];
                if (animationFunction) {
                    // Start the animation loop
                    animationFrameId = requestAnimationFrame(() => animationFunction(canvas, ctx, startAnimation));
                }
            }
            
            function stopAnimation() {
                // Cancel the animation frame
                cancelAnimationFrame(animationFrameId);
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas when hover ends
            }
        
            return { startAnimation, stopAnimation };
        }
    
        // Adding hover events to initiate start/stop for each service card based on title
        document.querySelectorAll('.service-card').forEach(card => {
            const canvas = card.querySelector('.card-canvas');
            const title = card.querySelector('h3').innerText;
            
            let animation;

            switch (title) {
                case "Residential Energy Systems":
                    animation = animateResidentialEnergy(canvas);
                    break;
                case "Intelligent Residential Heat Pump Solutions":
                    animation = animateResidentialHeatPump(canvas);
                    break;
            }

            if (animation) {
                animation.renderStaticFrame(); // Display initial static frame for each card
                card.addEventListener('mouseenter', animation.start);
                card.addEventListener('mouseleave', animation.stop);
            }
        });
        
        // Set Canvas Resolution for High-DPI Screens
        function setCanvasResolution(canvas) {
            const ctx = canvas.getContext('2d');
            const scale = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            ctx.scale(scale, scale);
        }
    
       //Residential Energy Systems (Solar PV, EV Charging, Energy Storage)
        function animateResidentialEnergy(canvas) {
            setCanvasResolution(canvas);
            const ctx = canvas.getContext('2d');
            let dots = Array.from({ length: 20 }, (_, i) => ({
                x: (canvas.width / 20) * i,
                y: canvas.height / 2 + (Math.random() - 0.5) * 20,
                speed: Math.random() * 1 + 0.5
            }));
            let animationFrameId;
        
            function draw(animate = true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
        
                dots.forEach(dot => {
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 215, 0, 0.8)'; // Gold color for solar energy
                    ctx.fill();
        
                    if (animate) {
                        dot.x += dot.speed;
                        if (dot.x > canvas.width) dot.x = 0; // Loop dots to represent continuous energy flow
                    }
                });
        
                if (animate) {
                    animationFrameId = requestAnimationFrame(() => draw(true));
                }
            }
        
            function renderStaticFrame() { draw(false); }
        
            return {
                start() { draw(); },
                stop() {
                    cancelAnimationFrame(animationFrameId);
                    renderStaticFrame();
                },
                renderStaticFrame
            };
        }
        
        //Intelligent Residential Heat Pump Solutions
        function animateResidentialHeatPump(canvas) {
            setCanvasResolution(canvas);
            const ctx = canvas.getContext('2d');
            let animationFrameId;
            let bars = Array.from({ length: 10 }, (_, i) => ({
                height: Math.random() * (canvas.height / 2),
                speed: (Math.random() - 0.5) * 0.5
            }));
        
            function draw(animate = true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
        
                const barWidth = canvas.width / bars.length;
                bars.forEach((bar, index) => {
                    ctx.fillStyle = 'rgba(0, 150, 255, 0.8)'; // Blue for cooling effect
                    ctx.fillRect(index * barWidth, canvas.height - bar.height, barWidth - 5, bar.height);
        
                    if (animate) {
                        // Adjust height for slight "pulsing" effect, simulating heat pump adjustments
                        bar.height += bar.speed;
                        if (bar.height > canvas.height / 1.5 || bar.height < canvas.height / 4) {
                            bar.speed *= -1; // Reverse direction for smooth oscillation
                        }
                    }
                });
        
                if (animate) {
                    animationFrameId = requestAnimationFrame(() => draw(true));
                }
            }
        
            function renderStaticFrame() { draw(false); }
        
            return {
                start() { draw(); },
                stop() {
                    cancelAnimationFrame(animationFrameId);
                    renderStaticFrame();
                },
                renderStaticFrame
            };
        }
});