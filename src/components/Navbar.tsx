"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from "@/context/AppContext";

export function Navbar() {
  const { walletAddress, connectWallet } = useApp();
  const pathname = usePathname();

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="w-full relative">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 py-1 flex items-center justify-center relative px-4">
        <p className="text-white font-medium text-xs sm:text-sm text-center">
          ✨ Alpha is live on BSC Testnet.
        </p>
        <button className="hidden sm:block absolute right-4 text-white text-xs border border-white/30 rounded px-2 hover:bg-white/10">
          Hide
        </button>
      </div>

      {/* Main Navbar */}
      <header className="h-[72px] bg-background border-b border-card-border/50 flex items-center justify-between px-4 sm:px-6 relative z-20">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center text-black font-extrabold text-lg sm:text-xl">
              A
            </div>
            <span className="font-bold text-base sm:text-xl">Airdropia</span>
          </Link>
        </div>
        
        {/* Center: Pill Navigation (Desktop: Header center, Mobile: Bottom fixed) */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:absolute md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50">
          <nav className="bg-card/90 backdrop-blur-md rounded-full p-1 flex items-center shadow-lg md:shadow-none border border-card-border md:border-0">
            <Link 
              href="/" 
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2 ${pathname === '/' ? 'bg-[#2b2f36] text-white' : 'text-foreground/60 hover:text-white'}`}
            >
              <span>🏠</span> <span className="hidden sm:block">Home</span>
            </Link>
            <Link 
              href="/rewards" 
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2 ${pathname === '/rewards' || pathname.startsWith('/dashboard') ? 'bg-[#2b2f36] text-white' : 'text-foreground/60 hover:text-white'}`}
            >
              <span>🌟</span> <span className="hidden sm:block">Rewards</span>
            </Link>
            <Link 
              href="/airdrop" 
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2 ${pathname === '/airdrop' ? 'bg-[#2b2f36] text-white' : 'text-foreground/60 hover:text-white'}`}
            >
              <span>🪂</span> <span className="hidden sm:block">Airdrop</span>
            </Link>
          </nav>
        </div>

        {/* Right: Connect Wallet */}
        <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
          {walletAddress ? (
            <div className="bg-card border border-card-border px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium">
              {shortenAddress(walletAddress)}
            </div>
          ) : (
            <button 
              onClick={connectWallet}
              className="bg-primary hover:bg-primary-hover text-black px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
            >
              <span>👛</span> <span className="hidden sm:block">Connect Wallet</span>
              <span className="sm:hidden">Connect</span>
            </button>
          )}
        </div>
      </header>
    </div>
  );
}
