document.addEventListener('DOMContentLoaded', function () {
    
    console.log("DOM fully loaded and parsed");

    // Event delegation for dropdowns
    document.addEventListener('click', function (e) {
        console.log("Click detected on document");

        // Main dropdown button click
        if (e.target.matches('.dropdown > button') && !e.target.closest('.dropdown-content')) {
            console.log("Main dropdown button clicked");

            const dropdownMenu = e.target.nextElementSibling;
            const isExpanded = e.target.getAttribute('aria-expanded') === 'true';

            // Close all dropdowns, including nested ones
            closeAllDropdowns();

            if (!isExpanded) {
                // If not already expanded, open the clicked main dropdown
                dropdownMenu.classList.add('open');
                e.target.setAttribute('aria-expanded', 'true');
                console.log("Dropdown opened");
            }

            e.stopPropagation();
        }
        // Nested dropdown button click
        else if (e.target.closest('.dropdown-content .dropdown > button')) {
            console.log("Nested dropdown button clicked");

            const nestedToggle = e.target.closest('.dropdown-content .dropdown > button');
            const nestedMenu = nestedToggle.nextElementSibling;
            const isNestedExpanded = nestedToggle.getAttribute('aria-expanded') === 'true';

            // Close all other open nested dropdowns, then only open the clicked one if not already expanded
            closeAllNestedDropdowns();

            if (!isNestedExpanded) {
                nestedMenu.classList.add('open');
                nestedToggle.setAttribute('aria-expanded', 'true');
                console.log("Nested dropdown opened");
            }

            e.stopPropagation();
        } 
        else {
            console.log("Clicked outside of dropdowns");

            // Close all dropdowns if clicking outside
            closeAllDropdowns();
        }
    });

    // Function to close all dropdowns, including nested
    function closeAllDropdowns() {
        console.log("Closing all dropdowns");
        document.querySelectorAll('.dropdown-content.open').forEach(menu => {
            menu.classList.remove('open');
            menu.previousElementSibling.setAttribute('aria-expanded', 'false');
            console.log("Dropdown closed in closeAllDropdowns function");
        });
    }

    // Function to close all nested dropdowns only
    function closeAllNestedDropdowns() {
        console.log("Closing all nested dropdowns");
        document.querySelectorAll('.dropdown-content .dropdown-content.open').forEach(menu => {
            menu.classList.remove('open');
            menu.previousElementSibling.setAttribute('aria-expanded', 'false');
            console.log("Nested dropdown closed");
        });
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
    
    document.querySelectorAll('section').forEach(section => observer.observe(section));

        // Background animations for service cards triggered on hover only
        function applyBackgroundAnimation(canvas, title) {
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
    
            const animations = {
                "Load Flow Analysis": animateSineWave,
                "Short Circuit Analysis": animateElectricPulse,
                "Power Quality & Reactive Power Analysis": animateReactiveParticles,
                "Harmonic Analysis": animateHarmonicWaves,
                "Transformer Energisation Study": animateTransformerRings,
                "Insulation Coordination Study": animateVoltageSpikes,
                "Under-frequency & Load Shedding Study": animateFrequencyWave
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
                case "Load Flow Analysis":
                    animation = animateSineWave(canvas);
                    break;
                case "Short Circuit Analysis":
                    animation = animateElectricPulse(canvas);
                    break;
                case "Power Quality & Reactive Power Analysis":
                    animation = animateReactiveParticles(canvas);
                    break;
                case "Harmonic Analysis":
                    animation = animateHarmonicWaves(canvas);
                    break;
                case "Transformer Energisation Study":
                    animation = animateTransformerRings(canvas);
                    break;
                case "Insulation Coordination Study":
                    animation = animateVoltageSpikes(canvas);
                    break;
                case "Under-frequency & Load Shedding Study":
                    animation = animateFrequencyWave(canvas);
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

                ctx.strokeStyle = 'rgba(0, 200, 255, 0.7)';
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


    // Debounced Search Bar Highlighting
    function debounce(func, delay) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, arguments), delay);
        };
    }

    const searchBar = document.querySelector('.search-bar input');
    if (searchBar) {
        searchBar.addEventListener('input', debounce(function() {
            const searchText = this.value.toLowerCase();
            document.querySelectorAll('section').forEach(section => {
                const content = section.textContent.toLowerCase();
                section.style.backgroundColor = content.includes(searchText) && searchText ? '#ffffcc' : '';
            });
        }, 300));
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