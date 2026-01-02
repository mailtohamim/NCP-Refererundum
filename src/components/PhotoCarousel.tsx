"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Placeholder images
// Local images 1 to 20
// Local images 1 to 20 with Responsive Width Classes
const imagesRow1 = [
    { src: "/1.jpg", width: "w-[200px] md:w-[300px]", aspect: "aspect-video" },
    { src: "/2.jpg", width: "w-[150px] md:w-[200px]", aspect: "aspect-square" },
    { src: "/3.jpg", width: "w-[180px] md:w-[250px]", aspect: "aspect-[4/5]" },
    { src: "/4.jpg", width: "w-[250px] md:w-[350px]", aspect: "aspect-video" },
    { src: "/5.jpg", width: "w-[150px] md:w-[200px]", aspect: "aspect-square" },
    { src: "/6.jpg", width: "w-[200px] md:w-[280px]", aspect: "aspect-[3/2]" },
    { src: "/7.jpg", width: "w-[160px] md:w-[220px]", aspect: "aspect-[4/5]" },
    { src: "/8.jpg", width: "w-[200px] md:w-[300px]", aspect: "aspect-video" },
    { src: "/9.jpg", width: "w-[150px] md:w-[200px]", aspect: "aspect-square" },
    { src: "/10.jpg", width: "w-[180px] md:w-[260px]", aspect: "aspect-[16/9]" },
];

const imagesRow2 = [
    { src: "/11.jpg", width: "w-[200px] md:w-[280px]", aspect: "aspect-[3/2]" },
    { src: "/12.jpg", width: "w-[160px] md:w-[220px]", aspect: "aspect-[4/5]" },
    { src: "/13.jpg", width: "w-[220px] md:w-[320px]", aspect: "aspect-video" },
    { src: "/14.jpg", width: "w-[150px] md:w-[200px]", aspect: "aspect-square" },
    { src: "/15.jpg", width: "w-[180px] md:w-[250px]", aspect: "aspect-[4/5]" },
    { src: "/16.jpg", width: "w-[200px] md:w-[300px]", aspect: "aspect-video" },
    { src: "/17.jpg", width: "w-[150px] md:w-[200px]", aspect: "aspect-square" },
    { src: "/18.jpg", width: "w-[180px] md:w-[260px]", aspect: "aspect-[16/9]" },
    { src: "/19.jpg", width: "w-[160px] md:w-[240px]", aspect: "aspect-[4/5]" },
    { src: "/20.jpg", width: "w-[200px] md:w-[300px]", aspect: "aspect-video" },
];

export default function PhotoCarousel() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-20 overflow-hidden bg-white/30 backdrop-blur-sm border-y border-white/20 relative z-30">
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-abu-sayed text-center text-text-primary mb-2">
                    গণঅভ্যুত্থানের স্মৃতি
                </h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden pause-on-hover py-2">
                    <div
                        className="flex gap-6 min-w-max animate-marquee"
                        style={{ "--duration": "100s" } as React.CSSProperties}
                    >
                        {[...imagesRow1, ...imagesRow1].map((img, index) => (
                            <div
                                key={`r1-${index}`}
                                onClick={() => setSelectedImage(img.src)}
                                className={`relative rounded-2xl overflow-hidden cursor-zoom-in shrink-0 ${img.aspect} ${img.width}`}
                            >
                                <div className="group w-full h-full relative">
                                    <Image
                                        src={img.src}
                                        alt="Gallery Image"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

                                    {/* Hint Icon */}
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        <ZoomIn size={20} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden pause-on-hover py-2">
                    <div
                        className="flex gap-6 min-w-max animate-marquee-reverse"
                        style={{ "--duration": "120s" } as React.CSSProperties}
                    >
                        {[...imagesRow2, ...imagesRow2].map((img, index) => (
                            <div
                                key={`r2-${index}`}
                                onClick={() => setSelectedImage(img.src)}
                                className={`relative rounded-2xl overflow-hidden cursor-zoom-in shrink-0 ${img.aspect} ${img.width}`}
                            >
                                <div className="group w-full h-full relative">
                                    <Image
                                        src={img.src}
                                        alt="Gallery Image"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

                                    {/* Hint Icon */}
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        <ZoomIn size={20} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        >
                            <Image
                                src={selectedImage}
                                alt="Full size preview"
                                fill
                                className="object-contain"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                aria-label="Close preview"
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
