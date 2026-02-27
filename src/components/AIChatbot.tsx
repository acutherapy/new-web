"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ReactMarkdown from "react-markdown";

const GREETINGS = {
    EN: "Hello! I'm your AcuTherapy assistant. How can I help you today?",
    JA: "こんにちは！AcuTherapyのアシスタントです。どのようなご用件でしょうか？",
    ZH: "你好！我是您的AcuTherapy助手。今天我可以怎么帮您？"
};

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const { lang } = useLanguage();
    const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([
        { role: "assistant", text: GREETINGS[lang] || GREETINGS.EN },
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Update greeting when language changes if no conversation has started
    useEffect(() => {
        if (messages.length === 1 && messages[0].role === "assistant") {
            setMessages([{ role: "assistant", text: GREETINGS[lang] || GREETINGS.EN }]);
        }
    }, [lang]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
        setInput("");

        // Call our secure API route
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [
                        ...messages.map(m => ({ role: m.role, content: m.text })),
                        { role: "user", content: userMessage }
                    ],
                    language: lang === 'JA' ? 'Japanese' : lang === 'ZH' ? 'Chinese (Simplified)' : 'English'
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                // If API key is missing or errored, fallback to a safe message
                console.warn("API Error:", data.error);
                setMessages((prev) => [...prev, {
                    role: "assistant",
                    text: lang === 'JA'
                        ? "申し訳ありませんが、AIサービスに接続できません。直接(808) 528-7177までご連絡ください。"
                        : lang === 'ZH'
                            ? "抱歉，无法连接到AI服务。请直接致电 (808) 528-7177 联系我们。"
                            : "I'm currently unable to connect to the AI service. Please contact us directly at (808) 528-7177."
                }]);
                return;
            }

            setMessages((prev) => [...prev, { role: "assistant", text: data.content }]);

        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [...prev, {
                role: "assistant",
                text: lang === 'JA'
                    ? "エラーが発生しました。後でもう一度お試しください。"
                    : lang === 'ZH'
                        ? "抱歉，遇到错误。请稍后再试。"
                        : "Sorry, I encountered an error. Please try again later."
            }]);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 h-96">
                    {/* Header */}
                    <div className="bg-navy p-4 text-white flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Bot className="h-5 w-5" />
                            <span className="font-semibold font-serif">Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:text-gold">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 dark:bg-black/20" ref={scrollRef}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-lg px-4 py-3 text-sm shadow-sm ${msg.role === "user"
                                        ? "bg-navy text-white rounded-br-none"
                                        : "bg-white text-zinc-800 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 rounded-bl-none"
                                        }`}
                                >
                                    {msg.role === "assistant" ? (
                                        <div className="space-y-2 [&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4 [&>p]:leading-relaxed [&>strong]:font-bold [&>h1]:font-bold [&>h2]:font-bold [&>h3]:font-bold">
                                            <ReactMarkdown
                                                components={{
                                                    a: (props: any) => <a {...props} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" />
                                                }}
                                            >
                                                {msg.text}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 rounded-full border border-zinc-300 px-4 py-2 text-sm focus:border-gold focus:outline-none dark:bg-zinc-800 dark:border-zinc-700"
                        />
                        <button
                            type="submit"
                            className="rounded-full bg-navy p-2 text-white hover:bg-navy/90 disabled:opacity-50"
                            disabled={!input.trim()}
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            )}

            {/* FAB Toggle */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105 hover:bg-navy/90 focus:outline-none focus:ring-4 focus:ring-navy/30"
                >
                    <MessageSquare className="h-6 w-6" />
                </button>
            )}
        </div>
    );
}
