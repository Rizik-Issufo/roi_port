// <!-- Custom JavaScript -->

      // Grid Animation Variables
      let gridSize = 40;
      let offsetX = 0;
      let offsetY = 0;
      const speedX = 0.5;
      const speedY = 0.5;

      // Get elements
      const gridBackground = document.getElementById("gridBackground");
      const gridActive = document.getElementById("gridActive");
      const gridPatternBg = document.getElementById("grid-pattern-bg");
      const gridPatternActive = document.getElementById("grid-pattern-active");
      const gridSizeControl = document.getElementById("gridSizeControl");
      const gridSizeValue = document.getElementById("gridSizeValue");
      const header = document.querySelector(".infinite-grid-header");
      const themeToggle = document.getElementById("themeToggle");

      // Update grid pattern
      function updateGridPattern() {
        const pathD = `M ${gridSize} 0 L 0 0 0 ${gridSize}`;
        gridPatternBg.setAttribute("width", gridSize);
        gridPatternBg.setAttribute("height", gridSize);
        gridPatternBg.setAttribute("x", offsetX);
        gridPatternBg.setAttribute("y", offsetY);
        gridPatternBg.querySelector("path").setAttribute("d", pathD);

        gridPatternActive.setAttribute("width", gridSize);
        gridPatternActive.setAttribute("height", gridSize);
        gridPatternActive.setAttribute("x", offsetX);
        gridPatternActive.setAttribute("y", offsetY);
        gridPatternActive.querySelector("path").setAttribute("d", pathD);
      }

      // Animate grid
      function animateGrid() {
        offsetX = (offsetX + speedX) % gridSize;
        offsetY = (offsetY + speedY) % gridSize;

        gridPatternBg.setAttribute("x", offsetX);
        gridPatternBg.setAttribute("y", offsetY);
        gridPatternActive.setAttribute("x", offsetX);
        gridPatternActive.setAttribute("y", offsetY);

        requestAnimationFrame(animateGrid);
      }

      // Mouse move effect
      header.addEventListener("mousemove", (e) => {
        const rect = header.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gridActive.style.maskImage = `radial-gradient(350px circle at ${x}px ${y}px, black, transparent)`;
        gridActive.style.webkitMaskImage = `radial-gradient(350px circle at ${x}px ${y}px, black, transparent)`;
      });

      // Grid size control
      gridSizeControl.addEventListener("input", (e) => {
        gridSize = parseInt(e.target.value);
        gridSizeValue.textContent = `Esparsa (${gridSize}px)`;
        updateGridPattern();
      });

      // Theme toggle
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
      });

      // Load saved theme
      if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
      }

      // Smooth scroll for navbar links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            // Close mobile menu if open
            $(".navbar-collapse").collapse("hide");
          }
        });
      });

      // Initialize
      updateGridPattern();
      animateGrid();