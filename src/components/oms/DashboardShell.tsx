"use client";

import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import imgProfilePic from "@/imports/Dashboard-1/8903f064e14b604493b2a186385c8300714f69a3.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { QuickChat } from "@/components/oms/QuickChat";
import { useState } from "react";

// Simplified Sidebar components extracted from Figma export
function Logo() {
  return (
    <div className="bg-[#5048e5] flex items-center justify-center rounded-[8px] size-[40px] shrink-0">
       <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
          <path d={svgPaths.p245e1900} fill="white" />
       </svg>
    </div>
  );
}

function SidebarLink({ href, icon, label, active, isCollapsed }: { href: string; icon: string; label: string; active?: boolean; isCollapsed: boolean }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-[12px] h-[40px] px-[12px] py-[8px] rounded-[10px] transition-all duration-300 group relative ${
        active ? "bg-[#5048e5]/10 text-[#5048e5]" : "text-slate-500 hover:bg-slate-50"
      } ${isCollapsed ? "w-[40px] justify-center" : "w-full"}`}
    >
      <div className={`relative shrink-0 size-[18px] transition-transform duration-300 ${!active && "group-hover:scale-110"}`}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
           <path d={icon} fill="currentColor" />
        </svg>
      </div>
      {!isCollapsed && (
        <div className="flex flex-col font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap overflow-hidden transition-opacity duration-300">
          <p className="leading-[20px]">{label}</p>
        </div>
      )}
    </Link>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showNotificationsPopup, setShowNotificationsPopup] = useState(false);
  const [showQuickChat, setShowQuickChat] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Mock global searchable items
  const searchableItems = [
    { title: "Organisation Architecture", module: "Architecture", href: "/setup", description: "Manage global entity structure" },
    { title: "Employee Directory", module: "People", href: "/people", description: "Search all staff members" },
    { title: "Project Pipeline", module: "CRM", href: "/crm/pipeline", description: "View sales opportunities" },
    { title: "System Security", module: "Settings", href: "#", description: "2FA and password management", isModal: "profile" },
    { title: "Active Tasks", module: "Tasks", href: "/tasks", description: "Track pending deliverables" },
    { title: "Global Events", module: "Events", href: "/events", description: "Corporate calendar and meetings" },
    { title: "Financial Reports", module: "Finance", href: "/documents", description: "Audit and fiscal data" },
    { title: "Leave Management", module: "HR", href: "/leave", description: "Track time-off requests" },
    { title: "Network Status", module: "System", href: "#", description: "API and server heartbeat" },
    { title: "Profile Identity", module: "Settings", href: "#", description: "Manage personal presence", isModal: "profile" },
    { title: "Notification Logic", module: "Settings", href: "#", description: "Configure system alerts" },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 1) {
      const filtered = searchableItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.module.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const closeAll = () => {
    setShowNotificationsPopup(false);
    setShowQuickChat(false);
    setShowProfileDropdown(false);
    setShowSearchResults(false);
  };

  const toggleQuickChat = () => {
    const nextState = !showQuickChat;
    closeAll();
    setShowQuickChat(nextState);
  };

  const toggleNotifications = () => {
    const nextState = !showNotificationsPopup;
    closeAll();
    setShowNotificationsPopup(nextState);
  };

  const toggleProfileDropdown = () => {
    const nextState = !showProfileDropdown;
    closeAll();
    setShowProfileDropdown(nextState);
  };

  const openProfileModal = () => {
    closeAll();
    setShowProfileModal(true);
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-['Inter',sans-serif]" data-shell="root">
      {/* Sidebar */}
      <aside 
        className={`bg-white flex flex-col h-full border-r border-slate-200/60 transition-all duration-500 ease-in-out shrink-0 relative z-40 ${
          isCollapsed ? "w-[80px]" : "w-[260px]"
        }`} 
        data-shell="sidebar"
      >
        <div className={`px-6 py-5 flex items-center transition-all duration-500 border-b border-slate-50 mb-2 ${isCollapsed ? "justify-center" : "gap-3"}`}>
          <Logo />
          {!isCollapsed && (
            <div className="overflow-hidden whitespace-nowrap transition-all duration-500">
              <div className="font-black text-lg text-slate-900 leading-tight">Portal</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enterprise</div>
            </div>
          )}
        </div>
        
        <nav className={`flex-1 w-full flex flex-col gap-1.5 overflow-y-auto custom-scrollbar transition-all duration-500 ${isCollapsed ? "px-4" : "px-4"}`}>
          {[
            { href: "/", label: "Dashboard", icon: svgPaths.p20793584 },
            { href: "/chat", label: "Chat", icon: svgPaths.p1fe7b600 },
            { href: "/people", label: "People", icon: "M13 10a4 4 0 11-8 0 4 4 0 018 0zM1 18a8 8 0 1116 0H1z" },
            { href: "/tasks", label: "Tasks", icon: svgPaths.p6e98980 },
            { href: "/projects", label: "Projects", icon: svgPaths.p2173c3c0 },
            { href: "/events", label: "Events", icon: svgPaths.p841cf00 },
            { href: "/crm", label: "CRM", icon: svgPaths.p279daa80 },
            { href: "/client-delivery", label: "Client Delivery", icon: svgPaths.pfffa80 },
            { href: "/social-media", label: "Social Media", icon: svgPaths.p1e78c320 },
            { href: "/meetings", label: "Meetings", icon: svgPaths.p2b384fc0 },
            { href: "/documents", label: "Documents", icon: svgPaths.p306f8c80 },
            { href: "/leave", label: "Leave", icon: svgPaths.p275bc9be },
            { href: "/announcements", label: "Announcements", icon: svgPaths.p1440a2c0 },
          ].map((link) => (
            <SidebarLink 
              key={link.href}
              href={link.href} 
              label={link.label} 
              icon={link.icon} 
              active={pathname === link.href} 
              isCollapsed={isCollapsed}
            />
          ))}

          {/* System Section */}
          {!isCollapsed && (
            <div className="px-3 mt-6 mb-1.5 animate-in fade-in slide-in-from-left-2 duration-500">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[1.5px]">System</span>
            </div>
          )}

          <Link 
            href="/settings"
            className={`flex items-center gap-[12px] h-[44px] px-[12px] rounded-[12px] transition-all duration-300 group relative ${
              pathname === "/settings" 
                ? "bg-[#5048e5] text-white shadow-lg shadow-[#5048e5]/20" 
                : "bg-indigo-50/80 text-[#5048e5] hover:bg-indigo-100/80"
            } ${isCollapsed ? "w-[44px] justify-center mx-auto" : "w-full"}`}
          >
            <div className="relative shrink-0 size-[18px]">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {!isCollapsed && (
              <span className="font-bold text-[14px] tracking-tight">Settings</span>
            )}
          </Link>
        </nav>

        <div className="p-4 w-full">
           <button className={`bg-[#5048e5] text-white rounded-xl font-bold transition-all duration-500 flex items-center justify-center shadow-lg shadow-[#5048e5]/20 hover:shadow-[#5048e5]/30 overflow-hidden ${
             isCollapsed ? "w-12 h-12" : "w-full py-3"
           }`}>
             {isCollapsed ? (
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
               </svg>
             ) : "Upload Document"}
           </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden" data-shell="content-wrapper">
        <header className="h-[72px] bg-white border-b border-slate-200/60 flex items-center justify-between px-8 shrink-0 relative z-30" data-shell="header">
          {/* Left: Sidebar Toggle */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2.5 rounded-xl text-slate-400 hover:text-[#5048e5] hover:bg-slate-50 transition-all group"
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <line x1="9" x2="9" y1="3" y2="21"/>
              </svg>
            </button>
          </div>

          {/* Center: Global Search Bar */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[512px] hidden md:block">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#5048e5] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery.trim().length > 1 && setShowSearchResults(true)}
                placeholder="Search across all modules & settings..." 
                className="w-full bg-slate-100/50 px-12 py-3 rounded-2xl text-[14px] font-medium border border-transparent focus:bg-white focus:border-[#5048e5]/30 focus:ring-4 focus:ring-[#5048e5]/5 outline-none transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                 <kbd className="px-1.5 py-0.5 rounded border border-slate-200 bg-white text-[10px] font-bold text-slate-400">⌘</kbd>
                 <kbd className="px-1.5 py-0.5 rounded border border-slate-200 bg-white text-[10px] font-bold text-slate-400">K</kbd>
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && (
                <>
                  <div className="fixed inset-0 z-[-1]" onClick={() => setShowSearchResults(false)} />
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[24px] shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                      <div className="font-black text-[10px] text-slate-400 uppercase tracking-[2px]">Search Results • {searchResults.length} Found</div>
                    </div>
                    <div className="max-h-[360px] overflow-y-auto p-2">
                      {searchResults.length > 0 ? (
                        searchResults.map((result, idx) => (
                          <Link 
                            key={idx}
                            href={result.href}
                            onClick={() => {
                              if (result.isModal === "profile") openProfileModal();
                              setShowSearchResults(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#5048e5]/5 group transition-all"
                          >
                            <div className="size-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#5048e5]/10 group-hover:text-[#5048e5] transition-colors shrink-0">
                               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
                               </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-900 group-hover:text-[#5048e5] transition-colors">{result.title}</span>
                                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[9px] font-black text-slate-400 uppercase group-hover:bg-[#5048e5]/10 group-hover:text-[#5048e5] transition-colors">
                                  {result.module}
                                </span>
                              </div>
                              <div className="text-xs text-slate-500 truncate mt-0.5">{result.description}</div>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="p-8 text-center">
                          <div className="text-slate-300 mb-2">
                            <svg className="w-12 h-12 mx-auto opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth={1} />
                            </svg>
                          </div>
                          <div className="font-bold text-slate-400 text-sm">No exact matches found</div>
                          <div className="text-[11px] text-slate-400 mt-1">Try searching for modules, settings or commands</div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right: Actions & Profile */}
          <div className="flex items-center gap-4">
            {/* Quick Chat Toggle */}
            <button 
              onClick={toggleQuickChat}
              className={`p-2.5 rounded-xl transition-all ${showQuickChat ? "bg-[#5048e5]/10 text-[#5048e5]" : "text-slate-400 hover:text-[#5048e5] hover:bg-slate-50"}`}
              title="Quick Chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            {/* Notifications Hub */}
            <div className="relative">
              <button 
                onClick={toggleNotifications}
                className={`p-2.5 rounded-xl transition-all relative ${showNotificationsPopup ? "bg-[#5048e5]/10 text-[#5048e5]" : "text-slate-400 hover:text-[#5048e5] hover:bg-slate-50"}`}
                title="Notifications"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
              </button>

              {showNotificationsPopup && (
                <div className="absolute right-0 mt-4 w-[420px] bg-white rounded-[24px] shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">System Notifications</h3>
                    <div className="flex gap-4">
                      <button className="text-[11px] font-bold text-[#5048e5] hover:underline">Mark all as read</button>
                      <button className="text-[11px] font-bold text-slate-400 hover:text-slate-600 transition-colors">Settings</button>
                    </div>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto p-4 flex flex-col gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100 group">
                        <div className="flex gap-4">
                          <div className="size-10 rounded-full bg-[#5048e5]/10 flex items-center justify-center text-[#5048e5] shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-[#5048e5] transition-colors">Project Milestone Updated</div>
                            <div className="text-xs text-slate-500 mt-1 leading-relaxed">System architecture phase has been completed for "Global OMS" project.</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">2 minutes ago</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-4 bg-[#5048e5] text-white font-bold text-xs uppercase tracking-[4px] hover:bg-[#4338ca] transition-colors">
                    Show All Notifications
                  </button>
                </div>
              )}
            </div>

            <div className="w-px h-8 bg-slate-200 mx-2"></div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleProfileDropdown}
                className={`flex items-center gap-3 p-1.5 rounded-2xl transition-all ${showProfileDropdown ? "bg-slate-100" : "hover:bg-slate-50"}`}
              >
                <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                  <img src={imgProfilePic.src} alt="Profile" className="size-full object-cover" />
                </div>
                <div className="text-left hidden lg:block pr-2">
                  <div className="font-bold text-[13px] text-slate-900">Ashwini</div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Owner</div>
                </div>
                <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${showProfileDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {showProfileDropdown && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowProfileDropdown(false)} />
                  <div className="absolute right-0 mt-4 w-[280px] bg-white rounded-[24px] shadow-2xl border border-slate-200 py-3 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                    <div className="px-6 py-4 border-b border-slate-50 mb-2">
                      <div className="font-black text-xs text-slate-400 uppercase tracking-widest mb-1">Session Identity</div>
                      <div className="font-bold text-slate-900 truncate">ashwini@enterprise.com</div>
                    </div>
                    
                    <div className="px-2 flex flex-col gap-1">
                      <button 
                        onClick={openProfileModal}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-[13px] transition-colors group"
                      >
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-[#5048e5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        Profile Control Center
                      </button>
                      <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-[13px] transition-colors group">
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-[#5048e5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        Notification Preferences
                      </button>
                      <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-[13px] transition-colors group">
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-[#5048e5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10" />
                        </svg>
                        Switch Workspace
                      </button>
                      <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-[13px] transition-colors group border-t border-slate-50 mt-1 pt-2">
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-[#5048e5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.971 5.971 0 0 0-.94 3.197m12.001 3.198L12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        Invite Team Members
                      </button>
                      <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-[13px] transition-colors group">
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-[#5048e5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                        Help & Support
                      </button>
                      <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 font-bold text-[13px] transition-colors group mt-1">
                        <svg className="w-4 h-4 text-red-400 group-hover:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                        Sign Out Session
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-[#f8fafc]">
          {children}
        </main>
      </div>

      {/* Quick Chat Component (Fixed Position) */}
      <QuickChat isOpen={showQuickChat} onOpenChange={setShowQuickChat} />

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setShowProfileModal(false)} />
          <div className="relative bg-white w-full max-w-[1000px] h-full max-h-[850px] rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col">
            {/* Modal Header */}
            <div className="px-12 py-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-3xl bg-gradient-to-br from-[#5048e5] to-[#7c3aed] flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">Profile Control Center</h2>
                  <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest mt-1">Identity • Security • Context</p>
                </div>
              </div>
              <button 
                onClick={() => setShowProfileModal(false)}
                className="size-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto px-12 py-10 custom-scrollbar">
              <div className="grid grid-cols-12 gap-12">
                {/* Left Column: Identity & Contact */}
                <div className="col-span-12 lg:col-span-7 space-y-12">
                  {/* Basic Identity */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="size-2 bg-[#5048e5] rounded-full"></div>
                      <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Basic Identity</h3>
                    </div>
                    <div className="flex gap-8 items-start">
                      <div className="group relative cursor-pointer shrink-0">
                        <div className="size-24 rounded-3xl bg-slate-100 overflow-hidden border-2 border-slate-200 group-hover:border-[#5048e5] transition-colors">
                          <img src={imgProfilePic.src} alt="Avatar" className="size-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 size-8 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#5048e5] shadow-sm transition-all">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <circle cx="12" cy="13" r="3" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                          <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Identity</label>
                          <input type="text" defaultValue="Ashwini" className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#5048e5] outline-none font-bold text-slate-900 transition-all" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Preferred Name</label>
                          <input type="text" placeholder="Optional" className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#5048e5] outline-none font-bold text-slate-900 transition-all" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Secure Email</label>
                          <input type="email" defaultValue="ashwini@enterprise.com" readOnly className="w-full bg-slate-100 px-5 py-3.5 rounded-2xl border border-slate-200 cursor-not-allowed font-bold text-slate-500" />
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Work Context */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="size-2 bg-[#5048e5] rounded-full"></div>
                      <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Work Context</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Job Title</label>
                        <input type="text" defaultValue="Chief Operations Officer" className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#5048e5] outline-none font-bold text-slate-900 transition-all" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Function</label>
                        <select className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#5048e5] outline-none font-bold text-slate-900 transition-all appearance-none">
                          <option>Founder / Owner</option>
                          <option>Marketing</option>
                          <option>Sales</option>
                          <option>Operations</option>
                          <option>Developer</option>
                          <option>HR</option>
                          <option>Finance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Experience Level</label>
                        <select className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#5048e5] outline-none font-bold text-slate-900 transition-all appearance-none">
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Work Setup</label>
                        <select className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#5048e5] outline-none font-bold text-slate-900 transition-all appearance-none">
                          <option>Individual</option>
                          <option>Freelancer</option>
                          <option>Agency</option>
                          <option>Employee</option>
                        </select>
                      </div>
                    </div>
                  </section>

                  {/* Contact */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="size-2 bg-[#5048e5] rounded-full"></div>
                      <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Contact Details</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                        <input type="text" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#5048e5] outline-none font-bold text-slate-900 transition-all" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Secondary Contact</label>
                        <input type="text" placeholder="Optional" className="w-full bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#5048e5] outline-none font-bold text-slate-900 transition-all" />
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right Column: Preferences & Security */}
                <div className="col-span-12 lg:col-span-5 space-y-12">
                  {/* Workspace Context */}
                  <section className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="size-2 bg-[#5048e5] rounded-full"></div>
                      <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Workspace Context</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-white">
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Organisation</span>
                        <span className="font-bold text-slate-900">Global Tech Solutions</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white">
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Department</span>
                        <span className="font-bold text-slate-900">Executive</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white">
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Reporting Manager</span>
                        <span className="font-bold text-slate-900">Board of Directors</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Employment Type</span>
                        <span className="px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] rounded-full text-[10px] font-black uppercase tracking-widest">Permanent</span>
                      </div>
                    </div>
                  </section>

                  {/* Personal Preferences */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="size-2 bg-[#5048e5] rounded-full"></div>
                      <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Preferences</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Timezone</label>
                        <select className="w-full bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 font-bold text-slate-900">
                          <option>(GMT+05:30) India Standard Time</option>
                          <option>(UTC+00:00) London</option>
                          <option>(EST-05:00) New York</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Language</label>
                          <select className="w-full bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 font-bold text-slate-900">
                            <option>English (UK)</option>
                            <option>English (US)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Date Format</label>
                          <select className="w-full bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 font-bold text-slate-900">
                            <option>DD/MM/YYYY</option>
                            <option>MM/DD/YYYY</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Security */}
                  <section className="p-8 rounded-[32px] bg-red-50/30 border border-red-50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="size-2 bg-red-500 rounded-full"></div>
                      <h3 className="font-black text-red-900 uppercase tracking-widest text-xs">Security Identity</h3>
                    </div>
                    <div className="space-y-4">
                      <button className="w-full py-3 bg-white border border-red-100 rounded-xl text-red-600 font-bold text-[13px] hover:bg-red-50 transition-colors shadow-sm">
                        Initialise Password Reset
                      </button>
                      <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-[13px] hover:bg-slate-50 transition-colors shadow-sm">
                        Configure 2FA Auth
                      </button>
                      <div className="pt-4 border-t border-red-100 mt-4 flex items-center justify-between">
                         <span className="text-[11px] font-black text-red-400 uppercase tracking-widest">Active Sessions</span>
                         <span className="text-[10px] font-black text-white bg-red-500 px-2 py-0.5 rounded-lg">3 SECURE</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-12 py-8 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                Last Activity: Today at 09:42 AM • IP: 192.168.1.1
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowProfileModal(false)}
                  className="px-8 py-4 rounded-2xl bg-white border border-slate-200 font-black text-xs uppercase tracking-[4px] text-slate-500 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Discard
                </button>
                <button 
                  onClick={() => setShowProfileModal(false)}
                  className="px-10 py-4 rounded-2xl bg-[#5048e5] font-black text-xs uppercase tracking-[4px] text-white hover:bg-[#4338ca] shadow-xl shadow-[#5048e5]/20 transition-all"
                >
                  Synchronise Data
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
