"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ShinyCard from "./ShinyCard";

export default function ReferendumQuestion() {
    const [voted, setVoted] = useState(false);

    const stats = {
        support: 87,
        dissent: 13,
        totalVotes: "৪৫,২৩০"
    };

    return (
        <section className="py-2 md:py-20 relative z-20 h-[100dvh] md:h-auto flex items-center overflow-hidden">
            <div className="container mx-auto px-2 md:px-4 max-w-4xl h-full md:h-auto">
                <ShinyCard className="shadow-2xl h-full md:h-auto overflow-hidden">
                    <div className="p-2 md:p-12 h-full md:h-auto flex flex-col justify-between md:block">
                        <div className="flex-1 flex flex-col justify-center h-full">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[11px] md:text-4xl font-bold text-center mb-1 md:mb-8 text-text-primary leading-tight shrink-0"
                            >
                                ভোটারদের প্রশ্ন করা হবে: <br className="hidden md:block" />
                                <span className="md:mt-2 block">“আপনি কি জুলাই জাতীয় সনদ (সংবিধান সংস্কার) বাস্তবায়ন আদেশ, ২০২৫ এবং নিম্নোক্ত প্রস্তাবাবলিতে সম্মত?”</span>
                            </motion.h2>

                            <div className="space-y-0.5 md:space-y-6 mb-1 md:mb-12 text-[9px] md:text-lg text-text-body/90 leading-tight font-medium flex-1 flex flex-col justify-center md:block">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-1.5 md:gap-4 p-1 md:p-4 rounded md:rounded-xl bg-primary-green/5 border border-primary-green/10 items-start"
                                >
                                    <span className="font-bold text-primary-green min-w-[12px] md:min-w-[24px]">ক)</span>
                                    <p>
                                        নির্বাচনকালীন সময়ে জুলাই সনদ কাঠামোর আলোকে তত্ত্বাবধায়ক সরকার, নির্বাচন কমিশন ও অন্যান্য সাংবিধানিক প্রতিষ্ঠানসমূহ গঠিত হবে।
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex gap-1.5 md:gap-4 p-1 md:p-4 rounded md:rounded-xl bg-primary-green/5 border border-primary-green/10 items-start"
                                >
                                    <span className="font-bold text-primary-green min-w-[12px] md:min-w-[24px]">খ)</span>
                                    <p>
                                        সংসদ দ্বিকক্ষ বিশিষ্ট হবে, উচ্চকক্ষে ১০০ সদস্য থাকবেন। জাতীয় ভোটের হারে আনুপাতিক হারে সদস্যরা নির্বাচিত হবেন।
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex gap-1.5 md:gap-4 p-1 md:p-4 rounded md:rounded-xl bg-primary-green/5 border border-primary-green/10 items-start"
                                >
                                    <span className="font-bold text-primary-green min-w-[12px] md:min-w-[24px]">গ)</span>
                                    <p>
                                        বিজয়ী দলসমূহকে জুলাই সনদের ৩০টি ঐকমত্যভিত্তিক দফা বাস্তবায়ন করতে হবে (নারীদের প্রতিনিধি, প্রধানমন্ত্রীর মেয়াদ, বিচার বিভাগ ইত্যাদি)।
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex gap-1.5 md:gap-4 p-1 md:p-4 rounded md:rounded-xl bg-primary-green/5 border border-primary-green/10 items-start"
                                >
                                    <span className="font-bold text-primary-green min-w-[12px] md:min-w-[24px]">ঘ)</span>
                                    <p>
                                        রাজনৈতিক দলসমূহের প্রতিশ্রুতি অনুযায়ী জুলাই সনদের অন্যান্য সংস্কার প্রস্তাবসমূহ বাস্তবায়ন করা হবে।
                                    </p>
                                </motion.div>
                            </div>

                            <p className="text-center text-[8px] md:text-base text-accent-red font-medium mb-1 md:mb-8 shrink-0">
                                ভোটাররা এই চারটি বিষয়ের জন্য একটি মাত্র "হ্যাঁ" বা "না" ভোটের মাধ্যমে মতামত প্রদান করবেন।
                            </p>

                            <div className="shrink-0">
                                {/* Buttons - Hidden on Desktop if voted, stays on Mobile */}
                                <div className={`flex justify-center gap-2 md:gap-6 ${voted ? 'hidden md:hidden' : 'flex'} md:${voted ? 'hidden' : 'flex'}`}>
                                    {/* Actually, simplier logic:
                                        If !voted: Show Buttons (Flex).
                                        If voted:
                                            Mobile: Show Buttons (Flex). 
                                            Desktop: Hide Buttons (Hidden).
                                     */}
                                    <div className={`flex justify-center gap-2 md:gap-6 ${voted ? 'md:hidden' : ''}`}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setVoted(true)}
                                            className="px-4 py-1.5 md:px-12 md:py-4 rounded-full bg-primary-green text-white text-xs md:text-xl font-bold shadow-lg shadow-primary-green/30 hover:shadow-primary-green/50 transition-all"
                                        >
                                            হ্যাঁ
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setVoted(true)}
                                            className="px-4 py-1.5 md:px-12 md:py-4 rounded-full bg-white border-2 border-accent-red text-accent-red text-xs md:text-xl font-bold hover:bg-accent-red hover:text-white shadow-lg shadow-accent-red/20 transition-all"
                                        >
                                            না
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Desktop Success Message */}
                                {voted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="hidden md:block text-2xl font-bold text-primary-green bg-primary-green/10 px-8 py-4 rounded-full text-center"
                                    >
                                        আপনার মতামত গ্রহণ করা হয়েছে
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </ShinyCard>

                {/* Mobile Result Popup */}
                <AnimatePresence>
                    {voted && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setVoted(false)} // Close on backdrop click
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h3 className="text-xl font-bold text-center mb-6 text-primary-green">আপনার মতামত গ্রহণ করা হয়েছে</h3>

                                {/* Progress Bar */}
                                <div className="flex h-12 rounded-xl overflow-hidden relative shadow-inner bg-gray-100 mb-4">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${stats.support}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="bg-primary-green h-full"
                                    />
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${stats.dissent}%` }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                                        className="bg-accent-red h-full"
                                    />
                                </div>

                                {/* Stats Legend */}
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="text-2xl font-bold text-primary-green">{stats.support}%</div>
                                        <div className="text-xs text-text-secondary">সমর্থক</div>
                                        <div className="text-[10px] text-text-tertiary">{stats.totalVotes} ভোট</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-accent-red">{stats.dissent}%</div>
                                        <div className="text-xs text-text-secondary">ভিন্নমত</div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setVoted(false)}
                                    className="w-full py-2 text-sm text-text-secondary hover:text-primary-green underline font-medium"
                                >
                                    আবার দেখুন
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
