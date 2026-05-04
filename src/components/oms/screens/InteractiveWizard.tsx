"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import svgPaths from "@/imports/WelcomeWizard/svg-7d9791wxbp";

interface InteractiveWizardProps {
  onContinue: () => void;
  onSkip: () => void;
}

export function InteractiveWizard({ onContinue, onSkip }: InteractiveWizardProps) {
  const router = useRouter();
  const [step, setStep] = useState(2);

  // Step 1 - Background setup (auto-completed)
  const [backgroundSetup] = useState({
    emailVerified: true,
    defaultWorkspaceCreated: true,
    defaultRole: "Owner",
    region: "US-East (IP-based)",
    timezone: typeof window !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "UTC"
  });

  // Step 2 - Profile fields
  const [fullName, setFullName] = useState("Ashwini Kumar");
  const [displayName, setDisplayName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [function_, setFunction] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [workType, setWorkType] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  // Step 3 - Notification preferences
  const [emailNotif, setEmailNotif] = useState(true);
  const [inAppNotif, setInAppNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [slackNotif, setSlackNotif] = useState(false);
  const [taskUpdates, setTaskUpdates] = useState(true);
  const [mentions, setMentions] = useState(true);
  const [systemAlerts, setSystemAlerts] = useState(true);
  const [reports, setReports] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [frequency, setFrequency] = useState("real-time");
  const [workHoursStart, setWorkHoursStart] = useState("09:00");
  const [workHoursEnd, setWorkHoursEnd] = useState("18:00");
  const [doNotDisturb, setDoNotDisturb] = useState(true);
  const [aiSmartNotif, setAiSmartNotif] = useState(true);
  const [priorityOnly, setPriorityOnly] = useState(false);

  const handleContinue = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      router.push("/setup");
    }
  };

  return (
    <div className="flex w-[1280px] h-[1024px]">
      {/* Left Panel */}
      <div
        className="w-[640px] h-full flex flex-col items-center justify-center relative"
        style={{ backgroundImage: "linear-gradient(122.006deg, rgb(80, 72, 229) 0%, rgb(67, 56, 202) 100%)" }}
      >
        <div className="bg-[rgba(255,255,255,0.15)] w-[64px] h-[64px] rounded-[16px] flex items-center justify-center mb-12">
          <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 27.9948 27.9948">
            <path d={svgPaths.p14110500} fill="white" />
            <path d={svgPaths.p2cbf100} fill="white" opacity="0.6" />
            <path d={svgPaths.p2075c680} fill="white" opacity="0.6" />
            <path d={svgPaths.pb29980} fill="white" opacity="0.4" />
          </svg>
        </div>
        <h1 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[40px] text-white tracking-[-1px] mb-3">
          Welcome to Portal
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[rgba(255,255,255,0.7)]">
          Your unified workspace
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-white h-full flex flex-col p-20">
        <h2 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[28px] text-[#0f172a] tracking-[-0.5px] mb-12">
          Let's get you set up
        </h2>

        {/* Progress Steps */}
        <div className="space-y-4 mb-12">
          {/* Step 1 - Completed */}
          <div 
            className="flex gap-4 items-start cursor-pointer group"
            onClick={() => setStep(1)}
          >
            <div className="bg-[#5048e5] w-8 h-8 rounded-[16px] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4338ca] transition-colors">
              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 13.9931 13.9931">
                <path d={svgPaths.p16456c00} stroke="white" strokeWidth="1.99901" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#0f172a] mb-1">
                Account created
              </h3>
              <div className="text-[11px] text-[#64748b] space-y-0.5">
                <p>✓ Email verified</p>
                <p>✓ Default workspace created</p>
                <p>✓ Default role assigned ({backgroundSetup.defaultRole})</p>
                <p>✓ Region detected ({backgroundSetup.region})</p>
                <p>✓ Timezone auto-set ({backgroundSetup.timezone})</p>
              </div>
            </div>
          </div>

          {/* Step 2 - Active */}
          <div 
            className={`flex gap-4 items-start transition-opacity ${step !== 2 && "opacity-50 hover:opacity-80 cursor-pointer"} group`}
            onClick={() => setStep(2)}
          >
            <div className={`${step >= 2 ? "bg-[#5048e5]" : "bg-[#f1f5f9]"} w-8 h-8 rounded-[16px] flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-all`}>
              {step > 2 ? (
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 13.9931 13.9931">
                  <path d={svgPaths.p16456c00} stroke="white" strokeWidth="1.99901" />
                </svg>
              ) : (
                <span className={`font-['Inter:Bold',sans-serif] font-bold text-[14px] ${step >= 2 ? "text-white" : "text-[#94a3b8]"}`}>2</span>
              )}
            </div>
            <div className="flex-1">
              <h3 className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] mb-3 ${step >= 2 ? "text-[#0f172a]" : "text-[#94a3b8]"}`}>
                Complete your profile
              </h3>
              {step === 2 && (
                <div className="bg-[#f8fafc] rounded-[12px] p-5 space-y-4 max-h-[400px] overflow-y-auto">
                  {/* Basic Identity */}
                  <div className="space-y-3">
                    <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Basic Identity</p>
                    <div className="flex flex-col items-center pb-2">
                      <div className="bg-[#e2e8f0] w-16 h-16 rounded-full flex items-center justify-center mb-1 overflow-hidden">
                        {profilePhoto ? (
                          <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 23.9931 23.9931">
                            <path d={svgPaths.p18401580} stroke="#94A3B8" strokeWidth="1.49957" />
                            <path d={svgPaths.p1b05b000} stroke="#94A3B8" strokeWidth="1.49957" />
                          </svg>
                        )}
                      </div>
                      <label className="text-[11px] text-[#5048e5] cursor-pointer font-semibold hover:underline">
                        Upload Photo
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => setProfilePhoto(e.target.files?.[0] || null)} />
                      </label>
                    </div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                    />
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Preferred Display Name (optional)"
                      className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                    />
                  </div>

                  {/* Work Context */}
                  <div className="space-y-3 pt-2">
                    <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Work Context</p>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="Job Title / Role"
                      className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                    />
                    <select
                      value={function_}
                      onChange={(e) => setFunction(e.target.value)}
                      className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                    >
                      <option value="">Function</option>
                      <option value="founder">Founder / Owner</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="operations">Operations</option>
                      <option value="developer">Developer</option>
                      <option value="hr">HR</option>
                      <option value="finance">Finance</option>
                    </select>
                    <select
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                    >
                      <option value="">Experience Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  {/* Work Setup */}
                  <div className="space-y-3 pt-2">
                    <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Work Setup</p>
                    <select
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                      className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                    >
                      <option value="">Work Type</option>
                      <option value="individual">Individual</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="agency">Agency</option>
                      <option value="employee">Company Employee</option>
                    </select>
                    <select
                      value={primaryGoal}
                      onChange={(e) => setPrimaryGoal(e.target.value)}
                      className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                    >
                      <option value="">Primary Goal</option>
                      <option value="manage-team">Manage team</option>
                      <option value="run-operations">Run operations</option>
                      <option value="build-systems">Build systems</option>
                      <option value="track-performance">Track performance</option>
                      <option value="automate-workflows">Automate workflows</option>
                    </select>
                  </div>

                  {/* Contact */}
                  <div className="space-y-3 pt-2">
                    <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Contact (Optional)</p>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number (e.g. +1 234 567 890)"
                      className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Step 3 - Notification Preferences */}
          <div 
            className={`flex gap-4 items-start transition-opacity ${step !== 3 && "opacity-50 hover:opacity-80 cursor-pointer"} group`}
            onClick={() => setStep(3)}
          >
            <div className={`${step >= 3 ? "bg-[#5048e5]" : "bg-[#f1f5f9]"} w-8 h-8 rounded-[16px] flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-all`}>
              {step > 3 ? (
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 13.9931 13.9931">
                  <path d={svgPaths.p16456c00} stroke="white" strokeWidth="1.99901" />
                </svg>
              ) : (
                <span className={`font-['Inter:Bold',sans-serif] font-bold text-[14px] ${step >= 3 ? "text-white" : "text-[#94a3b8]"}`}>3</span>
              )}
            </div>
            <div className="flex-1">
              <h3 className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] mb-3 ${step >= 3 ? "text-[#0f172a]" : "text-[#94a3b8]"}`}>
                Set notification preferences
              </h3>
              {step === 3 && (
                <div className="bg-[#f8fafc] rounded-[12px] p-5 space-y-4 max-h-[400px] overflow-y-auto">
                  {/* Channels */}
                  <div className="space-y-3">
                    <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Channels</p>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-[10px] cursor-pointer hover:border-[#5048e5] transition-colors">
                        <input type="checkbox" checked={emailNotif} onChange={(e) => setEmailNotif(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
                        <span className="text-[13px] font-medium text-[#0f172a]">Email</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-[10px] cursor-pointer hover:border-[#5048e5] transition-colors">
                        <input type="checkbox" checked={inAppNotif} onChange={(e) => setInAppNotif(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
                        <span className="text-[13px] font-medium text-[#0f172a]">In-app</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-[10px] cursor-pointer hover:border-[#5048e5] transition-colors">
                        <input type="checkbox" checked={pushNotif} onChange={(e) => setPushNotif(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
                        <span className="text-[13px] font-medium text-[#0f172a]">Push</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 bg-white border border-[#e2e8f0] rounded-[10px] cursor-pointer hover:border-[#5048e5] transition-colors opacity-60">
                        <input type="checkbox" checked={slackNotif} onChange={(e) => setSlackNotif(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
                        <span className="text-[13px] font-medium text-[#0f172a]">Slack / Teams</span>
                      </label>
                    </div>
                  </div>

                  {/* Notification Types */}
                  <div className="space-y-3 pt-2">
                    <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Notification Types</p>
                    <div className="space-y-2">
                      {[
                        { id: 'task', label: 'Task updates', checked: taskUpdates, setter: setTaskUpdates },
                        { id: 'mentions', label: 'Mentions / messages', checked: mentions, setter: setMentions },
                        { id: 'system', label: 'System alerts', checked: systemAlerts, setter: setSystemAlerts },
                        { id: 'reports', label: 'Reports / summaries', checked: reports, setter: setReports },
                        { id: 'marketing', label: 'Marketing / updates', checked: marketing, setter: setMarketing },
                      ].map((type) => (
                        <label key={type.id} className="flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors cursor-pointer">
                          <span className="text-[13px] text-[#334155]">{type.label}</span>
                          <input type="checkbox" checked={type.checked} onChange={(e) => type.setter(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Frequency Control */}
                  <div className="space-y-3 pt-2">
                    <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Frequency Control</p>
                    <div className="flex gap-2">
                      {['real-time', 'daily', 'weekly'].map((f) => (
                        <button
                          key={f}
                          onClick={() => setFrequency(f)}
                          className={`flex-1 py-2 px-3 rounded-lg border text-[12px] font-medium transition-all ${
                            frequency === f 
                              ? "bg-[#5048e5] border-[#5048e5] text-white" 
                              : "bg-white border-[#e2e8f0] text-[#64748b] hover:border-[#5048e5]"
                          }`}
                        >
                          {f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="space-y-3 pt-2">
                    <p className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Timezone-aware timing</p>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between">
                        <span className="text-[13px] text-[#334155]">Do not disturb (Off-hours)</span>
                        <input type="checkbox" checked={doNotDisturb} onChange={(e) => setDoNotDisturb(e.target.checked)} className="w-4 h-4 rounded text-[#5048e5]" />
                      </label>
                      <div className="flex gap-2 items-center">
                        <div className="flex-1 space-y-1">
                          <p className="text-[10px] text-[#64748b]">Working hours start</p>
                          <input
                            type="time"
                            value={workHoursStart}
                            onChange={(e) => setWorkHoursStart(e.target.value)}
                            className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-[10px] text-[#64748b]">Working hours end</p>
                          <input
                            type="time"
                            value={workHoursEnd}
                            onChange={(e) => setWorkHoursEnd(e.target.value)}
                            className="w-full h-[34px] px-3 py-2 bg-white border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced */}
                  <div className="space-y-3 pt-4 border-t border-[#e2e8f0]">
                    <p className="text-[11px] font-bold text-[#5048e5] uppercase tracking-wider flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      Advanced
                    </p>
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={aiSmartNotif} onChange={(e) => setAiSmartNotif(e.target.checked)} className="mt-1 w-4 h-4 rounded text-[#5048e5]" />
                        <div className="flex-1">
                          <p className="text-[13px] font-medium text-[#0f172a]">AI-based smart notifications</p>
                          <p className="text-[11px] text-[#64748b]">System learns your behavior to minimize distractions.</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={priorityOnly} onChange={(e) => setPriorityOnly(e.target.checked)} className="mt-1 w-4 h-4 rounded text-[#5048e5]" />
                        <div className="flex-1">
                          <p className="text-[13px] font-medium text-[#0f172a]">Priority notifications only</p>
                          <p className="text-[11px] text-[#64748b]">Only show alerts for high-priority tasks and direct mentions.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Step 4 - Explore Dashboard */}
          <div 
            className={`flex gap-4 items-start transition-opacity ${step !== 4 && "opacity-50 hover:opacity-80 cursor-pointer"} group`}
            onClick={() => router.push("/setup")}
          >
            <div className={`${step >= 4 ? "bg-[#5048e5]" : "bg-[#f1f5f9]"} w-8 h-8 rounded-[16px] flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-all`}>
              {step > 4 ? (
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 13.9931 13.9931">
                  <path d={svgPaths.p16456c00} stroke="white" strokeWidth="1.99901" />
                </svg>
              ) : (
                <span className={`font-['Inter:Bold',sans-serif] font-bold text-[14px] ${step >= 4 ? "text-white" : "text-[#94a3b8]"}`}>4</span>
              )}
            </div>
            <div className="flex-1">
              <h3 className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] mb-3 ${step >= 4 ? "text-[#0f172a]" : "text-[#94a3b8]"}`}>
                Explore your dashboard
              </h3>
              {step === 4 && (
                <div className="bg-[#f8fafc] rounded-[12px] p-5 space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-[#e2e8f0]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#5048e5] rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[14px] text-[#0f172a]">Your workspace is ready!</h4>
                        <p className="text-[12px] text-[#64748b]">Everything is set up for you to start</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#64748b]">
                    Click Continue to access your personalized dashboard with features tailored to your role and goals.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#5048e5] mb-4">
          Step {step} of 4
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={onSkip}
            className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#64748b] hover:text-[#475569]"
          >
            Skip for now
          </button>
          <div className="flex gap-2">
            {step > 2 && (
              <button
                onClick={() => setStep(step - 1)}
                className="border border-[#e2e8f0] px-6 py-2.5 rounded-[10px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#334155] hover:bg-[#f8fafc] transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={handleContinue}
              className="bg-[#5048e5] px-6 py-2.5 rounded-[10px] shadow-[0px_10px_15px_0px_rgba(80,72,229,0.2)] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-white hover:bg-[#4338ca] transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
