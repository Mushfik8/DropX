"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from "@/context/AppContext";
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export function Navbar() {
  const { walletAddress, connectWallet } = useApp();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/airdrop', label: 'Airdrop' },
    { href: '/rewards', label: 'Rewards' },
    { href: '/about', label: 'About' },
    { href: '/DropX_Whitepaper.pdf', label: 'Docs' },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl shadow-primary/5' 
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">

          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:shadow-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                D
              </div>
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="font-black text-xl tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300">DropX</span>
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-white/5">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              const isPdf = link.href.endsWith('.pdf');
              
              const content = (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(139,92,246,1)]" />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary/50 rounded-full transition-all duration-300 group-hover:w-1" />
                  )}
                </>
              );

              const className = `px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 relative group ${
                isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/60 hover:text-foreground'
              }`;

              if (isPdf) {
                return (
                  <a key={link.href} href={link.href} download className={className}>
                    {content}
                  </a>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + Wallet + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/rewards"
              className="hidden lg:flex bg-linear-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white px-6 py-2.5 rounded-xl font-black text-sm transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95"
            >
              Start Earning
            </Link>

            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

            {walletAddress ? (
              <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl font-mono text-xs font-bold text-foreground/80 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                {shortenAddress(walletAddress)}
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="hidden sm:block bg-white/5 hover:bg-white/10 text-foreground px-5 py-2.5 rounded-xl font-bold text-sm border border-white/10 transition-all duration-300 hover:border-primary/50 active:scale-95"
              >
                Connect
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-500 ${mobileOpen ? 'rotate-45 translate-y-2 w-6' : ''}`} />
              <span className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-500 ${mobileOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} navLinks={navLinks} />
    </>
  );
}
