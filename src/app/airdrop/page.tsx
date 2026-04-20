"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function AirdropPage() {
  const { points, walletAddress, tasks } = useApp();
  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const socialDone = tasks.filter(t => t.type === 'social' && t.status === 'completed').length;
  const totalSocial = tasks.filter(t => t.type === 'social').length;

  return (
    <div className="py-20 px-4 min-h-[calc(100vh-80px)] flex flex-col items-center max-w-4xl mx-auto space-y-12 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero */}
      <div className="text-center space-y-6 w-full relative z-10">
        <div className="w-24 h-24 bg-white/5 border border-white/10 text-5xl flex items-center justify-center rounded-3xl mx-auto shadow-2xl animate-glow-pulse">
          🪂
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase">
          $DPX <span className="text-primary glow-text-primary">Airdrop</span>
        </h1>
        <p className="text-foreground/50 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          The $DPX snapshot is approaching. Complete missions, accumulate XP, and secure your position in the next generation of Web3 rewards.
        </p>
      </div>

      {/* Eligibility Cards */}
      <div className="glass-card p-8 sm:p-10 w-full relative z-10 border-white/10 rounded-[32px]">
        <h3 className="font-black text-white text-xl mb-8 uppercase tracking-widest flex items-center gap-3">
          <span className="w-2 h-6 bg-primary rounded-full" />
          Live Eligibility Status
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5 hover:border-primary/30 transition-all group">
            <p className="text-foreground/40 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">Total XP</p>
            <p className={`text-4xl font-black tracking-tighter ${points >= 500 ? 'text-success' : 'text-primary'}`}>{points}</p>
            <div className="mt-2 text-[10px] font-bold text-foreground/20">MIN 500 REQUIRED</div>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5 hover:border-primary/30 transition-all group">
            <p className="text-foreground/40 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">Wallet Status</p>
            <div className="flex items-center justify-center h-10">
              {walletAddress ? (
                <span className="text-success font-black text-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  SYNCED
                </span>
              ) : (
                <span className="text-error font-black text-xl flex items-center gap-2">
                   DISCONNECTED
                </span>
              )}
            </div>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5 hover:border-primary/30 transition-all group">
            <p className="text-foreground/40 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">Mission Progress</p>
            <p className="text-4xl font-black text-white tracking-tighter">{completedCount}/{tasks.length}</p>
            <div className="mt-2 text-[10px] font-bold text-foreground/20">TOTAL TASKS</div>
          </div>
        </div>
      </div>

      {/* Requirements Details */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        <div className="glass-card p-8 rounded-3xl border-white/5">
          <h3 className="font-black text-white text-lg mb-6 uppercase tracking-widest">Requirements</h3>
          <div className="space-y-6">
            {[
              { label: 'Minimum 500 XP Accumulated', done: points >= 500 },
              { label: 'Verified Web3 Wallet Connection', done: !!walletAddress },
              { label: 'All Social Channels Verified', done: socialDone >= totalSocial },
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${req.done ? 'bg-success/20 text-success' : 'bg-white/5 text-foreground/20'}`}>
                  {req.done ? '✓' : '!'}
                </div>
                <span className={`font-bold transition-all ${req.done ? 'text-white' : 'text-foreground/40'}`}>
                  {req.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl border-white/5 bg-primary/5 flex flex-col justify-center items-center text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="font-black text-white text-xl mb-2 tracking-tight">Max Allocation Tip</h3>
          <p className="text-foreground/50 text-sm font-medium leading-relaxed">
            Users with over <span className="text-primary font-black">2,000 XP</span> and at least one referral will qualify for the <span className="text-white font-black">Diamond Tier</span> allocation.
          </p>
        </div>
      </div>

      <Link
        href="/rewards"
        className="w-full sm:w-auto bg-linear-to-r from-primary to-purple-600 hover:scale-105 active:scale-95 text-white font-black px-12 py-5 rounded-2xl text-lg transition-all shadow-2xl shadow-primary/40 text-center relative z-10"
      >
        GO TO REWARDS HUB →
      </Link>
    </div>
  );
}
