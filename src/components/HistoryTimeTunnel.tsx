"use client";

import React, { useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Float, Line } from "@react-three/drei";
import { MotionValue } from "framer-motion";

// --- Configuration & Data ---
// Chronoflo Data (Light Theme)
const TIMELINE_DATA = [
    {
        year: "১৯৭১",
        title: "মহান স্বাধীনতা",
        desc: "রক্তক্ষয়ী মুক্তিযুদ্ধের মাধ্যমে বাংলাদেশের জন্ম।",
        position: [3, 0, -5], // Right
        color: "#D91E36",
    },
    {
        year: "১৯৯০",
        title: "গণতন্ত্রের পুনরুদ্ধার",
        desc: "স্বৈরাচার বিরোধী আন্দোলনে গণতন্ত্রের নতুন যাত্রা।",
        position: [-3, 0, -15], // Left
        color: "#059669",
    },
    {
        year: "২০০৯-২০২৪",
        title: " ভোটাধিকার হরণ",
        desc: "গণতান্ত্রিক প্রতিষ্ঠানের ধ্বংস এবং মানুষের বাক স্বাধীনতা রুদ্ধ করার দীর্ঘ সময়।",
        position: [3, 0, -25],
        color: "#1F2937",
    },
    {
        year: "জুলাই ২০২৪",
        title: "ছাত্র জনতার অভ্যুত্থান",
        desc: "বায়ান্নর চেতনায় আবার জেগে ওঠা। ফ্যাসিবাদ বিরোধী আন্দোলনে হাজারো শহীদের আত্মত্যাগ।",
        position: [-3, 0, -35],
        color: "#D91E36",
        isHero: true,
    },
    {
        year: "২০২৫",
        title: "জুলাই জাতীয় সনদ",
        desc: "রাষ্ট্র সংস্কারের রূপরেখা। নতুন সংবিধান ও আগামীর বাংলাদেশের ভিত্তিপ্রস্তর।",
        position: [3, 0, -45],
        color: "#059669",
    },
    {
        year: "২০২৬",
        title: "আপনার রায়",
        desc: "সিদ্ধান্ত নেওয়ার সময় এখনই। ১২ই ফেব্রুয়ারি কেন্দ্রে আসুন।",
        position: [0, 1, -55], // Center End
        isFinal: true,
        color: "#06402B",
    },
];

// --- 3D Components ---

const CameraRig = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const { camera } = useThree();

    useFrame(() => {
        // Get current scroll value (0 to 1) from Framer Motion value
        const rawScroll = scrollYProgress.get();

        // Add a "Hold" phase at the end.
        // Camera moves from 0% to 85% of the scroll.
        // From 85% to 100%, the camera stays locked on the final card.
        // This gives a feeling of "pausing" on the final result before the next section appears.
        const effectiveScroll = Math.min(rawScroll / 0.85, 1.0);

        // Scroll 0 -> 1 (mapped) maps to Z: 5 -> -40
        // Start: Z=5 (10 units from first card at -5)
        // End: Z=-40 (15 units from last card at -55)
        const targetZ = 5 - (effectiveScroll * 45);

        // Smooth movement
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1);
    });
    return null;
};

