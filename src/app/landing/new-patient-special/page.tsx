import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Star, MapPin, Phone } from 'lucide-react';
import SpecialOfferForm from '@/components/SpecialOfferForm';

export const metadata: Metadata = {
    title: 'New Patient Special - $109 Consultation & Treatment | AcuTherapy',
    description: 'Exclusive offer: Get a Consultation, Detailed Exam, Report of Findings & First Acupuncture Treatment for only $109. Limited time offer.',
    openGraph: {
        title: 'New Patient Special - $109 Consultation & Treatment',
        description: 'Get a full acupuncture consultation, exam, and treatment for only $109 (Regular $220+). Experience pain relief today!',
        images: ['/images/Acutherapy-icon-png.png'],
    },
};

export default function SpecialOfferPage() {
    return (
        <main className="min-h-screen bg-slate-900 font-sans text-slate-900 relative">
            {/* Background Image Fixed */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/sage_green_hero.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
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
                            <p className="text-xs text-[#5F7161] uppercase tracking-widest font-semibold">Holistic Healing Center</p>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row gap-6 text-sm text-center md:text-right">
                        <div>
                            <p className="font-bold text-[#2c3e50] font-serif">Honolulu & Aiea Locations</p>
                            <p className="text-slate-500">Accepting New Patients</p>
                        </div>
                        <a href="tel:808-528-7177" className="bg-[#5F7161] text-white px-6 py-2 rounded-full font-bold hover:bg-[#4A584C] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg">
                            <Phone className="w-4 h-4" />
                            (808) 528-7177
                        </a>
                    </div>
                </div>
            </header>

            {/* --- Main Content Split --- */}
            <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: The Offer & Form */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 ring-1 ring-black/5">
                            <div className="bg-[#5F7161] p-6 text-white text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <h2 className="text-2xl font-serif font-bold uppercase tracking-wide relative z-10">New Patient Special</h2>
                                <p className="text-green-50 text-sm mt-1 relative z-10">Limited Time Internet Offer</p>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="text-center mb-8">
                                    <p className="text-slate-600 font-medium mb-2">Get A Consultation, Detailed Exam, Report Of Findings & First Acupuncture Treatment For Only</p>
                                    <div className="text-6xl font-serif font-bold text-[#2c3e50] tracking-tighter">
                                        $109
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2 line-through">Regular Price: $220+</p>
                                </div>

                                <SpecialOfferForm />
                            </div>
                            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                                <p className="text-xs text-slate-500">*We also accept No-Fault, Worker's Comp & VA Insurance</p>
                            </div>
                        </div>


                    </div>

                    {/* Right Column: Hero Content & Copy */}
                    <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12 space-y-8 text-white">
                        <div>
                            <span className="inline-block px-3 py-1 bg-[#C5A059] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                                Ancient Techniques, Modern Results
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
                                Reclaim Your Life From Pain & Stress.
                            </h2>
                            <p className="text-lg text-slate-100 leading-relaxed mb-6 font-light drop-shadow-md">
                                Experience the healing power of acupuncture. Whether you're suffering from chronic pain, injury, migraines, or stress, our licensed specialists are here to help you heal naturally—without drugs or surgery.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Effective Pain Relief (Back, Neck, Joints)",
                                    "Stress & Anxiety Reduction",
                                    "Insmomnia & Sleep Improvement",
                                    "Migraine & Headache Relief",
                                    "Sciatica & Nerve Pain",
                                    "Holistic Wellness Approach"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white font-medium drop-shadow-sm">
                                        <div className="w-6 h-6 rounded-full bg-white/20 text-[#C5A059] flex items-center justify-center flex-shrink-0 border border-white/30 backdrop-blur-sm">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Testimonial Box */}
                        <div className="bg-white/10 backdrop-blur-md border-l-4 border-[#C5A059] p-6 rounded-r-xl shadow-lg">
                            <div className="flex text-[#C5A059] mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-slate-100 italic mb-4">
                                "I was skeptical at first, but after just one session, my shoulder pain was significantly reduced. The staff is professional and truly cares about your recovery."
                            </p>
                            <p className="font-bold text-white">- Ron Wakita</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Doctors Section --- */}
            <section className="bg-white py-16 md:py-24 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2c3e50] mb-4">Professional Medical Team You Can Trust</h2>
                        <p className="text-lg text-slate-600">Our team consists of licensed doctors and therapists with decades of experience.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Doctor 1 */}
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

            {/* --- Footer (Unified) --- */}
            <footer className="bg-[#1e293b] text-slate-400 py-12 border-t border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="text-2xl font-bold text-white tracking-tight">AcuTherapy</span>
                    </div>

                    <div className="flex flex-col items-center justify-center mb-8 gap-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <p className="font-bold text-white text-sm">5-Star Rated Clinic</p>
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
