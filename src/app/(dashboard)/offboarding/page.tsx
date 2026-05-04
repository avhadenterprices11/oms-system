"use client";

import { OffboardingLayout } from "@/components/oms/layouts/OffboardingLayout";
import { useRouter } from "next/navigation";

export default function OffboardingPage() {
  const router = useRouter();
  return <OffboardingLayout onNavigateBack={() => router.push("/")} />;
}
