"use client";

import { InteractiveLogin } from "@/components/oms/screens/InteractiveLogin";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <InteractiveLogin 
      onLogin={() => router.push("/wizard")} 
    />
  );
}
