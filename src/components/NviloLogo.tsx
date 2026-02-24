interface NviloLogoProps {
    size?: 'sm' | 'md' | 'lg';
}

export default function NviloLogo({ size = 'md' }: NviloLogoProps) {
    const boxSize = size === 'sm' ? 36 : size === 'lg' ? 48 : 40;
    const svgSize = size === 'sm' ? 18 : size === 'lg' ? 24 : 20;
    const textSize = size === 'lg' ? 'text-xl' : 'text-lg';

    return (
        <div className="flex items-center gap-3">
            <div
                className="rounded-lg flex items-center justify-center animate-glow-3d relative overflow-hidden flex-shrink-0"
                style={{
                    width: boxSize,
                    height: boxSize,
                    background: 'linear-gradient(135deg, #723FE4, #d7134e)',
                }}
            >
                <svg
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                >
                    {/* Outer hexagon frame */}
                    <path
                        d="M12 2L20 6.928V17.072L12 22L4 17.072V6.928L12 2Z"
                        stroke="white"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    {/* Inner geometric N design */}
                    <path
                        d="M8 8L10 8L10 12L14 8L16 8L16 16L14 16L14 10L10 14L10 16L8 16Z"
                        fill="white"
                    />
                    {/* Accent dots */}
                    <circle cx="6" cy="6" r="1" fill="#d7134e" />
                    <circle cx="18" cy="18" r="1" fill="#d7134e" />
                    {/* Connecting lines */}
                    <path d="M6 6L8 8M18 18L16 16" stroke="#d7134e" strokeWidth="0.5" />
                </svg>
            </div>
            <div>
                <span className={`font-display font-bold text-white ${textSize} tracking-tight`}>
                    Nvilo
                </span>
                <span
                    className={`font-display font-bold ${textSize} tracking-tight`}
                    style={{ color: '#723FE4' }}
                >
                    {' '}Infotech
                </span>
            </div>
        </div>
    );
}
