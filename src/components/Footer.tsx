import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-card-border/50 bg-background/80 backdrop-blur-xl pt-16 pb-8 relative overflow-hidden">
      {/* Subtle neon glow line at the top */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          
          {/* Brand Block */}
          <div className="col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-black group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] group-hover:scale-110 transition-all duration-300">
                D
              </div>
              <span className="text-lg sm:text-xl font-extrabold text-white tracking-wide group-hover:text-primary transition-colors">DropX</span>
            </Link>
            <p className="text-foreground/60 text-sm">
              Gamified Web3 Reward Ecosystem
            </p>
            <p className="text-foreground/40 text-xs mt-6">
              © {new Date().getFullYear()} DropX. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-bold text-white mb-2 text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link href="/airdrop" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Airdrop</Link></li>
              <li><Link href="/rewards" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Rewards</Link></li>
              <li><Link href="/about" className="hover:text-primary hover:translate-x-1 transition-all inline-block">About</Link></li>
              <li><Link href="/docs" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Docs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-white mb-2 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/terms" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
              <li><Link href="/risk" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Risk Disclosure</Link></li>
            </ul>
          </div>

          {/* Official Channels */}
          <div className="space-y-4">
            <h3 className="font-bold text-white mb-2 text-sm sm:text-base">Official Channels</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="https://t.me/dropx" target="_blank" rel="noreferrer" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Telegram</a></li>
              <li><a href="https://x.com/dropx" target="_blank" rel="noreferrer" className="hover:text-primary hover:translate-x-1 transition-all inline-block">X (Twitter)</a></li>
              <li><a href="https://dropx.io" target="_blank" rel="noreferrer" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Website</a></li>
              <li><a href="mailto:contact@dropx.io" className="hover:text-primary hover:translate-x-1 transition-all inline-block">contact@dropx.io</a></li>
            </ul>
          </div>
        </div>

        {/* Micro Disclaimer */}
        <div className="border-t border-card-border/30 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center">
          <p className="text-foreground/40 text-xs max-w-2xl mx-auto leading-relaxed">
            <span className="text-warning font-semibold">Disclaimer:</span> DropX is a Web3 engagement platform. Nothing on this website constitutes financial or investment advice. Participate at your own risk. Users should conduct their own research before participating in any token-related activities.
          </p>
        </div>
      </div>
    </footer>
  );
}
