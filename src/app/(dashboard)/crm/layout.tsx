"use client";

import { useState } from "react";
import AddOrganisation from "@/imports/AddOrganisation/AddOrganisation";
import EditOrganisation from "@/imports/EditOrganisation/EditOrganisation";
import AddContactToOrganisation from "@/imports/AddContactToOrganisation/AddContactToOrganisation";
import AddContact from "@/imports/AddContact/AddContact";
import EditContact from "@/imports/EditContact/EditContact";
import ScheduleMeetingFromCrm from "@/imports/ScheduleMeetingFromCrm/ScheduleMeetingFromCrm";
import LogCrmActivity from "@/imports/LogCrmActivity/LogCrmActivity";
import CreateDeal from "@/imports/CreateDeal/CreateDeal";
import CreateDealForOrganisation from "@/imports/CreateDealForOrganisation/CreateDealForOrganisation";
import EditDeal from "@/imports/EditDeal/EditDeal";
import MoveDealStage from "@/imports/MoveDealStage/MoveDealStage";
import AddTaskToDeal from "@/imports/AddTaskToDeal/AddTaskToDeal";
import ConvertLeadToContactDeal from "@/imports/ConvertLeadToContactDeal/ConvertLeadToContactDeal";
import CreateProjectFromDeal from "@/imports/CreateProjectFromDeal/CreateProjectFromDeal";
import CreateClientDeliveryFromDeal from "@/imports/CreateClientDeliveryFromDeal/CreateClientDeliveryFromDeal";
import LinkToClientDelivery from "@/imports/LinkToClientDelivery/LinkToClientDelivery";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

type ModalView = null | "add-organization" | "edit-organization" | "add-contact-to-org" | "add-contact" | "edit-contact" | "schedule-meeting" | "log-activity" | "create-deal" | "create-deal-for-org" | "edit-deal" | "move-deal-stage" | "add-task-to-deal" | "convert-lead" | "create-project-from-deal" | "create-client-delivery" | "link-to-delivery";

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  const [modalView, setModalView] = useState<ModalView>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Global click handler to catch modal triggers and navigation from imported legacy components
  const handleGlobalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("add organization") || text.includes("add organisation") || text.includes("create organization")) {
      setModalView("add-organization");
      return;
    }
    if (text.includes("edit organization") || text.includes("edit organisation")) {
      setModalView("edit-organization");
      return;
    }
    
    // Navigation Triggers (intercepting legacy state-switching button clicks)
    if (text === "pipeline" || text === "sales pipeline") {
      router.push("/crm/pipeline");
    } else if (text === "contacts" || text === "contact list") {
      router.push("/crm/contacts");
    } else if (text === "organizations" || text === "organisations" || text === "companies") {
      router.push("/crm/organizations");
    } else if (text === "leads") {
      router.push("/crm/leads");
    } else if (text === "import/export") {
      router.push("/crm/import-export");
    }

    // Detail Navigation (intercepting row clicks)
    if (target.closest('[data-contact-row]') || text.includes("jane smith") || text.includes("john doe")) {
      router.push("/crm/contacts/1"); // Default ID for now
    } else if (target.closest('[data-organization-row]') || text.includes("acme corp")) {
      router.push("/crm/organizations/1");
    } else if (target.closest('[data-deal-card]') || target.closest('[data-deal]')) {
      router.push("/crm/deals/1");
    } else if (target.closest('[data-lead-row]') || text.includes("lead #")) {
      router.push("/crm/leads/1");
    }
  };

  return (
    <div className="size-full flex flex-col" onClick={handleGlobalClick}>
      {/* Module Navigation Tabs */}
      <nav className="flex gap-8 px-8 py-4 border-b bg-white shrink-0">
        <Link 
          href="/crm/contacts" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/contacts") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Contacts
        </Link>
        <Link 
          href="/crm/pipeline" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/pipeline") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Pipeline
        </Link>
        <Link 
          href="/crm/organizations" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/organizations") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Organizations
        </Link>
        <Link 
          href="/crm/leads" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/leads") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Leads
        </Link>
        <Link 
          href="/crm/import-export" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/import-export") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Import/Export
        </Link>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

      {/* Shared CRM Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[700px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "add-organization" && <AddOrganisation />}
            {modalView === "edit-organization" && <EditOrganisation />}
            {modalView === "add-contact-to-org" && <AddContactToOrganisation />}
            {modalView === "add-contact" && <AddContact />}
            {modalView === "edit-contact" && <EditContact />}
            {modalView === "schedule-meeting" && <ScheduleMeetingFromCrm />}
            {modalView === "log-activity" && <LogCrmActivity />}
            {modalView === "create-deal" && <CreateDeal />}
            {modalView === "create-deal-for-org" && <CreateDealForOrganisation />}
            {modalView === "edit-deal" && <EditDeal />}
            {modalView === "move-deal-stage" && <MoveDealStage />}
            {modalView === "add-task-to-deal" && <AddTaskToDeal />}
            {modalView === "convert-lead" && <ConvertLeadToContactDeal />}
            {modalView === "create-project-from-deal" && <CreateProjectFromDeal />}
            {modalView === "create-client-delivery" && <CreateClientDeliveryFromDeal />}
            {modalView === "link-to-delivery" && <LinkToClientDelivery />}
          </div>
        </div>
      )}
    </div>
  );
}
