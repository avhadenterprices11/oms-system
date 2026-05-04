"use client";

import { ClientDeliveryLayout } from "@/components/oms/layouts/ClientDeliveryLayout";
import { useRouter } from "next/navigation";

export default function ClientDeliveryLayoutPage() {
  const router = useRouter();
  return <ClientDeliveryLayout onNavigateBack={() => router.push("/")} />;
}