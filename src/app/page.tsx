"use client";

import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { useState } from 'react';

import Image from 'next/image';
import xIcon from '@/components/icons8-x-logo.svg';
import telegramIcon from '@/components/telegram-svgrepo-com.svg';

const XIcon = () => <Image src={xIcon} alt="X" className="w-8 h-8" />;
const TelegramIcon = () => <Image src={telegramIcon} alt="Telegram" className="w-8 h-8" />;

export default function LandingPage() {
  const { connectWallet, walletAddress } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'What is DropX?', a: 'DropX is a Web3 reward platform where users earn tokens by completing tasks.' },
    { q: 'Is DropX free to use?', a: 'Yes, anyone can join and start earning.' },
    { q: 'How do I earn rewards?', a: 'By completing tasks, inviting users, and participating in campaigns.' },
    { q: 'What is $DPX?', a: '$DPX is the native token used for rewards and ecosystem utility.' },
    { q: 'Is my wallet safe?', a: 'Yes, DropX only connects securely and never accesses private keys.' },
  ];

  return (
    <div className="w-full">

      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center justify-center px-4">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-8">
            🔥 Turn clicks into crypto.
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">DropX</span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-white max-w-3xl mx-auto font-bold mb-4">
            Earn Rewards. Complete Tasks. Own the Future.
          </p>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-medium">
            DropX is a gamified Web3 airdrop ecosystem where users earn real rewards by completing social, on-chain, and community-driven tasks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {walletAddress ? (
              <Link
                href="/rewards"
                className="bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25"
              >
                🚀 Start Earning
              </Link>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25"
              >
                🚀 Start Earning
              </button>
            )}
            <Link
              href="/rewards"
              className="bg-card hover:bg-card-border/50 border border-card-border text-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              📊 View Rewards
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-foreground/50 animate-bounce pointer-events-none">
          <span className="text-xs font-bold uppercase tracking-widest mb-2">Explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============ SECTION 2: LIVE STATS ============ */}
      <section className="py-20 px-4 border-y border-card-border/50 bg-card/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold mb-12 text-white">DropX Ecosystem <span className="text-primary">Stats</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '25,000+', label: 'Total Users', icon: '👥' },
              { value: '1.2M+', label: 'Tasks Completed', icon: '✅' },
              { value: '500,000+', label: 'Rewards Distributed ($DPX)', icon: '💰' },
              { value: '40+', label: 'Active Campaigns', icon: '🚀' },
            ].map(stat => (
              <div key={stat.label} className="bg-card border border-card-border p-6 rounded-2xl text-center hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <h3 className="text-3xl font-extrabold text-white mb-2">{stat.value}</h3>
                <p className="text-foreground/60 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: ABOUT ============ */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">What is <span className="text-primary">DropX?</span></h2>
            <p className="text-foreground/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              DropX is a next-generation reward platform designed to bridge users and Web3 projects through gamified engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-card-border p-8 rounded-2xl">
              <h3 className="font-bold text-white text-2xl mb-4 text-center">For Users</h3>
              <p className="text-foreground/60 mb-6 text-center">Complete simple tasks to earn $DPX tokens, points, and exclusive rewards:</p>
              <ul className="space-y-4">
                {['Following social channels', 'Joining communities', 'Interacting with dApps'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-background border border-card-border p-4 rounded-xl">
                    <span className="text-primary text-xl">✓</span>
                    <span className="font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-card-border p-8 rounded-2xl">
              <h3 className="font-bold text-white text-2xl mb-4 text-center">For Projects</h3>
              <p className="text-foreground/60 mb-6 text-center">DropX provides the tools you need for sustainable growth:</p>
              <ul className="space-y-4">
                {['High-quality user acquisition', 'Real engagement (not bots)', 'Scalable growth campaigns'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-background border border-card-border p-4 rounded-xl">
                    <span className="text-success text-xl">✓</span>
                    <span className="font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: HOW IT WORKS ============ */}
      <section className="py-24 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16">How It <span className="text-primary">Works</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', icon: '🔗', title: 'Connect', desc: 'Link your wallet and access your DropX dashboard.' },
              { step: '2', icon: '✅', title: 'Complete Tasks', desc: 'Finish daily, social, and bonus missions.' },
              { step: '3', icon: '🎁', title: 'Earn Rewards', desc: 'Get points, tokens ($DPX), and unlock higher tiers.' },
              { step: '4', icon: '📈', title: 'Redeem & Grow', desc: 'Convert points into rewards and climb the leaderboard.' },
            ].map(item => (
              <div key={item.step} className="relative bg-card border border-card-border p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="absolute -top-4 bg-primary text-black text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full border-4 border-background">
                  {item.step}
                </div>
                <div className="text-4xl mb-4 mt-4">{item.icon}</div>
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: TOKEN / REWARDS ============ */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-warning/10 border border-warning/20 rounded-full text-warning text-sm font-semibold mb-4">
              Your time = rewards.
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-primary">$DPX</span> — The Power Behind DropX
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              The $DPX token fuels the entire DropX ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-primary">⚡</span> Utility
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Reward distribution', desc: 'Primary currency for campaign payouts' },
                  { title: 'Premium task access', desc: 'Unlock high-yield exclusive missions' },
                  { title: 'Governance (future)', desc: 'Vote on ecosystem proposals' },
                  { title: 'Staking & multipliers (coming soon)', desc: 'Boost your earning potential' },
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-card-border p-4 rounded-xl">
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-foreground/50 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-success">💰</span> Earning Methods
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Daily tasks', icon: '📅' },
                  { title: 'Referral system', icon: '🤝' },
                  { title: 'Special campaigns', icon: '🎉' },
                  { title: 'Community events', icon: '🏆' },
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-card-border p-6 rounded-xl text-center flex flex-col items-center justify-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 6: FEATURES ============ */}
      <section className="py-24 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16">Ecosystem <span className="text-primary">Features</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Gamified Tasks', desc: 'Engage with fun and rewarding missions.', icon: '🎮' },
              { title: 'Real Rewards', desc: 'Earn tokens, not just points.', icon: '💎' },
              { title: 'Leaderboard System', desc: 'Compete with others and unlock bonuses.', icon: '🏆' },
              { title: 'Referral Engine', desc: 'Invite friends and earn passive rewards.', icon: '🔗' },
              { title: 'Secure Wallet Integration', desc: 'Connect safely and track your progress.', icon: '🔒' },
            ].map((feature, i) => (
              <div key={i} className="bg-background border border-card-border p-8 rounded-2xl hover:border-primary/50 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 7: ROADMAP ============ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16">
            <span className="text-primary">Roadmap</span>
          </h2>
          <div className="space-y-6">
            {[
              { phase: 'Phase 1 — Foundation', items: ['Platform launch', 'Task system deployment', 'Basic reward engine'], color: 'border-success bg-success/5' },
              { phase: 'Phase 2 — Growth', items: ['Referral system', 'Leaderboards', 'Multi-campaign support'], color: 'border-primary bg-primary/5' },
              { phase: 'Phase 3 — Expansion', items: ['Token ($DPX) launch', 'Staking system', 'Partner integrations'], color: 'border-warning bg-warning/5' },
              { phase: 'Phase 4 — Future Vision', items: ['DAO governance', 'NFT rewards', 'Advanced AI task system'], color: 'border-card-border bg-card' },
            ].map(item => (
              <div key={item.phase} className={`border-l-4 ${item.color} p-6 rounded-r-2xl`}>
                <h3 className="text-white font-bold text-xl mb-4">{item.phase}</h3>
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 8: COMMUNITY ============ */}
      <section className="py-24 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">Join the <span className="text-primary">DropX</span> Community</h2>
          <p className="text-foreground/60 text-lg mb-12 max-w-xl mx-auto">
            Be part of a fast-growing Web3 ecosystem. Earn smarter with DropX.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a href="https://t.me/DropX" target="_blank" rel="noopener noreferrer" className="bg-card border border-card-border p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-blue-400 hover:bg-blue-400/5 transition-all">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                <TelegramIcon />
              </div>
              <h3 className="text-xl font-bold text-white">Telegram</h3>
              <p className="text-foreground/50 text-sm">Community + Announcements</p>
            </a>
            <a href="https://x.com/DropX" target="_blank" rel="noopener noreferrer" className="bg-card border border-card-border p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-foreground hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <XIcon />
              </div>
              <h3 className="text-xl font-bold text-white">Twitter / X</h3>
              <p className="text-foreground/50 text-sm">Latest Updates & Drops</p>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/60">
            <span className="px-4 py-2 bg-background border border-card-border rounded-full">✓ Early access campaigns</span>
            <span className="px-4 py-2 bg-background border border-card-border rounded-full">✓ Exclusive reward drops</span>
          </div>
        </div>
      </section>

      {/* ============ SECTION 9: FAQ & TERMS ============ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card border border-card-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-white">{faq.q}</span>
                    <span className={`text-primary text-xl transition-transform shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-foreground/60 leading-relaxed border-t border-card-border/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="bg-card/50 border border-card-border p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-warning">🔐</span> Terms & Rules
              </h3>
              <ul className="space-y-4">
                {[
                  'Users must complete tasks honestly',
                  'Fake or bot activity will result in bans',
                  'Rewards are subject to campaign rules',
                  'DropX may update features at any time'
                ].map((term, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/60 text-sm">
                    <span className="text-primary mt-0.5">•</span>
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
