"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Send, Clock } from "lucide-react";

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

export default function ComingSoon() {
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

    // Format the message for WhatsApp
    const message = `Hello! I'm interested in your new website.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}${formData.message ? `\n\nMessage:\n${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/919730166832?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    setTimeout(() => {
      // Open WhatsApp after showing success message
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      setShowModal(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <div className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

      {/* Smooth Watermark-Style ECG - Center */}
      {/* Smooth Watermark-Style ECG - Center */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-40 overflow-hidden pointer-events-none z-5">
        <div className="flex w-[200%] h-full animate-scroll-ecg">
          {/* First Copy */}
          <div className="w-1/2 h-full">
            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="ecgWatermark" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#0077b6', stopOpacity: 0 }} />
                  <stop offset="20%" style={{ stopColor: '#0077b6', stopOpacity: 0.12 }} />
                  <stop offset="50%" style={{ stopColor: '#0077b6', stopOpacity: 0.20 }} />
                  <stop offset="80%" style={{ stopColor: '#0077b6', stopOpacity: 0.12 }} />
                  <stop offset="100%" style={{ stopColor: '#0077b6', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L200,100 L210,95 L220,100 L230,100 L240,85 L250,160 L260,20 L270,100 L280,100 L300,105 L320,100 L500,100 L700,100 L710,95 L720,100 L730,100 L740,85 L750,160 L760,20 L770,100 L780,100 L800,105 L820,100 L1000,100"
                stroke="url(#ecgWatermark)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          {/* Second Copy (Identical) */}
          <div className="w-1/2 h-full">
            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path
                d="M0,100 L200,100 L210,95 L220,100 L230,100 L240,85 L250,160 L260,20 L270,100 L280,100 L300,105 L320,100 L500,100 L700,100 L710,95 L720,100 L730,100 L740,85 L750,160 L760,20 L770,100 L780,100 L800,105 L820,100 L1000,100"
                stroke="url(#ecgWatermark)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>




      <div className="relative z-10 h-full flex items-center justify-center px-4 py-4">
        <div className="max-w-6xl w-full">
          {/* Main Content */}
          <div className="text-center space-y-5">
            {/* Hero Text */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="block text-slate-900 mb-1">
                  WE&apos;RE
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  LAUNCHING
                </span>
              </h1>
              <p className="text-sm md:text-base text-slate-600 font-light max-w-xl mx-auto pt-2">
                Revolutionary medical equipment for the future of surgery
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
                    <div className="bg-white/80 backdrop-blur-xl rounded-xl p-2 md:p-3 shadow-xl border border-white/60 min-w-[55px] md:min-w-[70px]">
                      <div className="text-xl md:text-3xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent tabular-nums">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-[9px] md:text-xs text-slate-500 font-medium uppercase tracking-wide">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Product Carousel - Auto Scrolling */}
            <div className="relative w-full mx-auto overflow-hidden py-8">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-blue-50/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-blue-50/50 to-transparent z-10 pointer-events-none" />

              {/* Scrolling Track - Double Buffer for Seamless Loop */}
              <div className="flex animate-scroll-seamless [will-change:transform] transform-gpu backface-hidden w-max">
                {/* First Set of Products */}
                <div className="flex shrink-0">
                  {products.map((src, idx) => (
                    <div
                      key={`set1-${idx}`}
                      className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-2xl border border-transparent bg-transparent p-5 mr-4 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-300 transform-gpu"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={src}
                          alt={`Medical Product ${idx + 1}`}
                          fill
                          className="object-contain drop-shadow-lg"
                          sizes="288px"
                          priority={true}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Set of Products */}
                <div className="flex shrink-0">
                  {products.map((src, idx) => (
                    <div
                      key={`set2-${idx}`}
                      className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-2xl border border-transparent bg-transparent p-5 mr-4 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-300 transform-gpu"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={src}
                          alt={`Medical Product ${idx + 1}`}
                          fill
                          className="object-contain drop-shadow-lg"
                          sizes="288px"
                          priority={true}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Third Set of Products */}
                <div className="flex shrink-0">
                  {products.map((src, idx) => (
                    <div
                      key={`set3-${idx}`}
                      className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-2xl border border-transparent bg-transparent p-5 mr-4 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-300 transform-gpu"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={src}
                          alt={`Medical Product ${idx + 1}`}
                          fill
                          className="object-contain drop-shadow-lg"
                          sizes="288px"
                          priority={true}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fourth Set of Products */}
                <div className="flex shrink-0">
                  {products.map((src, idx) => (
                    <div
                      key={`set4-${idx}`}
                      className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-2xl border border-transparent bg-transparent p-5 mr-4 hover:border-blue-400/50 hover:shadow-2xl transition-all duration-300 transform-gpu"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={src}
                          alt={`Medical Product ${idx + 1}`}
                          fill
                          className="object-contain drop-shadow-lg"
                          sizes="288px"
                          priority={true}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Watermark */}
            {/* Watermark */}
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

      {/* Floating Medical Icons */}
      {
        mounted && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Medical Cross */}
            <div className="absolute top-20 left-10 animate-float opacity-20" style={{ animationDelay: '0s', animationDuration: '8s' }}>
              <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
              </svg>
            </div>

            {/* Heartbeat */}
            <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: '1s', animationDuration: '10s' }}>
              <svg className="w-14 h-14 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Stethoscope */}
            <div className="absolute bottom-32 left-16 animate-float opacity-20" style={{ animationDelay: '2s', animationDuration: '9s' }}>
              <svg className="w-16 h-16 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1 4.5c-1.84 0-3.48.5-4.79 1.29C12.14 16.77 11 15.29 11 13.5V7H8v6.5c0 1.79-1.14 3.27-2.21 4.29C4.48 17 2.84 16.5 1 16.5v2c2.02 0 3.74.64 4.9 1.64.84.73 1.87 1.36 3.1 1.36s2.26-.63 3.1-1.36c1.16-1 2.88-1.64 4.9-1.64v-2z" />
              </svg>
            </div>

            {/* Medical Icon */}
            <div className="absolute top-1/3 right-10 animate-float opacity-20" style={{ animationDelay: '3s', animationDuration: '11s' }}>
              <svg className="w-10 h-10 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
            </div>

            {/* Pulse */}
            <div className="absolute bottom-20 right-32 animate-float opacity-20" style={{ animationDelay: '4s', animationDuration: '7s' }}>
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h3l2-6 4 12 2-6h3" />
              </svg>
            </div>

            {/* Medical Bag */}
            <div className="absolute top-1/2 left-24 animate-float opacity-20" style={{ animationDelay: '5s', animationDuration: '12s' }}>
              <svg className="w-14 h-14 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
              </svg>
            </div>
          </div>
        )
      }

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          {/* Button */}
          <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </button>

      {/* Modal */}
      {
        showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-scaleIn">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
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
                  <h3 className="text-2xl font-bold mb-2">Opening WhatsApp...</h3>
                  <p className="text-slate-600">Redirecting you to WhatsApp now.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Contact Us on WhatsApp</h3>
                  <p className="text-slate-600 mb-6">Fill in your details and we'll send them via WhatsApp.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                      />
                      <div className="text-right text-xs text-slate-500 mt-1">
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

                  <p className="text-xs text-slate-500 text-center mt-6">31, Electronic Sadan 1, MIDC Bhosari, Pune - 411026</p>
                </>
              )}
            </div>
          </div>
        )
      }
    </div >
  );
}
