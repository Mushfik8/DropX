"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from "@/context/AppContext";
import { useState } from 'react';

export function Navbar() {
  const { walletAddress, connectWallet } = useApp();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rewards', label: 'Rewards' },
    { href: '/airdrop', label: 'Airdrop' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-card-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[72px] px-4 sm:px-6">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-black font-extrabold text-lg">
            Z
          </div>
          <span className="font-extrabold text-lg sm:text-xl">ZyroX</span>
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                pathname === link.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Wallet + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {walletAddress ? (
            <div className="bg-card border border-card-border px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-mono text-xs sm:text-sm font-medium">
              {shortenAddress(walletAddress)}
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-primary hover:bg-primary-hover text-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-bold transition-all text-sm whitespace-nowrap"
            >
              Connect Wallet
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-card-border px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors ${
                pathname === link.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
