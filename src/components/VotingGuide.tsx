"use client";

import { motion } from "framer-motion";
import { ScanFace, Vote, CheckCircle2, ArrowDown, ChevronsRight } from "lucide-react";

const steps = [
    {
        icon: <ScanFace size={32} />,
        title: "ভোট কেন্দ্রে যান",
        sub: "১২ই ফেব্রুয়ারি, সকাল ৮টা - বিকাল ৪টা।"
    },
    {
        icon: <Vote size={32} />,
        title: "দুটি ব্যালট নিন",
        sub: "একটি এমপির জন্য, অন্যটি গণভোটের জন্য।"
    },
    {
        icon: <CheckCircle2 size={32} />,
        title: "সিল দিন",
        sub: "সনদের পক্ষে হলে 'হ্যাঁ', বিপক্ষে হলে 'না' ঘরে সিল দিন।"
    }
];

export default function VotingGuide() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-text-primary"
                >
                    কিভাবে ভোট দেবেন
                </motion.h2>

                <div className="relative flex flex-col md:flex-row justify-center gap-6 md:gap-4 items-center">
                    {/* Arrows replace the line */}

                    {steps.map((step, index) => (
                        <div key={index} className="contents">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                className="relative z-10 flex-1 w-full max-w-[350px] mx-auto"
                            >
                                <div className="glass-panel p-8 rounded-3xl text-center relative overflow-hidden group bg-white/60">
                                    <div className="glass-reflection absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="w-16 h-16 rounded-full bg-primary-green flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-lg shadow-primary-green/30 relative z-20 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-text-primary">{step.title}</h3>
                                    <p className="text-text-secondary font-medium">
                                        {step.sub}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Divider Arrows */}
                            {index < steps.length - 1 && (
                                <div className="flex flex-col items-center justify-center text-primary-green/40 my-4 md:my-0 md:mx-2 shrink-0">
                                    {/* Mobile: Down Arrow */}
                                    <ArrowDown className="md:hidden w-8 h-8 animate-bounce" />
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
