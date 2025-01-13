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
            "hero-header": "PROVIDING TECHNOLOGY WITH ACCURACY AND CREATIVITY",
            "hero-description": "expertly delivering detailed design and analysis of engineering projects to the development and production of functional prototypes.",
            "solutions-header": "Our Solutions",
            "solutions-subheader": "What We Do",
            "solutions-description0": "From detailed design and analysis to prototype production.",
            "solutions-description1": "We are committed to innovation, precision, and efficiency, consistently advancing technology and optimizing performance across a range of disciplines.",
            "solutions-description2": "Get a closer look at consulting services and how we are providing solutions for customers and partners around the world.",
            "design-card": "Design it.",
            "analyse-card": "Analyse it.",
            "build-card": "Build it.",
            "test-card": "Test it.",
            "explore-link": "Explore more",
            "case-study-1-title": "TS1400 Turboshaft Engine IPS Blower Aerodynamic Design & Analysis",
            "case-study-2-title": "Cooling System Development Project Aimed at Reducing the Maintenance Time of Turbofan Engines",
            "case-study-3-title": "Filter By-pass Valves for Aerospace Industry",
            "case-study-4-title": "Pedestrian Bridge Railing Design and Production",
            "learn-link": "Learn more",
            "footer-text": "&copy; 2024 Termavis Engineering. All rights reserved.",
            
            "h3-text-0": "TS1400 Turboshaft Engine IPS Blower",
            "h2-text-0": "Aerodynamic Design & Analysis",
            "p-text-0": "A comprehensive rotor-stator design and detailed analysis for the blower component within the TS1400 Turboshaft Engine Integrated Particle Separation System has been meticulously carried out in accordance with the latest updated technical requirements. Utilizing advanced and sophisticated 2D and 3D turbo machinery design software, a highly efficient blower was designed to be fully compatible with the existing system interface, ensuring seamless integration. Additionally, its overall performance was validated through analysis and confirming its reliability and efficacy in meeting the required operational standards.",
            "h3-text-1": "Cooling System Development",
            "h2-text-1": "Reducing the Maintenance Time of Turbofan Engines",
            "p-text-1": "Turbofan engine cooling system project focuses on optimizing the maintenance processes of commercial aviation fleets to achieve operational excellence and cost reduction. By streamlining maintenance schedules, we aim to significantly reduce downtime, allowing aircraft to return to service faster. This not only increases the fleet’s overall flight capacity but also ensures that aircraft undergo more frequent and thorough safety checks, improving flight safety. By minimizing the maintenance times of turbofan engines, we offer a competitive advantage to airlines, enabling them to lower operational costs and enhance customer satisfaction. This Tübitak-supported initiative is designed to provide long-term benefits, improving operational efficiency and cost-effectiveness for commercial air fleets.",
            "h3-text-2": "Filter By-pass Valves for Aerospace Industry",
            "p-text-2": "We are developing advanced filter by-pass valves specifically designed for the aviation industry. Oil bypass valves play a critical role in ensuring the uninterrupted operation of aircraft systems by allowing fluid to bypass the filter when it becomes clogged or experiences high pressure, preventing engine damage or system failure. Our filter by-pass valves are engineered for maximum reliability and performance, ensuring that even in extreme conditions, aircraft maintain optimal functionality. The specifics can be optimized based on their intended applications.",
            "h3-text-3": "Pedestrian Bridge Railing",
            "h2-text-3": "Design and Production",
            "p-text-3": "We designed and produced a durable and aesthetically pleasing pedestrian bridge railing system, tailored to enhance both safety and visual appeal. The design process involved detailed analysis to ensure structural integrity, while meeting local regulations and safety standards. Using high-quality materials and precise engineering, the railing provides long-lasting performance in various weather conditions. Our commitment to innovation and craftsmanship is reflected in the seamless integration of the railing into the overall bridge structure, ensuring both functionality and a modern appearance.",
            
            "about-header": "About Us",
            "about-description": "At termavis, we specialize in cutting-edge engineering design, analysis, and prototype production. With a deep understanding of thermal technology and its vast applications, we deliver high-performance solutions tailored to meet the unique demands of our clients. Our expertise spans multiple industries, driving innovation through precision engineering and forward-thinking design, all while maintaining a focus on sustainability and efficiency.",
            "mission-header": "Mission",
            "mission-description": "We are dedicated to revolutionize the engineering landscape by providing state-of-the-art thermal solutions and engineering services. We strive to deliver top-tier designs, advanced analysis, and high-quality prototypes that empower our clients to push the boundaries of what is possible. Through collaboration, innovation, and integrity, we aim to meet the evolving challenges of modern industries with precision and excellence.",
            "vision-header": "Vision",
            "vision-description": "To become a global leader in thermal technology and engineering solutions, shaping the future of industries by setting new standards for innovation and performance. We aspire to create sustainable, efficient, and impactful designs that enhance both technological advancement and the human experience, fostering a future where our solutions drive positive change.",
            "core-values-header": "Core Values",
            "innovation-header": "Innovation",
            "innovation-description": "We are committed to advancing the frontiers of technology and engineering through continuous innovation.",
            "integrity-header": "Integrity",
            "integrity-description": "We adhere to the highest standards of ethical conduct, ensuring transparency and trust in all our actions.",
            "technical-excellence-header": "Technical Excellence",
            "technical-excellence-description": "We strive for unparalleled quality in our engineering and software development, delivering solutions that meet the highest industry standards.",
            "customer-focus-header": "Customer Focus",
            "customer-focus-description": "Our clients’ needs are at the forefront of everything we do, and we are dedicated to providing tailored high-impact solutions.",
            "teamwork-header": "Teamwork and Collaboration",
            "teamwork-description": "We cultivate a collaborative environment that leverages the diverse talents and perspectives of our team, driving collective success.",
            "diversity-header": "Diversity and Inclusion",
            "diversity-description": "We value and promote diversity, fostering an inclusive culture that encourages innovation and respects all voices.",
            "our-team-header": "Our Team",
            "team-member-1-name": "Alican Yagci",
            "team-member-1-title": "Founder & M.Sc. Mechanical Engineer",
            "team-member-2-name": "Alper Uslu",
            "team-member-2-title": "Mechanical Engineer",
            "team-member-3-name": "Bekir Caner Yagci",
            "team-member-3-title": "M.Sc. Electrical Engineer",

            "recent-works-header": "Recent Works",
            "recent-works-description-1": "Our expertise extends from the detailed design and analysis of engineering projects to the development and production of functional prototypes. While our work encompasses a wide range of engineering disciplines, every project we undertake is united by a commitment to innovation and precision, delivering solutions that advance both technology and efficiency.",
            "recent-works-description-2": "We are proud to showcase our recent consulting engagements, demonstrating our expertise in delivering top-tier engineering solutions for a variety of clients.",

            "pressure-valve-title": "Pressure Valve:",
            "pressure-valve-item-1": "Cracking pressure in the range of 100 kPa - 500 kPa,",
            "pressure-valve-item-2": "Optimized for low pressure drop,",
            "pressure-valve-item-3": "Lightweight and compact design with aluminum body,",
            "pressure-valve-item-4": "Operating temperature range of -50°C to +150°C.",
            "thermal-valve-title": "Thermal Pressure Valve:",
            "thermal-valve-item-1": "Adjustable opening/closing mode in the range of -40°C to 100°C,",
            "thermal-valve-item-2": "Cracking pressure in the range of 100 kPa - 500 kPa,",
            "thermal-valve-item-3": "Optimized for low pressure drop,",
            "thermal-valve-item-4": "Lightweight and compact design with aluminum body,",
            "thermal-valve-item-5": "Operating temperature range of -50°C to +150°C."
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
            "hero-header": "HASSASİYET VE YARATICILIK İLE TEKNOLOJİ SAĞLIYORUZ",
            "hero-description": "mühendislik projelerinin detaylı tasarım ve analizinden işlevsel prototiplerin geliştirilmesi ve üretimine kadar uzmanlıkla hizmet sunar.",
            "solutions-header": "Çözümlerimiz",
            "solutions-subheader": "Ne Yapıyoruz",
            "solutions-description0": "Detaylı tasarım ve analizden prototip üretimine kadar mühendislik çözümleri.",
            "solutions-description1": "Yenilikçilik, hassasiyet ve verimliliğe olan bağlılığımızla, çeşitli disiplinlerde teknolojiyi sürekli geliştiriyor ve performansı optimize ediyoruz.",
            "solutions-description2": "Danışmanlık hizmetlerimizi ve dünya çapında müşterilerimiz ve iş ortaklarımız için nasıl çözümler sunduğumuzu yakından inceleyin.",
            "design-card": "Tasarım Yapın.",
            "analyse-card": "Analiz Edin.",
            "build-card": "Üretin.",
            "test-card": "Test Edin.",
            "explore-link": "Daha fazla keşfedin",
            "case-study-1-title": "TS1400 Turboşaft Motor IPS Üfleyici Aerodinamik Tasarım ve Analiz",
            "case-study-2-title": "Turbofan Motorlarının Bakım Sürelerini Azaltmaya Yönelik Soğutma Sistemi Geliştirme Projesi",
            "case-study-3-title": "Havacılık Sektörü için Baypas Valfleri",
            "case-study-4-title": "Yaya Köprüsü Korkuluğu Tasarım ve Üretimi",
            "learn-link": "Daha fazla bilgi edin",
            "footer-text": "&copy; 2024 Termavis Mühendislik. Tüm hakları saklıdır.",
            
            "h3-text-0": "TS1400 Turboşaft Motor IPS Üfleyici",
            "h2-text-0": "Aerodinamik Tasarım ve Analiz",
            "p-text-0": "TS1400 Turboşaft Motor Entegre Parçacık Ayırma Sistemi'nin üfleyici bileşeni için kapsamlı rotor-stator tasarımı ve detaylı analiz, en güncel teknik gereksinimlere uygun olarak titizlikle gerçekleştirilmiştir. Gelişmiş ve sofistike 2D ve 3D turbo makine tasarım yazılımı kullanılarak, mevcut sistem arayüzü ile tamamen uyumlu, son derece verimli bir üfleyici tasarlanmıştır. Ayrıca genel performansı analizlerle doğrulanarak operasyonel standartlara uygunluğu ve güvenilirliği kanıtlanmıştır.",
            "h3-text-1": "Soğutma Sistemi Geliştirme",
            "h2-text-1": "Turbofan Motorlarının Bakım Sürelerinin Azaltılması",
            "p-text-1": "Turbofan motor soğutma sistemi projesi, ticari havacılık filolarının bakım süreçlerini optimize ederek operasyonel mükemmellik ve maliyet düşüşü sağlamayı hedeflemektedir. Bakım programlarının düzenlenmesi sayesinde uçakların hizmete daha hızlı dönebilmesi sağlanır. Bu, filonun toplam uçuş kapasitesini artırırken daha sık ve kapsamlı güvenlik kontrollerinin yapılmasını mümkün kılar. Turbofan motorlarının bakım sürelerinin azaltılmasıyla havayollarına operasyonel maliyetleri düşürme ve müşteri memnuniyetini artırma avantajı sunuyoruz. Tübitak destekli bu girişim, ticari hava filoları için operasyonel verimliliği ve maliyet etkinliğini artıran uzun vadeli faydalar sağlamayı amaçlamaktadır.",
            "h3-text-2": "Havacılık Sektörü İçin Baypas Valfleri",
            "p-text-2": "Havacılık endüstrisi için özel olarak tasarlanmış ileri teknoloji baypas valfleri geliştiriyoruz. Yağ baypas valfleri, filtre tıkandığında veya yüksek basınca maruz kaldığında sıvının filtreyi baypas ederek motor hasarını veya sistem arızasını önlemesini sağlar. Geliştirdiğimiz baypas valfleri maksimum güvenilirlik ve performans sağlamak üzere tasarlanmıştır. Bu valfler, aşırı koşullarda bile uçakların optimum işlevselliğini korumasını sağlar.",
            "h3-text-3": "Yaya Köprüsü Korkuluğu",
            "h2-text-3": "Tasarım ve Üretim",
            "p-text-3": "Güvenliği ve estetik görünümü artırmak için dayanıklı ve estetik bir yaya köprüsü korkuluk sistemi tasarladık ve ürettik. Tasarım süreci, yerel yönetmeliklere ve güvenlik standartlarına uygunluğu sağlarken yapısal bütünlüğü garanti altına almak için detaylı analizleri içermektedir. Yüksek kaliteli malzemeler ve hassas mühendislik kullanılarak üretilen korkuluk, çeşitli hava koşullarında uzun ömürlü performans sunar. Yenilikçilik ve ustalığa bağlılığımız, korkuluğun genel köprü yapısına kusursuz bir şekilde entegrasyonunda yansıtılmaktadır.",
            
            "about-header": "Hakkımızda",
            "about-description": "Termavis olarak mühendislik tasarımı, analiz ve prototip üretiminde öncü çözümler sunuyoruz. Termal teknoloji ve geniş uygulama alanlarına yönelik derin bir anlayışla, müşterilerimizin özel ihtiyaçlarına uygun yüksek performanslı çözümler üretiyoruz. Uzmanlığımız farklı sektörleri kapsamakta olup, hassas mühendislik ve ileriye dönük tasarımlarla yenilikleri hayata geçirirken sürdürülebilirlik ve verimlilik odağımızı koruyoruz.",
            "mission-header": "Misyon",
            "mission-description": "Termal çözümler ve mühendislik hizmetleri sunarak mühendislik alanında devrim yaratmaya kararlıyız. Üst düzey tasarımlar, ileri analizler ve yüksek kaliteli prototipler sağlayarak müşterilerimizin mümkün olanın sınırlarını zorlamasına olanak tanıyoruz. İş birliği, yenilikçilik ve dürüstlük ilkeleri doğrultusunda modern endüstrilerin gelişen zorluklarını hassasiyet ve mükemmellik ile karşılamayı hedefliyoruz.",
            "vision-header": "Vizyon",
            "vision-description": "Termal teknoloji ve mühendislik çözümlerinde küresel bir lider olarak endüstrilerin geleceğini şekillendirmek ve yenilik ile performans için yeni standartlar belirlemek istiyoruz. Sürdürülebilir, verimli ve etkili tasarımlar yaratarak hem teknolojik ilerlemeyi hem de insan deneyimini geliştirmeyi hedefliyoruz. Çözümlerimizin olumlu değişimi teşvik ettiği bir gelecek için çalışıyoruz.",
            "core-values-header": "Temel Değerler",
            "innovation-header": "Yenilikçilik",
            "innovation-description": "Teknolojiyi sürekli yeniliklerle geliştirme taahhüdümüz var.",
            "integrity-header": "Dürüstlük",
            "integrity-description": "En yüksek etik standartlara bağlıyız.",
            "technical-excellence-header": "Teknik Mükemmellik",
            "technical-excellence-description": "Mühendislik ve yazılım çözümlerinde en üst kaliteyi hedefliyoruz.",
            "customer-focus-header": "Müşteri Odaklılık",
            "customer-focus-description": "Müşterilerimizin ihtiyaçları her zaman önceliğimizdir.",
            "teamwork-header": "Takım Çalışması ve İşbirliği",
            "teamwork-description": "Çeşitli yetenek ve bakış açılarını bir araya getiren bir çalışma ortamı oluşturuyoruz.",
            "diversity-header": "Çeşitlilik ve Dahil Etme",
            "diversity-description": "Farklılıklara değer verir ve kapsayıcı bir kültürü teşvik ederiz.",
            "our-team-header": "Ekibimiz",
            "team-member-1-name": "Alican Yağcı",
            "team-member-1-title": "Kurucu & Yüksek Makine Mühendisi",
            "team-member-2-name": "Alper Uslu",
            "team-member-2-title": "Makine Mühendisi",
            "team-member-3-name": "Bekir Caner Yağcı",
            "team-member-3-title": "Yüksek Elektrik Mühendisi",

            "recent-works-header": "Güncel Çalışmalarımız",
            "recent-works-description-1": "Uzmanlığımız, mühendislik projelerinin detaylı tasarımı ve analizinden işlevsel prototiplerin geliştirilmesi ve üretimine kadar uzanmaktadır. Çalışmalarımız geniş bir mühendislik yelpazesini kapsasa da her proje, yenilik ve hassasiyet taahhüdüyle birleşerek teknoloji ve verimliliği ileriye taşıyan çözümler sunar.",
            "recent-works-description-2": "Çeşitli müşterilerimize üst düzey mühendislik çözümleri sunduğumuzu kanıtlayan son danışmanlık projelerimizi gururla paylaşıyoruz.",

            "pressure-valve-title": "Basınç Valfi:",
            "pressure-valve-item-1": "Açılma basıncı 100 kPa - 500 kPa aralığında,",
            "pressure-valve-item-2": "Düşük basınç düşümü için optimize edilmiştir,",
            "pressure-valve-item-3": "Alüminyum gövdeli hafif ve kompakt tasarım,",
            "pressure-valve-item-4": "Çalışma sıcaklığı aralığı -50°C ile +150°C.",
            "thermal-valve-title": "Termal Basınç Valfi:",
            "thermal-valve-item-1": "Açılma/kapanma modu -40°C ile 100°C arasında ayarlanabilir,",
            "thermal-valve-item-2": "Açılma basıncı 100 kPa - 500 kPa aralığında,",
            "thermal-valve-item-3": "Düşük basınç düşümü için optimize edilmiştir,",
            "thermal-valve-item-4": "Alüminyum gövdeli hafif ve kompakt tasarım,",
            "thermal-valve-item-5": "Çalışma sıcaklığı aralığı -50°C ile +150°C."
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
    if (window.location.hash === "#logo-bar") {
        history.replaceState({}, "", "/home");
    }

     // Replace the current URL without reloading
     if (window.location.hash === "#contact") {
        history.replaceState({}, "", "/contact-us");
    }

     // Replace the current URL without reloading
     if (window.location.hash === "#about") {
        history.replaceState({}, "", "/about-us");
    }

    // Replace the current URL without reloading
    if (window.location.hash === "#recent-projects") {
        history.replaceState({}, "", "/recent-works");
    }

    // Replace the current URL without reloading
    if (window.location.hash === "#turbo-shaft-h3") {
        history.replaceState({}, "", "/ts1400-turboshaft-engine-ips-blower");
    }

    // Replace the current URL without reloading
    if (window.location.hash === "#cooling-system-h3") {
        history.replaceState({}, "", "/cooling-system-development");
    }

    // Replace the current URL without reloading
    if (window.location.hash === "#valve-h3") {
        history.replaceState({}, "", "/filter-by-pass-valves-for-aerospace-industry");
    }

    // Replace the current URL without reloading
    if (window.location.hash === "#bridge-rail-h3") {
        history.replaceState({}, "", "/pedestrian-bridge-railing");
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


    // Set canvas resolution for high-DPI screens
    function setCanvasResolution(canvas) {
        const ctx = canvas.getContext('2d');
        const scale = window.devicePixelRatio || 1;
        canvas.width = canvas.offsetWidth * scale;
        canvas.height = canvas.offsetHeight * scale;
        ctx.scale(scale, scale);
    }


    // Canvas animation for circular waveform if canvas element is present
    const canvas = document.getElementById("hero-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");


        let animationFrame; // Store the animation frame
        let waveOffset = 0; // Controls wave movement
        let dataPoints = []; // Array to store data point positions

        function resizeCanvas() {
            if (window.innerWidth < 768) {
                canvas.width = window.innerWidth / 2; // Lower resolution for small screens
                canvas.height = window.innerHeight / 2;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        }

        // Throttled resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            cancelAnimationFrame(animationFrame); // Stop the current animation loop
            resizeTimeout = setTimeout(() => {
                resizeCanvas();
                drawCircularWaveform(); // Restart animation after resizing
            }, 1000); // Adjust delay as needed
        });

        resizeCanvas();

        // Generate initial positions for data points along the wave
        function initializeDataPoints() {
            dataPoints = []; // Clear existing points to avoid duplicates
            for (let i = 0; i < 10; i++) {
                dataPoints.push({
                    angle: (i / 10) * Math.PI * 2,
                    speed: 0.001 + Math.random() * 0.0001, // Random speed for each point
                });
            }
        }
        

        function drawCircularWaveform() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Define center point
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2.4;

            // Base properties for tubular effect
            const baseRadius = Math.min(canvas.width, canvas.height) / 1.1;
            const layers = 10;
            const layerSpacing = 1;
            const baseAmplitude = 12;

            for (let i = 0; i < layers; i++) {
                const radius = baseRadius + i * layerSpacing;
                const amplitude = baseAmplitude - i * 20;
                const opacity = 0.9 - i * 0.2;
                const lineWidth = 2 + i * 1; // Thinner lines for a professional look

                // Gradient for a blue-to-green transition (power to renewable theme)
                const gradient = ctx.createRadialGradient(centerX, centerY, radius, centerX, centerY, radius + amplitude);
                gradient.addColorStop(0, `rgba(0, 123, 255, ${opacity})`); // Blue center
                gradient.addColorStop(1, `rgba(0, 200, 83, ${opacity * 0.5})`); // Fainter Green outer

                ctx.beginPath();
                for (let angle = 0; angle <= Math.PI * 2; angle += 0.15) {
                    const offset = amplitude * Math.sin(angle * 4 + waveOffset + i * 0.3);
                    const x = centerX + (radius + offset) * Math.cos(angle);
                    const y = centerY + (radius + offset) * Math.sin(angle);

                    if (angle === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.closePath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = lineWidth;

                ctx.stroke();
            }

            // Reset shadow before drawing data points
            ctx.shadowColor = "transparent";

            // Draw moving energy "data points" along the wave
            dataPoints.forEach(point => {
                const angle = point.angle;
                const amplitude = baseAmplitude;
                const radius = baseRadius + layerSpacing * 2; // Position data points around the second layer

                // Calculate position based on angle
                const offset = amplitude * Math.sin(angle * 4 + waveOffset);
                const x = centerX + (radius + offset) * Math.cos(angle);
                const y = centerY + (radius + offset) * Math.sin(angle);

                // Draw the data point
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2); // Pulsing effect
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.fill();

                // Update angle to move the point along the wave
                point.angle += point.speed;
                if (point.angle > Math.PI * 2) {
                    point.angle -= Math.PI * 2; // Reset angle if it completes a full loop
                }
            });

            waveOffset += 0.01; // Slow movement for smooth animation
            animationFrame = requestAnimationFrame(drawCircularWaveform); // Save the frame ID
        }


        initializeDataPoints(); // Initialize data points
        drawCircularWaveform();
    }
});