"use client";

import Link from 'next/link';
import Image from 'next/image';
import xIcon from '@/components/icons8-x-logo.svg';
import telegramIcon from '@/components/telegram-svgrepo-com.svg';

export function Footer() {
  return (
    <footer className="bg-[#0B0F1A] border-t border-white/5 pt-20 pb-10 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-black text-xl">
                D
              </div>
              <span className="font-black text-2xl tracking-tighter text-foreground">DropX</span>
            </Link>
            <p className="text-foreground/40 text-sm leading-relaxed font-medium">
              The premier Web3 earning ecosystem. Bridge the gap between engagement and rewards with our gamified platform.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/dropx" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all group">
                <Image src={xIcon} alt="X" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://t.me/dropx" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/50 transition-all group">
                <Image src={telegramIcon} alt="Telegram" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Ecosystem</h4>
            <ul className="space-y-4">
              <li><Link href="/airdrop" className="text-foreground/40 hover:text-primary transition-colors font-medium">Active Airdrops</Link></li>
              <li><Link href="/rewards" className="text-foreground/40 hover:text-primary transition-colors font-medium">Rewards Hub</Link></li>
              <li><Link href="/referrals" className="text-foreground/40 hover:text-primary transition-colors font-medium">Referral Program</Link></li>
              <li><Link href="/docs" className="text-foreground/40 hover:text-primary transition-colors font-medium">Documentation</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Legal & Trust</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-foreground/40 hover:text-primary transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-foreground/40 hover:text-primary transition-colors font-medium">Terms of Service</Link></li>
              <li><Link href="/risk" className="text-foreground/40 hover:text-primary transition-colors font-medium">Risk Disclosure</Link></li>
              <li><Link href="/about" className="text-foreground/40 hover:text-primary transition-colors font-medium">About DropX</Link></li>
            </ul>
          </div>

          {/* Newsletter / Status */}
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Platform Status</h4>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider">Network</span>
                <span className="text-xs font-black text-success flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  ONLINE
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider">API Sync</span>
                <span className="text-xs font-black text-success">STABLE</span>
              </div>
              <div className="pt-2">
                <Link href="/rewards" className="block text-center bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-xl text-xs font-black transition-all">
                  VIEW DASHBOARD
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/5 pt-10 mt-10">
          <div className="max-w-4xl">
            <p className="text-[10px] sm:text-xs text-foreground/20 leading-relaxed font-medium mb-6">
              <span className="text-foreground/40 font-black uppercase tracking-widest block mb-2">Disclaimer:</span>
              DropX is a decentralized reward platform. Participation in Web3 activities involves significant risk. The $DPX token is a utility token and should not be considered as a financial investment. Always do your own research before connecting your wallet to any dApp. DropX is not responsible for any lost funds or failed transactions due to network congestion or user error.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-foreground/30 font-bold">
              © {new Date().getFullYear()} DropX Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20">
              <span>MADE WITH ❤️ FOR WEB3</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -mr-64 -mb-64 pointer-events-none" />
    </footer>
  );
}
