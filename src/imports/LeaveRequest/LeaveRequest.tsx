"use client";
import React from 'react';
import { Calendar, UploadCloud, HelpCircle, ChevronDown, Info, ArrowRight } from 'lucide-react';

interface LeaveRequestProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export default function LeaveRequest({ onCancel, onSubmit }: LeaveRequestProps) {
  return (
    <div className="flex-1 bg-[#f6f6f8] relative w-full overflow-y-auto" data-name="Leave Request Page">
      <div className="max-w-[1200px] mx-auto p-[32px]">
        <div className="flex gap-[32px] items-start">
          
          {/* Main Form Area */}
          <div className="flex-1 bg-white rounded-[24px] p-[24px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-[#e2e8f0]">
            <header className="mb-[20px]">
              <h1 className="text-[26px] font-bold text-[#0f172a] mb-[2px]">New Leave Request</h1>
              <p className="text-[#64748b] text-[14px]">Fill in the details below to submit your request.</p>
            </header>

            <div className="space-y-[16px]">
              {/* Leave Type */}
              <div className="space-y-[4px]">
                <label className="text-[13px] font-semibold text-[#475569]">Leave Type</label>
                <div className="relative">
                  <select className="w-full h-[40px] px-[12px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] text-[14px] text-[#0f172a] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5048e5]/20 transition-all cursor-pointer">
                    <option>Select leave type</option>
                    <option>Annual Leave</option>
                    <option>Sick Leave</option>
                    <option>Personal Leave</option>
                  </select>
                  <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none size-[18px]" />
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-2 gap-[16px]">
                <div className="space-y-[4px]">
                  <label className="text-[13px] font-semibold text-[#475569]">Start Date</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="mm/dd/yyyy"
                      className="w-full h-[40px] px-[12px] pl-[40px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] text-[14px] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#5048e5]/20 transition-all"
                    />
                    <Calendar className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#94a3b8] size-[16px]" />
                  </div>
                </div>
                <div className="space-y-[4px]">
                  <label className="text-[13px] font-semibold text-[#475569]">End Date</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="mm/dd/yyyy"
                      className="w-full h-[40px] px-[12px] pl-[40px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] text-[14px] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#5048e5]/20 transition-all"
                    />
                    <Calendar className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#94a3b8] size-[16px]" />
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-[#5048e5]/5 border border-[#5048e5]/10 rounded-[10px] p-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[8px] text-[#5048e5]">
                  <Info className="size-[18px]" />
                  <span className="text-[13px] font-medium">Total duration based on selected dates</span>
                </div>
                <span className="text-[18px] font-bold text-[#5048e5]">0 Days</span>
              </div>

              {/* Reason */}
              <div className="space-y-[4px]">
                <label className="text-[13px] font-semibold text-[#475569]">Reason for Leave</label>
                <textarea 
                  placeholder="Briefly describe your reason..."
                  className="w-full min-h-[80px] p-[12px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] text-[14px] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#5048e5]/20 transition-all resize-none"
                />
              </div>

              {/* Attachments */}
              <div className="space-y-[4px]">
                <label className="text-[13px] font-semibold text-[#475569]">Attachments (Optional)</label>
                <div className="border-2 border-dashed border-[#e2e8f0] rounded-[12px] p-[16px] flex flex-col items-center justify-center bg-[#f8fafc] hover:bg-[#f1f5f9] transition-all cursor-pointer group">
                  <UploadCloud className="text-[#94a3b8] size-[20px] mb-[4px] group-hover:scale-110 transition-transform" />
                  <p className="text-[13px] text-[#0f172a] font-semibold">Click to upload or drag and drop</p>
                  <p className="text-[#94a3b8] text-[11px]">PDF, JPG, or PNG (Max 5MB)</p>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex items-center justify-end gap-[12px] pt-[4px]">
                <button 
                  onClick={onCancel}
                  className="px-[20px] py-[10px] text-[14px] text-[#64748b] font-semibold hover:text-[#0f172a] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={onSubmit}
                  className="px-[28px] py-[10px] text-[14px] bg-[#5048e5] text-white font-semibold rounded-[10px] shadow-[0px_4px_12px_rgba(80,72,229,0.3)] hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all active:translate-y-0"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="w-[300px] space-y-[20px]">
            {/* Leave Balance Card */}
            <div className="bg-white rounded-[24px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-[#e2e8f0] overflow-hidden">
              <div className="p-[20px] border-b border-[#f1f5f9]">
                <h3 className="text-[16px] font-bold text-[#0f172a]">Leave Balance</h3>
              </div>
              <div className="p-[20px] space-y-[20px]">
                {/* Annual */}
                <div className="space-y-[6px]">
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">Annual</span>
                    <span className="text-[16px] font-bold text-[#5048e5]">15</span>
                  </div>
                  <div className="h-[6px] bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#5048e5] w-[60%] rounded-full" />
                  </div>
                </div>
                {/* Sick */}
                <div className="space-y-[6px]">
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">Sick</span>
                    <span className="text-[16px] font-bold text-[#0f172a]">8</span>
                  </div>
                  <div className="h-[6px] bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#94a3b8] w-[80%] rounded-full" />
                  </div>
                </div>
                {/* Personal */}
                <div className="space-y-[6px]">
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">Personal</span>
                    <span className="text-[16px] font-bold text-[#0f172a]">3</span>
                  </div>
                  <div className="h-[6px] bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#94a3b8] w-[60%] rounded-full" />
                  </div>
                </div>
              </div>
              <button className="w-full py-[14px] bg-[#f8fafc] border-t border-[#f1f5f9] text-[#5048e5] text-[13px] font-semibold flex items-center justify-center gap-[6px] hover:bg-[#f1f5f9] transition-colors group">
                History <ArrowRight className="size-[12px] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Help Card */}
            <div className="bg-gradient-to-br from-[#5048e5] to-[#4338ca] rounded-[24px] p-[20px] text-white relative overflow-hidden shadow-[0px_8px_24px_rgba(80,72,229,0.3)]">
              <div className="bg-white/20 w-[36px] h-[36px] rounded-[10px] flex items-center justify-center mb-[12px]">
                <HelpCircle className="size-[18px]" />
              </div>
              <h3 className="text-[18px] font-bold mb-[4px]">Need help?</h3>
              <p className="text-white/80 text-[13px] leading-snug mb-[20px]">
                Check our leave policy for detailed information.
              </p>
              <button className="w-full py-[10px] bg-white/20 backdrop-blur-md rounded-[10px] text-[13px] font-semibold hover:bg-white/30 transition-colors">
                Read Policy
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
