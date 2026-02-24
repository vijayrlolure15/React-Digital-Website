import { useRef, useEffect, useState, type ReactNode, type ElementType, type CSSProperties } from 'react';

type Animation = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in';

interface RevealProps {
    children: ReactNode;
    animation?: Animation;
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    as?: ElementType;
}

const hiddenStyles: Record<Animation, CSSProperties> = {
    'fade-up': { opacity: 0, transform: 'translateY(40px)' },
    'fade-down': { opacity: 0, transform: 'translateY(-40px)' },
    'fade-left': { opacity: 0, transform: 'translateX(-50px)' },
    'fade-right': { opacity: 0, transform: 'translateX(50px)' },
    'fade-in': { opacity: 0 },
    'zoom-in': { opacity: 0, transform: 'scale(0.88)' },
};

const visibleStyles: Record<Animation, CSSProperties> = {
    'fade-up': { opacity: 1, transform: 'translateY(0)' },
    'fade-down': { opacity: 1, transform: 'translateY(0)' },
    'fade-left': { opacity: 1, transform: 'translateX(0)' },
    'fade-right': { opacity: 1, transform: 'translateX(0)' },
    'fade-in': { opacity: 1 },
    'zoom-in': { opacity: 1, transform: 'scale(1)' },
};

export default function Reveal({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 650,
    threshold = 0.12,
    className = '',
    as: Tag = 'div',
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const currentStyle = visible ? visibleStyles[animation] : hiddenStyles[animation];

    const style: CSSProperties = {
        ...currentStyle,
        transition: `opacity ${duration}ms cubic-bezier(0.2, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
    };

    return (
        <Tag ref={ref} className={className} style={style}>
            {children}
        </Tag>
    );
}
