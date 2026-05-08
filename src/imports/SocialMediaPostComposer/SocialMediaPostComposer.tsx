"use client";

import React, { useState } from 'react';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  CheckCircle2, 
  Bold, 
  Italic, 
  AtSign, 
  Hash, 
  Image as ImageIcon, 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  ChevronDown,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Smartphone,
  Monitor
} from 'lucide-react';

// --- Sub-components ---

const PlatformCard = ({ icon: Icon, name, handle, selected, onToggle }: any) => (
  <div 
    onClick={onToggle}
    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
      selected 
        ? 'border-indigo-600 bg-indigo-50/30' 
        : 'border-slate-100 bg-white hover:border-slate-200'
    }`}
  >
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${selected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
        <Icon size={20} />
      </div>
      <div>
        <div className="font-semibold text-slate-900 text-sm">{name}</div>
        <div className="text-xs text-slate-500">{handle}</div>
      </div>
    </div>
    <div className={`rounded-full ${selected ? 'text-indigo-600' : 'text-slate-200'}`}>
      <CheckCircle2 size={24} fill={selected ? 'currentColor' : 'none'} className={selected ? 'text-white' : ''} />
      {selected && <div className="absolute inset-0 bg-indigo-600 rounded-full scale-75 -z-10" />}
    </div>
  </div>
);

const AssetCard = ({ src, isAdd }: any) => (
  <div className={`aspect-square rounded-xl overflow-hidden relative group cursor-pointer ${isAdd ? 'border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center' : ''}`}>
    {isAdd ? (
      <>
        <div className="p-2 bg-white rounded-lg shadow-sm mb-2">
          <Plus size={20} className="text-slate-400" />
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Add More</span>
      </>
    ) : (
      <>
        <img src={src} alt="Asset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 p-1.5 rounded-full shadow-lg">
            <Plus size={16} className="text-slate-900" />
          </div>
        </div>
      </>
    )}
  </div>
);

// --- Main Content Area ---

function PostComposerContent() {
  const [selectedPlatforms, setSelectedPlatforms] = useState(['Instagram', 'LinkedIn']);
  const [activePreview, setActivePreview] = useState('Instagram');
  const [previewMode, setPreviewMode] = useState('Mobile');

  const togglePlatform = (name: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]
    );
  };

  return (
    <div className="flex-1 flex flex-row h-full overflow-hidden bg-[#f8fafc]">
      {/* Left Column: Editor */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-[800px] mx-auto px-10 py-12">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Post Composer</h1>
            <p className="text-slate-500 text-lg">Craft and schedule your digital narrative across all channels.</p>
          </header>

          {/* Section 1: Destination */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[2px]">1. Select Destination</h2>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">Manage Accounts</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PlatformCard 
                icon={Instagram} 
                name="Instagram" 
                handle="@thebrand_co" 
                selected={selectedPlatforms.includes('Instagram')}
                onToggle={() => togglePlatform('Instagram')}
              />
              <PlatformCard 
                icon={Linkedin} 
                name="LinkedIn" 
                handle="Brand Agency" 
                selected={selectedPlatforms.includes('LinkedIn')}
                onToggle={() => togglePlatform('LinkedIn')}
              />
              <PlatformCard 
                icon={Twitter} 
                name="X / Twitter" 
                handle="@thebrand_hq" 
                selected={selectedPlatforms.includes('X / Twitter')}
                onToggle={() => togglePlatform('X / Twitter')}
              />
              <PlatformCard 
                icon={Facebook} 
                name="Facebook" 
                handle="Brand Official" 
                selected={selectedPlatforms.includes('Facebook')}
                onToggle={() => togglePlatform('Facebook')}
              />
            </div>
          </section>

          {/* Section 2: Caption */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-500 uppercase tracking-wider text-[11px] font-bold">
                <MoreHorizontal size={16} />
                <span>Caption</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">142 / 2200</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="flex items-center gap-4 px-4 py-3 border-b border-slate-100 text-slate-400">
                <Bold size={18} className="cursor-pointer hover:text-slate-600 transition-colors" />
                <Italic size={18} className="cursor-pointer hover:text-slate-600 transition-colors" />
                <AtSign size={18} className="cursor-pointer hover:text-slate-600 transition-colors" />
                <Hash size={18} className="cursor-pointer hover:text-slate-600 transition-colors" />
              </div>
              <textarea 
                className="w-full h-40 p-4 text-slate-700 placeholder-slate-300 resize-none outline-none text-base leading-relaxed"
                placeholder="What's happening in your digital world today?"
                defaultValue="Elevating our digital presence with a fresh perspective. We're excited to announce our latest collaboration that merges technology with human-centric design. #Innovation #DesignSystem #FutureOfWork"
              />
            </div>
          </section>

          {/* Section 3: Creative Assets */}
          <section className="mb-10">
            <div className="flex items-center gap-2 text-slate-500 uppercase tracking-wider text-[11px] font-bold mb-4">
              <ImageIcon size={16} />
              <span>Creative Assets</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <AssetCard src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=400&auto=format&fit=crop" />
              <AssetCard src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&h=400&auto=format&fit=crop" />
              <AssetCard isAdd />
            </div>
          </section>

          {/* Section 4: Schedule */}
          <section className="mb-10">
            <div className="flex items-center gap-2 text-slate-500 uppercase tracking-wider text-[11px] font-bold mb-4">
              <Clock size={16} />
              <span>Schedule</span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <CalendarIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date</div>
                    <div className="text-sm font-semibold text-slate-900">October 24, 2023</div>
                  </div>
                </div>
                <ChevronDown size={18} className="text-slate-400" />
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Time</div>
                    <div className="text-sm font-semibold text-slate-900">10:30 AM (PST)</div>
                  </div>
                </div>
                <ChevronDown size={18} className="text-slate-400" />
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <footer className="flex items-center justify-between pt-6 border-t border-slate-200">
            <button className="text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">Save as Draft</button>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-100 transition-all">Send Now</button>
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">Schedule Post</button>
            </div>
          </footer>
        </div>
      </div>

      {/* Right Column: Preview */}
      <div className="w-[480px] flex flex-col bg-slate-50 border-l border-slate-200">
        {/* Tabs */}
        <div className="flex items-center justify-center gap-8 py-8 px-4 border-b border-slate-200">
          {['Instagram', 'LinkedIn', 'X / Twitter', 'Facebook'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActivePreview(tab)}
              className={`text-sm font-bold relative pb-2 transition-colors ${
                activePreview === tab ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
              {activePreview === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Preview Frame */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden w-full max-w-[360px] border-[8px] border-white ring-1 ring-slate-200">
            {/* Post Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full border-2 border-pink-500 p-0.5">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop" 
                    className="size-full rounded-full object-cover" 
                    alt="User"
                  />
                </div>
                <span className="text-sm font-bold text-slate-900">thebrand_co</span>
              </div>
              <MoreHorizontal size={20} className="text-slate-400" />
            </div>

            {/* Post Image */}
            <div className="aspect-square relative">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=400&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Post"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                <div className="size-1.5 rounded-full bg-white shadow-sm" />
                <div className="size-1.5 rounded-full bg-white/50 shadow-sm" />
              </div>
            </div>

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-slate-900">
                  <Heart size={24} strokeWidth={1.5} />
                  <MessageCircle size={24} strokeWidth={1.5} />
                  <Send size={24} strokeWidth={1.5} />
                </div>
                <Bookmark size={24} strokeWidth={1.5} />
              </div>

              {/* Likes & Caption */}
              <div className="space-y-2">
                <div className="text-sm font-bold text-slate-900">842 likes</div>
                <div className="text-sm leading-relaxed text-slate-800">
                  <span className="font-bold mr-2">thebrand_co</span>
                  Elevating our digital presence with a fresh perspective. We're excited to announce our latest collaboration that merges technology with human-centric design.
                  <span className="text-indigo-600 block mt-1">#Innovation #DesignSystem #FutureOfWork</span>
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">Just Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* View Switcher */}
        <div className="p-8 flex justify-center">
          <div className="bg-[#e2e8f0] p-1 rounded-2xl flex gap-1 shadow-inner">
            <button 
              onClick={() => setPreviewMode('Mobile')}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                previewMode === 'Mobile' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Smartphone size={16} />
              <span>Mobile</span>
            </button>
            <button 
              onClick={() => setPreviewMode('Desktop')}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                previewMode === 'Desktop' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Monitor size={16} />
              <span>Desktop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaPostComposer() {
  return (
    <div className="bg-[#f8fafc] flex flex-col items-center relative h-full w-full overflow-hidden" data-name="Social Media - Post Composer">
      <PostComposerContent />
    </div>
  );
}