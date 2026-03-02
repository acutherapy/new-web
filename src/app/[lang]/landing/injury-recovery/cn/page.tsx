
"use client";

import React from 'react';
import Image from 'next/image';
import Link from "@/components/LocalLink";
import { CheckCircle2, Phone, FileText, Activity, ArrowRight, ShieldCheck, MapPin, Star, Car, Languages } from 'lucide-react';
import LeadCaptureFormCN from '@/components/LeadCaptureFormCN';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export default function InjuryLandingPageCN() {
    const { setLang } = useLanguage();

    useEffect(() => {
        setLang("ZH");
    }, [setLang]);

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-yellow-100 selection:text-yellow-900">

            {/* --- Sticky Mobile CTA (Bottom) --- */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4 md:hidden flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">立即致电求助</span>
                    <a href="tel:808-528-7177" className="font-bold text-blue-900 text-lg">(808) 528-7177</a>
                </div>
                <Link
                    href="#consultation-form"
                    className="bg-[#5F7161] hover:bg-[#4A584C] text-white font-bold py-3 px-6 rounded-lg text-sm shadow-lg transition-colors uppercase tracking-wide"
                >
                    免费咨询预约
                </Link>
            </div>

            {/* --- Header (Clean White & Sage Style) --- */}
            <header className="bg-white text-slate-800 py-4 border-b-4 border-[#5F7161] shadow-sm relative z-50">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg">
                            <Image
                                src="/images/Acutherapy-icon-png.png"
                                alt="AcuTherapy Logo"
                                width={54}
                                height={54}
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        <div className="leading-tight">
                            <h1 className="text-xl font-serif font-bold tracking-tight text-[#2c3e50]">AcuTherapy Clinics</h1>
                            <p className="text-xs text-[#5F7161] uppercase tracking-widest font-semibold">夏威夷工伤车祸康复理疗门诊</p>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row gap-6 text-sm text-center md:text-right">
                        <div>
                            <p className="font-bold text-[#2c3e50] font-serif">檀香山，珍珠港两大诊所</p>
                            <p className="text-slate-500">接受新患者</p>
                        </div>
                        <a href="tel:808-528-7177" className="bg-[#5F7161] text-white px-6 py-2 rounded-full font-bold hover:bg-[#4A584C] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg">
                            <Phone className="w-4 h-4" />
                            (808) 528-7177
                        </a>
                    </div>
                </div>
            </header>

            {/* --- Hero Section --- */}
            <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#1e293b] text-white">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Hero Copy */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white ring-1 ring-white/50 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                <Star className="w-3 h-3 fill-current text-[#C5A059]" />
                                针对车祸与工伤患者的专业康复理疗机构
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] drop-shadow-lg">
                                遭遇车祸或工伤？<br className="hidden md:block" />
                                <span className="text-white italic">快速止痛，专业康复</span>
                            </h1>
                            <p className="text-xl text-slate-100 md:max-w-lg leading-relaxed drop-shadow-md font-light">
                                通过专业的<strong className="text-white font-serif">针灸、推拿按摩与复健理疗</strong>，我们助您消除疼痛、修复损伤。
                                <br className="my-2 block" />
                                我们为您处理保险理赔，符合条件者可享 <span className="text-white font-semibold underline decoration-[#C5A059] decoration-2 underline-offset-4">100% 免费治疗</span> (零自付费用)。
                            </p>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white drop-shadow-sm">我们处理所有<br />保险文书</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white drop-shadow-sm">100% 全程<br />理赔支持</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                        <Car className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white drop-shadow-sm">两处诊所<br />免费停车</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                        <Languages className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white drop-shadow-sm">讲中文和英语<br />无障碍沟通</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Form */}
                        <div id="consultation-form" className="bg-white/95 backdrop-blur-xl text-slate-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-white/50 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#5F7161]"></div>

                            <h3 className="text-2xl font-serif font-bold mb-2 text-[#2c3e50]">获取免费咨询</h3>
                            <p className="text-slate-500 text-sm mb-6">立即查询您是否符合 100% 费用全免资格。</p>

                            <LeadCaptureFormCN />
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Doctors Section --- */}
            <section className="bg-white py-16 md:py-24 border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2c3e50] mb-4">专业医疗团队，值得信赖</h2>
                        <p className="text-lg text-slate-600">我们的团队由拥有数十年经验的执照医生和治疗师组成。</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Doctor 1 (Moved) */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-48 h-48 bg-slate-100 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center relative">
                                <img
                                    src="/images/dr-choon-kia-yeo.png"
                                    alt="Dr. Choon Kia Yeo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Dr. Choon Kia Yeo</h3>
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">医学博士 (M.D.)</p>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                    美国外科委员会和加拿大皇家内科与外科医师学会认证的外科医生。在夏威夷行医超过50年，经验丰富。
                                </p>
                            </div>
                        </div>

                        {/* Doctor 2 */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-48 h-48 bg-slate-100 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center relative">
                                <img
                                    src="/images/doctor-cai.png"
                                    alt="Dr. David Cai"
                                    className="w-full h-full object-cover scale-110"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Dr. David Cai</h3>
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">主治针灸医师 (L.Ac., O.M.D.)</p>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                    毕业于北京中医药大学，拥有超过25年的临床经验。专注于将传统中医与现代医学结合，独创有效的疼痛管理体系。
                                </p>
                            </div>
                        </div>

                        {/* Doctor 3 */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-48 h-48 bg-slate-100 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center relative">
                                <img
                                    src="/images/doctor-lisa.png"
                                    alt="Lisa Long"
                                    className="w-full h-full object-cover scale-110"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Dr. Lisa Long</h3>
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">医学世家，康复理疗师 (L.M.T., O.M.D.)</p>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                    拥有15年以上针灸和治疗性按摩经验。师从著名中医，专攻疼痛缓解、复健和减重治疗。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Pain Points Verification --- */}
            <section className="bg-slate-50 py-12 md:py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#2c3e50] mb-4">别让保险的复杂程序耽误您的治疗</h2>
                        <p className="text-lg text-slate-600">受伤已经够痛苦了，保险理赔不应该成为您的负担。</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                <Activity className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">有效的痛症治疗</h3>
                            <p className="text-slate-600 leading-relaxed">
                                告别挥鞭性损伤 (Whiplash)、背痛和反复头痛。我们的针灸和按摩疗法针对创伤根源，助您快速康复。
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative z-10 transform md:-translate-y-4 md:border-t-4 md:border-t-blue-500">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                最受欢迎
                            </div>
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                <FileText className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">理赔全程管理</h3>
                            <p className="text-slate-600 leading-relaxed">
                                我们精通夏威夷的无过错保险 (No-Fault) 和工伤赔偿法。我们直接与保险专员沟通，让您省心省力。
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">无自付费用</h3>
                            <p className="text-slate-600 leading-relaxed">
                                在大多数车祸和工伤案件中，您的治疗费用由保险 100% 承担。我们在开始治疗前会为您核实这一点。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- How It Works --- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#2c3e50] mb-16">您的康复之路</h2>

                    <div className="space-y-12 relative before:content-[''] before:absolute before:left-[19px] md:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 before:-z-10">

                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5F7161] text-white font-bold text-lg flex items-center justify-center border-4 border-white shadow-sm z-10 md:order-2 md:mx-auto">1</div>
                            <div className="flex-1 md:text-right md:order-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">免费咨询</h3>
                                <p className="text-slate-600">致电我们或填写表格。我们会询问几个关于您事故的简单问题，以确认符合资格。</p>
                            </div>
                            <div className="hidden md:block flex-1 md:order-3"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5F7161] text-white font-bold text-lg flex items-center justify-center border-4 border-white shadow-sm z-10 md:mx-auto">2</div>
                            <div className="hidden md:block flex-1 md:text-right"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">评估与方案</h3>
                                <p className="text-slate-600">我们的持照针灸师会为您进行详细检查，并针对您的具体伤情制定个性化治疗方案。</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5F7161] text-white font-bold text-lg flex items-center justify-center border-4 border-white shadow-sm z-10 md:order-2 md:mx-auto">3</div>
                            <div className="flex-1 md:text-right md:order-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">安心康复</h3>
                                <p className="text-slate-600">接受定期治疗。我们会直接向保险公司账单。您只需专注于恢复 100% 的健康。</p>
                            </div>
                            <div className="hidden md:block flex-1 md:order-3"></div>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <a href="#consultation-form" className="inline-flex items-center gap-2 bg-[#1e293b] hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                            立即开始康复
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* --- Footer (Unified) --- */}
            <footer className="bg-[#1e293b] text-slate-400 py-12 border-t border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="text-2xl font-bold text-white tracking-tight">AcuTherapy</span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 text-sm mb-8">
                        <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4 text-slate-500" />
                            <span><strong className="text-slate-300">檀香山诊所地址：</strong>1650 Liliha St, Ste 208, Honolulu, HI 96817</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4 text-slate-500" />
                            <span><strong className="text-slate-300">珍珠港诊所地址：</strong>98-211 Pali Momi St, Ste 604, Aiea, HI 96701</span>
                        </div>
                    </div>

                    <p className="text-xs text-slate-600">
                        &copy; {new Date().getFullYear()} AcuTherapy Clinics. All rights reserved. <br />
                        免责声明：结果可能因人而异。承保范围需经保险公司核实。
                    </p>
                </div>
            </footer>
        </main>
    );
}
