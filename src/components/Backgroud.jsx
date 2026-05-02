// EllipseBackground.jsx
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const PALETTE = [
    "138,163,130",
    "122,148,114",
    "160,178,152",
    "196,162,82",
    "178,144,64",
    "214,182,108",
];

function drawEllipses(canvas) {
    const ctx = canvas.getContext("2d");
    const w = window.innerWidth;
    const h = document.documentElement.scrollHeight; // ← full page height
    canvas.width = w;
    canvas.height = h;
    ctx.clearRect(0, 0, w, h);

    // More ellipses to cover the full page length
    const count = Math.ceil((h / window.innerHeight) * 12);
    const edgeDepth = 0.1;

    for (let i = 0; i < count; i++) {
        const side = Math.floor(Math.random() * 4);
        let cx, cy;

        if (side === 0) {
            cx = Math.random() * w;
            cy = -20 + Math.random() * h * edgeDepth;
        } else if (side === 1) {
            cx = Math.random() * w;
            cy = h + 20 - Math.random() * h * edgeDepth;
        } else if (side === 2) {
            cx = -20 + Math.random() * w * edgeDepth;
            cy = Math.random() * h;
        } else {
            cx = w + 20 - Math.random() * w * edgeDepth;
            cy = Math.random() * h;
        }

        const rx = 55 + Math.random() * 130;
        const ry = rx * (0.55 + Math.random() * 0.38);
        const angle = Math.random() * Math.PI;
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        const alpha = 0.1 + Math.random() * 0.1;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${color},${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
    }
}

export default function EllipseBackground({ children }) {
    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        // Wait one tick so child content has rendered and scrollHeight is accurate
        const timer = setTimeout(() => drawEllipses(canvas), 0);

        const handleResize = () => drawEllipses(canvas);
        window.addEventListener("resize", handleResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Box ref={wrapperRef} sx={{ position: "relative", minHeight: "100vh" }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute", // ← scrolls with the page
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />
            <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
        </Box>
    );
}
