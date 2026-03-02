"use client";

import React, { useState } from 'react';
import Link from "@/components/LocalLink";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LeadCaptureForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        injuryType: 'Auto Accident',
        injuryDate: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, offerType: "Injury Recovery - English Lead" })
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
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-100 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600 mb-6">
                    Thank you, {formData.firstName} {formData.lastName}. We have received your request and will call you shortly to confirm your appointment.
                </p>
                <Link
                    href="/"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline flex items-center justify-center gap-1"
                >
                    Return to Home
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(808) 555-0123"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Email <span className="text-slate-400 font-normal lowercase">- Optional</span></label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Injury Type</label>
                <select
                    name="injuryType"
                    value={formData.injuryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700"
                >
                    <option>Auto Accident</option>
                    <option>Work Injury</option>
                    <option>Other / Unsure</option>
                </select>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Date of Injury</label>
                <input
                    type="date"
                    name="injuryDate"
                    value={formData.injuryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#5F7161] hover:bg-[#4A584C] disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-2 uppercase tracking-wide"
            >
                {status === 'submitting' ? 'Processing...' : (
                    <>
                        Check My Eligibility
                        <ArrowRight className="w-5 h-5" />
                    </>
                )}
            </button>

            <p className="text-xs text-center text-slate-400 mt-4">
                Your information is secure. No obligation.
            </p>
        </form>
    );
}
