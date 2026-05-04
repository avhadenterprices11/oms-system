"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import CrmContactsList from "@/imports/CrmContactsList/CrmContactsList";
import CrmSalesPipeline from "@/imports/CrmSalesPipeline/CrmSalesPipeline";
import CrmOrganisationsList from "@/imports/CrmOrganisationsList/CrmOrganisationsList";
import CrmOrganisationDetail from "@/imports/CrmOrganisationDetail/CrmOrganisationDetail";
import CrmContactDetail from "@/imports/CrmContactDetail/CrmContactDetail";
import CrmContactMeetingHistory from "@/imports/CrmContactMeetingHistory/CrmContactMeetingHistory";
import CrmActivityLog from "@/imports/CrmActivityLog/CrmActivityLog";
import CrmDealDetail from "@/imports/CrmDealDetail/CrmDealDetail";
import CrmDealDetailLeadStage from "@/imports/CrmDealDetailLeadStage/CrmDealDetailLeadStage";
import CrmDealDetailQualificationStage from "@/imports/CrmDealDetailQualificationStage/CrmDealDetailQualificationStage";
import CrmDealDetailNegotiationStage from "@/imports/CrmDealDetailNegotiationStage/CrmDealDetailNegotiationStage";
import CrmDealDetailClosedWon from "@/imports/CrmDealDetailClosedWon/CrmDealDetailClosedWon";
import CrmDealDetailClosedLost from "@/imports/CrmDealDetailClosedLost/CrmDealDetailClosedLost";
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
import CrmLeadsList from "@/imports/CrmLeadsList/CrmLeadsList";
import CrmLeadDetail from "@/imports/CrmLeadDetail/CrmLeadDetail";
import CrmLeadAssignmentRules from "@/imports/CrmLeadAssignmentRules/CrmLeadAssignmentRules";
import ConvertLeadToContactDeal from "@/imports/ConvertLeadToContactDeal/ConvertLeadToContactDeal";
import CrmImportExport from "@/imports/CrmImportExport/CrmImportExport";
import CreateProjectFromDeal from "@/imports/CreateProjectFromDeal/CreateProjectFromDeal";
import CreateClientDeliveryFromDeal from "@/imports/CreateClientDeliveryFromDeal/CreateClientDeliveryFromDeal";
import LinkToClientDelivery from "@/imports/LinkToClientDelivery/LinkToClientDelivery";

type CRMView = "contacts" | "pipeline" | "organizations" | "organization-detail" | "contact-detail" | "deal-detail" | "leads" | "lead-detail" | "lead-assignment-rules" | "import-export";
type ContactTab = "overview" | "meetings" | "activity";
type DealStage = "lead" | "qualification" | "proposal" | "negotiation" | "closed-won" | "closed-lost";
type ModalView = null | "add-organization" | "edit-organization" | "add-contact-to-org" | "add-contact" | "edit-contact" | "schedule-meeting" | "log-activity" | "create-deal" | "create-deal-for-org" | "edit-deal" | "move-deal-stage" | "add-task-to-deal" | "convert-lead" | "create-project-from-deal" | "create-client-delivery" | "link-to-delivery";

interface CRMLayoutProps {
  onNavigateBack: () => void;
}

