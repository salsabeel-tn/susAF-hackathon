const canvas = document.getElementById('pentagonCanvas');
  const ctx = canvas.getContext('2d');
  console.log(canvas.offsetHeight)
  console.log(canvas.offsetWidth)
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

  // Draw the main pentagon and two sub pentagons with different light colors
  drawPentagon(ctx, {x: canvas.width * 0.2, y: canvas.height * 0.5}, 200, `rgba(255, 182, 193, 0.8)`); 
  drawPentagon(ctx, {x: canvas.width * 0.2, y: canvas.height * 0.5}, 150, `rgba(255, 182, 193, 0.5)`); 
  drawPentagon(ctx, {x: canvas.width * 0.2, y: canvas.height * 0.5}, 100, `rgba(255, 182, 193, 0.3)`);

  drawPentagon(ctx, {x: canvas.width * 0.4, y: canvas.height * 0.5}, 200, 'rgba(173, 216, 230, 0.8)'); 
  drawPentagon(ctx, {x: canvas.width * 0.4, y: canvas.height * 0.5}, 150, 'rgba(173, 216, 230, 0.5)'); 
  drawPentagon(ctx, {x: canvas.width * 0.4, y: canvas.height * 0.5}, 100, 'rgba(173, 216, 230, 0.3)'); 

  drawPentagon(ctx, {x: canvas.width * 0.6, y: canvas.height * 0.5}, 200, 'rgba(144, 238, 144, 0.8)'); 
  drawPentagon(ctx, {x: canvas.width * 0.6, y: canvas.height * 0.5}, 150, 'rgba(144, 238, 144, 0.5)'); 
  drawPentagon(ctx, {x: canvas.width * 0.6, y: canvas.height * 0.5}, 100, 'rgba(144, 238, 144, 0.3)'); 

  
function drawPath(x, y, n, r, style) {
    var i, ang;
    ang = Math.PI * 2 / n; // Rotation angle
    ctx.save();
    // Set style
    for (var styleList in style) {
        ctx[styleList] = style[styleList];
    }
    x_updated = canvas.width * 0.8  ;
    y_updated = canvas.height * 0.5;
    console.log(x_updated, y_updated);
    ctx.translate(x_updated, y_updated);
    ctx.moveTo(0, -r);
    ctx.beginPath();
    for (i = 0; i < n; i++) {
        ctx.rotate(ang);
        ctx.lineTo(0, -r);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}

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

drawPath(250, 250, 5, 200, {  // Increase the radius to 300
  fillStyle: 'rgba(243, 231, 206, 1)',
  lineWidth: '2',
  strokeStyle: 'rgba(247, 206, 158, 1)'
});
drawPath(250, 250, 5, 160, {  // Increase the radius to 260
  fillStyle: '#F6DFAD',
  strokeStyle: 'rgba(255, 255, 255, 0)'
});
drawPath(250, 250, 5, 120, {  // Increase the radius to 220
  fillStyle: '#F7D792',
  strokeStyle: 'rgba(255, 255, 255, 0)'
});
drawPath(250, 250, 5, 110, {  // Increase the radius to 180
  fillStyle: '#F7CF80',
  strokeStyle: 'rgba(255, 255, 255, 0)'
});
drawPath(250, 250, 5, 100, {  // Increase the radius to 140
  fillStyle: '#F8C96D',
  strokeStyle: 'rgba(255, 255, 255, 0)'
});
drawPath(250, 250, 5, 80, {  // Increase the radius to 100
  fillStyle: '#F8C662',
  strokeStyle: 'rgba(255, 255, 255, 0)'
});


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
  const card = document.getElementById('draggableCard');
  let active = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  card.addEventListener('mousedown', function(e) {
    dragStart(e);
  }, false);
  window.addEventListener('mouseup', function(e) {
    dragEnd(e);
  }, false);
  window.addEventListener('mousemove', function(e) {
    drag(e);
  }, false);

  function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === card) {
      active = true;
      card.style.cursor = 'grabbing';
    }
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