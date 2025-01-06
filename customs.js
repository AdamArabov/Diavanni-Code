document.addEventListener('DOMContentLoaded', () => {
    const sky = document.querySelector(".sky");
  
    // Function to create a random star (diamond-like)
    function createStar() {
      const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      star.classList.add("shimmer-star");
  
      // Set the viewbox size for the SVG star
      star.setAttribute("viewBox", "0 0 100 100");
  
      // Create the path for the star (diamond shape)
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z");
      star.appendChild(path);
  
      // Random size: Scaling the SVG by changing the width and height
      const size = Math.random() * 16 + 8; // Between 6px and 14px (for a more elegant size)
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
  
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      star.style.left = `${posX}vw`;
      star.style.top = `${posY}vh`;
  
      // Random twinkle duration (slower for a gentle shimmer)
      const twinkleDuration = Math.random() * 5 + 3;
      star.style.setProperty("--twinkle-duration", `${twinkleDuration}s`);
  
      // Random initial opacity and intensity for a subtle effect
      const initialOpacity = Math.random() * 0.5 + 0.5;
      const minOpacity = Math.random() * 0.2 + 0.3;
      const maxOpacity = Math.random() * 0.3 + 0.6;
      star.style.setProperty("--initial-opacity", initialOpacity);
      star.style.setProperty("--min-opacity", minOpacity);
      star.style.setProperty("--max-opacity", maxOpacity);
  
      // White to light silver shimmer (shiny diamond-like effect)
      const starColor = `hsl(0, 0%, ${Math.random() * 20 + 80}%)`; // White to silver tones
      star.style.fill = starColor;
  
      // Random drift direction and duration (left or right drift)
      const driftDirection = Math.random() * 2 === 0 ? "-100vw" : "100vw";
      const driftDuration = Math.random() * 10 + 5; // Between 5s and 15s
      star.style.setProperty("--drift-direction", driftDirection);
      star.style.setProperty("--drift-duration", `${driftDuration}s`);
  
      return star;
    }
  
    // Pool of reusable stars
    const starPool = [];
    const maxStars = 200; // Limit the number of stars in the sky at once
  
    // Function to create and add stars to the sky
    function populateSky() {
      for (let i = starPool.length; i < maxStars; i++) {
        const newStar = createStar();
        sky.appendChild(newStar);
        starPool.push(newStar);
      }
    }
  
    // Function to refresh the stars
    function refreshStars() {
      if (starPool.length > maxStars) {
        const starToRemove = starPool.shift(); // Removes the first star
        starToRemove.remove();
      }
      populateSky();
    }
  
    // Initial population of the sky with stars
    populateSky();
  
    // Refresh stars periodically (e.g., every 30 seconds)
    setInterval(refreshStars, 30000); // Refresh every 30 seconds
  });
  