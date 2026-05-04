"use client";
import { useState } from "react";
import imgImage2 from "@/imports/Body/be8043f55f7108c9a6b6f5f179066ce16e7b8dec.png";
import svgPaths from "@/imports/Body/svg-i7ssxholyf";

interface InteractiveLoginProps {
  onLogin: () => void;
}

export function InteractiveLogin({ onLogin }: InteractiveLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 relative overflow-hidden font-['Inter',sans-serif]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#5048e5]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#7c3aed]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-[540px]">
        {/* Floating Accent */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-[#5048e5] to-[#7c3aed] rounded-full blur-2xl opacity-20 animate-bounce" style={{ animationDuration: '6s' }} />
        
        <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white shadow-2xl shadow-slate-200/50 overflow-hidden">
          <div className="pt-12 pb-8 px-10 text-center">
            <div className="flex justify-center mb-8">
               <div className="bg-[#5048e5] w-16 h-16 rounded-[22px] flex items-center justify-center shadow-2xl shadow-[#5048e5]/30 group transition-transform hover:scale-110 hover:rotate-3 duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p245e1900 || "M9 0L18 9L9 18L0 9L9 0Z"} fill="white" />
                  </svg>
               </div>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-3">
              Portal <span className="bg-gradient-to-r from-[#5048e5] to-[#7c3aed] bg-clip-text text-transparent">v1</span>
            </h1>
            <p className="text-slate-500 font-medium">
              Enterprise Orchestration System
            </p>
          </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-10 pb-10">
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5 ml-1">
                Security Identity
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#5048e5] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full h-[56px] pl-12 pr-4 bg-slate-100/50 border border-transparent rounded-2xl font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#5048e5]/30 focus:ring-4 focus:ring-[#5048e5]/5 outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-2.5 ml-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Authentication
                </label>
                <button type="button" className="text-xs font-bold text-[#5048e5] hover:text-[#4338ca] transition-colors">
                  Recovery
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#5048e5] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-[56px] pl-12 pr-12 bg-slate-100/50 border border-transparent rounded-2xl font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#5048e5]/30 focus:ring-4 focus:ring-[#5048e5]/5 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#5048e5] transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="relative group w-full overflow-hidden bg-[#5048e5] h-[56px] rounded-2xl font-black text-white shadow-xl shadow-[#5048e5]/20 hover:shadow-2xl hover:shadow-[#5048e5]/30 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 text-lg">Initialise Session</span>
            </button>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white/50 backdrop-blur px-4 text-xs font-black text-slate-400 uppercase tracking-[4px]">
                  OR
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={onLogin}
              className="w-full bg-white border border-slate-100 text-slate-600 font-bold text-base h-[56px] rounded-2xl flex items-center justify-center gap-4 hover:bg-slate-50 hover:border-slate-200 transition-all group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Standard OAuth
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-slate-50/80 backdrop-blur-md border-t border-slate-100 py-6 px-10">
          <p className="text-[13px] text-slate-500 text-center font-medium leading-relaxed">
            Unauthorised access is strictly prohibited. <br/>
            Need assistance? <span className="text-[#5048e5] font-bold cursor-pointer hover:underline">Secure Support</span>
          </p>
        </div>
      </div>
    </div>
      
      <div className="fixed bottom-8 text-[11px] font-black text-slate-300 uppercase tracking-[6px] pointer-events-none uppercase">
        Enterprise Gateway • Secure Handshake v1.0.4
      </div>
    </div>
  );
}
