"use client";

import React, { useState } from 'react';
import Link from "@/components/LocalLink";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SpringPromoFormCN() {
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
            alert("请同意条款以继续。");
            return;
        }

        setStatus('submitting');

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, offerType: "Spring Promo - $109 (Acu + Cupping + Consult) - CN" }),
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
                <h3 className="text-2xl font-bold text-slate-900 mb-2">预约成功！</h3>
                <p className="text-slate-600 mb-6">
                    感谢您，{formData.fullName}。我们已收到您的春季特惠（$109）申请。由于咨询名额有限，我们将在24小时内致电 {formData.phone} 与您确认具体到诊时间。请保持电话畅通！
                </p>
                <Link
                    href="/"
                    className="text-sm font-semibold text-[#166534] hover:text-green-800 underline flex items-center justify-center gap-1"
                >
                    访问官网
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">姓名 *</label>
                <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="您的姓名"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#7c9a81] focus:ring-2 focus:ring-[#7c9a81]/30 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">电话 *</label>
                <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="您的联系电话"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#7c9a81] focus:ring-2 focus:ring-[#7c9a81]/30 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">电子邮箱 (选填)</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="您的电子邮箱"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#7c9a81] focus:ring-2 focus:ring-[#7c9a81]/30 outline-none transition-all placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">选择诊所门店 *</label>
                <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 focus:border-[#7c9a81] focus:ring-2 focus:ring-[#7c9a81]/30 outline-none transition-all text-slate-700"
                >
                    <option value="1650 Liliha St, Ste: 208 Honolulu">Honolulu 诊所 (Liliha St)</option>
                    <option value="98-211 Pali Momi St, Ste: 604 Aiea">Pearl Harbor 诊所 (Aiea)</option>
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
                        提交此表格即表示您同意我们通过电话或短信与您联系以确认预约。
                    </span>
                </label>
            </div>

            {status === 'error' && (
                <div className="text-red-500 text-sm font-medium p-3 bg-red-50 rounded-lg border border-red-100">
                    提交失败，请重试或致电
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#1e293b] text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-[#0f172a] shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
            >
                {status === 'submitting' ? '处理中...' : '立即领券'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    );
}
