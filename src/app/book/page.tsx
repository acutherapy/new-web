"use client";

import { useState } from "react";
import { Calendar, Check, ChevronRight, Loader2, User, Phone, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BookPage() {
    const { t, lang } = useLanguage();
    // Step 0: New vs Returning, Step 1: Reason, Step 2: Personal, Step 3: Success
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        preferredLocation: "", // Split from preferredTime
        contactMethod: "Phone", // New field
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, language: lang }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit appointment');
            }

            setStep(3); // Success step

        } catch (error) {
            console.error('Submission Error:', error);
            alert("Sorry, something went wrong. Please try calling us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 max-w-2xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                    {t.pages.book.title}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    {t.pages.book.subtitle}
                </p>
            </div>

            {/* Step 0: Patient Type Selection */}
            {step === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button
                        onClick={() => setStep(1)}
                        className="flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-teal-600 dark:hover:border-teal-600 hover:shadow-lg transition-all group"
                    >
                        <div className="h-16 w-16 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <User className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                        </div>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t.pages.book.form.newPatient}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-center text-sm">
                            {t.pages.book.form.newPatientDesc}
                        </p>
                    </button>

                    <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-600 dark:hover:border-blue-600 hover:shadow-lg transition-all group">
                        <div className="h-16 w-16 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                            <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{t.pages.book.form.returningPatient}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-center text-sm mb-6">
                            {t.pages.book.form.returningPatientDesc}
                        </p>
                        <a
                            href="https://acutherapy.janeapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center"
                        >
                            <Calendar className="h-4 w-4 mr-2" /> {t.pages.book.form.bookOnline}
                        </a>
                    </div>
                </div>
            )}

            {/* Form Steps */}
            {step > 0 && (
                <>
                    {/* Progress Bar */}
                    <div className="mb-8 flex justify-between items-center relative">
                        <div className="absolute left-0 top-1/2 -z-10 h-0.5 w-full bg-zinc-200 dark:bg-zinc-800" />
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white dark:bg-black transition-colors ${step >= 1 ? "border-teal-600 text-teal-600" : "border-zinc-300 text-zinc-300"}`}>
                            <Calendar className="h-5 w-5" />
                        </div>
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white dark:bg-black transition-colors ${step >= 2 ? "border-teal-600 text-teal-600" : "border-zinc-300 text-zinc-300"}`}>
                            <User className="h-5 w-5" />
                        </div>
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white dark:bg-black transition-colors ${step >= 3 ? "border-teal-600 text-teal-600" : "border-zinc-300 text-zinc-300"}`}>
                            <Check className="h-5 w-5" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">

                        {/* Step 1: Location & Reason */}
                        {step === 1 && (
                            <form onSubmit={handleNext} className="space-y-6">
                                <h2 className="text-xl font-semibold">{t.pages.book.steps.symptoms}</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            {t.pages.book.form.time} (Preferred Location)
                                        </label>
                                        <select
                                            required
                                            name="preferredLocation"
                                            value={formData.preferredLocation}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-zinc-300 p-2 dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                        >
                                            <option value="">{t.pages.book.form.selectLocation}</option>
                                            <option value="Honolulu">{t.pages.book.form.honolulu}</option>
                                            <option value="Aiea">{t.pages.book.form.aiea}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            {t.pages.book.form.reason}
                                        </label>
                                        <textarea
                                            required
                                            name="reason"
                                            rows={3}
                                            value={formData.reason}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-zinc-300 p-2 dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                            placeholder={t.pages.book.form.reasonPlaceholder}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep(0)}
                                        className="w-1/3 rounded-md border border-zinc-300 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        {t.pages.book.form.back}
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-2/3 flex items-center justify-center rounded-md bg-teal-600 py-3 text-white font-medium hover:bg-teal-700 transition-colors"
                                    >
                                        {t.pages.book.form.next} <ChevronRight className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Step 2: Personal Details */}
                        {step === 2 && (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-xl font-semibold">{t.pages.book.steps.personal}</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">{t.pages.book.form.name}</label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-zinc-300 p-2 dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">{t.pages.book.form.contactMethod}</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, contactMethod: "Phone" })}
                                                className={`p-2 rounded border text-sm flex items-center justify-center gap-1 ${formData.contactMethod === "Phone" ? "border-teal-600 bg-teal-50 text-teal-700 dark:bg-teal-900/20" : "border-zinc-300"}`}
                                            >
                                                <Phone className="h-3 w-3" /> {t.pages.book.form.phoneMethod}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, contactMethod: "Text" })}
                                                className={`p-2 rounded border text-sm flex items-center justify-center gap-1 ${formData.contactMethod === "Text" ? "border-teal-600 bg-teal-50 text-teal-700 dark:bg-teal-900/20" : "border-zinc-300"}`}
                                            >
                                                <MessageSquare className="h-3 w-3" /> {t.pages.book.form.textMethod}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, contactMethod: "Email" })}
                                                className={`p-2 rounded border text-sm flex items-center justify-center gap-1 ${formData.contactMethod === "Email" ? "border-teal-600 bg-teal-50 text-teal-700 dark:bg-teal-900/20" : "border-zinc-300"}`}
                                            >
                                                <Mail className="h-3 w-3" /> {t.pages.book.form.emailMethod}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">{t.pages.book.form.email}</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-zinc-300 p-2 dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">{t.pages.book.form.phone}</label>
                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-zinc-300 p-2 dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                            placeholder="(808) 555-0123"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="w-1/3 rounded-md border border-zinc-300 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        {t.pages.book.form.back}
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-2/3 flex items-center justify-center rounded-md bg-teal-600 py-3 text-white font-medium hover:bg-teal-700 transition-colors disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin mr-2" /> {t.pages.book.form.submitting}
                                            </>
                                        ) : (
                                            t.pages.book.form.submit
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Step 3: Success */}
                        {step === 3 && (
                            <div className="text-center py-8">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                                    <Check className="h-8 w-8" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">{t.pages.book.steps.success}</h2>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                                    {t.pages.book.success.message.replace("{name}", formData.name).replace("{phone}", formData.phone)}
                                </p>
                                <button
                                    onClick={() => window.location.href = "/"}
                                    className="text-teal-600 font-medium hover:underline"
                                >
                                    {t.pages.book.success.backHome}
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
