export default function PrivacyPage() {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">Privacy Policy</h1>
      
      <div className="bg-card border border-card-border p-8 rounded-2xl space-y-6 text-foreground/70 leading-relaxed">
        <p>Last Updated: April 2026</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you connect your Web3 wallet, link social accounts (e.g., X, Discord), or communicate with us. The types of information we may collect include your wallet address, social media usernames, and interaction data on our platform.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
          <p>We use the information we collect to operate, maintain, and improve our services, to process transactions, to verify task completion, and to communicate with you regarding updates, security alerts, and support messages.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Information Sharing</h2>
          <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. On-chain data is inherently public and visible on the blockchain.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may disconnect your wallet and social accounts at any time through your dashboard settings.</p>
        </section>
      </div>
    </div>
  );
}
