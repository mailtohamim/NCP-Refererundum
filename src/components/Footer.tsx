"use client";

import { Download, UserCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-primary-green/10 bg-white/50 backdrop-blur-xl">
            <div className="container mx-auto px-4 flex flex-col items-center gap-8">
                <div className="flex flex-col md:flex-row gap-6">
                    <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-primary-green hover:shadow-lg transition-all text-text-primary hover:text-primary-green font-medium group"
                    >
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span>পুরো সনদ ডাউনলোড করুন (PDF)</span>
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-primary-green hover:shadow-lg transition-all text-text-primary hover:text-primary-green font-medium group"
                    >
                        <UserCheck className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span>ভোটার লিস্ট চেক করুন</span>
                    </a>
                </div>

                <p className="text-text-secondary text-sm text-center">
                    © ২০২৬ গণভোট সচেতনতা মঞ্চ। এই ওয়েবসাইটটি সম্পূর্ণ অরাজনৈতিক এবং স্বেচ্ছাসেবী উদ্যোগ।
                </p>
            </div>
        </footer>
    );
}
