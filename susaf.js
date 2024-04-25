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

  drawPentagon(ctx, {x: canvas.width * 0.5, y: canvas.height * 0.5}, 200, 'rgba(173, 216, 230, 0.8)'); 
  drawPentagon(ctx, {x: canvas.width * 0.5, y: canvas.height * 0.5}, 150, 'rgba(173, 216, 230, 0.5)'); 
  drawPentagon(ctx, {x: canvas.width * 0.5, y: canvas.height * 0.5}, 100, 'rgba(173, 216, 230, 0.3)'); 

  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 200, 'rgba(144, 238, 144, 0.8)'); 
  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 150, 'rgba(144, 238, 144, 0.5)'); 
  drawPentagon(ctx, {x: canvas.width * 0.8, y: canvas.height * 0.5}, 100, 'rgba(144, 238, 144, 0.3)'); 

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