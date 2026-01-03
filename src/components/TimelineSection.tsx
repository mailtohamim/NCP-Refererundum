"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import HistoryTimeTunnel from "@/components/HistoryTimeTunnel";

export default function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[600vh] md:h-[1200vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Background Image - Timeline.jpg (Grayscale) */}
                {/* Background Image - Timeline.jpg (Grayscale) */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Timeline.jpg"
                        alt="Historical Context"
                        fill
                        className="object-cover grayscale opacity-20" // Low opacity + Grayscale
                    />
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#e7f9e4] via-transparent to-[#e7f9e4] mix-blend-overlay opacity-80" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#e7f9e4_100%)] opacity-90" />
                </div>

                {/* 3D Scene - Passed scroll progress */}
                <HistoryTimeTunnel scrollYProgress={scrollYProgress} />

                {/* Overlay UI */}
                <div className="absolute top-8 inset-x-0 z-50 pointer-events-none flex justify-center">

                    <h1 className="text-primary-green text-4xl md:text-5xl font-abu-sayed drop-shadow-sm text-center">সময়ের যাত্রা</h1>
                </div>

                {/* Progression Bar */}
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary-green origin-left z-50"
                />
            </div>
        </section>
    );
}
