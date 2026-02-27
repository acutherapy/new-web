import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Cupping Therapy & Traditional Chinese Medicine in Honolulu, HI",
  description: "Experience the healing benefits of Cupping Therapy. Reduce inflammation, promote blood flow, and relieve muscle soreness at AcuTherapy Clinics.",
};

export default function Page() {
  return <ClientPage />;
}
