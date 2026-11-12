
import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

interface CreativePulseLoaderProps {
    onComplete: () => void;
}

const RED = "#E53229";
const CREAM = "#F4F4EB";
const CHARCOAL = "#1C1C1C";

// Original timing: approximately 8 seconds total.
const REVEAL_START = 6200;
const REVEAL_DURATION = 1650;

// Shared heart shape for the center and expanding ripples.
const HEART_PATH =
    "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z";

const ideas = [
    { text: "curiosity", angle: -65, distance: 160, delay: 1.3 },
    { text: "♪", angle: -120, distance: 130, delay: 1.6 },
    { text: "code", angle: -25, distance: 180, delay: 1.9 },
    { text: "♫", angle: 20, distance: 140, delay: 2.2 },
    { text: "create", angle: 60, distance: 170, delay: 2.5 },
    { text: "</>", angle: 115, distance: 150, delay: 2.8 },
    { text: "music", angle: 155, distance: 180, delay: 3.1 },
    { text: "imagine", angle: 205, distance: 150, delay: 3.4 },
    { text: "build", angle: 245, distance: 175, delay: 3.7 },
    { text: "✦", angle: 295, distance: 120, delay: 4.0 },
];

function GuitarDoodle({ color }: { color: string }) {
    return (
        <svg
            width="36"
            height="52"
            viewBox="0 0 38 54"
            fill="none"
            stroke={color}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M19 6V27" />
            <path d="M15 6V27M23 6V27" strokeWidth="0.7" />
            <path d="M13 6H25V3H13V6Z" />
            <path d="M12 8L8 5M26 8L30 5" />
            <path d="M19 27C12 21 6 29 9 36C3 44 11 52 19 49C27 52 35 44 29 36C32 29 26 21 19 27Z" />
            <circle cx="19" cy="37" r="5" />
        </svg>
    );
}

