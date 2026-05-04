"use client";

import { LeaveLayout } from "@/components/oms/layouts/LeaveLayout";
import { useRouter } from "next/navigation";

export default function LeavePage() {
  const router = useRouter();
  return <LeaveLayout onNavigateBack={() => router.push("/")} />;
}
