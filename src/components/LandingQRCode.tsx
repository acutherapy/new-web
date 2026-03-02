"use client";

import React, { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import { QrCode, X } from 'lucide-react';

export default function LandingQRCode() {
    const [url, setUrl] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Only run on client after mount
        setUrl(window.location.href);
    }, []);

    // If there is no URL yet, do not render to clear hydration errors
    if (!url) return null;

    return (
        <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end">
            {isOpen && (
                <div className="bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-slate-100 mb-4 animate-in slide-in-from-bottom-2 fade-in duration-200">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Share / Scan</span>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-1 transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="bg-white p-2 border border-slate-100 rounded-xl">
                        <QRCode value={url} size={140} />
                    </div>
                    <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">Scan to open on mobile <br />(扫码在手机上打开)</p>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all ${isOpen ? 'bg-slate-800 text-white scale-90' : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-[#7c9a81] hover:text-[#166534]'}`}
                title="Show QR Code"
            >
                {isOpen ? <X className="w-5 h-5" /> : <QrCode className="w-6 h-6" />}
            </button>
        </div>
    );
}
