"use client";

import { motion } from "framer-motion";

const timelineEvents = [
    {
        title: "১৬ বছরের সংগ্রাম",
        desc: "২০০৯ পরবর্তী ফ্যাসিবাদ বিরোধী গণতান্ত্রিক আন্দোলন।",
        year: "২০০৯-২০২৪"
    },
    {
        title: "জুলাই-আগস্ট ২০২৪",
        desc: "ছাত্র-জনতার গণঅভ্যুত্থান এবং বীর শহীদদের আত্মত্যাগ।",
        year: "২০২৪"
    },
    {
        title: "জাতীয় ঐকমত্য ২০২৫",
        desc: "রাজনৈতিক দল ও জোটের আলোচনার ভিত্তিতে প্রণীত ‘জুলাই জাতীয় সনদ’।",
        year: "২০২৫"
    }
];

export default function Timeline() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center tracking-tight text-text-primary"
                >
                    ঐতিহাসিক প্রেক্ষাপট
                </motion.h2>
            </div>

            <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
                <div className="flex px-4 md:px-20 gap-8 w-max mx-auto">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-panel w-[350px] p-8 rounded-3xl relative overflow-hidden group shrink-0"
                        >
                            <div className="glass-reflection absolute inset-0 opacity-50 pointer-events-none" />

                            <div className="relative z-10">
                                <span className="text-primary-green/10 font-bold text-8xl absolute -top-8 -right-8 select-none">
                                    {index + 1}
                                </span>

                                <div className="inline-block px-3 py-1 rounded-full bg-primary-green/10 text-primary-green font-medium text-sm mb-4">
                                    {event.year}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-text-primary">{event.title}</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {event.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
