"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SPECIAL_OFFER_FORM() {
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
            alert("Please agree to the terms and conditions.");
            return;
        }

        setStatus('submitting');

        try {
            // Reuse the same API route or modify it to handle different form types
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, offerType: "New Patient Special - $109" }),
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
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Claim Received!</h3>
                <p className="text-slate-600 mb-6">
                    Thank you, {formData.fullName}. We have received your request for the $109 Special. We will call you at {formData.phone} shortly to schedule your appointment.
                </p>
                <Link
                    href="/"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline flex items-center justify-center gap-1"
                >
                    For more information, visit our main website
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Johnny Appleseed"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                />
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
                <label className="text-xs font-bold text-slate-700 uppercase">Email Address</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Location Requested</label>
                <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700"
                >
                    <option>1650 Liliha St, Ste: 208 Honolulu</option>
                    <option>98-211 Pali Momi St, Ste: 604 Aiea</option>
                </select>
            </div>

            <div className="flex items-start gap-3 py-2">
                <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-xs text-slate-500 leading-tight">
                    I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from AcuTherapy Clinics.
                </label>
            </div>

            <button
                type="submit"
                disabled={status === 'submitting' || !formData.terms}
                className="w-full bg-[#5F7161] hover:bg-[#4A584C] disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-2 uppercase tracking-wide"
            >
                {status === 'submitting' ? 'Processing...' : (
                    <>
                        Claim My Special!
                        <ArrowRight className="w-5 h-5" />
                    </>
                )}
            </button>

            <p className="text-xs text-center text-slate-400 mt-4">
                Limited Time Offer. New Patients Only.
            </p>
        </form>
    );
}
