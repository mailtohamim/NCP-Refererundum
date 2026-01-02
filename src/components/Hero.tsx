"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
            {/* Background Image with Vignette */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero.jpg"
                    alt="Bangladesh Heritage"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Vignette & Overlay */}
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/80 via-transparent to-black/40 mix-blend-multiply" />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
                {/* Badge REMOVED */}

                {/* Headline - Blend Mode Overlay */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-8xl mb-6 leading-tight font-abu-sayed text-white mix-blend-overlay drop-shadow-xl"
                >
                    আগামীর সংবিধান, <br />
                    <span className="text-white mix-blend-normal">
                        আপনার হাতে
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10 leading-relaxed font-light drop-shadow-md"
                >
                    জুলাই জাতীয় সনদ ২০২৫: গণভোটের ডাক। আপনার একটি 'হ্যাঁ' বা 'না' নির্ধারণ করবে বাংলাদেশের ভবিষ্যৎ।
                </motion.p>

                {/* Primary CTA */}
                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="group relative px-8 py-4 bg-primary-green text-white rounded-full overflow-hidden shadow-lg shadow-black/30 hover:shadow-primary-green/50 transition-all duration-300 border border-white/20"
                >
                    <span className="relative z-10 flex items-center gap-3 text-lg font-semibold">
                        সনদটি জানুন <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </motion.button>
            </div>
        </section>
    );
}
