import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AcuTherapy Clinics - Holistic Healing & Acupuncture | Honolulu & Aiea",
    template: "%s | AcuTherapy Clinics"
  },
  description: "Premier acupuncture and holistic healing in Honolulu & Aiea. Specializing in pain relief, auto accident recovery, workers' comp, and veterans care. Services include Acupuncture, Massage, Cupping, and Herbal Medicine.",
  keywords: [
    "Acupuncture", "Honolulu", "Aiea", "Pearl City", "Hawaii",
    "Pain Relief", "Massage", "Cupping", "Holistic Healing",
    "Auto Accident", "Whiplash", "Workers Compensation", "Veterans", "PTSD",
    "鍼灸", "ホノルル", "痛み緩和", "マッサージ", "カッピング", "交通事故", "むち打ち", "労災",
    "针灸", "檀香山", "疼痛缓解", "推拿", "拔罐", "车祸伤害", "工伤"
  ],
  authors: [{ name: "Dr. David Cai" }, { name: "AcuTherapy Clinics Team" }],
  creator: "AcuTherapy Clinics",
  publisher: "AcuTherapy Clinics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AcuTherapy Clinics - Holistic Healing & Acupuncture",
    description: "Expert acupuncture, massage, and holistic care in Honolulu & Aiea. Specializing in pain relief and injury recovery.",
    url: "https://acutherapy-web.vercel.app",
    siteName: "AcuTherapy Clinics",
    images: [
      {
        url: "https://acutherapy-web.vercel.app/images/Acutherapy-icon-png.png",
        width: 800,
        height: 600,
        alt: "AcuTherapy Clinics Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcuTherapy Clinics - Holistic Healing & Acupuncture",
    description: "Premier acupuncture and holistic healing in Honolulu & Aiea. Recover from pain, stress, and injuries naturally.",
    images: ["https://acutherapy-web.vercel.app/images/Acutherapy-icon-png.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "XayOWS2PGn8yPKMRY6X49VsYIBVtecz_yKBDnUC6oVk",
  },
  icons: {
    icon: "/images/Acutherapy-icon-png.png",
    apple: "/images/Acutherapy-icon-png.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased font-sans`}
      >
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-X1F5HGFF31" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X1F5HGFF31');
          `}
        </Script>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <AIChatbot />
          <Footer />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["MedicalClinic", "HealthAndBeautyBusiness"],
                "name": "AcuTherapy Clinics - Honolulu Branch",
                "sameAs": "https://maps.app.goo.gl/ZeCVHeCsdDXUHekR6",
                "medicalSpecialty": ["Acupuncture", "Medical massage", "Cupping", "TraditionalChineseMedicine"],
                "description": "Specializing in Workers' Compensation, No-Fault Auto Accidents, and Veterans (VA) Care. We provide expert acupuncture, medical massage, and holistic pain relief in Honolulu.",
                "image": "https://acutherapy-web.vercel.app/images/Acutherapy-icon-png.png",
                "url": "https://acutherapy-web.vercel.app",
                "telephone": "+18085287177",
                "faxNumber": "+18082129459",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1650 Liliha St, Suite 208",
                  "addressLocality": "Honolulu",
                  "addressRegion": "HI",
                  "postalCode": "96817",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.3216,
                  "longitude": -157.8601
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "17:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
                  }
                ],
                "priceRange": "$$",
                "employee": [
                  {
                    "@type": "Person",
                    "name": "Dr. David Cai",
                    "jobTitle": "Lead Acupuncturist/L.Ac., L.M.T., O.M.D.",
                    "description": "Specializes in injury recovery, pain management and herbal remedies."
                  },
                  {
                    "@type": "Person",
                    "name": "Lisa Long",
                    "jobTitle": "O.M.D., L.M.T.",
                    "description": "Specializing in pain relief, rehabilitation, and weight loss."
                  },
                  {
                    "@type": "Person",
                    "name": "Anne",
                    "jobTitle": "O.T., Patient Care Manager"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "86"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": ["MedicalClinic", "HealthAndBeautyBusiness"],
                "name": "AcuTherapy Clinics - Aiea/Pearl City Branch",
                "sameAs": "https://maps.app.goo.gl/AZHxWvdNAjEVospUA",
                "medicalSpecialty": ["Acupuncture", "Medical massage", "Cupping", "TraditionalChineseMedicine"],
                "description": "Specializing in Workers' Compensation, No-Fault Auto Accidents, and Veterans (VA) Care. We provide expert acupuncture, medical massage, and holistic pain relief in Aiea and Pearl City.",
                "image": "https://acutherapy-web.vercel.app/images/Acutherapy-icon-png.png",
                "url": "https://acutherapy-web.vercel.app",
                "telephone": "+18084521900",
                "faxNumber": "+18084521521",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "98-211 Pali Momi St, Suite 604",
                  "addressLocality": "Aiea",
                  "addressRegion": "HI",
                  "postalCode": "96701",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.3853,
                  "longitude": -157.9427
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "17:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
                  }
                ],
                "priceRange": "$$",
                "employee": [
                  {
                    "@type": "Person",
                    "name": "ShuKai",
                    "jobTitle": "Rehabilitation Specialist/O.M.D., L.Ac.",
                    "description": "Expert in Eastern and Western technicalities for recovery."
                  },
                  {
                    "@type": "Person",
                    "name": "Choon Kia Yeo",
                    "jobTitle": "M.D.",
                    "description": "Physician and surgeon certified by the American Board of Surgery."
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "42"
                }
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
