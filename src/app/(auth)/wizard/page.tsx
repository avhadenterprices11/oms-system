"use client";

import { InteractiveWizard } from "@/components/oms/screens/InteractiveWizard";
import { useRouter } from "next/navigation";

export default function WizardPage() {
  const router = useRouter();

  const handleNext = () => router.push("/setup");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f6f6f8]">
      <InteractiveWizard
        onContinue={handleNext}
        onSkip={handleNext}
      />
    </div>
  );
}
