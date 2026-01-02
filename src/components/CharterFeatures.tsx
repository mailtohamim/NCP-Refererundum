"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Landmark, Scale, Vote, X } from "lucide-react";
import { useState } from "react";
import ShinyCard from "./ShinyCard";

const features = [
    {
        id: 1,
        title: "ঐকমত্যভিত্তিক জাতীয় দলিল",
        shortDesc: "বিভিন্ন রাজনৈতিক দল ও জোটের পারস্পরিক আলোচনার মাধ্যমে প্রণীত একটি জাতীয় সনদ।",
        fullContent: `বিভিন্ন রাজনৈতিক দল ও জোটের পারস্পরিক আলোচনার মাধ্যমে প্রণীত একটি জাতীয় সনদ। এটি জাতীয় ঐকমত্য কমিশনের উদ্যোগে বাস্তবায়িত করা হয়।`,
        icon: (
            <div className="w-16 h-16 rounded-full bg-primary-green/10 flex items-center justify-center text-4xl mb-4 text-primary-green font-bold">
                অ
            </div>
        ),
        colSpan: "md:col-span-2",
        rowSpan: "",
    },
    {
        id: 2,
        title: "গণঅভ্যুত্থানের প্রেক্ষাপটে প্রণয়ন",
        shortDesc: "ফ্যাসিবাদ বিরোধী গণতান্ত্রিক আন্দোলন এবং ২০২৪ সালের জুলাই-আগষ্টে সংঘটিত গণঅভ্যুত্থান।",
        fullContent: `২০০৯ সাল পরবর্তী ১৬ বছরে ফ্যাসিবাদ বিরোধী গণতান্ত্রিক আন্দোলন এবং ২০২৪ সালের জুলাই-আগষ্টে সংঘটিত গণঅভ্যুত্থানের বীর শহীদ ও আহতদের প্রতি শ্রদ্ধা প্রকাশ ও গ্রেফতার ও কারাবরণকারী প্রতি সহমর্মিতা এবং উক্ত গণঅভ্যুত্থানে প্রত্যক্ষ ও পরোক্ষভাবে অংশগ্রহণকারীদের প্রতি কৃতজ্ঞতার স্মারক হিসেবে এই সনদকে ‘জুলাই জাতীয় সনদ ২০২৫’ হিসেবে ঘোষণা করা হয়েছে।`,
        icon: (
            <div className="w-16 h-16 rounded-full bg-accent-red/10 flex items-center justify-center mb-4">
                <Landmark className="w-8 h-8 text-accent-red" />
            </div>
        ),
        colSpan: "",
        rowSpan: "md:row-span-2",
    },
    {
        id: 3,
        title: "সংবিধান সংস্কারকেন্দ্রিক কাঠামো",
        shortDesc: "বিদ্যমান শাসন ব্যবস্থা, বিচার ব্যবস্থা ও সংবিধান সংষ্কার।",
        fullContent: `বিদ্যমান শাসন ব্যবস্থা তথা সংবিধান, নির্বাচন ব্যবস্থা, বিচার ব্যবস্থা, জনপ্রশাসন, পুলিশি ব্যবস্থা ও দূর্নীতি দমন বিষয়ে কাঠামোগত, আইনি ও প্রাতিষ্ঠানিক সংষ্কার ও পরিবর্তনের ব্যাপারে ঐকমত্যে উপনীত হয়ে এই সনদ বাস্তবায়িত করা হয়েছে। সংবিধান সংশোধনকে সনদের মূল ভিত্তি হিসেবে ধরা হয়েছে। কিছু বিষয়ে সংসদ ও গণভোটের মাধ্যমে সিদ্ধান্ত নেওয়ার বিধান রয়েছে।`,
        icon: (
            <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-primary-green" />
            </div>
        ),
        colSpan: "",
        rowSpan: "",
    },
    {
        id: 4,
        title: "রাষ্ট্রভাষা ও নাগরিক পরিচয়",
        shortDesc: "বাংলা ভাষাকে রাষ্ট্রভাষা হিসেবে পুনঃনিশ্চিত করা এবং নাগরিক পরিচয় 'বাংলাদেশি' নির্ধারণ।",
        fullContent: `বাংলা ভাষাকে রাষ্ট্রভাষা হিসেবে পুনঃনিশ্চিত করা হয়েছে। নাগরিক পরিচয় সংক্রান্ত বিষয় সনদে স্পষ্টভাবে উল্লেখ আছে। বাংলাদেশের নাগরিকগণ ‘বাংলাদেশি’ বলে পরিচিত হবেন।`,
        icon: (
            <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center mb-4">
                <Vote className="w-6 h-6 text-primary-green" />
            </div>
        ),
        colSpan: "",
        rowSpan: "",
    },
];

export default function CharterFeatures() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-abu-sayed text-center mb-16 text-text-primary"
                >
                    জুলাই সনদের মূল স্তম্ভসমূহ
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[250px]">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedId(feature.id)}
                            className={`${feature.colSpan} ${feature.rowSpan} cursor-pointer group`}
                        >
                            <ShinyCard className="h-full bg-white/40 hover:bg-white/60 transition-colors">
                                <div className="p-8 h-full flex flex-col justify-between">
                                    {feature.icon}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-text-primary">{feature.title}</h3>
                                        <p className="text-text-secondary line-clamp-3">{feature.shortDesc}</p>
                                        <p className="text-primary-green text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">বিস্তারিত পড়ুন &gt;</p>
                                    </div>
                                </div>
                            </ShinyCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal / Popup */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedId}`} // Optional framer layout animation if matching ID
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-primary-green/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-text-secondary"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {features.map((f) => {
                                if (f.id !== selectedId) return null;
                                return (
                                    <div key={f.id} className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            {f.icon}
                                            <h3 className="text-3xl font-bold text-text-primary">{f.title}</h3>
                                        </div>
                                        <div className="h-1 w-20 bg-primary-green/30 rounded-full" />
                                        <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                                            {f.fullContent}
                                        </p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
