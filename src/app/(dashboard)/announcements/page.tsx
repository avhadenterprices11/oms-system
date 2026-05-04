"use client";

import { AnnouncementsLayout } from "@/components/oms/layouts/AnnouncementsLayout";
import { useRouter } from "next/navigation";

export default function AnnouncementsLayoutPage() {
  const router = useRouter();
  return <AnnouncementsLayout onNavigateBack={() => router.push("/")} />;
}