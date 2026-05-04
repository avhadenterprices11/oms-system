"use client";

import { DocumentsLayout } from "@/components/oms/layouts/DocumentsLayout";
import { useRouter } from "next/navigation";

export default function DocumentsLayoutPage() {
  const router = useRouter();
  return <DocumentsLayout onNavigateBack={() => router.push("/")} />;
}