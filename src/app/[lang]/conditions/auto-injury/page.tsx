import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Auto Injury Recovery & Whiplash Treatment in Honolulu, HI | AcuTherapy Clinics",
  description: "Specialized auto accident injury treatment, no-fault insurance accepted. Expert acupuncture and medical massage for whiplash in Honolulu and Aiea.",
};

export default function Page() {
  return <ClientPage />;
}
