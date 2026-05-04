"use client";

import { EventsLayout } from "@/components/oms/layouts/EventsLayout";
import { useRouter } from "next/navigation";

export default function EventsLayoutPage() {
  const router = useRouter();
  return <EventsLayout onNavigateBack={() => router.push("/")} />;
}