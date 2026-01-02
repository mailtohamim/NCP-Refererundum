"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ShinyCard from "./ShinyCard";

export default function ReferendumWithPulse() {
    const [hasVoted, setHasVoted] = useState(false);

    // Mock data for Public Pulse
    const stats = {
        support: 87,
        dissent: 13,
        totalVotes: "৪৫,২৩০"
    };

    return (
        <section className="py-20 relative z-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <ShinyCard className="shadow-2xl bg-white/50">
                    <div className="p-8 md:p-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center mb-8 text-text-primary leading-tight"
                        >

                            “আপনি কি জুলাই জাতীয় সনদ (সংবিধান সংস্কার) বাস্তবায়ন আদেশ, ২০২৫ এবং নিম্নোক্ত প্রস্তাবাবলিতে সম্মত?”
                        </motion.h2>

                        <AnimatePresence mode="wait">
                            {!hasVoted ? (
                                <motion.div
                                    key="question"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="space-y-6 mb-12 text-lg text-text-body/90 leading-relaxed font-medium">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex gap-4 p-4 rounded-xl bg-primary-green/5 border border-primary-green/10"
                                        >
                                            <span className="font-bold text-primary-green min-w-[24px]">ক)</span>
                                            <p>
                                                নির্বাচনকালীন সময়ে জুলাই সনদ কাঠামোর আলোকে তত্ত্বাবধায়ক সরকার, নির্বাচন কমিশন ও অন্যান্য সাংবিধানিক প্রতিষ্ঠানসমূহ গঠিত হবে।
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="flex gap-4 p-4 rounded-xl bg-primary-green/5 border border-primary-green/10"
                                        >
                                            <span className="font-bold text-primary-green min-w-[24px]">খ)</span>
                                            <p>
                                                সংসদ দ্বিকক্ষ বিশিষ্ট হবে, যেখানে ১০০ সদস্য বিশিষ্ট উচ্চকক্ষ থাকবে, যার অনুমোদন ব্যতিত কোনো সংবিধান সংশোধন করা যাবে না। জাতীয় ভোটের হারের ভিত্তিতে আনুপাতিক হারে সদস্যরা নির্বাচিত হবেন।
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="flex gap-4 p-4 rounded-xl bg-primary-green/5 border border-primary-green/10"
                                        >
                                            <span className="font-bold text-primary-green min-w-[24px]">গ)</span>
                                            <p>
                                                বিজয়ী দলসমূহকে জুলাই সনদের ৩০টি ঐকমত্যভিত্তিক দফা বাস্তবায়ন করতে হবে, যার মধ্যে রয়েছে নারীদের বর্ধিত প্রতিনিধিত্ব, বিরোধী দল থেকে নির্বাচিত ডেপুটি স্পিকার, প্রধানমন্ত্রীর মেয়াদের সীমাবদ্ধতা, রাষ্ট্রপতির ক্ষমতা বৃদ্ধি, মৌলিক অধিকারের প্রসার এবং বিচার বিভাগ ও স্থানীয় সরকারের শক্তিশালী স্বাধীনতা।
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                            viewport={{ once: true }}
                                            className="flex gap-4 p-4 rounded-xl bg-primary-green/5 border border-primary-green/10"
                                        >
                                            <span className="font-bold text-primary-green min-w-[24px]">ঘ)</span>
                                            <p>
                                                রাজনৈতিক দলসমূহের প্রতিশ্রুতি অনুযায়ী জুলাই সনদের অন্যান্য সংস্কার প্রস্তাবসমূহ বাস্তবায়ন করা হবে।
                                            </p>
                                        </motion.div>
                                    </div>

                                    <p className="text-center text-accent-red font-medium mb-8">
                                        ভোটাররা এই চারটি বিষয়ের জন্য একটি মাত্র "হ্যাঁ" বা "না" ভোটের মাধ্যমে মতামত প্রদান করবেন।
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-6 pb-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setHasVoted(true)}
                                            className="px-12 py-4 rounded-full bg-primary-green text-white text-xl font-bold shadow-lg shadow-primary-green/30 hover:shadow-primary-green/50 transition-all"
                                        >
                                            হ্যাঁ
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setHasVoted(true)}
                                            className="px-12 py-4 rounded-full bg-white border-2 border-accent-red text-accent-red text-xl font-bold hover:bg-accent-red hover:text-white shadow-lg shadow-accent-red/20 transition-all"
                                        >
                                            না
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="pt-8"
                                >
                                    <h3 className="text-2xl font-bold text-center mb-8 text-primary-green">আপনার মতামত গ্রহণ করা হয়েছে</h3>

                                    {/* Progress Bars Container */}
                                    <div className="flex h-32 rounded-3xl overflow-hidden relative shadow-inner bg-gray-100">
                                        {/* Support Bar */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${stats.support}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="bg-primary-green relative group flex items-center justify-center cursor-help"
                                        >
                                            <span className="text-4xl md:text-6xl font-bold text-white/90">
                                                {stats.support}%
                                            </span>
                                            <span className="absolute bottom-4 text-sm font-medium text-white/80">সমর্থক</span>

                                            {/* Tooltip */}
                                            <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-lg whitespace-nowrap text-sm border border-gray-200 shadow-lg text-text-primary font-bold z-50 pointer-events-none">
                                                {stats.totalVotes} জন মানুষ ভোট দিয়েছেন
                                            </div>
                                        </motion.div>

                                        {/* Dissent Bar */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${stats.dissent}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                            className="bg-accent-red relative group flex items-center justify-center cursor-help"
                                        >
                                            <span className="text-3xl md:text-5xl font-bold text-white/90">
                                                {stats.dissent}%
                                            </span>
                                            <span className="absolute bottom-4 text-sm font-medium text-white/80">ভিন্নমত</span>

                                            {/* Tooltip */}
                                            <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-lg whitespace-nowrap text-sm border border-gray-200 shadow-lg text-text-primary font-bold z-50 pointer-events-none">
                                                বাকিরা ভিন্নমত পোষণ করেছেন
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="text-center mt-8">
                                        <button onClick={() => setHasVoted(false)} className="text-text-secondary hover:text-primary-green underline text-sm">
                                            আবার দেখুন
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </ShinyCard>
            </div>
        </section>
    );
}
