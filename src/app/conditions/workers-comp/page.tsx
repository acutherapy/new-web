import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Workers' Comp Acupuncture & Injury Rehab in Honolulu | AcuTherapy",
  description: "We accept Workers' Compensation for work-related injuries. Relieve pain and accelerate recovery with our certified acupuncturists in Honolulu and Aiea.",
};

export default function Page() {
  return <ClientPage />;
}
