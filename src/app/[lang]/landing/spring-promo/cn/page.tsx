"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from "@/components/LocalLink";
import { Check, Phone, Leaf, Sparkles, MapPin, AlertCircle } from 'lucide-react';
import SpringPromoFormCN from '@/components/SpringPromoFormCN';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SpringPromoPageCN() {
    const { setLang } = useLanguage();

    useEffect(() => {
        setLang("ZH");
    }, [setLang]);

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* --- Sticky Mobile CTA (Bottom) --- */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4 md:hidden flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#166534] uppercase tracking-wider">春季特惠 3月30日截止</span>
                    <a href="tel:808-528-7177" className="font-bold text-[#1e293b] text-lg">(808) 528-7177</a>
                </div>
                <Link
                    href="#claim-offer"
                    className="bg-[#1e293b] text-white font-bold py-3 px-6 rounded-lg text-sm shadow-lg hover:bg-black transition-colors"
                >
                    立即领券
                </Link>
            </div>

            {/* --- Header --- */}
            <header className="bg-white py-4 border-b-4 border-[#7c9a81] shadow-sm relative z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/Acutherapy-icon-png.png"
                            alt="AcuTherapy Logo"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                        />
                        <div>
                            <h1 className="text-xl font-serif font-bold tracking-tight text-[#1e293b]">AcuTherapy Clinics</h1>
                            <p className="text-xs text-[#7c9a81] uppercase tracking-widest font-bold">春季养生特惠</p>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col text-right">
                        <p className="font-bold text-[#1e293b] font-serif">Honolulu 与 Aiea (珍珠港) 诊所</p>
                        <a href="tel:808-528-7177" className="flex items-center justify-end gap-1 text-[#7c9a81] font-semibold hover:text-[#1e293b] transition-colors">
                            <Phone className="w-4 h-4" /> (808) 528-7177
                        </a>
                    </div>
                </div>
            </header>

            {/* --- Hero Section --- */}
            <section className="bg-gradient-to-b from-[#f0fdf4] to-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden relative border-b border-green-100">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-7 pl-0 md:pl-4 space-y-6 md:space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                <Leaf className="w-3.5 h-3.5" />
                                2026 春季养生促销
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1e293b] leading-[1.15]">
                                <span className="text-[#166534] block text-3xl md:text-4xl lg:text-5xl">春季经络排毒与痛症理疗特惠</span>
                            </h2>

                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                                春天是生发、排毒的黄金季节。通过专业的拔火罐与针灸结合，清除冬季积聚的寒湿，增强免疫力并有效消除慢性疼痛。<strong className="font-bold text-slate-800">体验全面的经络焕新。</strong>
                            </p>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">$109 特惠套餐包含：</h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: "专业中医拔火罐 (排湿解毒)", desc: "缓解肌肉紧张，促进血液循环，排除深层毒素。" },
                                        { title: "特效痛症/内科针灸", desc: "针对背部、颈部、关节等痛点，平衡身体能量。" },
                                        { title: "春季深度健康咨诊 (把脉/舌诊)", desc: "注册中医师提供1对1的诊断和调理建议。" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mt-0.5">
                                                <Check className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1e293b] text-base md:text-lg flex items-center gap-2 flex-wrap">
                                                    {item.title}
                                                </p>
                                                <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Content: The Form Form */}
                        <div id="claim-offer" className="lg:col-span-5 relative mt-8 lg:mt-0">
                            {/* Call out Badge */}
                            <div className="absolute -top-4 -right-2 md:-right-6 z-20 transform rotate-6 bg-red-600 text-white p-3 rounded-full shadow-xl flex flex-col items-center justify-center w-28 h-28 border-4 border-white animate-pulse">
                                <span className="text-xs font-bold uppercase opacity-90">截止至</span>
                                <span className="text-xl font-black leading-none my-1">3月30日</span>
                                <span className="text-[10px] font-bold opacity-90">12:00 PM</span>
                            </div>

                            <div className="bg-white rounded-3xl shadow-xl shadow-green-900/5 overflow-hidden border border-slate-200">
                                <div className="bg-[#1e293b] p-6 text-center">
                                    <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2 flex items-center justify-center gap-1">
                                        <Sparkles className="w-4 h-4" /> 限时特惠
                                    </p>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-2xl text-slate-400 line-through">价值 $267+</span>
                                        <div className="text-6xl font-black text-white tracking-tighter">
                                            $109
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-sm mt-3 font-medium">回馈客户的季节健康维护。</p>
                                </div>
                                <div className="p-6 md:p-8 bg-slate-50">
                                    <SpringPromoFormCN />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* --- Urgency & Trust Footer --- */}
            <section className="bg-white py-12 md:py-16">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="flex items-center justify-center gap-2 mb-6 text-amber-600">
                        <AlertCircle className="w-6 h-6" />
                        <h3 className="text-xl font-bold">预约名额有限！</h3>
                    </div>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        此特惠活动将于 <strong>2026年月30日 中午12:00</strong> 正式结束。由于春季到诊需求量大，我们每周只能接待有限数量的特惠患者。请立即在下方提交申请以锁定您的 $109 优惠名额。
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 text-left border-t border-slate-200 pt-10">
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                            <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            <p className="text-sm text-slate-600"><strong className="text-slate-900 block mb-1">Honolulu 诊所</strong> 1650 Liliha St, Ste 208<br />Honolulu, HI 96817</p>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                            <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            <p className="text-sm text-slate-600"><strong className="text-slate-900 block mb-1">Pearl Harbor 诊所</strong> 98-211 Pali Momi St, Ste 604<br />Aiea, HI 96701</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-12">
                        &copy; {new Date().getFullYear()} AcuTherapy Clinics. 保留所有权利。最终解释权归诊所所有。
                    </p>
                </div>
            </section>

        </main>
    );
}