// Central Timeline Ruler
const CentralRuler = () => {
    // Create tick marks
    const ticks = [];
    for (let i = 0; i < 60; i++) {
        ticks.push(
            <group key={i} position={[0, -2, -i]}>
                {/* Major Tick every 5 units */}
                {i % 5 === 0 ? (
                    <>
                        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                            <planeGeometry args={[4, 0.1]} />
                            <meshBasicMaterial color="#06402B" opacity={0.3} transparent />
                        </mesh>
                    </>
                ) : (
                    // Minor Tick
                    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[1, 0.05]} />
                        <meshBasicMaterial color="#06402B" opacity={0.1} transparent />
                    </mesh>
                )}
            </group>
        );
    }

    return (
        <group>
            {/* Center Line */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.01, -30]}>
                <planeGeometry args={[0.2, 80]} />
                <meshBasicMaterial color="#06402B" opacity={0.2} transparent />
            </mesh>
            {ticks}
        </group>
    );
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChronoCard = ({ data }: { data: any }) => {
    const isLeft = data.position[0] < 0;

    return (
        <group position={data.position}>
            {/* Connector Line to Center */}
            <Line
                points={[[-data.position[0], -2 - data.position[1], 0], [0, -1.5, 0]]} // From center floor to bottom of card
                color={data.color}
                lineWidth={1}
                transparent
                opacity={0.3}
            />

            {/* Ground Circle at center */}
            <mesh position={[-data.position[0], -2 - data.position[1], 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.3, 16]} />
                <meshBasicMaterial color={data.color} opacity={0.5} transparent />
            </mesh>

            {/* Main Card */}
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
                <Html
                    transform
                    // Occlusion removed to prevent flickering/glitches
                    distanceFactor={6}
                    style={{
                        transition: 'opacity 0.2s',
                        opacity: 1, // Always visible
                    }}
                >
                    <div className={`
                        w-[320px] p-6 rounded-xl border backdrop-blur-sm shadow-xl
                        bg-white/80 border-white/60
                        flex flex-col gap-2 selection:bg-primary-green/20
                    `}>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-1">
                            <span className={`text-3xl font-abu-sayed text-transparent bg-clip-text bg-gradient-to-r ${data.color === '#D91E36' ? 'from-red-600 to-orange-600' :
                                data.color === '#1F2937' ? 'from-gray-700 to-gray-900' :
                                    'from-primary-green to-emerald-500'
                                }`}>
                                {data.year}
                            </span>
                        </div>
                        {/* Removed font-bold to fix glitch */}
                        <h3 className="text-xl text-gray-800 font-abu-sayed leading-tight">{data.title}</h3>
                        <p className="text-sm text-gray-600 font-anek leading-snug">
                            {data.desc}
                        </p>
                    </div>
                </Html>
            </Float>

            {/* Reflection (Duplicated HTML, flipped, lower opacity) */}
            <group position={[0, -3.5, 0]} scale={[1, -1, 1]}>
                <Html
                    transform
                    // No occlusion for reflection either
                    distanceFactor={6}
                    style={{
                        opacity: 0.15, // Faint reflection
                        filter: 'blur(1px)',
                        pointerEvents: 'none',
                        transform: 'scaleY(-1)'
                    }}
                    position={[0, 0.5, 0]}
                >
                    <div className={`
                        w-[320px] p-6 rounded-xl border backdrop-blur-sm
                        bg-white/40 border-white/20
                        flex flex-col gap-2
                    `}>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-1">
                            <span className={`text-3xl font-abu-sayed text-transparent bg-clip-text bg-gradient-to-r ${data.color === '#D91E36' ? 'from-red-600 to-orange-600' :
                                data.color === '#1F2937' ? 'from-gray-700 to-gray-900' :
                                    'from-primary-green to-emerald-500'
                                }`}>
                                {data.year}
                            </span>
                        </div>
                        <h3 className="text-xl text-gray-800 font-abu-sayed leading-tight">{data.title}</h3>
                        <p className="text-sm text-gray-600 font-anek leading-snug">
                            {data.desc}
                        </p>
                    </div>
                </Html>
            </group>
        </group>
    );
}

// --- Main Component ---
interface HistoryTimeTunnelProps {
    scrollYProgress: MotionValue<number>;
}

export default function HistoryTimeTunnel({ scrollYProgress }: HistoryTimeTunnelProps) {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 3, 10], fov: 50, rotation: [-0.2, 0, 0] }} // Higher up, looking down slightly
                gl={{ antialias: true }}
                dpr={[1, 2]}
            >
                {/* <color attach="background" args={['#e7f9e4']} /> */}
                {/* Fog removed to see background image */}
                {/* <fog attach="fog" args={['#e7f9e4', 5, 40]} /> */}

                <ambientLight intensity={0.9} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />

                <CameraRig scrollYProgress={scrollYProgress} />

                {/* Timeline Floor/Ruler */}
                <CentralRuler />

                {/* Render all cards */}
                {TIMELINE_DATA.map((item, index) => (
                    <ChronoCard key={index} data={item} />
                ))}
            </Canvas>
        </div>
    );
}
