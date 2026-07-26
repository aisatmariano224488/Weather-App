import { getCardinalDirection } from "@/utils/elements";

const Compass = ({ degree = 0, className = "" }) => {
    const cardinal = getCardinalDirection(degree);
    const validDegree = typeof degree === 'number' && !isNaN(degree) ? Math.round(degree) : 0;

    // Generate minor and major tick marks around the compass face (every 30 deg)
    const ticks = Array.from({ length: 12 }, (_, i) => i * 30);

    return (
        <div className={`flex flex-col items-center justify-center p-2 ${className}`}>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full text-foreground select-none"
                    role="img"
                    aria-label={`Wind direction compass pointing to ${cardinal} (${validDegree} degrees)`}
                >
                    {/* Outer dial ring */}
                    <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="opacity-20"
                    />

                    {/* Inner subtle glow ring */}
                    <circle
                        cx="60"
                        cy="60"
                        r="46"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        className="opacity-15"
                    />

                    {/* Dial ticks */}
                    {ticks.map((deg) => {
                        const isCardinalTick = deg % 90 === 0;
                        return (
                            <line
                                key={deg}
                                x1="60"
                                y1={isCardinalTick ? "10" : "12"}
                                x2="60"
                                y2={isCardinalTick ? "14" : "13"}
                                stroke="currentColor"
                                strokeWidth={isCardinalTick ? "2" : "1"}
                                className={isCardinalTick ? "opacity-60" : "opacity-30"}
                                transform={`rotate(${deg} 60 60)`}
                            />
                        );
                    })}

                    {/* Cardinal Points */}
                    <text
                        x="60"
                        y="22"
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="text-[11px] font-bold fill-primary"
                    >
                        N
                    </text>
                    <text
                        x="100"
                        y="60"
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="text-[10px] font-semibold fill-muted-foreground opacity-70"
                    >
                        E
                    </text>
                    <text
                        x="60"
                        y="98"
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="text-[10px] font-semibold fill-muted-foreground opacity-70"
                    >
                        S
                    </text>
                    <text
                        x="20"
                        y="60"
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="text-[10px] font-semibold fill-muted-foreground opacity-70"
                    >
                        W
                    </text>

                    {/* Rotating Pointer/Needle */}
                    <g
                        style={{
                            transformOrigin: '60px 60px',
                            transform: `rotate(${validDegree}deg)`,
                            transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                    >
                        {/* North/Direction Arrow (Primary color) */}
                        <path
                            d="M 60,26 L 64.5,60 L 60,54 L 55.5,60 Z"
                            className="fill-primary stroke-primary"
                            strokeWidth="1"
                            strokeLinejoin="round"
                        />
                        {/* South/Tail (Muted color) */}
                        <path
                            d="M 60,94 L 64.5,60 L 60,66 L 55.5,60 Z"
                            className="fill-muted-foreground opacity-40 stroke-muted-foreground"
                            strokeWidth="1"
                            strokeLinejoin="round"
                        />
                    </g>

                    {/* Center Hub */}
                    <circle
                        cx="60"
                        cy="60"
                        r="4"
                        className="fill-background stroke-primary"
                        strokeWidth="2"
                    />
                    <circle
                        cx="60"
                        cy="60"
                        r="1.5"
                        className="fill-primary"
                    />
                </svg>
            </div>

            {/* Readout label */}
            <div className="mt-1 flex items-baseline gap-1.5 text-center">
                <span className="text-xs font-bold tracking-wide uppercase text-primary">
                    {cardinal}
                </span>
                <span className="text-xs font-mono text-secondary-foreground opacity-80">
                    ({validDegree}°)
                </span>
            </div>
        </div>
    );
};

export default Compass;
