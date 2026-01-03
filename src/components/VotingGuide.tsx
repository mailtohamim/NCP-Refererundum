"use client";

import { motion } from "framer-motion";
import { ScanFace, Vote, CheckCircle2, ArrowDown, ChevronsRight } from "lucide-react";

import Image from "next/image"; // Ensure import

const steps = [
    {
        icon: <ScanFace size={32} />,
        title: "ভোট কেন্দ্রে যান",
        sub: "১২ই ফেব্রুয়ারি, সকাল ৮টা - বিকাল ৪টা।",
        img: "/Go to Vote Center.jpg"
    },
    {
        icon: <Vote size={32} />,
        title: "দুটি ব্যালট নিন",
        sub: "একটি এমপির জন্য, অন্যটি গণভোটের জন্য।",
        img: "/Pick the Ballots.png"
    },
    {
        icon: <CheckCircle2 size={32} />,
        title: "সিল দিন",
        sub: "সনদের পক্ষে হলে 'হ্যাঁ', বিপক্ষে হলে 'না' ঘরে সিল দিন।",
        img: "/Put the Seal.jpg"
    }
];

export default function VotingGuide() {
    return (
        <section className="py-4 md:py-20 relative h-[100dvh] md:h-auto overflow-hidden flex flex-col justify-center">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-16 text-text-primary shrink-0 relative z-20"
                >
                    কিভাবে ভোট দেবেন
                </motion.h2>

                <div className="relative flex flex-col md:flex-row justify-center gap-1 md:gap-4 items-center flex-1 md:flex-none w-full">
                    {/* Arrows replace the line */}

                    {steps.map((step, index) => (
                        <div key={index} className="contents md:block">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                className="relative z-10 w-full md:max-w-[350px] mx-auto flex-1 md:flex-none flex flex-col"
                            >
                                <div className="glass-panel relative rounded-2xl md:rounded-3xl text-center overflow-hidden group h-full flex flex-col justify-center items-center isolate shadow-lg">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={step.img}
                                            alt={step.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 350px"
                                        />
                                    </div>

                                    {/* Vignette/Overlay - Darker at bottom for text visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10 transition-opacity duration-300" />

                                    {/* Glass Reflection Effect (Subtle) */}
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 z-10 transition-opacity duration-500 pointer-events-none" />

                                    {/* Content */}
                                    <div className="relative z-20 p-4 md:p-8 flex flex-col items-center justify-center h-full w-full">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-green flex items-center justify-center text-white text-xl font-bold mb-2 md:mb-6 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300 shrink-0 border-2 border-white/20">
                                            <div className="scale-90 md:scale-100 transform origin-center flex items-center justify-center">
                                                {step.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-3 text-white drop-shadow-md">{step.title}</h3>
                                        <p className="text-xs md:text-base text-gray-200 font-medium leading-tight md:leading-normal drop-shadow-sm">
                                            {step.sub}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Divider Arrows */}
                            {index < steps.length - 1 && (
                                <div className="flex flex-col items-center justify-center text-primary-green md:text-primary-green/40 my-0.5 md:my-0 md:mx-2 shrink-0 relative z-20">
                                    {/* Mobile: Down Arrow */}
                                    <ArrowDown className="md:hidden w-6 h-6 animate-bounce text-primary-green" />
                                    {/* Desktop: Double Right Arrows */}
                                    <div className="hidden md:flex flex-row -space-x-4">
                                        <ChevronsRight className="w-10 h-10 opacity-50" />
                                        <ChevronsRight className="w-10 h-10" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
