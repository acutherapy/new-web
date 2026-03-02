import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Honolulu Acupuncture Clinic | Specialists in Pain Relief & Injury",
  description: "Visit AcuTherapy Clinics in Honolulu (Liliha St). Expert acupuncturists specializing in auto injuries, back pain, and holistic wellness.",
};

export default function Page() {
  return <ClientPage />;
}
