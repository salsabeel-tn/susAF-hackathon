import React, { useEffect } from 'react';
import './PentagonDiagram.css';

const PentagonDiagram = React.createClass({
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Function to draw a pentagon with a specific fill color
    function drawPentagon(center, size, fillColor) {
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
    drawPentagon({ x: canvas.width / 2, y: canvas.height / 2 }, 200, 'rgba(255, 182, 193, 0.5)');
    drawPentagon({ x: canvas.width / 2, y: canvas.height / 2 }, 150, 'rgba(173, 216, 230, 0.5)');
    drawPentagon({ x: canvas.width / 2, y: canvas.height / 2 }, 100, 'rgba(144, 238, 144, 0.5)');
  },

  render() {
    return (
      <div className="pentagon-container">
        {/* Attach the ref to the canvas element */}
        <canvas ref="canvas" id="pentagonCanvas"></canvas>
      </div>
    );
  }
});

export default PentagonDiagram;
