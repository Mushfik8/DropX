"use client";

import Link from "next/link";
import Image from 'next/image';
import xIcon from '@/components/icons8-x-logo.svg';
import telegramIcon from '@/components/telegram-svgrepo-com.svg';

// Fixed: Moving icons outside of render
const XIcon = ({ className = "" }: { className?: string }) => (
  <Image src={xIcon} alt="X" width={24} height={24} className={`w-6 h-6 ${className} object-contain`} />
);
const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <Image src={telegramIcon} alt="Telegram" width={24} height={24} className={`w-6 h-6 ${className} object-contain`} />
);

export default function AboutPage() {
  return (
    <div className="w-full pb-32 bg-mesh min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,1)]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground/80">Our Vision & Mission</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            <span className="bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent italic">Building</span><br />
            <span className="bg-linear-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent glow-text-primary">Earning Ecosystems</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto font-medium">
            DropX is the premier Web3 infrastructure designed to monetize user engagement and provide projects with sustainable growth tools.
          </p>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">What is <span className="text-primary glow-text-primary italic">DropX?</span></h2>
                <p className="text-foreground/50 text-lg leading-relaxed font-medium">
                  We are more than just a reward platform. DropX is a bridge between the protocols of tomorrow and the users of today. By gamifying participation, we ensure that every interaction has measurable value.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: '$DPX Tokens', desc: 'Native ecosystem currency', icon: '💎' },
                    { label: 'Real Yield', desc: 'Sustainable reward models', icon: '📈' },
                    { label: 'Verified Growth', desc: 'Anti-bot verified users', icon: '🛡️' },
                    { label: 'Instant Claims', desc: 'On-chain verification', icon: '⚡' },
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-6 border-white/5 rounded-2xl group hover:border-primary/40 transition-all">
                       <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                       <div className="font-black text-white uppercase text-xs tracking-widest mb-1">{item.label}</div>
                       <div className="text-[10px] font-bold text-foreground/40 uppercase">{item.desc}</div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="relative">
                <div className="glass-card p-10 rounded-[40px] border-primary/20 bg-primary/5 relative z-10 overflow-hidden">
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px]" />
                   <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase">Platform Stats</h3>
                   <div className="space-y-8">
                      {[
                        { label: 'Monthly Active Users', val: '45,000+', color: 'primary' },
                        { label: 'Total Tasks Completed', val: '2.1M+', color: 'secondary' },
                        { label: 'Rewards Distributed', val: '$1.4M+', color: 'accent' },
                      ].map((s, i) => (
                        <div key={i}>
                           <div className="flex justify-between items-end mb-2">
                              <span className="text-xs font-black text-foreground/40 uppercase tracking-widest">{s.label}</span>
                              <span className={`text-xl font-black text-${s.color}`}>{s.val}</span>
                           </div>
                           <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className={`h-full bg-${s.color} rounded-full`} style={{ width: `${80 - i * 15}%` }} />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
                {/* Decorative glow */}
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
             </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 scale-110" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-10 italic">Core Philosophy</h2>
          <blockquote className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
             &quot;DropX transforms <span className="text-primary italic">passive</span> engagement into <span className="text-secondary italic">measurable</span> on-chain value.&quot;
          </blockquote>
        </div>
      </section>

      {/* 4. TOKEN INFO */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter">The <span className="text-primary italic">$DPX</span> Utility</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-1 glass-card p-10 rounded-[32px] border-white/10 flex flex-col justify-between">
                <div>
                   <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest">Protocol Stats</h3>
                   <div className="space-y-6">
                      {[
                        { k: 'SYMBOL', v: '$DPX' },
                        { k: 'NETWORK', v: 'BASE / SOLANA' },
                        { k: 'SUPPLY', v: '1,000,000,000' },
                        { k: 'TAX', v: '0% FEES' },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                           <span className="text-[10px] font-black text-foreground/30 tracking-widest">{item.k}</span>
                           <span className="text-sm font-black text-white">{item.v}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="mt-10 p-4 bg-primary/10 border border-primary/20 rounded-2xl text-center">
                   <span className="text-[10px] font-black text-primary tracking-widest uppercase">Contract Address</span>
                   <p className="text-[10px] font-mono text-foreground/50 mt-1">AVAILABLE AT LAUNCH</p>
                </div>
             </div>

             <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { t: 'Reward Distribution', d: 'The primary vehicle for all campaign payouts within the ecosystem.', i: '🎁' },
                  { t: 'Governance Rights', d: 'Holders vote on protocol upgrades and new project listings.', i: '🏛️' },
                  { t: 'Exclusive Access', d: 'Unlock VIP tiers and high-yield partner missions.', i: '💎' },
                  { t: 'Staking Multiplier', d: 'Lock your tokens to multiply your earning rate platform-wide.', i: '⚡' },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-8 rounded-3xl border-white/5 hover:border-secondary/40 transition-all group">
                     <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.i}</div>
                     <h4 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{item.t}</h4>
                     <p className="text-foreground/40 text-sm font-medium leading-relaxed">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. ROADMAP */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter">Strategic <span className="text-secondary italic">Roadmap</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { p: '01', t: 'Genesis', s: 'Completed', list: ['Platform launch', 'Core verification', 'Genesis NFT'], c: 'success' },
              { p: '02', t: 'Expansion', s: 'Live', list: ['Leaderboards', 'Referral Hub', 'API Integration'], c: 'primary' },
              { p: '03', t: 'The Token', s: 'Q3 2026', list: ['$DPX Launch', 'Tier 1 CEX', 'Staking v1'], c: 'secondary' },
              { p: '04', t: 'Evolution', s: 'Q4 2026', list: ['DAO Setup', 'Cross-chain', 'AI Mission Engine'], c: 'white/10' },
            ].map((item, i) => (
              <div key={i} className={`glass-card p-8 rounded-[32px] border-${item.c}/30 relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 p-4 font-black text-6xl opacity-5 group-hover:opacity-10 transition-opacity`}>{item.p}</div>
                <div className="relative z-10">
                   <div className={`inline-block px-3 py-1 bg-${item.c}/10 border border-${item.c}/20 rounded-full text-${item.c} text-[8px] font-black uppercase tracking-widest mb-6`}>
                      {item.s}
                   </div>
                   <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{item.t}</h3>
                   <ul className="space-y-3">
                      {item.list.map((li, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs font-bold text-foreground/40">
                           <span className={`w-1 h-1 rounded-full bg-${item.c}`} /> {li}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENCY */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto glass-card p-12 sm:p-20 rounded-[40px] border-white/10 text-center relative z-10">
           <div className="absolute top-0 right-0 w-64 h-64 bg-success/10 rounded-full blur-[80px] -mr-32 -mt-32" />
           <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 italic">Transparency & <span className="text-success glow-text-success">Security</span></h2>
           <p className="text-foreground/50 text-lg mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
             Security is our core pillar. We utilize multi-layer verification and AI-driven anti-bot systems to ensure rewards reach real community members.
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Audit Pending', 'Non-Custodial', 'Anti-Bot Engine', 'Instant Payouts'].map((s, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                   <div className="text-success mb-2">✓</div>
                   <div className="text-[10px] font-black text-white uppercase tracking-widest">{s}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. CTA OFFICIAL LINKS */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-10 text-white uppercase tracking-widest italic">Join the Movement</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://t.me/dropx" className="flex items-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl hover:border-primary/50 transition-all group">
              <TelegramIcon className="group-hover:scale-110 transition-transform" /> 
              <span className="font-black text-white uppercase tracking-widest text-xs">Telegram</span>
            </Link>
            <Link href="https://x.com/dropx" className="flex items-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl hover:border-secondary/50 transition-all group">
              <XIcon className="group-hover:scale-110 transition-transform" /> 
              <span className="font-black text-white uppercase tracking-widest text-xs">X / Twitter</span>
            </Link>
          </div>
          <div className="mt-12">
             <a href="mailto:contact@dropx.io" className="text-xs font-black text-foreground/30 uppercase tracking-[0.3em] hover:text-primary transition-colors">contact@dropx.io</a>
          </div>
        </div>
      </section>

    </div>
  );
}
