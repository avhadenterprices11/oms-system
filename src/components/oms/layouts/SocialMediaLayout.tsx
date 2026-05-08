"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import SocialMediaSocialOverview from "@/imports/SocialMediaSocialOverview/SocialMediaSocialOverview";
import SocialMediaContent from "@/imports/SocialMediaContent/SocialMediaContent";
import SocialMediaSocialAccounts from "@/imports/SocialMediaSocialAccounts/SocialMediaSocialAccounts";
import SocialMediaCalendar from "@/imports/SocialMediaCalendar/SocialMediaCalendar";
import SocialMediaPostComposer from "@/imports/SocialMediaPostComposer/SocialMediaPostComposer";
import SocialMediaBrandManagement from "@/imports/SocialMediaBrandManagement/SocialMediaBrandManagement";
import SocialMediaCampaignManager from "@/imports/SocialMediaCampaignManager/SocialMediaCampaignManager";
import SocialMediaAssetLibrary from "@/imports/SocialMediaAssetLibrary/SocialMediaAssetLibrary";
import AddBrand from "@/imports/AddBrand/AddBrand";
import CreateCampaign from "@/imports/CreateCampaign/CreateCampaign";
import UploadAssets from "@/imports/UploadAssets/UploadAssets";
import AssetDetail from "@/imports/AssetDetail/AssetDetail";

import { usePathname } from "next/navigation";

type SocialMediaView = "overview" | "content" | "accounts" | "calendar" | "composer" | "brands" | "campaigns" | "assets";
type ModalView = null | "add-brand" | "create-campaign" | "upload-assets" | "asset-detail";

interface SocialMediaLayoutProps {
  onNavigateBack: () => void;
}

export function SocialMediaLayout({ onNavigateBack }: SocialMediaLayoutProps) {
  const pathname = usePathname();
  
  // Map pathname to initial view
  const getInitialView = (): SocialMediaView => {
    if (pathname.includes("/accounts")) return "accounts";
    if (pathname.includes("/content")) return "content";
    if (pathname.includes("/calendar")) return "calendar";
    if (pathname.includes("/composer")) return "composer";
    if (pathname.includes("/brands")) return "brands";
    if (pathname.includes("/campaigns")) return "campaigns";
    if (pathname.includes("/assets")) return "assets";
    return "overview";
  };

  const [currentView, setCurrentView] = useState<SocialMediaView>(getInitialView());
  const [modalView, setModalView] = useState<ModalView>(null);

  const handleViewChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("add brand") || text.includes("create brand")) {
      setModalView("add-brand");
      return;
    }
    if (text.includes("create campaign") || text.includes("add campaign") || text.includes("new campaign")) {
      setModalView("create-campaign");
      return;
    }
    if (text.includes("upload asset") || text.includes("upload image") || text.includes("upload file")) {
      setModalView("upload-assets");
      return;
    }
    if (target.closest('[data-asset]') || target.closest('[data-asset-card]')) {
      setModalView("asset-detail");
      return;
    }

    // Modal close
    if (text.includes("save") || text.includes("cancel") || text.includes("create") || text.includes("submit") || text.includes("upload") || text.includes("close")) {
      setModalView(null);
      return;
    }

    // View navigation
    if (text.includes("overview") || text.includes("dashboard")) {
      setCurrentView("overview");
    } else if (text.includes("content") && !text.includes("calendar")) {
      setCurrentView("content");
    } else if (text.includes("accounts") || text.includes("social accounts")) {
      setCurrentView("accounts");
    } else if (text.includes("calendar")) {
      setCurrentView("calendar");
    } else if (text.includes("composer") || text.includes("create post") || text.includes("new post")) {
      setCurrentView("composer");
    } else if (text.includes("brands") || text.includes("brand management")) {
      setCurrentView("brands");
    } else if (text.includes("campaigns") || text.includes("campaign manager")) {
      setCurrentView("campaigns");
    } else if (text.includes("assets") || text.includes("asset library")) {
      setCurrentView("assets");
    }
  };

  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden" onClick={handleViewChange}>
      {/* Collapsed Main Sidebar */}
      <div className="bg-white w-[72px] border-r border-[rgba(80,72,229,0.1)] flex flex-col items-center py-6 flex-shrink-0" data-name="Sidebar">
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
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="CRM"
            data-nav="crm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M3 5h10M3 8h10M3 11h10M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(80,72,229,0.1)] transition-colors"
            title="Social Media"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="3" stroke="#5048E5" strokeWidth="1.5" fill="none" />
              <circle cx="3" cy="3" r="1.5" fill="#5048E5" />
              <circle cx="13" cy="3" r="1.5" fill="#5048E5" />
              <circle cx="3" cy="13" r="1.5" fill="#5048E5" />
              <circle cx="13" cy="13" r="1.5" fill="#5048E5" />
              <path d="M6.5 6.5L4 4M9.5 6.5L12 4M6.5 9.5L4 12M9.5 9.5L12 12" stroke="#5048E5" strokeWidth="1.5" />
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

      {/* Main Content Area - Hide internal sidebars and navbars from imported components */}
      <div className="flex-1 overflow-hidden [&_[data-name*='Sidebar']]:hidden [&_[data-name*='Navigation']]:hidden [&_.sidebar]:hidden">
        {currentView === "overview" && <SocialMediaSocialOverview />}
        {currentView === "content" && <SocialMediaContent />}
        {currentView === "accounts" && <SocialMediaSocialAccounts />}
        {currentView === "calendar" && <SocialMediaCalendar />}
        {currentView === "composer" && <SocialMediaPostComposer />}
        {currentView === "brands" && <SocialMediaBrandManagement />}
        {currentView === "campaigns" && <SocialMediaCampaignManager />}
        {currentView === "assets" && <SocialMediaAssetLibrary />}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[700px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "add-brand" && <AddBrand />}
            {modalView === "create-campaign" && <CreateCampaign />}
            {modalView === "upload-assets" && <UploadAssets />}
            {modalView === "asset-detail" && <AssetDetail />}
          </div>
        </div>
      )}
    </div>
  );
}
