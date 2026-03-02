
import React from 'react';
import { Metadata } from 'next';
import Link from "@/components/LocalLink";
import Image from 'next/image';
import { CheckCircle2, Phone, FileText, Activity, ArrowRight, ShieldCheck, MapPin, Star, Car, Languages } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
    title: 'Auto Injury & Worker\'s Comp Acupuncture | $0 Out of Pocket Treatment',
    description: 'Specialized acupuncture & massage care for auto accidents and work injuries in Honolulu. We handle all insurance paperwork. No out-of-pocket costs for qualified claims.',
    openGraph: {
        title: 'Auto Accident & Work Injury Recovery - AcuTherapy Clinics',
        description: 'Auto Accident? Work Injury? We provide acupuncture, massage & rehab with 0% out-of-pocket cost for most insurance. We handle all paperwork.',
        images: ['/images/Acutherapy-icon-png.png'],
    },
};

export default function InjuryLandingPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-yellow-100 selection:text-yellow-900">

            {/* --- Sticky Mobile CTA (Bottom) --- */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4 md:hidden flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Call Now For Help</span>
                    <a href="tel:808-528-7177" className="font-bold text-blue-900 text-lg">(808) 528-7177</a>
                </div>
                <Link
                    href="#consultation-form"
                    className="bg-[#5F7161] hover:bg-[#4A584C] text-white font-bold py-3 px-6 rounded-lg text-sm shadow-lg transition-colors uppercase tracking-wide"
                >
                    Book Free Consult
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
                            <p className="text-xs text-[#5F7161] uppercase tracking-widest font-semibold">Hawaii Work & Auto Injury Recovery Clinic</p>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row gap-6 text-sm text-center md:text-right">
                        <div>
                            <p className="font-bold text-[#2c3e50] font-serif">Honolulu & Pearl Harbor Clinics</p>
                            <p className="text-slate-500">Accepting New Patients</p>
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
                                Professional Recovery Clinic for Auto & Work Injuries
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] drop-shadow-lg">
                                In a Car Accident or Work Injury?<br className="hidden md:block" />
                                <span className="text-white italic">Fast Pain Relief, Professional Recovery</span>
                            </h1>
                            <p className="text-xl text-slate-100 md:max-w-lg leading-relaxed drop-shadow-md font-light">
                                Through professional <strong className="text-white font-serif">Acupuncture, Massage & Rehab Therapy</strong>, we help you eliminate pain and repair injuries.
                                <br className="my-2 block" />
                                We handle insurance claims for you. Qualified patients enjoy <span className="text-white font-semibold underline decoration-[#C5A059] decoration-2 underline-offset-4">100% Free Treatment</span> (Zero Out-of-Pocket).
                            </p>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white drop-shadow-sm">We Handle All<br />Paperwork</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white drop-shadow-sm">100% Insurance<br />Coverage Support</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                        <Car className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white drop-shadow-sm">Free Parking<br />At Both Clinics</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                        <Languages className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white drop-shadow-sm">Bilingual Staff<br />(Chinese & English)</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Form */}
                        <div id="consultation-form" className="bg-white/95 backdrop-blur-xl text-slate-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-white/50 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#5F7161]"></div>

                            <h3 className="text-2xl font-serif font-bold mb-2 text-[#2c3e50]">Get Your Free Consultation</h3>
                            <p className="text-slate-500 text-sm mb-6">Find out if you qualify for 100% coverage immediately.</p>

                            <LeadCaptureForm />
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Doctors Section --- */}
            <section className="bg-white py-16 md:py-24 border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2c3e50] mb-4">Professional Medical Team You Can Trust</h2>
                        <p className="text-lg text-slate-600">Our team consists of licensed doctors and therapists with decades of experience.</p>
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
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">M.D.</p>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                    Board Certified Surgeon (US & Canada). Over 50 years of medical experience in Hawaii.
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
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">L.Ac., O.M.D.</p>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                    Beijing University of TCM Graduate. Over 25 years of clinical experience. Combines Traditional Chinese Medicine with modern medicine for effective pain management.
                                </p>
                            </div>
                        </div>

                        {/* Doctor 3 */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-48 h-48 bg-slate-100 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center relative">
                                <img
                                    src="/images/doctor-lisa.png"
                                    alt="Dr. Lisa Long"
                                    className="w-full h-full object-cover scale-110"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Dr. Lisa Long</h3>
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Rehab Therapist (L.M.T., O.M.D.)</p>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                    From a medical family. Over 15 years experience in acupuncture and therapeutic massage. Specializes in pain relief, rehabilitation, and weight loss.
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
                        <h2 className="text-3xl font-serif font-bold text-[#2c3e50] mb-4">Don't Let Insurance Confusion Delay You</h2>
                        <p className="text-lg text-slate-600">Dealing with an injury is hard enough. Dealing with insurance claims shouldn't be.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                <Activity className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Effective Pain Relief</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Say goodbye to whiplash, back pain, and recurring headaches. Our acupuncture and massage therapies target the root of trauma.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative z-10 transform md:-translate-y-4 md:border-t-4 md:border-t-blue-500">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Most Popular
                            </div>
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                <FileText className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Claim Management</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We are experts in Hawaii's No-Fault and Worker's Comp laws. We communicate directly with adjusters so you don't have to.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">No Out-of-Pocket</h3>
                            <p className="text-slate-600 leading-relaxed">
                                In most auto and work injury cases, your treatment is 100% covered by insurance. We verify this before you start.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- How It Works --- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#2c3e50] mb-16">Your Path to Recovery</h2>

                    <div className="space-y-12 relative before:content-[''] before:absolute before:left-[19px] md:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 before:-z-10">

                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5F7161] text-white font-bold text-lg flex items-center justify-center border-4 border-white shadow-sm z-10 md:order-2 md:mx-auto">1</div>
                            <div className="flex-1 md:text-right md:order-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Free Consultation</h3>
                                <p className="text-slate-600">Call us or fill out the form. We'll ask a few simple questions about your accident to determine eligibility.</p>
                            </div>
                            <div className="hidden md:block flex-1 md:order-3"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5F7161] text-white font-bold text-lg flex items-center justify-center border-4 border-white shadow-sm z-10 md:mx-auto">2</div>
                            <div className="hidden md:block flex-1 md:text-right"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Evaluation & Plan</h3>
                                <p className="text-slate-600">Our licensed acupuncturists perform a thorough exam and create a custom treatment plan for your specific injuries.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5F7161] text-white font-bold text-lg flex items-center justify-center border-4 border-white shadow-sm z-10 md:order-2 md:mx-auto">3</div>
                            <div className="flex-1 md:text-right md:order-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Heal Without Stress</h3>
                                <p className="text-slate-600">Receive regular treatments. We bill the insurance directly. You focus on getting back to 100%.</p>
                            </div>
                            <div className="hidden md:block flex-1 md:order-3"></div>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <a href="#consultation-form" className="inline-flex items-center gap-2 bg-[#1e293b] hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                            Start Your Recovery Today
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
                            <span><strong className="text-slate-300">Honolulu Clinic Address:</strong> 1650 Liliha St, Ste 208, Honolulu, HI 96817</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4 text-slate-500" />
                            <span><strong className="text-slate-300">Pearl Harbor Clinic Address:</strong> 98-211 Pali Momi St, Ste 604, Aiea, HI 96701</span>
                        </div>
                    </div>

                    <p className="text-xs text-slate-600">
                        &copy; {new Date().getFullYear()} AcuTherapy Clinics. All rights reserved. <br />
                        Disclaimer: Results may vary. Coverage is subject to insurance verification.
                    </p>
                </div>
            </footer>
        </main>
    );
}
