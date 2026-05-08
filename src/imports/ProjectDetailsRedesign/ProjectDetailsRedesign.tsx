"use client";

import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle, 
  Clock, 
  Wallet, 
  Edit3, 
  Settings, 
  Archive,
  MoreHorizontal,
  ChevronRight,
  Plus,
  MessageSquare,
  FileText,
  Calendar
} from 'lucide-react';

const StatCard = ({ title, value, subtitle, icon: Icon, progress, team }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1 min-w-[240px]">
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{title}</div>
    <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
    {subtitle && <div className="text-xs text-slate-500 mb-3">{subtitle}</div>}
    {progress !== undefined && (
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-4">
        <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${progress}%` }} />
      </div>
    )}
    {team && (
      <div className="flex -space-x-2 mt-4">
        {['A', 'R', 'P', 'S', 'J', 'M'].map((initial, i) => (
          <div key={i} className={`size-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white ${
            ['bg-indigo-500', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-cyan-500'][i]
          }`}>
            {initial}
          </div>
        ))}
      </div>
    )}
  </div>
);

const TaskRow = ({ task, status, priority, assignee }: any) => (
  <tr className="border-b border-slate-50 last:border-0">
    <td className="py-4 font-medium text-slate-700 text-sm">{task}</td>
    <td className="py-4">
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
        status === 'Done' ? 'bg-emerald-50 text-emerald-600' :
        status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
        status === 'In Review' ? 'bg-amber-50 text-amber-600' :
        'bg-slate-50 text-slate-500'
      }`}>
        {status}
      </span>
    </td>
    <td className="py-4">
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
        priority === 'High' ? 'bg-amber-50 text-amber-600' :
        priority === 'Critical' ? 'bg-rose-50 text-rose-600' :
        'bg-blue-50 text-blue-600'
      }`}>
        {priority}
      </span>
    </td>
    <td className="py-4 text-sm text-slate-600">{assignee}</td>
  </tr>
);

const ActivityItem = ({ user, action, target, time, color }: any) => (
  <div className="flex gap-4 items-start group">
    <div className={`size-2.5 rounded-full mt-1.5 shrink-0 ${color}`} />
    <div>
      <div className="text-sm text-slate-700">
        <span className="font-bold">{user}</span> {action} <span className="font-medium text-slate-900">"{target}"</span>
      </div>
      <div className="text-xs text-slate-400 mt-1">{time}</div>
    </div>
  </div>
);

const TeamMember = ({ name, role, initial, color }: any) => (
  <div className="flex items-center gap-3">
    <div className={`size-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${color}`}>
      {initial}
    </div>
    <div>
      <div className="text-sm font-bold text-slate-900 leading-tight">{name}</div>
      <div className="text-[11px] text-slate-400">{role}</div>
    </div>
  </div>
);

export default function ProjectDetailsRedesign() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex-1 bg-white h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-[1440px] mx-auto p-10">
        {/* Header Section */}
        <header className="mb-10 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => window.location.reload()} 
                className="text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest"
              >
                <ChevronRight size={14} className="rotate-180" />
                Back
              </button>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-indigo-600 text-[11px] font-bold uppercase tracking-widest">
                <span>Projects</span>
                <ChevronRight size={14} />
                <span>Portal v2 Redesign</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Portal v2 Redesign</h1>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-[10px] font-bold uppercase tracking-wider">In Progress</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">High</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-500">
              <div>Owner: <span className="font-bold text-slate-900">Ashwini Reddy</span></div>
              <div>Deadline: <span className="font-bold text-slate-900">May 1, 2026</span></div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">Edit</button>
            <button className="px-5 py-2 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">Settings</button>
            <button className="px-5 py-2 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">Archive</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <StatCard title="Team" value="6" subtitle="members" team />
          <StatCard title="Tasks" value="28" subtitle="10 completed" />
          <StatCard title="Progress" value="68%" progress={68} />
          <StatCard title="Budget" value="₹4.5L / ₹6L" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 border-b border-slate-200 mb-8 overflow-x-auto scrollbar-hide">
          {['Overview', 'Tasks', 'Timeline', 'Milestones', 'Files', 'Meetings', 'Risks', 'Activity'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold transition-all relative whitespace-nowrap ${
                activeTab === tab ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column (Span 2) */}
          <div className="col-span-2 space-y-8">
            {/* Description Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Description</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Redesign the internal portal with a new design system, improved navigation, and responsive layouts. The goal is to modernize the employee experience and reduce onboarding friction for new hires. This includes overhauling 15+ modules with consistent tokens, accessibility compliance, and mobile-first layouts.
              </p>
            </div>

            {/* Recent Tasks Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">Recent Tasks</h3>
                <MoreHorizontal size={20} className="text-slate-300 cursor-pointer" />
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left border-b border-slate-100">
                    <th className="pb-3">Task</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Priority</th>
                    <th className="pb-3">Assignee</th>
                  </tr>
                </thead>
                <tbody>
                  <TaskRow task="Design system token audit" status="Done" priority="Medium" assignee="Priya Sharma" />
                  <TaskRow task="Sidebar navigation rework" status="In Progress" priority="High" assignee="Ravi Kumar" />
                  <TaskRow task="Dashboard KPI cards" status="In Progress" priority="High" assignee="Ashwini Reddy" />
                  <TaskRow task="Authentication flow redesign" status="In Review" priority="Critical" assignee="Ravi Kumar" />
                  <TaskRow task="Mobile responsive layouts" status="To Do" priority="Medium" assignee="Jordan Lee" />
                </tbody>
              </table>
            </div>

            {/* Recent Activity Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-8">Recent Activity</h3>
              <div className="space-y-8">
                <ActivityItem user="Ravi Kumar" action="moved" target="Sidebar navigation rework" time="2 hours ago" color="bg-indigo-500" />
                <ActivityItem user="Priya Sharma" action="completed" target="Design system token audit" time="5 hours ago" color="bg-emerald-500" />
                <ActivityItem user="Ashwini Reddy" action="added a comment on" target="Dashboard KPI cards" time="Yesterday" color="bg-amber-500" />
                <ActivityItem user="Jordan Lee" action="uploaded 3 mockup files" target="" time="2 days ago" color="bg-rose-500" />
                <ActivityItem user="Ashwini Reddy" action="updated project deadline to May 1, 2026" target="" time="3 days ago" color="bg-blue-500" />
              </div>
            </div>
          </div>

          {/* Right Column (Span 1) */}
          <div className="space-y-8">
            {/* Team Members Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Team Members</h3>
              <div className="space-y-6">
                <TeamMember name="Ashwini Reddy" role="Project Lead" initial="A" color="bg-indigo-500" />
                <TeamMember name="Ravi Kumar" role="Backend Developer" initial="R" color="bg-blue-500" />
                <TeamMember name="Priya Sharma" role="UI Designer" initial="P" color="bg-emerald-500" />
                <TeamMember name="Suresh Nair" role="Frontend Developer" initial="S" color="bg-amber-500" />
                <TeamMember name="Jordan Lee" role="QA Engineer" initial="J" color="bg-rose-500" />
                <TeamMember name="Meera Patel" role="Product Manager" initial="M" color="bg-cyan-500" />
              </div>
            </div>

            {/* Milestones Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Upcoming Milestones</h3>
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Design System v1 Freeze</div>
                    <div className="text-xs text-slate-400 mt-1">Apr 5, 2026</div>
                  </div>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold">In Progress</span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Beta Launch (Internal)</div>
                    <div className="text-xs text-slate-400 mt-1">Apr 18, 2026</div>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold">Upcoming</span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Production Release</div>
                    <div className="text-xs text-slate-400 mt-1">May 1, 2026</div>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold">Upcoming</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Completion Rate</span>
                  <span className="font-bold text-slate-900">68%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Velocity</span>
                  <span className="font-bold text-slate-900">12 pts/sprint</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Overdue Tasks</span>
                  <span className="font-bold text-rose-500">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Avg Task Duration</span>
                  <span className="font-bold text-slate-900">2.4 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
