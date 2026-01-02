"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent } from "react";

interface ShinyCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function ShinyCard({ children, className = "", onClick }: ShinyCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`shiny-card-wrapper relative group ${className}`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Gradient - Subtle Moving Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.25),
                            transparent 40%
                        )
                    `,
                }}
            />

            {/* Content */}
            <div className="shiny-card-content h-full w-full overflow-hidden relative z-0">
                {children}
            </div>
        </div>
    );
}
