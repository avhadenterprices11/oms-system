"use client";
import React from 'react';

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddLeadModal: React.FC<AddLeadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="bg-white w-[600px] rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-[#0f172a] text-2xl font-extrabold tracking-tight">Add Lead</h2>
          <p className="text-[#64748b] text-[14px] mt-1">Capture new inbound enquiries and prospects.</p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-4 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Lead Name */}
          <div className="space-y-1.5">
            <label className="text-[#334155] text-[13px] font-bold">Lead Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              placeholder="e.g. Alex Rivera"
              className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] focus:ring-1 focus:ring-[#5048e5] outline-none transition-all placeholder:text-[#94a3b8] text-[14px]"
            />
          </div>

          {/* Company & Email */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[#334155] text-[13px] font-bold">Company</label>
              <input 
                type="text" 
                placeholder="Nexus Ltd"
                className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] outline-none text-[14px] placeholder:text-[#94a3b8]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[#334155] text-[13px] font-bold">Email</label>
              <input 
                type="email" 
                placeholder="alex@nexus.com"
                className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] outline-none text-[14px] placeholder:text-[#94a3b8]"
              />
            </div>
          </div>

          {/* Phone & Source */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[#334155] text-[13px] font-bold">Phone</label>
              <input 
                type="text" 
                placeholder="+91 98765 43210"
                className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] outline-none text-[14px] placeholder:text-[#94a3b8]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[#334155] text-[13px] font-bold">Source</label>
              <div className="relative">
                <select className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] appearance-none focus:border-[#5048e5] outline-none text-[14px] text-[#0f172a]">
                  <option value="">Select Source</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="website">Website</option>
                  <option value="referral">Referral</option>
                  <option value="cold_call">Cold Call</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="size-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-1.5">
            <label className="text-[#334155] text-[13px] font-bold">Initial Status</label>
            <div className="relative">
              <select className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] appearance-none focus:border-[#5048e5] outline-none text-[14px] text-[#0f172a]">
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="size-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="text-[#334155] text-[13px] font-bold">Additional Notes</label>
            <textarea 
              placeholder="Enter any initial details about the lead..."
              className="w-full h-24 px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] outline-none text-[14px] placeholder:text-[#94a3b8] resize-none"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-8 flex items-center justify-end gap-3 bg-gray-50/50">
          <button 
            onClick={onClose}
            className="h-11 px-6 rounded-xl border border-[#e2e8f0] bg-white text-[#334155] text-[14px] font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="h-11 px-6 rounded-xl bg-[#5048e5] text-white text-[14px] font-bold hover:bg-[#4338ca] shadow-[0px_4px_12px_rgba(80,72,229,0.3)] transition-all"
          >
            Create Lead
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLeadModal;
