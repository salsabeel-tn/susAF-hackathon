import React, { useRef, useEffect } from 'react';
import './PentagonDiagram.css'; // Assuming you move the CSS here
function PentagonDiagram() {
    const canvasRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const card = cardRef.current;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

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

        drawPentagon(ctx, { x: canvas.width / 2, y: canvas.height / 2 }, 200, 'rgba(255, 182, 193, 0.5)');
        drawPentagon(ctx, { x: canvas.width / 2, y: canvas.height / 2 }, 150, 'rgba(173, 216, 230, 0.5)');
        drawPentagon(ctx, { x: canvas.width / 2, y: canvas.height / 2 }, 100, 'rgba(144, 238, 144, 0.5)');

        let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

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

        card.addEventListener('mousedown', dragStart, false);
        window.addEventListener('mouseup', dragEnd, false);
        window.addEventListener('mousemove', drag, false);

        return () => {
            window.removeEventListener('mouseup', dragEnd);
            window.removeEventListener('mousemove', drag);
        };
    }, []);

    return (
        <div className="pentagon-container">
            <canvas ref={canvasRef} id="pentagonCanvas"></canvas>
            <div ref={cardRef} className="card" id="draggableCard"></div>
        </div>
    );
}

export default PentagonDiagram;
