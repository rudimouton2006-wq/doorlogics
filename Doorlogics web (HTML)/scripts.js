/* ==========================================================================
   DOOR LOGICS MASTER LOGIC ENGINE | V3.0 (INDUSTRIAL ELITE)
   Architecture: The Mouton Hub
   Focus: Autonomous DOM Generation, Form Security, Performance
   ========================================================================== */

   document.addEventListener('DOMContentLoaded', () => {

    console.info("%c[ SYSTEM BOOT ] DOOR LOGICS ENGAGED", "color: #2EC4B6; background: #0B132B; padding: 5px 10px; font-weight: bold; font-family: monospace;");

    /* ----------------------------------------------------------------------
       01. AUTONOMOUS MOBILE MENU GENERATOR
       Instead of hardcoding mobile menus in HTML, this script builds it dynamically.
       ---------------------------------------------------------------------- */
    const headerInner = document.querySelector('.header-inner');
    const desktopNav = document.querySelector('.desktop-nav .nav-list');
    
    if (headerInner && desktopNav) {
        // Create Hamburger Button
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-toggle';
        mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileBtn.style.cssText = `
            background: transparent; border: none; font-size: 2rem; color: var(--clr-primary); 
            cursor: pointer; display: none; margin-left: 1.5rem; transition: transform 0.2s;
        `;
        
        // Append next to the CTA
        const headerCta = document.querySelector('.header-cta');
        if(headerCta) headerCta.appendChild(mobileBtn);

        // Create Mobile Overlay
        const overlay = document.createElement('div');
        overlay.id = 'mobile-nav-overlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh; 
            background: rgba(11, 19, 43, 0.98); z-index: 9999; 
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            opacity: 0; pointer-events: none; transition: opacity 0.4s ease; backdrop-filter: blur(5px);
        `;

        // Clone Links
        const clonedLinks = desktopNav.cloneNode(true);
        clonedLinks.style.cssText = `
            display: flex; flex-direction: column; gap: 2rem; text-align: center; list-style: none;
        `;
        
        // Style Links for Mobile
        clonedLinks.querySelectorAll('a').forEach(link => {
            link.style.cssText = `
                color: var(--clr-white); font-size: 1.8rem; font-family: var(--font-heading); 
                text-decoration: none; text-transform: uppercase; font-weight: 900;
            `;
        });

        // Close Button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        closeBtn.style.cssText = `
            position: absolute; top: 30px; right: 30px; background: transparent; 
            border: none; color: var(--clr-led-org); font-size: 3rem; cursor: pointer;
        `;

        overlay.appendChild(closeBtn);
        overlay.appendChild(clonedLinks);
        document.body.appendChild(overlay);

        // Media Query Logic
        const checkMobile = () => {
            if (window.innerWidth <= 1024) {
                document.querySelector('.desktop-nav').style.display = 'none';
                mobileBtn.style.display = 'block';
            } else {
                document.querySelector('.desktop-nav').style.display = 'block';
                mobileBtn.style.display = 'none';
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
                document.body.style.overflow = 'auto';
            }
        };

        // Toggle Logic
        const toggleMenu = (show) => {
            overlay.style.opacity = show ? '1' : '0';
            overlay.style.pointerEvents = show ? 'auto' : 'none';
            document.body.style.overflow = show ? 'hidden' : 'auto';
            if (show) mobileBtn.style.transform = 'rotate(90deg)';
            else mobileBtn.style.transform = 'rotate(0deg)';
        };

        mobileBtn.addEventListener('click', () => toggleMenu(true));
        closeBtn.addEventListener('click', () => toggleMenu(false));
        window.addEventListener('resize', checkMobile);
        checkMobile(); // Init
    }

    /* ----------------------------------------------------------------------
       02. HERO BACKGROUND CROSSFADER (For index.html)
       ---------------------------------------------------------------------- */
    const heroBgSlider = document.getElementById('hero-slider');
    if (heroBgSlider) {
        const backgroundImages = [
            "url('https://images.unsplash.com/photo-1622353723326-6a7591e13883?auto=format&fit=crop&w=1920&q=80')", // Garage Motor
            "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80')", // Dark House
            "url('https://images.unsplash.com/photo-1585255318111-d1c92500c58e?auto=format&fit=crop&w=1920&q=80')"  // Fencing
        ];

        heroBgSlider.innerHTML = ''; 
        const slides = backgroundImages.map((bg, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = `slide ${index === 0 ? 'active' : ''}`;
            slideDiv.style.cssText = `
                position: absolute; inset: 0; background: linear-gradient(to right, rgba(11,19,43,0.95) 0%, rgba(11,19,43,0.6) 100%), ${bg};
                background-size: cover; background-position: center; opacity: ${index === 0 ? 1 : 0}; transition: opacity 1.5s ease-in-out;
            `;
            heroBgSlider.appendChild(slideDiv);
            return slideDiv;
        });

        let currentSlide = 0;
        const rotateBackgrounds = () => {
            slides[currentSlide].style.opacity = '0';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = '1';
        };

        let sliderInterval = setInterval(rotateBackgrounds, 5000);

        // Pause on tab inactive to save memory
        document.addEventListener('visibilitychange', () => {
            document.hidden ? clearInterval(sliderInterval) : sliderInterval = setInterval(rotateBackgrounds, 5000);
        });
    }

    /* ----------------------------------------------------------------------
       03. SECURE FORM SUBMISSION (For contact.html)
       ---------------------------------------------------------------------- */
    const masterForm = document.getElementById('master-contact-form');
    if (masterForm) {
        masterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 1. Honeypot Check (Blocks Bots)
            const botField = this.querySelector('input[name="b_name"]');
            if (botField && botField.value !== "") return; // Silent rejection

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // 2. Mechanical Loading State
            submitBtn.innerHTML = '<i class="fa-solid fa-gear spin-slow"></i> TRANSMITTING DATA...';
            submitBtn.style.background = 'var(--clr-steel)';
            submitBtn.style.color = 'var(--clr-primary)';
            submitBtn.disabled = true;

            // 3. Simulate Server Delay & Show Success
            setTimeout(() => {
                this.style.opacity = '0';
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'all 0.4s ease';
                
                setTimeout(() => {
                    this.style.display = 'none';
                    const successMsg = document.getElementById('success-alert');
                    if (successMsg) {
                        successMsg.style.display = 'block';
                        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 400);
            }, 1200);
        });
    }
});