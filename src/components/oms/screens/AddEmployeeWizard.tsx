"use client";
import { useState } from "react";
import AddEmployeeBasicInfo from "@/imports/AddEmployeeBasicInfo/AddEmployeeBasicInfo";
import AddEmployeeModuleAccess from "@/imports/AddEmployeeModuleAccess/AddEmployeeModuleAccess";
import AddEmployeeOnboarding from "@/imports/AddEmployeeOnboarding/AddEmployeeOnboarding";

type WizardStep = "basic-info" | "module-access" | "onboarding";

export function AddEmployeeWizard() {
  const [currentStep, setCurrentStep] = useState<WizardStep>("basic-info");

  const handleStepChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Step navigation
    if (text.includes("continue to role")) {
      setCurrentStep("module-access");
    } else if (text.includes("continue to onboarding")) {
      setCurrentStep("onboarding");
    } else if (text.includes("back")) {
      if (currentStep === "onboarding") {
        setCurrentStep("module-access");
      } else if (currentStep === "module-access") {
        setCurrentStep("basic-info");
      }
    }

    // Tab clicks
    if (text.includes("basic info")) {
      setCurrentStep("basic-info");
    } else if (text.includes("role") || text.includes("module access")) {
      setCurrentStep("module-access");
    } else if (text.includes("onboarding")) {
      setCurrentStep("onboarding");
    }
  };

  return (
    <div onClick={handleStepChange}>
      {currentStep === "basic-info" && <AddEmployeeBasicInfo />}
      {currentStep === "module-access" && <AddEmployeeModuleAccess />}
      {currentStep === "onboarding" && <AddEmployeeOnboarding />}
    </div>
  );
}
