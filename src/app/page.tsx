"use client";

import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { useState } from 'react';

import Image from 'next/image';
import discordIcon from '@/components/discord.svg';
import xIcon from '@/components/icons8-x-logo.svg';
import telegramIcon from '@/components/telegram-svgrepo-com.svg';

const XIcon = () => <Image src={xIcon} alt="X" className="w-8 h-8" />;
const DiscordIcon = () => <Image src={discordIcon} alt="Discord" className="w-8 h-8" />;
const TelegramIcon = () => <Image src={telegramIcon} alt="Telegram" className="w-8 h-8" />;

export default function LandingPage() {
  const { connectWallet, walletAddress } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactMessage) return;
    
    setSubmitStatus('submitting');
    // Mock API call
    setTimeout(() => {
      setSubmitStatus('success');
      setContactEmail('');
      setContactMessage('');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const faqs = [
    { q: 'What is ZyroX?', a: 'ZyroX is a Web3 reward platform where users complete tasks and earn $ZYX tokens. It focuses on simplicity, security, and rapid community growth.' },
    { q: 'How to earn rewards?', a: 'Connect your wallet, complete social tasks like following Twitter or joining Telegram, refer friends, and check in daily to earn XP that converts to $ZYX tokens.' },
    { q: 'Is my wallet safe?', a: 'Yes. ZyroX never asks for your private key or seed phrase. We only read your public wallet address through MetaMask to identify your account.' },
    { q: 'When are rewards distributed?', a: 'Rewards accumulate as XP instantly. Token distribution ($ZYX) will occur during the airdrop event after the snapshot is taken.' },
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
            🚀 Web3 Rewards Platform
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">ZyroX</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/70 max-w-2xl mx-auto mb-12 font-medium">
            Earn Rewards in Web3
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {walletAddress ? (
              <Link
                href="/rewards"
                className="bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25"
              >
                Start Earning →
              </Link>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-primary hover:bg-primary-hover text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25"
              >
                Connect Wallet
              </button>
            )}
            <Link
              href="/rewards"
              className="bg-card hover:bg-card-border/50 border border-card-border text-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Start Earning
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
      <section className="py-20 px-4 border-y border-card-border/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: '12,000+', label: 'Total Users', color: 'text-primary' },
            { value: '2.5M+', label: 'Rewards Distributed', color: 'text-success' },
            { value: '80,000+', label: 'Tasks Completed', color: 'text-warning' },
          ].map(stat => (
            <div key={stat.label} className="bg-card border border-card-border p-8 rounded-2xl text-center">
              <h3 className={`text-4xl sm:text-5xl font-extrabold ${stat.color} mb-2`}>{stat.value}</h3>
              <p className="text-foreground/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3: ABOUT ============ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">About <span className="text-primary">ZyroX</span></h2>
          <p className="text-foreground/60 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            ZyroX is a Web3 reward platform where users complete tasks and earn points. We focus on
            <span className="text-foreground font-semibold"> simplicity</span>,
            <span className="text-success font-semibold"> security</span>, and
            <span className="text-warning font-semibold"> growth</span>.
            Our mission is to onboard the next million users into Web3 through an intuitive and rewarding experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: '⚡', title: 'Simple', desc: 'Clean UI, no learning curve. Connect and start earning in seconds.' },
              { icon: '🔒', title: 'Secure', desc: 'We never ask for private keys. Your wallet, your control.' },
              { icon: '📈', title: 'Growth', desc: 'Community-first token model designed for long-term value.' },
            ].map(item => (
              <div key={item.title} className="bg-card border border-card-border p-6 rounded-2xl text-left">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: HOW IT WORKS ============ */}
      <section className="py-24 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-16">How It <span className="text-primary">Works</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '👛', title: 'Connect Wallet', desc: 'Link your MetaMask wallet to get started instantly.' },
              { step: '02', icon: '✅', title: 'Complete Tasks', desc: 'Follow socials, refer friends, and check in daily for XP.' },
              { step: '03', icon: '🎁', title: 'Earn Rewards', desc: 'Accumulate $ZYX tokens and unlock exclusive airdrops.' },
            ].map(item => (
              <div key={item.step} className="relative bg-card border border-card-border p-8 rounded-2xl">
                <div className="absolute -top-4 left-6 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: ROADMAP ============ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">
            <span className="text-primary">Roadmap</span>
          </h2>
          <div className="space-y-6">
            {[
              { phase: 'Phase 1', title: 'MVP Launch', desc: 'Core platform, task system, wallet integration, and community building.', status: 'Live', color: 'border-success bg-success/5' },
              { phase: 'Phase 2', title: 'Token Launch', desc: '$ZYX token generation event, staking mechanics, and governance features.', status: 'Upcoming', color: 'border-primary bg-primary/5' },
              { phase: 'Phase 3', title: 'Exchange Listing', desc: 'CEX and DEX listings, liquidity pools, and trading pairs.', status: 'Planned', color: 'border-warning bg-warning/5' },
              { phase: 'Phase 4', title: 'Ecosystem Expansion', desc: 'Partner integrations, cross-chain support, and advanced DeFi features.', status: 'Future', color: 'border-card-border bg-card' },
            ].map(item => (
              <div key={item.phase} className={`border-l-4 ${item.color} p-6 rounded-r-2xl`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-primary font-bold text-sm">{item.phase}</span>
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full w-fit ${
                    item.status === 'Live' ? 'bg-success/20 text-success' :
                    item.status === 'Upcoming' ? 'bg-primary/20 text-primary' :
                    item.status === 'Planned' ? 'bg-warning/20 text-warning' :
                    'bg-white/5 text-foreground/50'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-foreground/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 6: TOKEN INFO ============ */}
      <section className="py-24 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">
            Token <span className="text-primary">Info</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Token Details */}
            <div className="bg-card border border-card-border p-8 rounded-2xl">
              <h3 className="font-bold text-white text-xl mb-6">Token Details</h3>
              <div className="space-y-4">
                {[
                  { label: 'Token Name', value: 'ZyroX' },
                  { label: 'Symbol', value: '$ZYX' },
                  { label: 'Total Supply', value: '1,000,000,000' },
                  { label: 'Network', value: 'BSC (BEP-20)' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-card-border/50 last:border-0">
                    <span className="text-foreground/50">{item.label}</span>
                    <span className="font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Distribution */}
            <div className="bg-card border border-card-border p-8 rounded-2xl">
              <h3 className="font-bold text-white text-xl mb-6">Distribution</h3>
              <div className="space-y-4">
                {[
                  { label: 'Community', pct: 40, color: 'bg-primary' },
                  { label: 'Marketing', pct: 20, color: 'bg-success' },
                  { label: 'Liquidity', pct: 15, color: 'bg-warning' },
                  { label: 'Team', pct: 15, color: 'bg-purple-500' },
                  { label: 'Reserve', pct: 10, color: 'bg-pink-500' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/70">{item.label}</span>
                      <span className="font-bold text-white">{item.pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 7: COMMUNITY ============ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Join the <span className="text-primary">Community</span></h2>
          <p className="text-foreground/60 text-lg mb-12 max-w-xl mx-auto">
            Stay updated and connect with fellow ZyroX members across our social channels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <TelegramIcon />, label: 'Telegram', link: 'https://t.me/ZyroX', color: 'hover:border-blue-400 hover:bg-blue-400/5' },
              { icon: <XIcon />, label: 'Twitter / X', link: 'https://x.com/ZyroX', color: 'hover:border-foreground hover:bg-white/5' },
              { icon: <DiscordIcon />, label: 'Discord', link: 'https://discord.gg/ZyroX', color: 'hover:border-indigo-400 hover:bg-indigo-400/5' },
            ].map(item => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-card border border-card-border p-6 rounded-2xl flex flex-col items-center gap-3 transition-all ${item.color}`}
              >
                <div className="flex items-center justify-center h-10 text-white">{item.icon}</div>
                <span className="font-bold text-white">{item.label}</span>
                <span className="text-foreground/40 text-sm">Join →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 8: FAQ ============ */}
      <section className="py-24 px-4 bg-card/30 border-t border-card-border/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-card-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
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
      </section>

      {/* ============ SECTION 9: CONTACT ============ */}
      <section className="py-24 px-4 border-t border-card-border/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Share Your <span className="text-primary">Thoughts</span></h2>
            <p className="text-foreground/60 text-lg">
              Have comments, opinions, or just want to say hi? Send us a message below or via email.
            </p>
          </div>
          
          <div className="bg-card border border-card-border p-8 rounded-2xl">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">Your Message</label>
                <textarea
                  id="message"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Share your feedback, ideas, or questions here..."
                  rows={4}
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitStatus === 'submitting' || submitStatus === 'success'}
                className={`w-full font-bold py-3.5 rounded-xl transition-all ${
                  submitStatus === 'success' 
                    ? 'bg-success text-white' 
                    : submitStatus === 'submitting'
                      ? 'bg-primary/50 text-white cursor-not-allowed'
                      : 'bg-primary hover:bg-primary-hover text-white'
                }`}
              >
                {submitStatus === 'success' ? 'Message Sent! ✓' : submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-12 px-4 border-t border-card-border/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground/40 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-black font-extrabold text-sm">Z</div>
            <span className="font-bold text-foreground/60">ZyroX</span>
          </div>
          <p>© 2026 ZyroX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
