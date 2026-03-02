
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "夏威夷工伤车祸康复理疗门诊 | AcuTherapy Clinics",
    description: "檀香山专业的针灸和理疗服务。我们专注于车祸受伤、工伤康复和疼痛管理。接受各类保险。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
