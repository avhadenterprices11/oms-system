"use client";

import { SocialMediaLayout } from "@/components/oms/layouts/SocialMediaLayout";
import { useRouter } from "next/navigation";

export default function SocialCalendarPage() {
  const router = useRouter();
  return <SocialMediaLayout onNavigateBack={() => router.push("/")} />;
}
