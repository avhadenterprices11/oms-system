"use client";
import WelcomeWizard from "@/imports/WelcomeWizard/WelcomeWizard";

interface OnboardingWizardProps {
  onContinue: () => void;
  onSkip: () => void;
}

export function OnboardingWizard({ onContinue, onSkip }: OnboardingWizardProps) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const continueButton = target.closest('[data-name="Button"]');
    const skipText = target.closest('[data-name="Text"]');

    if (continueButton && continueButton.textContent?.includes("Continue")) {
      onContinue();
    } else if (skipText && skipText.textContent?.includes("Skip for now")) {
      onSkip();
    }
  };

  return (
    <div className="size-full flex items-center justify-center overflow-auto cursor-pointer" onClick={handleClick}>
      <div className="w-[1280px] h-[1024px]">
        <WelcomeWizard />
      </div>
    </div>
  );
}
