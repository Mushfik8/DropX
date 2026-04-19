"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function AirdropPage() {
  const { points, walletAddress, tasks } = useApp();
  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const socialDone = tasks.filter(t => t.type === 'social' && t.status === 'completed').length;
  const totalSocial = tasks.filter(t => t.type === 'social').length;

  return (
    <div className="py-10 px-4 flex flex-col items-center max-w-3xl mx-auto space-y-8">

      {/* Hero */}
      <div className="text-center space-y-4 w-full">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 text-5xl flex items-center justify-center rounded-full mx-auto">
          🪂
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">$DPX Airdrop</h1>
        <p className="text-foreground/60 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
          The $DPX token airdrop snapshot has not been taken yet. Keep earning XP and completing tasks to maximize your allocation.
        </p>
      </div>

      {/* Eligibility */}
      <div className="bg-card border border-card-border rounded-2xl p-4 sm:p-6 w-full">
        <h3 className="font-bold text-white text-base sm:text-lg mb-4">Your Eligibility Status</h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className="bg-background rounded-xl p-3 sm:p-4 text-center border border-card-border/50">
            <p className="text-foreground/50 text-xs sm:text-sm mb-1">Your XP</p>
            <p className={`text-lg sm:text-2xl font-extrabold ${points >= 500 ? 'text-success' : 'text-primary'}`}>{points}</p>
          </div>
          <div className="bg-background rounded-xl p-3 sm:p-4 text-center border border-card-border/50">
            <p className="text-foreground/50 text-xs sm:text-sm mb-1">Wallet</p>
            <p className={`text-lg sm:text-2xl font-extrabold ${walletAddress ? 'text-success' : 'text-red-400'}`}>
              {walletAddress ? '✓' : '✗'}
            </p>
          </div>
          <div className="bg-background rounded-xl p-3 sm:p-4 text-center border border-card-border/50">
            <p className="text-foreground/50 text-xs sm:text-sm mb-1">Tasks Done</p>
            <p className="text-lg sm:text-2xl font-extrabold text-primary">{completedCount}/{tasks.length}</p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-card border border-card-border rounded-2xl p-4 sm:p-6 w-full">
        <h3 className="font-bold text-white text-base sm:text-lg mb-4">Airdrop Requirements</h3>
        <ul className="space-y-3 sm:space-y-4">
          <li className="flex items-start gap-3">
            <span className={`text-lg shrink-0 ${points >= 500 ? 'text-success' : 'text-foreground/30'}`}>
              {points >= 500 ? '✓' : '○'}
            </span>
            <span className={points >= 500 ? 'text-white' : 'text-foreground/60 text-sm sm:text-base'}>
              Maintain a minimum of <strong className="text-primary">500 XP</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className={`text-lg shrink-0 ${walletAddress ? 'text-success' : 'text-foreground/30'}`}>
              {walletAddress ? '✓' : '○'}
            </span>
            <span className={walletAddress ? 'text-white' : 'text-foreground/60 text-sm sm:text-base'}>
              Keep <strong className="text-primary">wallet connected</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className={`text-lg shrink-0 ${socialDone >= totalSocial ? 'text-success' : 'text-foreground/30'}`}>
              {socialDone >= totalSocial ? '✓' : '○'}
            </span>
            <span className={socialDone >= totalSocial ? 'text-white' : 'text-foreground/60 text-sm sm:text-base'}>
              Complete all <strong className="text-primary">social tasks</strong> ({socialDone}/{totalSocial})
            </span>
          </li>
        </ul>
      </div>

      <Link
        href="/rewards"
        className="bg-primary hover:bg-primary-hover text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg transition-all shadow-lg shadow-primary/20 text-center w-full sm:w-auto"
      >
        Complete Tasks to Qualify →
      </Link>
    </div>
  );
}
