export default function RiskPage() {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">Risk Disclosure</h1>
      
      <div className="bg-card border border-card-border p-8 rounded-2xl space-y-6 text-foreground/70 leading-relaxed">
        <p className="text-warning font-bold">Please read this carefully before interacting with DropX or participating in any token-related activities.</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Not Financial Advice</h2>
          <p>The information provided on DropX does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the platform's content as such. Conduct your own due diligence and consult your financial advisor before making any investment decisions.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Volatility of Crypto Assets</h2>
          <p>Cryptocurrency assets are highly volatile. The value of $DPX tokens or any other digital assets mentioned on this platform can fluctuate wildly and may result in a total loss of value. You should only invest what you can afford to lose.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Smart Contract Risks</h2>
          <p>While we strive to ensure the security of our smart contracts, blockchain technology is still developing. Smart contracts may contain bugs, vulnerabilities, or exploits that could result in the loss of funds or tokens. Interacting with smart contracts carries inherent risks.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Regulatory Uncertainty</h2>
          <p>The regulatory status of digital assets and blockchain technology is unclear or unsettled in many jurisdictions. Future regulations may impact the operation of DropX, the utility of $DPX tokens, and your ability to interact with the platform.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Platform Independence</h2>
          <p>DropX is an independent engagement ecosystem. Participation in campaigns, tasks, or airdrops does not guarantee future listing on any centralized exchange (such as MEXC or others) or guarantee any specific monetary return.</p>
        </section>
      </div>
    </div>
  );
}
