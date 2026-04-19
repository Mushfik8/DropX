"use client";

import Link from "next/link";
import Image from 'next/image';
import xIcon from '@/components/icons8-x-logo.svg';
import telegramIcon from '@/components/telegram-svgrepo-com.svg';

const XIcon = () => <Image src={xIcon} alt="X" className="w-6 h-6 object-contain" />;
const TelegramIcon = () => <Image src={telegramIcon} alt="Telegram" className="w-6 h-6 object-contain" />;

export default function AboutPage() {
  return (
    <div className="w-full pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden border-b border-card-border/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-card border border-card-border rounded-full text-foreground/70 text-sm font-semibold mb-6 uppercase tracking-wider">
            About DropX
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Building the Future of <br className="hidden md:block"/>
            <span className="text-primary">Gamified Web3 Rewards</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            DropX is a next-generation Web3 engagement and airdrop ecosystem designed to connect users and projects through real, measurable interactions.
          </p>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">What is <span className="text-primary">DropX?</span></h2>
          <div className="bg-card border border-card-border p-8 rounded-2xl">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              DropX is a gamified reward platform where users complete tasks and earn:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <li className="bg-background border border-card-border p-4 rounded-xl flex items-center gap-3">
                <span className="text-primary text-xl">💎</span>
                <span className="font-bold text-white">$DPX tokens</span>
              </li>
              <li className="bg-background border border-card-border p-4 rounded-xl flex items-center gap-3">
                <span className="text-primary text-xl">📈</span>
                <span className="font-bold text-white">Points & leaderboard rewards</span>
              </li>
              <li className="bg-background border border-card-border p-4 rounded-xl flex items-center gap-3">
                <span className="text-primary text-xl">🎁</span>
                <span className="font-bold text-white">Exclusive campaign incentives</span>
              </li>
            </ul>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Projects use DropX to:
            </p>
            <ul className="space-y-3">
              {[
                'Launch campaigns',
                'Grow communities',
                'Drive real engagement'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/70">
                  <span className="text-success font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. USE CASE / VALUE PROPOSITION */}
      <section className="py-16 px-4 bg-primary/5 border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Value Proposition</h2>
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
            "DropX transforms user engagement into measurable on-chain value, allowing projects to scale communities while rewarding genuine participation."
          </p>
        </div>
      </section>

      {/* 4. TOKEN INFO */}
      <section className="py-20 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white">Token <span className="text-primary">Economics</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-background border border-primary/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.05)]">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-card-border pb-4">Smart Contract</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/50 font-mono text-sm">Token Name</span>
                  <span className="font-bold text-white">DropX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/50 font-mono text-sm">Symbol</span>
                  <span className="font-bold text-primary">$DPX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/50 font-mono text-sm">Network</span>
                  <span className="font-bold text-white">BSC (Binance Smart Chain)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/50 font-mono text-sm">Total Supply</span>
                  <span className="font-bold text-white">1,000,000,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/50 font-mono text-sm">Contract Address</span>
                  <span className="font-mono text-xs text-foreground/40 bg-card px-2 py-1 rounded">TBA (Pre-Launch)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Token Utility</h3>
              <div className="grid gap-4">
                {[
                  { title: 'Reward distribution', icon: '🎁' },
                  { title: 'Platform incentives', icon: '⚡' },
                  { title: 'Staking (future)', icon: '🔒' },
                  { title: 'Governance (future)', icon: '🏛️' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-card border border-card-border p-4 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-bold text-white">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white">Core <span className="text-primary">Features</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'Gamified Task System', icon: '🎮' },
              { label: 'Token-Based Rewards', icon: '💰' },
              { label: 'Referral Engine', icon: '🧑‍🤝‍🧑' },
              { label: 'Real-Time Leaderboard', icon: '📊' },
              { label: 'Secure Wallet Integration', icon: '🔐' },
              { label: 'Anti-Bot Protection', icon: '🛡️' }
            ].map((feat, i) => (
               <div key={i} className="bg-card border border-card-border p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:border-primary/50 transition-all">
                 <span className="text-2xl sm:text-3xl">{feat.icon}</span>
                 <span className="font-bold text-xs sm:text-sm text-foreground/80">{feat.label}</span>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROADMAP */}
      <section className="py-20 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white">Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border-l-4 border-l-success p-6 rounded-r-2xl border-y border-r border-card-border">
              <h3 className="font-bold text-white text-xl mb-3">Phase 1</h3>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li>• Platform launch</li>
                <li>• Task system</li>
                <li>• Community setup</li>
              </ul>
            </div>
            <div className="bg-background border-l-4 border-l-primary p-6 rounded-r-2xl border-y border-r border-card-border">
              <h3 className="font-bold text-white text-xl mb-3">Phase 2</h3>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li>• Referral system</li>
                <li>• Leaderboards</li>
                <li>• Campaign expansion</li>
              </ul>
            </div>
            <div className="bg-background border-l-4 border-l-warning p-6 rounded-r-2xl border-y border-r border-card-border">
              <h3 className="font-bold text-white text-xl mb-3">Phase 3</h3>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li>• Token launch ($DPX)</li>
                <li>• Exchange listings</li>
                <li>• Partnerships</li>
              </ul>
            </div>
            <div className="bg-background border-l-4 border-l-card-border p-6 rounded-r-2xl border-y border-r border-card-border opacity-70">
              <h3 className="font-bold text-white text-xl mb-3">Phase 4</h3>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li>• DAO governance</li>
                <li>• NFT rewards</li>
                <li>• AI task engine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENCY & SECURITY */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-white">Transparency & <span className="text-success">Security</span></h2>
          <div className="bg-card border border-success/30 p-8 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">✓</div>
                <span className="font-bold text-white">Smart contract audit (TBA)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">✓</div>
                <span className="font-bold text-white">No private key access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">✓</div>
                <span className="font-bold text-white">Secure wallet connection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">✓</div>
                <span className="font-bold text-white">Anti-bot system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OFFICIAL LINKS */}
      <section className="py-16 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-white">🌐 Official Channels</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://t.me/dropx" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-background border border-card-border px-6 py-3 rounded-xl hover:border-blue-500 transition-colors">
              <TelegramIcon /> <span className="font-bold text-white">Telegram</span>
            </a>
            <a href="https://x.com/dropx" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-background border border-card-border px-6 py-3 rounded-xl hover:border-foreground transition-colors">
              <XIcon /> <span className="font-bold text-white">X (Twitter)</span>
            </a>
            <a href="https://dropx.io" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-background border border-card-border px-6 py-3 rounded-xl hover:border-primary transition-colors">
              🌍 <span className="font-bold text-white">Website</span>
            </a>
            <a href="mailto:contact@dropx.io" className="flex items-center gap-2 bg-background border border-card-border px-6 py-3 rounded-xl hover:border-primary transition-colors">
              ✉️ <span className="font-bold text-white">contact@dropx.io</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. DISCLAIMER */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border border-warning/30 bg-warning/5 p-6 rounded-2xl text-center">
            <h2 className="text-warning font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
              <span>⚠️</span> Disclaimer
            </h2>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-2xl mx-auto">
              DropX is a Web3 engagement platform. Nothing on this website constitutes financial or investment advice. Users should conduct their own research before participating in any token-related activities.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
