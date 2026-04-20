"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import Image from "next/image";
import xIcon from "@/components/icons8-x-logo.svg";
import telegramIcon from "@/components/telegram-svgrepo-com.svg";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ href: string; label: string }>;
}

// Fixed: Moving components outside of render to avoid lint errors and performance issues
const XIcon = () => (
  <Image src={xIcon} alt="X" className="w-5 h-5 object-contain" />
);

const TelegramIcon = () => (
  <Image src={telegramIcon} alt="Telegram" className="w-5 h-5 object-contain" />
);

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();
  const { walletAddress, connectWallet } = useApp();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl md:hidden transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background glow for mobile menu */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative h-full flex flex-col p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-black text-xl">
                D
              </div>
              <span className="font-black text-xl tracking-tighter text-foreground">DropX</span>
            </Link>
            
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-foreground/60"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-4 mb-12">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`block text-3xl font-black tracking-tight transition-all duration-300 ${
                    isActive ? "text-primary translate-x-2" : "text-foreground/40 hover:text-foreground"
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.label}
                  {isActive && <span className="ml-2 inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,1)]" />}
                </Link>
              );
            })}
          </nav>

          {/* Wallet & CTA */}
          <div className="mt-auto space-y-6">
            {walletAddress ? (
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p className="text-foreground/40 text-xs font-bold uppercase tracking-widest mb-2">Connected Wallet</p>
                <p className="font-mono text-lg font-black text-primary truncate">{shortenAddress(walletAddress)}</p>
              </div>
            ) : (
              <button
                onClick={() => {
                  connectWallet();
                  onClose();
                }}
                className="w-full bg-white/5 hover:bg-white/10 text-foreground py-5 rounded-2xl font-black text-lg border border-white/10 transition-all active:scale-[0.98]"
              >
                Connect Wallet
              </button>
            )}

            <Link
              href="/rewards"
              onClick={onClose}
              className="block w-full bg-linear-to-r from-primary to-purple-600 text-white py-5 rounded-2xl font-black text-center text-lg shadow-xl shadow-primary/20 active:scale-[0.98]"
            >
              Start Earning
            </Link>

            {/* Social Links */}
            <div className="flex gap-4 pt-6 border-t border-white/5">
              <a
                href="https://t.me/dropxtoken"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-white/10 active:scale-95"
              >
                <TelegramIcon />
                <span className="text-sm font-black">Telegram</span>
              </a>
              <a
                href="https://x.com/dropxtoken"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-white/10 active:scale-95"
              >
                <XIcon />
                <span className="text-sm font-black">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
