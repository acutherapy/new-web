import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Expert Acupuncture Therapy in Honolulu & Aiea, HI | AcuTherapy Clinics",
  description: "Traditional and modern acupuncture treatments for pain relief, injury recovery, and holistic wellness. Book your session in Honolulu or Aiea today.",
};

export default function Page() {
  return <ClientPage />;
}