export default function CreativePulseLoader({
    onComplete,
}: CreativePulseLoaderProps) {
    const { resolvedTheme } = useTheme();
    const reducedMotion = useReducedMotion();
    const maskId = useId().replace(/:/g, "");

    const [revealing, setRevealing] = useState(false);
    const [finished, setFinished] = useState(false);

    const [viewport, setViewport] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1440,
        height: typeof window !== "undefined" ? window.innerHeight : 900,
    });

    const completeRef = useRef(onComplete);
    completeRef.current = onComplete;

    const skipIntro = () => {
        setFinished(true);
        completeRef.current();
    };


    // Dark portfolio = cream intro + red heart.
    // Light portfolio = charcoal intro + cream heart.
    const isDarkPortfolio = resolvedTheme !== "light";

    const background = isDarkPortfolio ? CREAM : CHARCOAL;
    const heartColor = isDarkPortfolio ? RED : CREAM;
    const thirdRippleColor = isDarkPortfolio ? CREAM : RED;
    const textColor = isDarkPortfolio ? CHARCOAL : CREAM;

    // UPDATED: Smaller, more visible editorial grid with dots.
    const gridColor = isDarkPortfolio ? CHARCOAL : CREAM;

    const gridSize = 32;
    const gridLineOpacity = isDarkPortfolio ? 0.16 : 0.14;
    const gridDotOpacity = isDarkPortfolio ? 0.34 : 0.32;
    const gridDotRadius = isDarkPortfolio ? 1.55 : 1.35;

    const gridId = `${maskId}-editorial-grid`;

    useEffect(() => {
        const updateViewport = () => {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", updateViewport);

        return () => {
            window.removeEventListener("resize", updateViewport);
        };
    }, []);

    useEffect(() => {
        if (reducedMotion) {
            completeRef.current();
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const revealTimer = window.setTimeout(() => {
            setRevealing(true);
        }, REVEAL_START);

        const finishTimer = window.setTimeout(() => {
            setFinished(true);
            completeRef.current();
        }, REVEAL_START + REVEAL_DURATION + 150);

        return () => {
            window.clearTimeout(revealTimer);
            window.clearTimeout(finishTimer);
            document.body.style.overflow = previousOverflow;
        };
    }, [reducedMotion]);

    if (finished || reducedMotion) return null;

    const cx = viewport.width / 2;
    const cy = viewport.height / 2;

    const maxRadius = Math.sqrt(cx * cx + cy * cy) + 100;

    return (
        <div
            className="fixed inset-0 z-[9999] overflow-hidden"
            style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
            role="status"
            aria-label="Opening portfolio"
        >
            {/* SVG background and circular reveal */}
            <svg
                className="absolute inset-0 h-full w-full"
                width="100%"
                height="100%"
                viewBox={`0 0 ${viewport.width} ${viewport.height}`}
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <defs>
                    {/* Original circular reveal mask */}
                    <mask
                        id={maskId}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width={viewport.width}
                        height={viewport.height}
                    >
                        <rect
                            width={viewport.width}
                            height={viewport.height}
                            fill="white"
                        />

                        <motion.circle
                            cx={cx}
                            cy={cy}
                            fill="black"
                            initial={{ r: 0 }}
                            animate={{ r: revealing ? maxRadius : 0 }}
                            transition={{
                                duration: REVEAL_DURATION / 1000,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                        />
                    </mask>

                    {/* UPDATED: Small grid with dots at every intersection */}
                    <pattern
                        id={gridId}
                        width={gridSize}
                        height={gridSize}
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Thin grid lines */}
                        <path
                            d={`M 0 0 H ${gridSize} M 0 0 V ${gridSize}`}
                            fill="none"
                            stroke={gridColor}
                            strokeWidth="0.8"
                            opacity={gridLineOpacity}
                        />

                        {/* Tiny dot at each grid intersection */}
                        <circle
                            cx="0"
                            cy="0"
                            r={gridDotRadius}
                            fill={gridColor}
                            opacity={gridDotOpacity}
                        />
                    </pattern>
                </defs>

                {/* Background and grid share the SAME reveal mask */}
                <g mask={`url(#${maskId})`}>
                    {/* Original solid background */}
                    <rect
                        width={viewport.width}
                        height={viewport.height}
                        fill={background}
                    />

                    {/* Smaller grid with intersection dots */}
                    <rect
                        width={viewport.width}
                        height={viewport.height}
                        fill={`url(#${gridId})`}
                    />
                </g>

                {/* Original glowing circular outline */}
                {revealing && (
                    <motion.circle
                        cx={cx}
                        cy={cy}
                        fill="none"
                        stroke={heartColor}
                        strokeWidth="3"
                        initial={{ r: 0, opacity: 1 }}
                        animate={{
                            r: maxRadius,
                            opacity: [1, 0.8, 0],
                        }}
                        transition={{
                            duration: REVEAL_DURATION / 1000,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        style={{
                            filter: `drop-shadow(0 0 8px ${heartColor})`,
                        }}
                    />
                )}
            </svg>

            {/* Original intro visuals fade before reveal */}
            <motion.div
                className="pointer-events-none absolute inset-0"
                animate={{
                    opacity: revealing ? 0 : 1,
                }}
                transition={{
                    duration: 0.3,
                }}
            >
                {/* Original solid glowing heartbeat */}
                <motion.div
                    className="absolute left-1/2 top-1/2"
                    style={{
                        x: "-50%",
                        y: "-50%",
                        filter: `drop-shadow(0 0 8px ${heartColor}AA)
                     drop-shadow(0 0 20px ${heartColor}66)`,
                    }}
                    animate={{
                        scale: [1, 1.2, 1, 1.12, 1],
                        opacity: [1, 1, 0.85, 1, 1],
                    }}
                    transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill={heartColor}
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d={HEART_PATH} />
                    </svg>
                </motion.div>

                {/* Original three expanding heart-shaped ripples */}
                {[0, 1, 2].map((index) => {
                    const color =
                        index < 2 ? heartColor : thirdRippleColor;

                    return (
                        <motion.div
                            key={index}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                x: "-50%",
                                y: "-50%",
                            }}
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                            }}
                            animate={{
                                scale: [0.5, 4, 11],
                                opacity: [0, 0.75, 0],
                            }}
                            transition={{
                                duration: 3.1,
                                delay: 0.75 + index * 0.7,
                                repeat: Infinity,
                                repeatDelay: 0.3,
                                ease: "easeOut",
                            }}
                        >
                            <svg
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={color}
                                strokeWidth="0.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                style={{
                                    overflow: "visible",
                                    filter: `drop-shadow(0 0 3px ${color}55)`,
                                }}
                            >
                                <path d={HEART_PATH} />
                            </svg>
                        </motion.div>
                    );
                })}

                {/* Original creative words and musical symbols */}
                {ideas.map((idea) => {
                    const radians = (idea.angle * Math.PI) / 180;

                    const mobileScale =
                        viewport.width < 640 ? 0.58 : 1;

                    const x =
                        Math.cos(radians) *
                        idea.distance *
                        mobileScale;

                    const y =
                        Math.sin(radians) *
                        idea.distance *
                        mobileScale;

                    return (
                        <motion.span
                            key={`${idea.text}-${idea.angle}`}
                            className="absolute left-1/2 top-1/2 whitespace-nowrap text-xs font-bold tracking-wide sm:text-sm"
                            style={{
                                color: textColor,
                            }}
                            initial={{
                                x: "-50%",
                                y: "-50%",
                                opacity: 0,
                                scale: 0.5,
                            }}
                            animate={{
                                x: `calc(-50% + ${x}px)`,
                                y: `calc(-50% + ${y}px)`,
                                opacity: [0, 0.85, 0.85, 0],
                                scale: [0.5, 1, 1, 0.85],
                            }}
                            transition={{
                                duration: 2.7,
                                delay: idea.delay,
                                ease: "easeOut",
                            }}
                        >
                            {idea.text}
                        </motion.span>
                    );
                })}

                {/* Original guitar doodle */}
                <motion.div
                    className="absolute left-1/2 top-1/2"
                    initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                        rotate: -20,
                    }}
                    animate={{
                        x: viewport.width < 640 ? -105 : -205,
                        y: viewport.width < 640 ? -65 : -110,
                        opacity: [0, 0.9, 0.9, 0],
                        rotate: 12,
                    }}
                    transition={{
                        duration: 3,
                        delay: 1.8,
                        ease: "easeOut",
                    }}
                >
                    <GuitarDoodle color={textColor} />
                </motion.div>

                {/* Original bottom caption */}
                <div
                    className="absolute bottom-8 left-7 text-[10px] font-semibold uppercase tracking-[0.2em] opacity-40 md:bottom-10 md:left-12"
                    style={{
                        color: textColor,
                    }}
                >
                    A LITTLE BIT OF EVERYTHING.
                </div>
            </motion.div>

            {/* Skip intro button */}
            {!revealing && (
                <motion.button
                    type="button"
                    onClick={skipIntro}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    whileHover={{ opacity: 1, x: 3 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="absolute bottom-8 right-7 z-20 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] md:bottom-10 md:right-12"
                    style={{ color: textColor }}
                    aria-label="Skip portfolio introduction"
                >
                    <span>SKIP INTRO</span>
                    <span aria-hidden="true">↗</span>
                </motion.button>
            )}

        </div>
    );
}
