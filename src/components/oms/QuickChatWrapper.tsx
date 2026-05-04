"use client";

import dynamic from "next/dynamic";

const QuickChat = dynamic(() => import("@/components/oms/QuickChat").then(mod => mod.QuickChat), {
  ssr: false
});

export default function QuickChatWrapper() {
  return <QuickChat />;
}
