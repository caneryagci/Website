document.addEventListener('DOMContentLoaded', function () {
    // document.querySelector("form").addEventListener("submit", function (e) {
    //     e.preventDefault(); // Prevent actual form submission
    //     document.getElementById("form-feedback").style.display = "block";
    //     this.reset(); // Optionally reset the form
    // });

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

            "contact-header": "Contact Us",
            "consulting-services-header": "Consulting Services",
            "consulting-services-description": "We actively seek new opportunities and are experienced in working on international projects.<br>Contact us to discuss your project requirements or to learn more about our consulting services.<br>We look forward to collaborating with you.",
            "contact-form-header": "Contact Form",
            "contact-form-description": "We are currently enhancing our contact form to serve you better.<br><br>In the meantime, please feel free to send your inquiries directly to <a href='mailto:info@termavis.com'>info@termavis.com</a>.<br>We appreciate your understanding and look forward to assisting you.",
            "our-address-header": "Our Address",
            "design-office-header": "Design Office and Test & Assembly Workshop:",
            "office-header": "Office:",
            "form-feedback-message": "Thank you for reaching out! We will get back to you shortly."
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

            "contact-header": "Bize Ulaşın",
            "consulting-services-header": "Danışmanlık Hizmetleri",
            "consulting-services-description": "Uluslararası projelerde deneyime sahip bir ekip olarak yeni iş birlikleri için fırsatları değerlendirmekteyiz.<br>Proje gereksinimlerinizi görüşmek veya danışmanlık hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.<br> Sizinle iş birliği yapmaktan memnuniyet duyarız.",
            "contact-form-header": "İletişim Formu",
            "contact-form-description": "İletişim formumuzu sizlere daha iyi hizmet verebilmek adına güncelliyoruz.<br><br>Bu süre zarfında sorularınızı <a href='mailto:info@termavis.com'>info@termavis.com</a> adresine iletebilirsiniz.<br> Anlayışınız için teşekkür eder, en kısa sürede size yardımcı olmayı sabırsızlıkla bekliyoruz.",
            "our-address-header": "Adresimiz",
            "design-office-header": "Tasarım Ofisi ve Test & Montaj Atölyesi:",
            "office-header": "Ofis:",
            "form-feedback-message": "Bizimle iletişime geçtiğiniz için teşekkür ederiz! En kısa sürede size geri dönüş yapacağız."
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
    const savedLang = localStorage.getItem('selectedLanguage') || 'tr';
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
    if (window.location.hash === "#contact") {
       history.replaceState({}, "", "/contact-us");
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

    console.log("DOM fully loaded and parsed");

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

    // Observe each section for scroll-triggered visibility changes
    document.querySelectorAll('section').forEach(section => observer.observe(section));

});