import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Acupuncture for Stress, Anxiety & Insomnia in Honolulu | AcuTherapy",
  description: "Find natural relief from stress, anxiety, and sleep disorders. Experience deep relaxation with our traditional Chinese medicine and acupuncture.",
};

export default function Page() {
  return <ClientPage />;
}
