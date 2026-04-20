export default function RiskPage() {
  return (
    <div className="py-32 px-4 max-w-4xl mx-auto space-y-12 relative overflow-hidden min-h-screen">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase mb-6 italic">
          Risk <span className="text-primary glow-text-primary">Disclosure</span>
        </h1>
        <p className="text-foreground/50 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          Operational transparency and user education are our core values. Please review these risks before participating in the ecosystem.
        </p>
      </div>
      
      <div className="glass-card p-10 sm:p-12 rounded-[40px] border-white/10 space-y-10 relative z-10">
        <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
           <p className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-3">
              <span className="text-xl">⚠️</span>
              Read carefully before interacting with the DropX protocol.
           </p>
        </div>
        
        <div className="grid gap-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">1. Not Financial Advice</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              The information provided on DropX does not constitute investment advice, financial advice, or trading advice. You should not treat any of the platform&apos;s content as such. Conduct your own due diligence and consult your financial advisor before making any investment decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">2. Asset Volatility</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              Cryptocurrency assets are highly volatile. The value of $DPX tokens or any other digital assets mentioned on this platform can fluctuate wildly and may result in a total loss of value. You should only invest what you can afford to lose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">3. Smart Contract Integrity</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              While we prioritize security, blockchain technology is still maturing. Smart contracts may contain vulnerabilities or exploits that could result in the loss of funds or tokens. Interacting with dApps carries inherent technical risks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">4. Regulatory Landscape</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              The regulatory status of digital assets is unsettled in many jurisdictions. Future regulations may impact the operation of DropX, the utility of $DPX tokens, and your legal ability to interact with the platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">5. Participation Guarantee</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              DropX is an independent engagement ecosystem. Participation in campaigns, tasks, or airdrops does not guarantee future listing on any centralized exchange or guarantee any specific monetary return or yield.
            </p>
          </section>
        </div>

        <div className="pt-10 border-t border-white/5 text-center">
           <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em]">Last Updated: April 2026</p>
        </div>
      </div>
    </div>
  );
}
