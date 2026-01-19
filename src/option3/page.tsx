"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const products = [
    "/products/Cuffsure_Edited (1).png",
    "/products/DSC00504 copy (1).png",
    "/products/IMG_1374.png",
    "/products/Micro 1.png",
    "/products/IMG20210714092219.png",
    "/products/IMG20210714092925.png",
    "/products/IMG_20210206_170828.png",
    "/products/DSC_0021-PhotoRoom.png-PhotoRoom.png",
    "/products/Micro 2.png",
];

export default function Option3() {
    const [mounted, setMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 12, minutes: 34, seconds: 56 });
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [mounted]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello! I'm interested in your new website.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}${formData.message ? `\n\nMessage:\n${formData.message}` : ''}`;
        const whatsappUrl = `https://wa.me/919730166832?text=${encodeURIComponent(message)}`;
        setSubmitted(true);
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setSubmitted(false);
            setShowModal(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 1500);
    };

    return (
        <div className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-teal-50">
            {/* Surgery Room Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:3rem_3rem]" />

            {/* Operating Room Light Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-white/60 via-cyan-100/30 to-transparent rounded-full blur-3xl" />

            {/* Glowing Orbs - Surgical Lighting Feel */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

            {/* Operating Room / Surgery Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
                <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
                    {/* Central Surgical Light */}
                    <g transform="translate(300, 80)">
                        <ellipse cx="0" cy="0" rx="80" ry="30" stroke="#0891b2" strokeWidth="2" fill="none" />
                        <ellipse cx="0" cy="0" rx="50" ry="18" stroke="#0891b2" strokeWidth="1.5" fill="none" />
                        <circle cx="0" cy="0" r="15" stroke="#0891b2" strokeWidth="2" fill="none" />
                        <line x1="0" y1="30" x2="0" y2="100" stroke="#0891b2" strokeWidth="3" />
                    </g>

                    {/* Operating Table Outline */}
                    <g transform="translate(150, 350)">
                        <rect x="0" y="0" width="300" height="80" rx="20" stroke="#0891b2" strokeWidth="2" fill="none" />
                        <rect x="20" y="10" width="260" height="60" rx="10" stroke="#0891b2" strokeWidth="1" fill="none" />
                        {/* Table legs */}
                        <rect x="60" y="80" width="20" height="60" stroke="#0891b2" strokeWidth="1.5" fill="none" />
                        <rect x="220" y="80" width="20" height="60" stroke="#0891b2" strokeWidth="1.5" fill="none" />
                    </g>

                    {/* Surgical Equipment Stand */}
                    <g transform="translate(50, 200)">
                        <rect x="0" y="0" width="60" height="150" rx="5" stroke="#0891b2" strokeWidth="1.5" fill="none" />
                        {[30, 60, 90, 120].map((y, i) => (
                            <line key={i} x1="10" y1={y} x2="50" y2={y} stroke="#0891b2" strokeWidth="1" />
                        ))}
                        <rect x="10" y="150" width="40" height="80" stroke="#0891b2" strokeWidth="1" fill="none" />
                    </g>

                    {/* Monitor/Display Stand */}
                    <g transform="translate(500, 180)">
                        <rect x="0" y="0" width="80" height="60" rx="5" stroke="#0891b2" strokeWidth="1.5" fill="none" />
                        <rect x="5" y="5" width="70" height="45" rx="2" stroke="#0891b2" strokeWidth="1" fill="none" />
                        <line x1="40" y1="60" x2="40" y2="100" stroke="#0891b2" strokeWidth="2" />
                        <rect x="20" y="100" width="40" height="10" rx="2" stroke="#0891b2" strokeWidth="1" fill="none" />
                    </g>

                    {/* IV Stand */}
                    <g transform="translate(520, 350)">
                        <line x1="20" y1="0" x2="20" y2="150" stroke="#0891b2" strokeWidth="2" />
                        <line x1="0" y1="0" x2="40" y2="0" stroke="#0891b2" strokeWidth="1.5" />
                        <ellipse cx="10" cy="0" rx="8" ry="15" stroke="#0891b2" strokeWidth="1" fill="none" />
                        <ellipse cx="30" cy="0" rx="8" ry="15" stroke="#0891b2" strokeWidth="1" fill="none" />
                        <circle cx="20" cy="150" r="15" stroke="#0891b2" strokeWidth="1" fill="none" />
                    </g>
                </svg>
            </div>

            {/* Floating Surgical Elements */}
            {mounted && (
                <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    {/* Surgical Drill */}
                    <div className="absolute top-20 left-10 animate-float opacity-10" style={{ animationDelay: '0s', animationDuration: '10s' }}>
                        <svg className="w-20 h-12 text-slate-500" viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="0" y="10" width="40" height="20" rx="5" />
                            <rect x="40" y="15" width="25" height="10" rx="2" />
                            <path d="M65 20 L80 20" strokeDasharray="3 2" />
                        </svg>
                    </div>

                    {/* Tourniquet Cuff */}
                    <div className="absolute top-40 right-16 animate-float opacity-10" style={{ animationDelay: '2s', animationDuration: '8s' }}>
                        <svg className="w-24 h-16 text-blue-500" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M10 30 Q10 10 30 10 L70 10 Q90 10 90 30 Q90 50 70 50 L30 50 Q10 50 10 30" />
                            <rect x="35" y="20" width="30" height="20" rx="3" />
                            <circle cx="50" cy="30" r="5" />
                        </svg>
                    </div>

                    {/* Bone Plate */}
                    <div className="absolute bottom-32 left-20 animate-float opacity-10" style={{ animationDelay: '1s', animationDuration: '12s' }}>
                        <svg className="w-28 h-10 text-slate-500" viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="0" y="10" width="120" height="20" rx="10" />
                            {[15, 35, 55, 75, 95].map((x, i) => (
                                <circle key={i} cx={x} cy="20" r="5" />
                            ))}
                        </svg>
                    </div>

                    {/* Surgical Screws */}
                    <div className="absolute top-1/3 right-10 animate-float opacity-10" style={{ animationDelay: '3s', animationDuration: '9s' }}>
                        <svg className="w-16 h-24 text-slate-500" viewBox="0 0 50 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <g transform="translate(25, 10)">
                                <circle cx="0" cy="0" r="8" />
                                <line x1="-4" y1="0" x2="4" y2="0" />
                                <line x1="0" y1="-4" x2="0" y2="4" />
                                <path d="M -3 12 L 3 12 L 2 60 L -2 60 Z" />
                                <path d="M -4 20 L 4 20 M -4 30 L 4 30 M -4 40 L 4 40 M -4 50 L 4 50" />
                            </g>
                        </svg>
                    </div>

                    {/* Joint Implant */}
                    <div className="absolute bottom-20 right-24 animate-float opacity-10" style={{ animationDelay: '4s', animationDuration: '11s' }}>
                        <svg className="w-20 h-28 text-blue-500" viewBox="0 0 60 90" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <ellipse cx="30" cy="15" rx="20" ry="12" />
                            <path d="M 15 25 Q 20 45 25 65 L 35 65 Q 40 45 45 25" />
                            <ellipse cx="30" cy="70" rx="15" ry="8" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4 py-4">
                <div className="max-w-6xl w-full">
                    <div className="text-center space-y-5">
                        {/* Hero Text */}
                        <div className="space-y-1">
                            <h1 className="text-4xl md:text-6xl font-black leading-tight">
                                <span className="block text-slate-800 mb-1">
                                    WE&apos;RE
                                </span>
                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 bg-clip-text text-transparent">
                                    LAUNCHING
                                </span>
                            </h1>
                            <p className="text-sm md:text-base text-slate-500 font-light max-w-xl mx-auto pt-2">
                                Precision-engineered orthopaedic surgical equipment
                            </p>
                        </div>

                        {/* Countdown Timer */}
                        {mounted && (
                            <div className="flex justify-center gap-2 md:gap-4">
                                {[
                                    { value: timeLeft.days, label: "Days" },
                                    { value: timeLeft.hours, label: "Hours" },
                                    { value: timeLeft.minutes, label: "Minutes" },
                                    { value: timeLeft.seconds, label: "Seconds" }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="bg-white/90 backdrop-blur-xl rounded-xl p-2 md:p-3 shadow-lg border border-slate-200 min-w-[55px] md:min-w-[70px]">
                                            <div className="text-xl md:text-3xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent tabular-nums">
                                                {String(item.value).padStart(2, '0')}
                                            </div>
                                            <div className="text-[9px] md:text-xs text-slate-400 font-medium uppercase tracking-wide">
                                                {item.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Product Carousel */}
                        <div className="relative w-full mx-auto overflow-hidden py-8">
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-slate-50/90 to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-slate-50/90 to-transparent z-10 pointer-events-none" />

                            <div className="flex animate-scroll-seamless [will-change:transform] transform-gpu backface-hidden w-max">
                                {[1, 2, 3, 4].map((setNum) => (
                                    <div key={setNum} className="flex shrink-0">
                                        {products.map((src, idx) => (
                                            <div
                                                key={`set${setNum}-${idx}`}
                                                className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 p-2 mr-4 transition-all duration-300 transform-gpu hover:scale-110"
                                            >
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={src}
                                                        alt={`Medical Product ${idx + 1}`}
                                                        fill
                                                        className="object-contain drop-shadow-md"
                                                        sizes="288px"
                                                        priority={true}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center pointer-events-none">
                            <div className="relative w-56 h-20 md:w-56 md:h-32">
                                <Image
                                    src="/logo.png"
                                    alt="IMS Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-6 right-6 z-40 group"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                    <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </div>
                </div>
            </button>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-md animate-fadeIn">
                    <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-scaleIn border border-slate-100">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-600"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-slate-800">Opening WhatsApp...</h3>
                                <p className="text-slate-500">Redirecting you to WhatsApp now.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-2 text-slate-800">Contact Us on WhatsApp</h3>
                                <p className="text-slate-500 mb-6">Fill in your details and we&apos;ll send them via WhatsApp.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                                    />
                                    <div>
                                        <textarea
                                            placeholder="Your Message (Optional)"
                                            value={formData.message}
                                            onChange={e => {
                                                const value = e.target.value;
                                                if (value.length <= 500) {
                                                    setFormData({ ...formData, message: value });
                                                }
                                            }}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
                                        />
                                        <div className="text-right text-xs text-slate-400 mt-1">
                                            {formData.message.length}/500
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Send via WhatsApp
                                    </button>
                                </form>

                                <p className="text-xs text-slate-400 text-center mt-6">31, Electronic Sadan 1, MIDC Bhosari, Pune - 411026</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
