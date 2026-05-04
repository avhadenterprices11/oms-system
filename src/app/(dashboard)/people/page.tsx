"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PeoplePage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/people/directory");
  }, [router]);

  return null;
}