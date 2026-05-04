"use client";

import { DirectMessageChat } from "@/components/oms/chat/DirectMessageChat";
import { useParams } from "next/navigation";

export default function DirectMessageChatPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <DirectMessageChat dmId={id} />
    </div>
  );
}
