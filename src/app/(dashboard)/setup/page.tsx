"use client";

import { InteractiveDashboard } from "@/components/oms/screens/InteractiveDashboard";
import { useRouter } from "next/navigation";

export default function SetupPage() {
  const router = useRouter();

  return (
    <InteractiveDashboard 
      onSkipSetup={() => router.push("/")} 
    />
  );
}
