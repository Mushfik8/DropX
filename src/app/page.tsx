"use client";

import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { useState } from 'react';
import Image from 'next/image';
import telegramIcon from '@/components/telegram-svgrepo-com.svg';

// Fixed: Moving components outside of render
const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <Image src={telegramIcon} alt="Telegram" width={24} height={24} className={`w-6 h-6 ${className} object-contain`} />
);

export default function LandingPage() {
  const { connectWallet, walletAddress } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'What is DropX?', a: 'DropX is a next-generation Web3 reward platform designed to bridge users and projects through gamified engagement.' },
    { q: 'Is DropX free to join?', a: 'Yes, DropX is open to everyone. Simply connect your wallet to start earning rewards.' },
    { q: 'What is the $DPX token?', a: '$DPX is the native utility token of the DropX ecosystem, used for rewards, governance, and exclusive access.' },
    { q: 'How do I withdraw rewards?', a: 'Rewards are distributed directly to your connected wallet after campaign verification.' },
    { q: 'Is my data secure?', a: 'We prioritize security. Your wallet connection is non-custodial, and we never store private keys.' },
  ];

  return (
    <div className="w-full bg-mesh min-h-screen">

      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        {/* Advanced Glow Backgrounds */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,1)]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground/80">The Future of Earning is Here</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter mb-8 animate-fade-in-up">
            <span className="bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">Earning.</span><br />
            <span className="bg-linear-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent glow-text-primary">Redefined.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/60 font-medium mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            DropX is the premier Web3 hub where users monetize their engagement and projects achieve sustainable growth through gamified social and on-chain tasks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {walletAddress ? (
              <Link
                href="/rewards"
                className="w-full sm:w-auto bg-linear-to-r from-primary to-purple-600 hover:scale-105 active:scale-95 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-primary/40"
              >
                🚀 Start Earning
              </Link>
            ) : (
              <button
                onClick={connectWallet}
                className="w-full sm:w-auto bg-linear-to-r from-primary to-purple-600 hover:scale-105 active:scale-95 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-primary/40"
              >
                🚀 Start Earning
              </button>
            )}
            <Link
              href="/airdrop"
              className="w-full sm:w-auto glass-card hover:bg-white/10 text-foreground px-10 py-5 rounded-2xl font-black text-lg transition-all"
            >
              📊 Active Drops
            </Link>
          </div>

          {/* Social Proof Placeholder */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black tracking-widest italic">ETHEREUM</span>
            <span className="text-2xl font-black tracking-widest italic">SOLANA</span>
            <span className="text-2xl font-black tracking-widest italic">BASE</span>
            <span className="text-2xl font-black tracking-widest italic">POLYGON</span>
          </div>
        </div>
      </section>

      {/* ============ STATS SECTION ============ */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Platform Users', value: '125,000+', icon: '👥', color: 'primary' },
              { label: 'Tasks Finished', value: '4.2M+', icon: '✅', color: 'secondary' },
              { label: 'Rewards Paid', value: '$850K+', icon: '💰', color: 'accent' },
              { label: 'Global Partners', value: '150+', icon: '🌐', color: 'primary' },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-4xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-foreground/50 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                <div className={`mt-4 h-1 w-0 bg-${stat.color} group-hover:w-full transition-all duration-500 rounded-full shadow-[0_0_8px_var(--color-${stat.color})]`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY DROPX SECTION ============ */}
      <section className="py-24 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">Why <span className="text-primary glow-text-primary">DropX?</span></h2>
            <p className="text-foreground/50 max-w-2xl mx-auto font-medium">The most advanced reward infrastructure for the Web3 economy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: 'Anti-Bot Engine', desc: 'Our proprietary AI-driven verification ensures that only real users get rewarded, protecting project integrity.', icon: '🛡️' },
              { title: 'Instant Payouts', desc: 'No waiting periods. Once a task is verified on-chain, your rewards are claimable immediately.', icon: '⚡' },
              { title: 'Tiered Ecosystem', desc: 'Climb the ranks to unlock high-yield exclusive missions and premium partner airdrops.', icon: '💎' },
            ].map((item, i) => (
              <div key={i} className="relative p-1 rounded-3xl bg-linear-to-b from-white/10 to-transparent hover:from-primary/40 transition-all duration-500">
                <div className="bg-[#0B0F1A] h-full p-8 rounded-[calc(1.5rem-1px)]">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-foreground/50 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TOKENOMICS SECTION ============ */}
      <section className="py-24 px-4 overflow-hidden relative">
        <div className="absolute top-1/2 right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-black uppercase tracking-widest mb-6">
              Platform Utility
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8">
              The <span className="text-primary">$DPX</span> Token
            </h2>
            <p className="text-foreground/60 text-lg mb-10 leading-relaxed font-medium">
              $DPX is the fuel that powers the DropX ecosystem. It facilitates rewards, secures the network through staking, and gives holders a say in future developments.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Governance Rights', desc: 'Vote on upcoming project listings and platform upgrades.' },
                { title: 'Reward Boosters', desc: 'Stake $DPX to multiply your earning rate on all tasks.' },
                { title: 'Exclusive Access', desc: 'Holders get first priority for high-value partner launches.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-white">{item.title}</h4>
                    <p className="text-foreground/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Total Supply', value: '1,000,000,000' },
              { label: 'Network', value: 'Base / Solana' },
              { label: 'Symbol', value: '$DPX' },
              { label: 'Tax', value: '0% Buy / Sell' },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl text-center border-white/5">
                <div className="text-foreground/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tighter">{stat.value}</div>
              </div>
            ))}
            <div className="col-span-2 glass-card p-8 rounded-3xl text-center border-primary/20 bg-primary/5">
              <div className="text-foreground/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Initial Launch Price</div>
              <div className="text-3xl font-black text-primary tracking-tighter">$0.0125</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DOWNLOAD SECTION ============ */}
      <section className="py-24 px-4 bg-linear-to-b from-[#0B0F1A] to-[#0D121F]">
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-[40px] text-center border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter mb-6 relative z-10">Deep Dive into <span className="text-secondary glow-text-secondary">DropX</span></h2>
          <p className="text-foreground/50 mb-12 font-medium relative z-10">Explore our technical architecture, tokenomics, and vision for the future.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="/DropX_Whitepaper.pdf" download="DropX_Whitepaper.pdf" target="_blank" className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-3xl flex flex-col items-center transition-all hover:-translate-y-1 group">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</span>
              <span className="font-black text-lg text-white mb-1">Whitepaper</span>
              <span className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Technical Guide</span>
            </a>
            <a href="/Pitch_Deck_DropX.pdf" download="Pitch_Deck_DropX.pdf" target="_blank" className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-3xl flex flex-col items-center transition-all hover:-translate-y-1 group">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</span>
              <span className="font-black text-lg text-white mb-1">Pitch Deck</span>
              <span className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Investor Deck</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4">Got <span className="text-primary">Questions?</span></h2>
            <p className="text-foreground/40 font-medium">Everything you need to know about getting started.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden border-white/5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 focus:outline-none transition-colors hover:bg-white/5"
                >
                  <span className="font-black text-white text-lg tracking-tight">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-500 ${openFaq === i ? 'rotate-180 bg-primary/20' : ''}`}>
                    <svg className={`w-4 h-4 text-${openFaq === i ? 'primary' : 'foreground/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-foreground/50 font-medium leading-relaxed animate-fade-in-up">
                    <div className="pt-2 border-t border-white/5 mt-2 opacity-80">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL SECTION ============ */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
            Ready to <span className="text-primary glow-text-primary italic">Join</span> the <br /> 
            <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">Ecosystem?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={connectWallet}
              className="bg-white text-black px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10"
            >
              Connect Wallet
            </button>
            <Link
              href="https://t.me/dropxtoken"
              className="bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-xl border border-white/10 hover:border-primary/50 transition-all flex items-center gap-3"
            >
              <TelegramIcon className="w-6 h-6" />
              Join Telegram
            </Link>
          </div>
        </div>
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </section>

    </div>
  );
}
