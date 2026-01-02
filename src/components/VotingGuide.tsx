"use client";

import { motion } from "framer-motion";
import { ScanFace, Vote, CheckCircle2 } from "lucide-react";

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

                <div className="relative flex flex-col md:flex-row justify-center gap-8 md:gap-12 items-start">
                    {/* Glowing Line (Desktop) - Updated color for light theme */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="hidden md:block absolute top-12 left-20 right-20 h-1 bg-gradient-to-r from-transparent via-primary-green/50 to-transparent z-0"
                    />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
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
                    ))}
                </div>
            </div>
        </section>
    );
}
