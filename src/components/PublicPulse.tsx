"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

export default function PublicPulse() {
    const [hasVoted, setHasVoted] = useState(false);

    // Mock data as per requirements
    const stats = {
        support: 87,
        dissent: 13,
        totalVotes: "৪৫,২৩০"
    };

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-10 md:p-20 rounded-[3rem] text-center relative overflow-hidden"
                >
                    <div className="glass-reflection absolute inset-0 opacity-30 pointer-events-none" />
                    {/* Decorative background for poll */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-accent-red/5 -z-10" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-12 relative z-10 text-text-primary">আপনার অবস্থান কী?</h2>

                    <div className="relative z-10 min-h-[200px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!hasVoted ? (
                                <motion.div
                                    key="buttons"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                    className="flex flex-col md:flex-row gap-6 md:gap-12"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setHasVoted(true)}
                                        className="px-10 py-6 rounded-2xl bg-white border border-primary-green/20 hover:border-primary-green hover:shadow-xl hover:shadow-primary-green/10 transition-all text-xl font-bold flex items-center gap-3 text-text-primary group"
                                    >
                                        <div className="p-2 bg-primary-green/10 group-hover:bg-primary-green transition-colors rounded-full text-primary-green group-hover:text-white">
                                            <Check className="w-6 h-6" />
                                        </div>
                                        আমি সমর্থন করি
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setHasVoted(true)}
                                        className="px-10 py-6 rounded-2xl bg-white border border-accent-red/20 hover:border-accent-red hover:shadow-xl hover:shadow-accent-red/10 transition-all text-xl font-bold flex items-center gap-3 text-text-primary group"
                                    >
                                        <div className="p-2 bg-accent-red/10 group-hover:bg-accent-red transition-colors rounded-full text-accent-red group-hover:text-white">
                                            <X className="w-6 h-6" />
                                        </div>
                                        আমি দ্বিমত পোষণ করি
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results"
                                    className="w-full max-w-4xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {/* Progress Bars Container */}
                                    <div className="flex h-32 rounded-3xl overflow-hidden relative shadow-inner bg-gray-100">
                                        {/* Support Bar */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${stats.support}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="bg-primary-green relative group flex items-center justify-center"
                                        >
                                            <span className="text-4xl md:text-6xl font-bold text-white/90">
                                                {stats.support}%
                                            </span>
                                            <span className="absolute bottom-4 text-sm font-medium text-white/80">সমর্থক</span>

                                            {/* Tooltip */}
                                            <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-lg whitespace-nowrap text-sm border border-gray-200 shadow-lg text-text-primary font-bold">
                                                {stats.totalVotes} জন মানুষ ভোট দিয়েছেন
                                            </div>
                                        </motion.div>

                                        {/* Dissent Bar */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${stats.dissent}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                            className="bg-accent-red relative group flex items-center justify-center"
                                        >
                                            <span className="text-3xl md:text-5xl font-bold text-white/90">
                                                {stats.dissent}%
                                            </span>
                                            <span className="absolute bottom-4 text-sm font-medium text-white/80">ভিন্নমত</span>
                                        </motion.div>
                                    </div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2 }}
                                        className="mt-8 text-text-secondary font-medium"
                                    >
                                        আপনার মতামত গ্রহণ করা হয়েছে। ধন্যবাদ।
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
