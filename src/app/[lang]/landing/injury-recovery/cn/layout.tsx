
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "夏威夷工伤车祸康复理疗门诊 | AcuTherapy Clinics",
    description: "檀香山专业的车祸与工伤针灸按摩治疗。我们处理所有保险文书，符合条件的理赔无需自付费用。",
    openGraph: {
        title: "夏威夷工伤车祸康复理疗 - 100% 费用全免咨询",
        description: "遭遇车祸或工伤？我们提供专业的针灸、推拿与复健理疗。我们直接与保险对接，为您处理所有理赔文书。",
        images: ['/images/Acutherapy-icon-png.png'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
