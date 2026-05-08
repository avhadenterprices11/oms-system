"use client";
import React from 'react';

interface AddOrganisationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddOrganisationModal: React.FC<AddOrganisationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="bg-white w-[600px] rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-[#0f172a] text-2xl font-extrabold tracking-tight">Add Organisation</h2>
          <p className="text-[#64748b] text-[14px] mt-1">Add a new company or organisation to CRM.</p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-4 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-[#334155] text-[13px] font-bold">Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              placeholder="e.g. TechFlow Inc"
              className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] focus:ring-1 focus:ring-[#5048e5] outline-none transition-all placeholder:text-[#94a3b8] text-[14px]"
            />
          </div>

          {/* Industry & Website */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[#334155] text-[13px] font-bold">Industry</label>
              <div className="relative">
                <select className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] appearance-none focus:border-[#5048e5] outline-none text-[14px] text-[#0f172a]">
                  <option value="">Select Industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="size-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[#334155] text-[13px] font-bold">Website</label>
              <input 
                type="text" 
                placeholder="https://example.com"
                className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] outline-none text-[14px] placeholder:text-[#94a3b8]"
              />
            </div>
          </div>

          {/* Phone & Email */}
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
              <label className="text-[#334155] text-[13px] font-bold">Email</label>
              <input 
                type="email" 
                placeholder="contact@company.com"
                className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] outline-none text-[14px] placeholder:text-[#94a3b8]"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-1.5">
            <label className="text-[#334155] text-[13px] font-bold">Address</label>
            <textarea 
              placeholder="Street address, city, state, pin code"
              className="w-full h-20 px-4 py-3 rounded-xl border border-[#e2e8f0] focus:border-[#5048e5] outline-none text-[14px] placeholder:text-[#94a3b8] resize-none"
            />
          </div>

          {/* Relationship Owner */}
          <div className="space-y-1.5">
            <label className="text-[#334155] text-[13px] font-bold">Relationship Owner</label>
            <div className="relative">
              <select className="w-full h-11 px-4 rounded-xl border border-[#e2e8f0] appearance-none focus:border-[#5048e5] outline-none text-[14px] text-[#0f172a]">
                <option value="">Select Member</option>
                <option value="1">Ashwini Reddy</option>
                <option value="2">Ravi Kumar</option>
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
            <label className="text-[#334155] text-[13px] font-bold">Notes</label>
            <textarea 
              placeholder="Any additional context about this organisation..."
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
            Add Organisation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOrganisationModal;
