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

  const XIcon = () => (
    <Image src={xIcon} alt="X" className="w-5 h-5 object-contain" />
  );
  const TelegramIcon = () => (
    <Image src={telegramIcon} alt="Telegram" className="w-5 h-5 object-contain" />
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full sm:w-80 bg-background/95 backdrop-blur-2xl border-r border-card-border z-40 md:hidden transform transition-transform duration-300 flex flex-col overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="p-6 border-b border-card-border/50 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black font-extrabold">
              D
            </div>
            <span className="font-extrabold text-lg text-foreground">DropX</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Section */}
        <div className="border-t border-card-border/50 p-6 space-y-4">
          {/* Wallet Status */}
          {walletAddress && (
            <div className="bg-card/50 border border-card-border p-3 rounded-lg text-center">
              <p className="text-foreground/60 text-xs mb-1">Connected Wallet</p>
              <p className="font-mono text-sm font-bold text-primary">{shortenAddress(walletAddress)}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="space-y-3">
            <Link
              href="/rewards"
              onClick={onClose}
              className="block bg-primary hover:bg-primary/90 text-black px-4 py-3 rounded-lg font-bold text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              Start Earning
            </Link>

            {!walletAddress && (
              <button
                onClick={() => {
                  connectWallet();
                  onClose();
                }}
                className="w-full bg-card/50 hover:bg-card/70 text-foreground px-4 py-3 rounded-lg font-bold border border-card-border transition-all duration-300"
              >
                Connect Wallet
              </button>
            )}
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-card-border/50">
            <p className="text-foreground/60 text-xs font-semibold uppercase mb-3 tracking-wider">
              Follow Us
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/dropx"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-card/50 hover:bg-card/70 border border-card-border p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group"
              >
                <TelegramIcon />
                <span className="text-xs font-medium group-hover:text-primary transition-colors">Telegram</span>
              </a>
              <a
                href="https://x.com/dropx"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-card/50 hover:bg-card/70 border border-card-border p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group"
              >
                <XIcon />
                <span className="text-xs font-medium group-hover:text-primary transition-colors">X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
