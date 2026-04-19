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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rewards', label: 'Rewards' },
    { href: '/airdrop', label: 'Airdrop' },
    { href: '/about', label: 'About' },
    { href: '/docs', label: 'Docs' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/70 backdrop-blur-2xl border-b border-primary/20 shadow-lg shadow-primary/5' 
          : 'bg-transparent border-b border-card-border/20'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-18 px-4 sm:px-6">

          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-black font-extrabold text-lg group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300">
              D
            </div>
            <span className="font-extrabold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">DropX</span>
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all group relative ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                <span className="relative">
                  {link.label}
                  <span className={`absolute -bottom-1 left-4 right-4 h-0.5 bg-linear-to-r from-primary to-primary transition-all duration-300 ${
                    pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA + Wallet + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/rewards"
              className="hidden sm:inline-block bg-primary hover:bg-primary/90 text-black px-5 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              Start Earning
            </Link>

            {walletAddress && (
              <div className="hidden sm:block bg-card/50 border border-card-border px-3 py-2 rounded-lg font-mono text-xs font-medium text-foreground/70 hover:text-primary transition-colors">
                {shortenAddress(walletAddress)}
              </div>
            )}

            {!walletAddress && (
              <button
                onClick={connectWallet}
                className="hidden sm:block bg-card/50 hover:bg-card/70 text-foreground px-4 py-2 rounded-lg font-bold text-sm border border-card-border transition-all duration-300 whitespace-nowrap"
              >
                Connect
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-white/5 rounded-lg transition-all"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} navLinks={navLinks} />
      )}
    </>
  );
}
