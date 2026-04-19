export default function TermsPage() {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">Terms & Conditions</h1>
      
      <div className="bg-card border border-card-border p-8 rounded-2xl space-y-6 text-foreground/70 leading-relaxed">
        <p>Last Updated: April 2026</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
          <p>By accessing or using the DropX platform, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not use our services.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Platform Usage</h2>
          <p>DropX is a gamified Web3 reward ecosystem. Users must complete tasks honestly. Any use of bots, automation scripts, or multiple accounts to exploit the reward system will result in immediate termination and forfeiture of all accumulated rewards.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Rewards and Tokens</h2>
          <p>Rewards earned on DropX (including XP, points, and $DPX tokens) are subject to campaign-specific rules and distribution schedules. DropX reserves the right to modify, suspend, or cancel any campaign at its discretion.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
          <p>All content, features, and functionality on the DropX platform are owned by DropX and are protected by international copyright, trademark, and other intellectual property laws.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
          <p>DropX is provided "as is" without any warranties. We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the platform.</p>
        </section>
      </div>
    </div>
  );
}
