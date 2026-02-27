import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "PTSD & Pain Management for Veterans (VA Care) in Honolulu",
  description: "Proudly serving Veterans in Hawaii. Specialized VA-approved acupuncture and massage for PTSD, chronic pain, and stress management at AcuTherapy Clinics.",
};

export default function Page() {
  return <ClientPage />;
}
