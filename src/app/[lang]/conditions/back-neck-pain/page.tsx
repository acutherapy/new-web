import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Advanced Back & Neck Pain Relief in Honolulu, HI | AcuTherapy Clinics",
  description: "Effective holistic treatments for back pain, neck stiffness, and sciatica. Relieve chronic pain naturally with our expert acupuncture team in Hawaii.",
};

export default function Page() {
  return <ClientPage />;
}
