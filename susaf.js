const canvas = document.getElementById('pentagonCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  // Function to draw a pentagon with a specific fill color
  function drawPentagon(ctx, center, size, fillColor) {
    const angle = Math.PI * 2 / 5;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      ctx.lineTo(
        center.x + size * Math.cos(angle * i - Math.PI / 2),
        center.y + size * Math.sin(angle * i - Math.PI / 2)
      );
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw the main pentagon and sub pentagons with different light colors
  drawPentagon(ctx, {x: canvas.width * 0.1, y: canvas.height * 0.5}, 200, `rgba(255, 182, 193, 0.8)`); 
  drawPentagon(ctx, {x: canvas.width * 0.1, y: canvas.height * 0.5}, 150, `rgba(255, 182, 193, 0.5)`); 
  drawPentagon(ctx, {x: canvas.width * 0.1, y: canvas.height * 0.5}, 100, `rgba(255, 182, 193, 0.3)`);

  drawPentagon(ctx, {x: canvas.width * 0.3, y: canvas.height * 0.5}, 200, 'rgba(173, 216, 230, 0.8)'); 
  drawPentagon(ctx, {x: canvas.width * 0.3, y: canvas.height * 0.5}, 150, 'rgba(173, 216, 230, 0.5)'); 
  drawPentagon(ctx, {x: canvas.width * 0.3, y: canvas.height * 0.5}, 100, 'rgba(173, 216, 230, 0.3)'); 

  drawPentagon(ctx, {x: canvas.width * 0.5, y: canvas.height * 0.5}, 200, 'rgba(144, 238, 144, 0.8)'); 
  drawPentagon(ctx, {x: canvas.width * 0.5, y: canvas.height * 0.5}, 150, 'rgba(144, 238, 144, 0.5)'); 
  drawPentagon(ctx, {x: canvas.width * 0.5, y: canvas.height * 0.5}, 100, 'rgba(144, 238, 144, 0.3)');

  //visualisation pentagon
  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 200, 'rgba(243, 231, 206, 1)');
  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 170, 'rgba(246, 223, 173, 1)');
  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 140, 'rgba(247, 215, 146, 1)');
  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 110, 'rgba(247, 207, 128, 1)');
  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 80, 'rgba(248, 201, 109, 1)');
  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 50, 'rgba(248, 198, 98, 1)');

function drawPoints(coordinates) {
    ctx.save(); // Save the current canvas state
    // Iterate over each coordinate
    for (var i = 0; i < coordinates.length; i++) {
        var x = coordinates[i].x; // Get the x-coordinate from the coordinates array
        var y = coordinates[i].y; // Get the y-coordinate from the coordinates array
        var size = (i + 1) * 5; // Adjust the size of the point based on its index
        
        // Draw a radial gradient from the center to the edge of the point
        var gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, 'rgba(127, 168, 77, 0.4)'); // Center color (red)
        gradient.addColorStop(1, 'rgba(96, 122, 63, 0.8)'); // Edge color (transparent)
        
        // Set the fill style to the gradient
        ctx.fillStyle = gradient;
        
        // Draw a plain circle at the specified coordinates
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    ctx.restore(); // Restore the saved canvas state
}

var coordinates = [
    { x: 1650, y: 200 },
    { x: 1600, y: 250 },
    { x: 1700, y: 300 },
    { x: 1500, y: 270 },
    { x: 1620, y: 180 },
    { x: 1660, y: 180 },
    
    // Add more coordinates as needed
];

drawPoints(coordinates);



// Drag and drop functionality
// const allCards = document.querySelectorAll('#draggableCard');
// let active = false;
// let currentX;
// let currentY;
// let initialX;
// let initialY;
// let xOffset = 0;
// let yOffset = 0;

// allCards.forEach(card => {
//   card.addEventListener('mousedown', function(e) {
//     dragStart(e);
// })
// })

// window.addEventListener('mouseup', function(e) {
//   dragEnd(e);
// }, false);
// window.addEventListener('mousemove', function(e) {
//   drag(e);
// }, false);

//   function dragStart(e) {
//     initialX = e.clientX - xOffset;
//     initialY = e.clientY - yOffset;
//     allCards.forEach(card => {
//       if (e.target === card) {
//         active = true;
//         card.style.cursor = 'grabbing';
//       }
//     })
//   }

//   function dragEnd(e) {
//     initialX = currentX;
//     initialY = currentY;
//     active = false;
//     allCards.forEach(card => {
//       card.style.cursor = 'grab';
//     })
//   }

//   function drag(e) {
//     if (active) {
//       e.preventDefault();
//       currentX = e.clientX - initialX;
//       currentY = e.clientY - initialY;
//       xOffset = currentX;
//       yOffset = currentY;
//       allCards.forEach(card => {
//         setTranslate(currentX, currentY, card);
//       })
//     }
//   }

//   function setTranslate(xPos, yPos, el) {
//     el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
//   }

// Function to create a new draggable card
function createCard() {
    const card = document.createElement('div');
    card.classList.add('draggable-card');
    card.innerHTML = '<p contenteditable="true">Title</p>';
    const selectMenuCategory = document.createElement('select');
    selectMenuCategory.innerHTML = `
        <option value="environmental">Environmental</option>
        <option value="social">Social</option>
        <option value="economic">Economic</option>
        <option value="individual">Individual</option>
        <option value="technical">Technical</option>
    `;
    const selectMenuEffect = document.createElement('select');
    selectMenuEffect.innerHTML = `
        <option value="Direct">Direct</option>
        <option value="Indirect">Indirect</option>
        <option value="Structural">Structural</option>
    `;
    const rangeSlider = document.createElement('input');
    rangeSlider.type = 'range';
    rangeSlider.min = 1;
    rangeSlider.max = 10;
    rangeSlider.value = 5; // Default value
    rangeSlider.classList.add('range-slider');
    card.appendChild(selectMenuCategory);
    card.appendChild(selectMenuEffect);
    card.appendChild(rangeSlider);
    document.body.appendChild(card);

    // Make the card draggable
    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    card.addEventListener('mousedown', dragStart, false);
    window.addEventListener('mouseup', dragEnd, false);
    window.addEventListener('mousemove', drag, false);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        active = true;
        card.style.cursor = 'grabbing';
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        active = false;
        card.style.cursor = 'grab';
    }

    function drag(e) {
        if (active) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, card);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
}

// Event listener for the create card button
const createCardBtn = document.getElementById('createCardBtn');
createCardBtn.addEventListener('click', createCard);
