import { useEffect, useRef } from 'react';

export function useMouseParallax(strength = 0.02) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let animFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(animFrameId);
            animFrameId = requestAnimationFrame(() => {
                const { innerWidth: W, innerHeight: H } = window;
                const dx = (e.clientX - W / 2) * strength;
                const dy = (e.clientY - H / 2) * strength;
                el.style.transform = `translate(${dx}px, ${dy}px)`;
            });
        };

        const handleMouseLeave = () => {
            cancelAnimationFrame(animFrameId);
            // Smoothly return to center
            el.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            el.style.transform = 'translate(0px, 0px)';
            setTimeout(() => { el.style.transition = ''; }, 600);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animFrameId);
        };
    }, [strength]);

    return ref;
}
