"use client";
import React, { useState } from "react";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";
import imgAuthor from "./e5ae7c74914f54be9a9b76dcd20667a7d172e49d.png";
import imgAuthor1 from "./4a3bffb6cf3cef15017d3672e0e73e2b3e011db7.png";
import imgAuthor2 from "./28ec22122dec42fed7e8434ec40bd638be624d21.png";

// --- Components ---

const PriorityBadge = ({ priority }: { priority: string }) => {
  const configs: Record<string, { bg: string; text: string }> = {
    "Critical Priority": { bg: "bg-orange-50", text: "text-orange-700" },
    "High Priority": { bg: "bg-red-50", text: "text-red-700" },
    "Normal Priority": { bg: "bg-indigo-50", text: "text-indigo-700" },
  };
  const config = configs[priority] || configs["Normal Priority"];
  return (
    <span className={`${config.bg} ${config.text} px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider`}>
      {priority}
    </span>
  );
};

const AnnouncementCard = ({ 
  title, 
  content, 
  date, 
  priority, 
  author, 
  role, 
  authorImg, 
  metaIcon, 
  metaLabel, 
  pinned = false,
  isAttachment = false 
}: any) => {
  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 hover:shadow-md overflow-hidden ${pinned ? 'border-orange-500/30 border-l-4' : 'border-slate-200'}`}>
      <div className="p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <PriorityBadge priority={priority} />
          <span className="text-slate-400 text-xs font-medium">{date}</span>
          <button className="ml-auto text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-slate-900 leading-tight">{title}</h3>
          <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">{content}</p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
              <img src={authorImg} alt={author} className="size-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 leading-none">{author}</span>
              <span className="text-[10px] text-slate-500 font-medium">{role}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-400">
              {metaIcon}
              <span className="text-[10px] font-bold uppercase tracking-tight">{metaLabel}</span>
            </div>
            <button className="flex items-center gap-1 text-indigo-600 font-bold text-xs hover:text-indigo-700 transition-colors">
              Read More
              <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryChip = ({ label, active = false, onClick }: { label: string; active?: boolean; onClick: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
      active 
        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
    }`}>
      {label}
    </button>
  );
};

// --- Main Page ---

export default function AnnouncementsFeed() {
  const [activeCategory, setActiveCategory] = useState("All Feed");

  const categories = ["All Feed", "General", "Human Resources", "Product Updates", "Technical Info", "IT Systems"];

  return (
    <div className="w-full flex flex-col scrollbar-hide bg-[#f8fafc] min-h-screen">
      <div className="max-w-[1152px] mx-auto p-8 w-full flex flex-col gap-8">
        
        {/* Page Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Announcements</h1>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
              Quick Create
            </button>
          </div>

          {/* Search & Filters */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
              </div>
              <input 
                type="text" 
                placeholder="Search announcements..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
              />
            </div>
            
            <div className="flex gap-2">
              {["Priority: All", "Author: All", "Date: Newest"].map((filter) => (
                <button key={filter} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-2">
                  {filter}
                  <svg className="size-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
                </button>
              ))}
              <button className="px-4 py-2.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">Reset</button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <CategoryChip 
              key={cat} 
              label={cat} 
              active={activeCategory === cat} 
              onClick={() => setActiveCategory(cat)} 
            />
          ))}
        </div>

        {/* Feed List */}
        <div className="flex flex-col gap-4">
          <AnnouncementCard 
            pinned={true}
            priority="Critical Priority"
            date="Oct 24, 2023 • 9:30 AM"
            title="Quarterly Strategic Review: Full Report Released"
            content="Our Q3 performance was strong, but we're making several adjustments to our product roadmap for the final quarter. This document outlines the key shifts in our engineering focus and sales targets for every department. All team leads are requested to review t…"
            author="David Chen"
            role="Chief Executive Officer"
            authorImg={imgAuthor.src}
            metaLabel="2 Reports"
            metaIcon={<svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>}
          />

          <AnnouncementCard 
            priority="Normal Priority"
            date="2 hours ago • Oct 25, 2023"
            title="New Health & Wellness Benefits Package starting 2024"
            content="We are excited to announce a major upgrade to our employee health benefits. Starting January 1st, we will be offering fully covered mental health counseling and a monthly wellness stipend for fitness subscriptions and gym memberships."
            author="Sarah Jenkins"
            role="HR Director"
            authorImg={imgAuthor1.src}
            metaLabel="12 Comments"
            metaIcon={<svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>}
          />

          <AnnouncementCard 
            priority="High Priority"
            date="Yesterday • 4:15 PM"
            title="Scheduled Maintenance for Internal Servers"
            content="The internal portal and CRM systems will be down for maintenance this Sunday from 2:00 AM to 6:00 AM UTC. Please ensure all active sessions are saved before this window as systems will be unavailable during this period."
            author="Systems Team"
            role="Operations"
            authorImg={imgProfilePic.src}
            metaLabel="Maintenance_Schedule.pdf"
            metaIcon={<svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.172 7l-6.586 6.586a2 2 0 11-2.828-2.828l6.414-6.414a4 4 0 015.656 5.656l-6.415 6.415a6 6 0 11-8.486-8.486L10.5 3.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>}
          />

          <AnnouncementCard 
            priority="Normal Priority"
            date="Oct 20, 2023 • 11:00 AM"
            title="Nominate your peers for the 'Q3 MVP' Award"
            content="It's that time of the quarter again! We are looking for nominations for the most valuable team player who went above and beyond to support their colleagues and clients. Submissions are open until next Friday."
            author="Elena Rodriguez"
            role="Culture Specialist"
            authorImg={imgAuthor2.src}
            metaLabel="48 Nominations"
            metaIcon={<svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>}
          />

          {/* Pagination */}
          <div className="flex justify-center pt-4">
            <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md hover:bg-slate-50 transition-all flex items-center gap-2">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 14l-7 7-7-7m14-8l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
              Load Older Announcements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}