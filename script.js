document.addEventListener('DOMContentLoaded', function () {
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
        }, 300);
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
    }, { threshold: 0.1 });

    // Observe each section for scroll-triggered visibility changes
    document.querySelectorAll('section').forEach(section => observer.observe(section));


    // Toggle visibility for each service section
    document.querySelectorAll('.service-link-overview').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = link.getAttribute('data-target');
            const servicesContainer = document.getElementById(targetId);

            // Toggle visibility and ensure static frame is shown initially
            if (servicesContainer.classList.contains('hidden')) {
                servicesContainer.classList.remove('hidden');
                servicesContainer.classList.add('show');
                console.log(`Showing services container: ${targetId}`);

                // Initialize canvas animations and hover events for each service card within the shown container
                servicesContainer.querySelectorAll('.service-card').forEach(card => {
                    const canvas = card.querySelector('.card-canvas');
                    const title = card.querySelector('h3').innerText;

                    // Define animations by title, each function returns an object with control methods
                    const animations = {
                        "Load Flow Analysis": animateSineWave,
                        "Short Circuit Analysis": animateElectricPulse,
                        "Power Quality & Reactive Power Analysis": animateReactiveParticles,
                        "Harmonic Analysis": animateHarmonicWaves,
                        "Transformer Energisation Study": animateTransformerRings,
                        "Insulation Coordination Study": animateVoltageSpikes,
                        "Under-frequency & Load Shedding Study": animateFrequencyWave
                    };

                    const animation = animations[title]?.(canvas);

                    // Render the initial static frame if animation exists
                    if (animation) {
                        animation.renderStaticFrame();
                        console.log(`Rendering initial static frame for card: ${title}`);

                        // Start/stop animations on hover
                        card.addEventListener('mouseenter', () => {
                            console.log(`Starting animation for card: ${title}`);
                            animation.start();
                        });
                        card.addEventListener('mouseleave', () => {
                            console.log(`Stopping animation and reverting to static frame for card: ${title}`);
                            animation.stop(); // Stop animation and revert to static frame
                        });
                    }
                });
            } else {
                servicesContainer.classList.remove('show');
                servicesContainer.classList.add('hidden');
                console.log(`Hiding services container: ${targetId}`);
            }
        });
    });


    // Set canvas resolution for high-DPI screens
    function setCanvasResolution(canvas) {
        const ctx = canvas.getContext('2d');
        const scale = window.devicePixelRatio || 1;
        canvas.width = canvas.offsetWidth * scale;
        canvas.height = canvas.offsetHeight * scale;
        ctx.scale(scale, scale);
    }

    // Animation Functions

    // Load Flow Analysis - Sine Wave with Static Frame
    function animateSineWave(canvas) {
        setCanvasResolution(canvas);
        const ctx = canvas.getContext('2d');
        let offset = 0;
        let animationFrameId;

        function draw(animate = true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const gridSize = 20;
            ctx.strokeStyle = 'rgba(0, 255, 180, 0.8)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x += gridSize) {
                for (let y = 0; y < canvas.height; y += gridSize) {
                    const waveOffset = Math.sin((x + offset) * 0.02) * 160;
                    ctx.moveTo(x, y + waveOffset);
                    ctx.lineTo(x, y + waveOffset + gridSize);
                }
            }
            ctx.stroke();

            if (animate) {
                offset += 0.05;
                animationFrameId = requestAnimationFrame(() => draw(true));
            }
        }

        // Render a single static frame
        function renderStaticFrame() {
            draw(false); // Call draw without advancing animation
        }

        return {
            start() { draw(); },
            stop() { 
                cancelAnimationFrame(animationFrameId); 
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                renderStaticFrame(); // Render static frame after stopping
            },
            renderStaticFrame
        };
    }

    // Short Circuit Analysis - Electric Pulse with Static Frame
    function animateElectricPulse(canvas) {
        setCanvasResolution(canvas);
        const ctx = canvas.getContext('2d');
        let offset = 0;
        let animationFrameId;

        function draw(animate = true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const pulseFrequency = 0.1;
            const pulseMagnitude = 80;
            ctx.strokeStyle = 'rgba(255, 80, 80, 0.8)';
            ctx.lineWidth = 2.0;

            for (let i = 0; i < 10; i++) {
                const x = canvas.width / 2;
                const y = (canvas.height / 10) * i + offset;
                const pulseSize = Math.sin((i + offset) * pulseFrequency) * pulseMagnitude;

                ctx.beginPath();
                ctx.moveTo(x - pulseSize, y);
                ctx.lineTo(x + pulseSize, y);
                ctx.stroke();
            }

            if (animate) {
                offset += 0.15;
                if (offset > canvas.height / 10) offset = 0;
                animationFrameId = requestAnimationFrame(() => draw(true));
            }
        }

        // Render a single static frame
        function renderStaticFrame() {
            draw(false); // Call draw without advancing animation
        }

        return {
            start() { draw(); },
            stop() { 
                cancelAnimationFrame(animationFrameId); 
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                renderStaticFrame(); // Render static frame after stopping
            },
            renderStaticFrame
        };
    }
            
            
    // Power Quality & Reactive Power Analysis - Particles with Static Frame
    function animateReactiveParticles(canvas) {
        setCanvasResolution(canvas);
        const ctx = canvas.getContext('2d');
        const particles = Array.from({ length: 20 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5
        }));
        let animationFrameId;

        function draw(animate = true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(0, 180, 255, 0.8)';
            particles.forEach((particle) => {
                if (animate) {
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    // Wrap particles around edges
                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.x > canvas.width) particle.x = 0;
                    if (particle.y < 0) particle.y = canvas.height;
                    if (particle.y > canvas.height) particle.y = 0;
                }

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });

            if (animate) {
                animationFrameId = requestAnimationFrame(() => draw(true));
            }
        }

        // Render a single static frame
        function renderStaticFrame() {
            draw(false); // Call draw without advancing animation
        }

        return {
            start() { draw(); },
            stop() { 
                cancelAnimationFrame(animationFrameId); 
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                renderStaticFrame(); // Render static frame after stopping
            },
            renderStaticFrame
        };
    }
        
    // Harmonic Analysis - Oscillating Waves with Static Frame
    function animateHarmonicWaves(canvas) {
        setCanvasResolution(canvas);
        const ctx = canvas.getContext('2d');
        let offset = 0;
        let animationFrameId;

        function draw(animate = true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'rgba(150, 50, 255, 0.8)';
            ctx.lineWidth = 1.5;

            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x += 10) {
                    const y = canvas.height / 3 + Math.sin((x + offset + i * 25) * 0.03) * (5 + i * 6);
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            if (animate) {
                offset += 0.3;
                animationFrameId = requestAnimationFrame(() => draw(true));
            }
        }

        // Render a single static frame
        function renderStaticFrame() {
            draw(false); // Call draw without advancing animation
        }

        return {
            start() { draw(); },
            stop() { 
                cancelAnimationFrame(animationFrameId); 
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                renderStaticFrame(); // Render static frame after stopping
            },
            renderStaticFrame
        };
    }


    // Transformer Energisation Study - Expanding Rings with Static Frame
    function animateTransformerRings(canvas) {
        setCanvasResolution(canvas);
        const ctx = canvas.getContext('2d');
        let rings = [
            { radius: 20, alpha: 1 },
            { radius: 50, alpha: 0.6 },
            { radius: 80, alpha: 0.3 }
        ];
        let animationFrameId;

        function draw(animate = true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 3;

            rings.forEach(ring => {
                ctx.beginPath();
                ctx.arc(centerX, centerY, ring.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255, 204, 0, ${ring.alpha})`;
                ctx.lineWidth = 2;
                ctx.stroke();

                if (animate) {
                    ring.radius += 0.5;
                    ring.alpha -= 0.005;
                }
            });

            if (animate) {
                rings = rings.filter(ring => ring.alpha > 0);
                if (rings.length < 3) rings.push({ radius: 20, alpha: 1 });
                animationFrameId = requestAnimationFrame(() => draw(true));
            }
        }

        // Render a single static frame
        function renderStaticFrame() {
            draw(false); // Call draw without advancing animation
        }

        return {
            start() { draw(); },
            stop() { 
                cancelAnimationFrame(animationFrameId); 
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                renderStaticFrame(); // Render static frame after stopping
            },
            renderStaticFrame
        };
    }
    // Insulation Coordination Study - Voltage Spikes with Static Frame
    function animateVoltageSpikes(canvas) {
        setCanvasResolution(canvas);
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        function draw(animate = true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'rgba(255, 100, 0, 0.8)';
            ctx.lineWidth = 3;

            const spikeWidth = canvas.width / 20;
            for (let i = 0; i < canvas.width; i += spikeWidth * 2) {
                const spikeHeight = Math.random() * (canvas.height / 2);
                ctx.moveTo(i, canvas.height);
                ctx.lineTo(i + spikeWidth / 2, canvas.height - spikeHeight);
                ctx.lineTo(i + spikeWidth, canvas.height);
            }
            ctx.stroke();

            if (animate) {
                animationFrameId = requestAnimationFrame(() => draw(true));
            }
        }

        // Render a single static frame
        function renderStaticFrame() {
            draw(false); // Call draw without advancing animation
        }

        return {
            start() { draw(); },
            stop() { 
                cancelAnimationFrame(animationFrameId); 
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                renderStaticFrame(); // Render static frame after stopping
            },
            renderStaticFrame
        };
    }

    // Under-frequency & Load Shedding Study - Frequency Wave with Static Frame
    function animateFrequencyWave(canvas) {
        setCanvasResolution(canvas);
        const ctx = canvas.getContext('2d');
        let offset = 0;
        let animationFrameId;

        function draw(animate = true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'rgba(0, 200, 255, 0.8)';
            ctx.lineWidth = 2;
            const centerY = canvas.height / 4;

            ctx.beginPath();
            for (let x = 0; x < canvas.width; x += 3) {
                const y = centerY + Math.sin((x + offset) * 0.03) * 30;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            if (animate) {
                offset += 1;
                animationFrameId = requestAnimationFrame(() => draw(true));
            }
        }

        // Render a single static frame
        function renderStaticFrame() {
            draw(false); // Call draw without advancing animation
        }

        return {
            start() { draw(); },
            stop() { 
                cancelAnimationFrame(animationFrameId); 
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                renderStaticFrame(); // Render static frame after stopping
            },
            renderStaticFrame
        };
    }

    // Canvas animation for circular waveform if canvas element is present
    const canvas = document.getElementById("hero-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // Throttled resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resizeCanvas();
                drawCircularWaveform(); // Redraw after resize
            }, 200); // Adjust delay as needed
        });

        resizeCanvas();

        let waveOffset = 0; // Controls wave movement
        let dataPoints = []; // Array to store data point positions

        // Generate initial positions for data points along the wave
        function initializeDataPoints() {
            for (let i = 0; i < 10; i++) {
                dataPoints.push({
                    angle: (i / 10) * Math.PI * 2,
                    speed: 0.002 + Math.random() * 0.002, // Random speed for each point
                });
            }
        }

        /* // Initialize data points with varied speeds
        function initializeDataPoints() {
            dataPoints = Array.from({ length: 10 }, () => ({
                angle: Math.random() * Math.PI * 2,
                speed: 0.001 + Math.random() * 0.002 // Varied speed between 0.001 and 0.003
            }));
        } */

        function setCanvasResolution(canvas) {
            if (window.innerWidth < 768) {
                canvas.width = canvas.offsetWidth / 2;  // Half resolution for smaller screens
                canvas.height = canvas.offsetHeight / 2;
            } else {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }
        }
        

        function drawCircularWaveform() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Define center point
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Base properties for tubular effect
            const baseRadius = Math.min(canvas.width, canvas.height) / 2;
            const layers = 4;
            const layerSpacing = 20;
            const baseAmplitude = 30;

            for (let i = 0; i < layers; i++) {
                const radius = baseRadius + i * layerSpacing;
                const amplitude = baseAmplitude - i * 5;
                const opacity = 0.9 - i * 0.2;
                const lineWidth = 2 + i * 1; // Thinner lines for a professional look

                // Gradient for a blue-to-green transition (power to renewable theme)
                const gradient = ctx.createRadialGradient(centerX, centerY, radius, centerX, centerY, radius + amplitude);
                gradient.addColorStop(0, `rgba(0, 123, 255, ${opacity})`); // Blue center
                gradient.addColorStop(1, `rgba(0, 200, 83, ${opacity * 0.5})`); // Fainter Green outer

                ctx.beginPath();
                for (let angle = 0; angle <= Math.PI * 2; angle += 0.05) {
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
            requestAnimationFrame(drawCircularWaveform);
        }


        initializeDataPoints(); // Initialize data points
        drawCircularWaveform();
    }
});