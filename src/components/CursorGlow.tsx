import { useEffect, useRef } from 'react';

/**
 * Renders a soft radial glow that follows the user's cursor.
 * Placed once at the App level — purely decorative, pointer-events: none.
 */
export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let currentX = x;
        let currentY = y;
        let raf: number;

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            currentX = lerp(currentX, x, 0.08);
            currentY = lerp(currentY, y, 0.08);
            glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
            raf = requestAnimationFrame(animate);
        };

        const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };

        window.addEventListener('mousemove', onMove, { passive: true });
        raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 400,
                height: 400,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(114,63,228,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'screen',
                transition: 'none',
            }}
        />
    );
}
