import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Professional Medical Massage in Honolulu, HI | Pain Relief Massage",
  description: "Targeted medical massage therapy to relieve muscle tension, treat injuries, and improve mobility. Serving Honolulu, Pearl City, and Aiea.",
};

export default function Page() {
  return <ClientPage />;
}
