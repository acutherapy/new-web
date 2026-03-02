"use client";

import React, { useState } from 'react';
import Link from "@/components/LocalLink";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SpringPromoForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        location: '1650 Liliha St, Ste: 208 Honolulu',
        terms: false,
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData(prev => ({
            ...prev,
            [e.target.name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.terms) {
            alert("Please agree to the terms to proceed.");
            return;
        }

        setStatus('submitting');

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, offerType: "Spring Promo - $109 (Acu + Cupping + Consult)" }),
            });

            if (res.ok) {
                if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                    (window as any).gtag('event', 'conversion', { 'send_to': 'AW-10985226327/5R6JCLrM2P8bENeAlfYo' });
                }
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-[#f0fdf4] rounded-2xl p-8 border-2 border-green-200 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Claim Confirmed!</h3>
                <p className="text-slate-600 mb-6">
                    Thank you, {formData.fullName}. We have received your request for the $109 Spring Promo. Due to limited consultation slots, we will call you at {formData.phone} within 24 hours to confirm your appointment time. Please keep your phone accessible!
                </p>
                <Link
                    href="/"
                    className="text-sm font-semibold text-[#166534] hover:text-green-800 underline flex items-center justify-center gap-1"
                >
                    Visit our main website
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Full Name *</label>
                <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Johnny Appleseed"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#7c9a81] focus:ring-2 focus:ring-[#7c9a81]/30 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Phone Number *</label>
                <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(808) 555-0123"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#7c9a81] focus:ring-2 focus:ring-[#7c9a81]/30 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Email Address (Optional)</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#7c9a81] focus:ring-2 focus:ring-[#7c9a81]/30 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Preferred Location *</label>
                <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#7c9a81] focus:ring-2 focus:ring-[#7c9a81]/30 outline-none transition-all text-slate-700"
                >
                    <option value="1650 Liliha St, Ste: 208 Honolulu">Honolulu Clinic (Liliha St)</option>
                    <option value="98-211 Pali Momi St, Ste: 604 Aiea">Pearl Harbor Clinic (Aiea)</option>
                </select>
            </div>

            <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center pt-1">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            className="w-5 h-5 rounded border-slate-300 text-[#7c9a81] focus:ring-[#7c9a81]/50 cursor-pointer"
                        />
                    </div>
                    <span className="text-xs text-slate-500 leading-relaxed font-medium">
                        By submitting this form, you agree to receive text messages or phone calls regarding this offer. Consent is not a condition of purchase.
                    </span>
                </label>
            </div>

            {status === 'error' && (
                <div className="text-red-500 text-sm font-medium p-3 bg-red-50 rounded-lg border border-red-100">
                    Oops! Something went wrong. Please try again or call us directly.
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#1e293b] text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-[#0f172a] shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
            >
                {status === 'submitting' ? 'Processing...' : 'Claim $109 Offer Now'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    );
}
