"use client";

import { EmployeeProfileLayout } from "@/components/oms/layouts/EmployeeProfileLayout";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  return <EmployeeProfileLayout onNavigateBack={() => router.push("/")} />;
}
