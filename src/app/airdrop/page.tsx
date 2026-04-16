"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function AirdropPage() {
  const { points, walletAddress, tasks } = useApp();
  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const socialDone = tasks.filter(t => t.type === 'social' && t.status === 'completed').length;
  const totalSocial = tasks.filter(t => t.type === 'social').length;

  return (
    <div className="py-10 pb-28 md:pb-10 px-4 flex flex-col items-center max-w-3xl mx-auto space-y-8">

      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-primary/20 text-5xl flex items-center justify-center rounded-full mx-auto shadow-[0_0_30px_rgba(250,204,21,0.2)]">
          🪂
        </div>
        <h1 className="text-4xl font-extrabold text-white">$AIRDROP Token</h1>
        <p className="text-foreground/60 text-lg max-w-xl mx-auto">
          The $AIRDROP token airdrop snapshot has not been taken yet. Keep earning XP and completing tasks to maximize your allocation.
        </p>
      </div>

      {/* Your Eligibility */}
      <div className="bg-card border border-card-border rounded-2xl p-6 w-full">
        <h3 className="font-bold text-white text-lg mb-4">Your Eligibility Status</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-background rounded-xl p-4 text-center border border-card-border/50">
            <p className="text-foreground/50 text-sm mb-1">Your XP</p>
            <p className={`text-2xl font-extrabold ${points >= 500 ? 'text-green-400' : 'text-primary'}`}>{points}</p>
          </div>
          <div className="bg-background rounded-xl p-4 text-center border border-card-border/50">
            <p className="text-foreground/50 text-sm mb-1">Wallet</p>
            <p className={`text-2xl font-extrabold ${walletAddress ? 'text-green-400' : 'text-red-400'}`}>
              {walletAddress ? '✓' : '✗'}
            </p>
          </div>
          <div className="bg-background rounded-xl p-4 text-center border border-card-border/50">
            <p className="text-foreground/50 text-sm mb-1">Tasks Done</p>
            <p className="text-2xl font-extrabold text-primary">{completedCount}/{tasks.length}</p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-card border border-card-border rounded-2xl p-6 w-full">
        <h3 className="font-bold text-white text-lg mb-4">Airdrop Requirements</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span className={`text-lg ${points >= 500 ? 'text-green-400' : 'text-foreground/30'}`}>
              {points >= 500 ? '✓' : '○'}
            </span>
            <span className={points >= 500 ? 'text-white' : 'text-foreground/60'}>
              Maintain a minimum of <strong className="text-primary">500 XP</strong>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className={`text-lg ${walletAddress ? 'text-green-400' : 'text-foreground/30'}`}>
              {walletAddress ? '✓' : '○'}
            </span>
            <span className={walletAddress ? 'text-white' : 'text-foreground/60'}>
              Keep <strong className="text-primary">wallet connected</strong>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className={`text-lg ${socialDone >= totalSocial ? 'text-green-400' : 'text-foreground/30'}`}>
              {socialDone >= totalSocial ? '✓' : '○'}
            </span>
            <span className={socialDone >= totalSocial ? 'text-white' : 'text-foreground/60'}>
              Complete all <strong className="text-primary">social tasks</strong> ({socialDone}/{totalSocial})
            </span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <Link
        href="/rewards"
        className="bg-primary hover:bg-primary-hover text-black font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] text-center w-full sm:w-auto"
      >
        Complete Tasks to Qualify →
      </Link>
    </div>
  );
}
