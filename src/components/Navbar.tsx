"use client";

import Link from "@/components/LocalLink";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { name: t.nav.home, href: "/" },
    {
      name: t.nav.about,
      href: "/about",
      children: [
        { name: t.pages.about.team.title, href: "/about" }, // Using "Our Team" title from translation
        { name: t.nav.whoWeHelp, href: "/who-we-help" },
        { name: t.nav.successStory, href: "/success-stories" },
        { name: t.nav.blog, href: "/blog" },
      ]
    },
    {
      name: t.nav.services,
      href: "/services",
      children: [
        { name: t.sections.services.acupuncture, href: "/services/acupuncture" },
        { name: t.sections.services.massage, href: "/services/medical-massage" },
        { name: t.sections.services.cupping, href: "/services/cupping" },
        { name: t.sections.services.insurance, href: "/insurance-payment" },
      ]
    },
    {
      name: t.nav.conditions,
      href: "/conditions",
      children: [
        { name: t.sections.conditions.items.backNeck.title, href: "/conditions/back-neck-pain" },
        { name: t.sections.conditions.items.stressAnxiety.title, href: "/conditions/stress-anxiety" },
        { name: t.sections.patients.auto.title, href: "/conditions/auto-injury" },
        { name: t.sections.patients.vets.title, href: "/conditions/ptsd-veterans" },
        { name: t.sections.patients.work.title, href: "/conditions/workers-comp" },
      ]
    },
    {
      name: `${t.nav.locations} & ${t.nav.contact}`,
      href: "/contact",
      children: [
        { name: t.pages.locations.honolulu.name, href: "/locations/honolulu" },
        { name: t.pages.locations.aiea.name, href: "/locations/aiea" },
        { name: t.nav.contact, href: "/contact" },
        { name: "(808) 528-7177", href: "tel:8085287177" },
      ]
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-teal-900 dark:text-zinc-100">
                AcuTherapy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-teal-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                    {link.children && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>

                  {link.children && (
                    <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pt-2">
                      <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-zinc-900 dark:ring-zinc-700 overflow-hidden">
                        <div className="py-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"
            >
              <Phone className="h-4 w-4" />
              (808) 528-7177
            </Link>
            <LanguageSwitcher />
            <Link
              href="/book"
              className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden max-h-[80vh] overflow-y-auto">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {links.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 hover:text-teal-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-teal-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-3">
              <LanguageSwitcher />
            </div>
            <Link
              href="/book"
              className="mt-4 flex w-full items-center justify-center rounded-md bg-teal-600 px-3 py-2 text-base font-medium text-white hover:bg-teal-700"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
