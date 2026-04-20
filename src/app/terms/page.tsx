export default function TermsPage() {
  return (
    <div className="py-32 px-4 max-w-4xl mx-auto space-y-12 relative overflow-hidden min-h-screen">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase mb-6 italic">
          Terms of <span className="text-primary glow-text-primary">Service</span>
        </h1>
        <p className="text-foreground/50 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          Please review the rules and guidelines for interacting with the DropX ecosystem.
        </p>
      </div>
      
      <div className="glass-card p-10 sm:p-12 rounded-[40px] border-white/10 space-y-10 relative z-10">
        <div className="flex justify-between items-center pb-6 border-b border-white/5">
           <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em]">Version 1.0.2</p>
           <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em]">Updated: April 2026</p>
        </div>
        
        <div className="grid gap-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">1. Acceptance of Terms</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              By accessing or using the DropX platform, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">2. Platform Usage</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              DropX is a gamified Web3 reward ecosystem. Users must complete tasks honestly. Any use of bots, automation scripts, or multiple accounts to exploit the reward system will result in immediate termination and forfeiture of all accumulated rewards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">3. Rewards and Tokens</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              Rewards earned on DropX (including XP, points, and $DPX tokens) are subject to campaign-specific rules and distribution schedules. DropX reserves the right to modify, suspend, or cancel any campaign at its discretion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">4. Intellectual Property</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              All content, features, and functionality on the DropX platform are owned by DropX and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">5. Limitation of Liability</h2>
            <p className="text-foreground/50 font-medium leading-relaxed">
              DropX is provided &quot;as is&quot; without any warranties. We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the platform.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
