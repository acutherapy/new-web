import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Aiea / Pearl City Acupuncture Clinic | AcuTherapy Clinics",
  description: "Our Aiea branch offers top-rated acupuncture, massage, and injury recovery services. Conveniently located near Pearl City, HI.",
};

export default function Page() {
  return <ClientPage />;
}
