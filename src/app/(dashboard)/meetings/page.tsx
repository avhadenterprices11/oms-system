"use client";

import { MeetingsLayout } from "@/components/oms/layouts/MeetingsLayout";
import { useRouter } from "next/navigation";

export default function MeetingsLayoutPage() {
  const router = useRouter();
  return <MeetingsLayout onNavigateBack={() => router.push("/")} />;
}