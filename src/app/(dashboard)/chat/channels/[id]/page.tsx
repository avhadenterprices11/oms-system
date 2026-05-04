"use client";

import { ChannelChat } from "@/components/oms/chat/ChannelChat";
import { useParams } from "next/navigation";

export default function ChannelChatPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <ChannelChat channelId={id} />
    </div>
  );
}
