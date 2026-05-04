"use client";
import Body from "@/imports/Body/Body";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isButton = target.closest('[data-name="Login Button"]') ||
                     target.closest('[data-name="Button - SSO Options"]');

    if (isButton) {
      onLogin();
    }
  };

  return (
    <div className="size-full flex items-center justify-center overflow-auto cursor-pointer" onClick={handleClick}>
      <div className="w-full h-full min-h-screen">
        <Body />
      </div>
    </div>
  );
}