export function CRMLayout({ onNavigateBack }: CRMLayoutProps) {
  const [currentView, setCurrentView] = useState<CRMView>("contacts");
  const [contactTab, setContactTab] = useState<ContactTab>("overview");
  const [dealStage, setDealStage] = useState<DealStage>("proposal");
  const [modalView, setModalView] = useState<ModalView>(null);

  const handleViewChange = (e: React.MouseEvent) => {
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
    if (text.includes("add contact to")) {
      setModalView("add-contact-to-org");
      return;
    }
    if (text.includes("add contact") || text.includes("create contact")) {
      setModalView("add-contact");
      return;
    }
    if (text.includes("edit contact")) {
      setModalView("edit-contact");
      return;
    }
    if (text.includes("schedule meeting")) {
      setModalView("schedule-meeting");
      return;
    }
    if (text.includes("log activity")) {
      setModalView("log-activity");
      return;
    }
    if (text.includes("create deal for") || text.includes("add deal for")) {
      setModalView("create-deal-for-org");
      return;
    }
    if (text.includes("create deal") || text.includes("add deal") || text.includes("new deal")) {
      setModalView("create-deal");
      return;
    }
    if (text.includes("edit deal")) {
      setModalView("edit-deal");
      return;
    }
    if (text.includes("move deal") || text.includes("change stage")) {
      setModalView("move-deal-stage");
      return;
    }
    if (text.includes("add task to") || text.includes("create task")) {
      setModalView("add-task-to-deal");
      return;
    }
    if (text.includes("convert lead") || text.includes("convert to contact")) {
      setModalView("convert-lead");
      return;
    }
    if (text.includes("create project from")) {
      setModalView("create-project-from-deal");
      return;
    }
    if (text.includes("create client delivery") || text.includes("create delivery")) {
      setModalView("create-client-delivery");
      return;
    }
    if (text.includes("link to delivery") || text.includes("link delivery")) {
      setModalView("link-to-delivery");
      return;
    }

    // Modal close
    if (text.includes("save") || text.includes("cancel") || text.includes("create") || text.includes("submit") || text.includes("schedule") || text.includes("convert") || text.includes("link")) {
      setModalView(null);
      return;
    }

    // Deal click - open deal detail (check which stage based on parent column)
    if (currentView === "pipeline" && (target.closest('[data-deal-card]') || target.closest('[data-deal]'))) {
      // Determine stage based on text content or parent column
      const card = target.closest('[data-deal-card]') || target.closest('[data-deal]');
      const column = card?.closest('[data-stage]') || card?.closest('[data-column]');
      const columnText = column?.textContent?.toLowerCase() || "";

      if (columnText.includes("lead")) {
        setDealStage("lead");
      } else if (columnText.includes("qualification")) {
        setDealStage("qualification");
      } else if (columnText.includes("proposal")) {
        setDealStage("proposal");
      } else if (columnText.includes("negotiation")) {
        setDealStage("negotiation");
      } else if (columnText.includes("closed") && columnText.includes("won")) {
        setDealStage("closed-won");
      } else if (columnText.includes("closed") && columnText.includes("lost")) {
        setDealStage("closed-lost");
      } else {
        setDealStage("proposal"); // default
      }

      setCurrentView("deal-detail");
      return;
    }

    // Back to pipeline from deal detail
    if (currentView === "deal-detail" && (text.includes("pipeline") || text.includes("back to"))) {
      setCurrentView("pipeline");
      return;
    }

    // Contact click - open contact detail
    if (currentView === "contacts" && (target.closest('[data-contact-row]') ||
        text.includes("john doe") || text.includes("jane smith") || text.includes("michael chen"))) {
      setCurrentView("contact-detail");
      setContactTab("overview");
      return;
    }

    // Back to contact list
    if (currentView === "contact-detail" && text.includes("contacts")) {
      setCurrentView("contacts");
      return;
    }

    // Contact detail tabs
    if (currentView === "contact-detail") {
      if (text.includes("overview")) {
        setContactTab("overview");
      } else if (text.includes("meetings") || text.includes("meeting history")) {
        setContactTab("meetings");
      } else if (text.includes("activity") || text.includes("activity log")) {
        setContactTab("activity");
      }
    }

    // Organization click - open organization detail
    if (target.closest('[data-organization-row]') || target.closest('[data-organisation-row]') ||
        text.includes("acme corp") || text.includes("techstart") || text.includes("global industries")) {
      setCurrentView("organization-detail");
      return;
    }

    // Back to organization list
    if (currentView === "organization-detail" && (text.includes("organizations") || text.includes("organisations"))) {
      setCurrentView("organizations");
      return;
    }

    // Lead click - open lead detail
    if (currentView === "leads" && (target.closest('[data-lead-row]') ||
        text.includes("lead #") || text.includes("web inquiry"))) {
      setCurrentView("lead-detail");
      return;
    }

    // Back to leads list
    if (currentView === "lead-detail" && text.includes("leads")) {
      setCurrentView("leads");
      return;
    }

    // View navigation
    if (text.includes("contacts") && !text.includes("add contact")) {
      setCurrentView("contacts");
    } else if (text.includes("pipeline") || text.includes("sales")) {
      setCurrentView("pipeline");
    } else if (text.includes("organizations") || text.includes("organisations") || text.includes("companies")) {
      setCurrentView("organizations");
    } else if (text.includes("leads") && !text.includes("convert")) {
      setCurrentView("leads");
    } else if (text.includes("assignment rules")) {
      setCurrentView("lead-assignment-rules");
    } else if (text.includes("import") || text.includes("export")) {
      setCurrentView("import-export");
    }
  };

  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden" onClick={handleViewChange}>
      {/* Collapsed Main Sidebar */}
      <div className="bg-white w-[72px] border-r border-[rgba(80,72,229,0.1)] flex flex-col items-center py-6 flex-shrink-0">
        {/* Logo */}
        <div className="bg-[#5048e5] w-10 h-10 rounded-[8px] flex items-center justify-center mb-8">
          <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p245e1900} fill="white" />
          </svg>
        </div>

        {/* Navigation Icons */}
        <nav className="space-y-2 flex-1">
          <button
            onClick={onNavigateBack}
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Dashboard"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p20793584} fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="People"
            data-nav="people"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM4 14a4 4 0 018 0H4z" fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Chat"
            data-nav="chat"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1fe7b600} fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Tasks"
            data-nav="tasks"
          >
            <svg className="w-[16.667px] h-[16.667px]" fill="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p6e98980} fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Projects"
            data-nav="projects"
          >
            <svg className="w-[16.667px] h-[13.333px]" fill="none" viewBox="0 0 16.6667 13.3333">
              <path d={svgPaths.p2173c3c0} fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Events"
            data-nav="events"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M5 2v2M11 2v2M3 6h10M4 4h8a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(80,72,229,0.1)] transition-colors"
            title="CRM"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M3 5h10M3 8h10M3 11h10M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#5048E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Client Delivery"
            data-nav="client-delivery"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M2 5l6 3M8 8v6M14 5l-6 3" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>

        {/* Settings at bottom */}
        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors" title="Settings">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p870bf80} stroke="#475569" strokeWidth="1.5" />
            <path d={svgPaths.p38b3cc00} stroke="#475569" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Main Content Area - Hide imported sidebars */}
      <div className="flex-1 overflow-hidden [&_[data-name='Sidebar']]:hidden [&_.sidebar]:hidden">
        {currentView === "contacts" && <CrmContactsList />}
        {currentView === "pipeline" && <CrmSalesPipeline />}
        {currentView === "organizations" && <CrmOrganisationsList />}
        {currentView === "organization-detail" && <CrmOrganisationDetail />}
        {currentView === "leads" && <CrmLeadsList />}
        {currentView === "lead-detail" && <CrmLeadDetail />}
        {currentView === "lead-assignment-rules" && <CrmLeadAssignmentRules />}
        {currentView === "import-export" && <CrmImportExport />}

        {currentView === "contact-detail" && (
          <>
            {contactTab === "overview" && <CrmContactDetail />}
            {contactTab === "meetings" && <CrmContactMeetingHistory />}
            {contactTab === "activity" && <CrmActivityLog />}
          </>
        )}

        {currentView === "deal-detail" && (
          <>
            {dealStage === "lead" && <CrmDealDetailLeadStage />}
            {dealStage === "qualification" && <CrmDealDetailQualificationStage />}
            {dealStage === "proposal" && <CrmDealDetail />}
            {dealStage === "negotiation" && <CrmDealDetailNegotiationStage />}
            {dealStage === "closed-won" && <CrmDealDetailClosedWon />}
            {dealStage === "closed-lost" && <CrmDealDetailClosedLost />}
          </>
        )}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
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
