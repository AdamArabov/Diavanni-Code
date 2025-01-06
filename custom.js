/* "Coded by Adam Arabov" */
// document.addEventListener('DOMContentLoaded', function () {
//   const sky = document.querySelector("body");
//   const maxStars = 100; // Total number of stars
//   const starPositions = []; // To track star positions and avoid collisions

//   // Function to create a random shimmering star
//   function createShimmeringStar() {
//     const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     star.classList.add("shimmer-star");

//     // Set the viewbox size for the SVG star
//     star.setAttribute("viewBox", "0 0 100 100");

//     // Create the path for the star (diamond shape)
//     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path.setAttribute("d", "M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z");
//     star.appendChild(path);

//     // Generate a random size for the star
//     const size = Math.random() * 15 + 5; // Between 5px and 35px
//     star.style.width = `${size}px`;
//     star.style.height = `${size}px`;

//     // Try to generate a random position without collision
//     let posX, posY, attempts = 0;
//     do {
//       posX = Math.random() * 100; // Random horizontal position in vw
//       posY = Math.random() * 100; // Random vertical position in vh
//       attempts++;
//     } while (hasCollision(posX, posY, size) && attempts < 10);

//     // Save the star's position to prevent collisions
//     starPositions.push({ x: posX, y: posY, size });

//     star.style.left = `${posX}vw`;
//     star.style.top = `${posY}vh`;

//     // Random rotation direction (clockwise or counterclockwise)
//     const isClockwise = Math.random() > 0.5;
//     star.style.animationDirection = isClockwise ? 'normal' : 'reverse';

//     // Fixed rotation duration for "clock tick" speed
//     const rotationDuration = 4; // 4 seconds for a full rotation
// star.style.setProperty("--rotation-duration", `${rotationDuration}s`);
//     // Random twinkle duration
//     const twinkleDuration = Math.random() * 5 + 3; // Between 3s and 8s
//     star.style.setProperty("--twinkle-duration", `${twinkleDuration}s`);

//     // Random initial opacity for shimmering effect
//     const initialOpacity = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
//     const minOpacity = Math.random() * 0.2 + 0.3; // Between 0.3 and 0.5
//     const maxOpacity = Math.random() * 0.3 + 0.6; // Between 0.6 and 0.9
//     star.style.setProperty("--initial-opacity", initialOpacity);
//     star.style.setProperty("--min-opacity", minOpacity);
//     star.style.setProperty("--max-opacity", maxOpacity);

//     return star;
//   }

//   // Function to check if a new star collides with existing ones
//   function hasCollision(x, y, size) {
//     for (const pos of starPositions) {
//       const distance = Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2);
//       if (distance < (pos.size + size) / 10) {
//         return true; // Collision detected
//       }
//     }
//     return false;
//   }

//   // Populate the sky with shimmering stars
//   function populateSky() {
//     const fragment = document.createDocumentFragment();

//     for (let i = 0; i < maxStars; i++) {
//       const shimmeringStar = createShimmeringStar();
//       fragment.appendChild(shimmeringStar);
//     }

//     sky.appendChild(fragment);
//   }

//   populateSky();
// });



document.addEventListener('DOMContentLoaded', function () {
    const sky = document.querySelector("body");
    const maxStars = 100; // Total number of stars
    const starPositions = []; // To track star positions and avoid collisions
  
    // Function to create a random shimmering star
    function createShimmeringStar() {
      const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      star.classList.add("shimmer-star");
  
      // Set the viewbox size for the SVG star
      star.setAttribute("viewBox", "0 0 100 100");
  
      // Create the path for the star (diamond shape)
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z");
      star.appendChild(path);
  
      // Dynamically adjust star size based on the screen width
    const size = (Math.random() * (36 - 6)) + 6; // Between 6px and 36px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  
      // Try to generate a random position without collision
      let posX, posY, attempts = 0;
      do {
        posX = Math.random() * window.innerWidth; // Random horizontal position
        posY = Math.random() * window.innerHeight; // Random vertical position
        attempts++;
      } while (hasCollision(posX, posY, size) && attempts < 10);
  
      // Save the star's position to prevent collisions
      starPositions.push({ x: posX, y: posY, size });
  
      // Set the star position in pixels
      star.style.left = `${posX}px`;
      star.style.top = `${posY}px`;
  
      // Random rotation direction (clockwise or counterclockwise)
      const isClockwise = Math.random() > 0.5;
      star.style.animationDirection = isClockwise ? 'normal' : 'reverse';
  
      // Fixed rotation duration for "clock tick" speed
      const rotationDuration = 4; // 4 seconds for a full rotation
      star.style.setProperty("--rotation-duration", `${rotationDuration}s`);
  
      // Random twinkle duration
      const twinkleDuration = Math.random() * 5 + 3; // Between 3s and 8s
      star.style.setProperty("--twinkle-duration", `${twinkleDuration}s`);
  
      // Random initial opacity for shimmering effect
      const initialOpacity = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
      const minOpacity = Math.random() * 0.2 + 0.3; // Between 0.3 and 0.5
      const maxOpacity = Math.random() * 0.3 + 0.6; // Between 0.6 and 0.9
      star.style.setProperty("--initial-opacity", initialOpacity);
      star.style.setProperty("--min-opacity", minOpacity);
      star.style.setProperty("--max-opacity", maxOpacity);
  
      return star;
    }
  
    // Function to check if a new star collides with existing ones
    function hasCollision(x, y, size) {
      for (const pos of starPositions) {
        const distance = Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2);
        if (distance < (pos.size + size) / 2) {
          return true; // Collision detected
        }
      }
      return false;
    }
  
    // Populate the sky with shimmering stars
    function populateSky() {
      const fragment = document.createDocumentFragment();
  
      for (let i = 0; i < maxStars; i++) {
        const shimmeringStar = createShimmeringStar();
        fragment.appendChild(shimmeringStar);
      }
  
      sky.appendChild(fragment);
    }
  
    populateSky();
  });
  /* "Coded by Adam Arabov" */