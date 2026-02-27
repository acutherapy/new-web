import Hero from "@/components/Hero";
import SymptomChecker from "@/components/SymptomChecker";
import PatientFocus from "@/components/PatientFocus";
import ConditionCards from "@/components/ConditionCards";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <PatientFocus />
      <SymptomChecker />
      <ConditionCards />
      <Reviews />
    </>
  );
}
