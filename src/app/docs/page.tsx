"use client";

import Link from "next/link";

export default function DocsPage() {
  const docs = [
    {
      category: "Getting Started",
      items: [
        {
          title: "What is DropX?",
          description: "Learn about the DropX platform and how it works",
          icon: "📚"
        },
        {
          title: "How to Join",
          description: "Step-by-step guide to get started on DropX",
          icon: "🚀"
        },
        {
          title: "Connect Your Wallet",
          description: "Instructions for securely connecting your Web3 wallet",
          icon: "🔐"
        }
      ]
    },
    {
      category: "Tasks & Rewards",
      items: [
        {
          title: "Task Categories",
          description: "Understand different types of tasks available",
          icon: "✅"
        },
        {
          title: "How Rewards Work",
          description: "Learn how to earn points and $DPX tokens",
          icon: "💎"
        },
        {
          title: "Tier System",
          description: "Climb the ranks and unlock exclusive benefits",
          icon: "⭐"
        }
      ]
    },
    {
      category: "Airdrops",
      items: [
        {
          title: "$DPX Airdrop",
          description: "Details about the DropX token airdrop distribution",
          icon: "🪂"
        },
        {
          title: "Eligibility Requirements",
          description: "How to qualify for airdrop rewards",
          icon: "📋"
        },
        {
          title: "Claiming Tokens",
          description: "How and when to claim your airdropped tokens",
          icon: "💰"
        }
      ]
    },
    {
      category: "Security & Safety",
      items: [
        {
          title: "Wallet Security",
          description: "Best practices for keeping your wallet safe",
          icon: "🛡️"
        },
        {
          title: "Privacy Policy",
          description: "Understand how we protect your data",
          icon: "🔒"
        },
        {
          title: "Risk Disclosure",
          description: "Important information about platform risks",
          icon: "⚠️"
        }
      ]
    },
    {
      category: "Support & Resources",
      items: [
        {
          title: "FAQ",
          description: "Frequently asked questions and answers",
          icon: "❓"
        },
        {
          title: "Contact Support",
          description: "Reach out to our support team",
          icon: "💬"
        },
        {
          title: "Community",
          description: "Join our Telegram and Twitter communities",
          icon: "👥"
        }
      ]
    }
  ];

  return (
    <div className="w-full pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden border-b border-card-border/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-card border border-card-border rounded-full text-foreground/70 text-sm font-semibold mb-6 uppercase tracking-wider">
            📖 Documentation
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            DropX <br className="hidden md:block" />
            <span className="text-primary">Documentation</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about DropX. Find guides, FAQs, and resources to get the most out of the platform.
          </p>
        </div>
      </section>

      {/* Quick Links / Resources */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center">
            Key <span className="text-primary">Resources</span>
          </h2>

          {/* Official Documents */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-white">Official Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                href="https://dropx.io/whitepaper.pdf"
                target="_blank"
                rel="noreferrer"
                className="group bg-card border border-card-border p-6 rounded-2xl hover:border-primary transition-all duration-300"
              >
                <div className="text-4xl mb-4">📘</div>
                <h4 className="font-bold text-lg text-white mb-2">Whitepaper</h4>
                <p className="text-foreground/60 text-sm mb-4">
                  Complete protocol architecture and technical specifications
                </p>
                <span className="text-primary font-bold text-sm group-hover:underline">
                  Download PDF →
                </span>
              </a>

              <a
                href="https://dropx.io/pitchdeck.pdf"
                target="_blank"
                rel="noreferrer"
                className="group bg-card border border-card-border p-6 rounded-2xl hover:border-primary transition-all duration-300"
              >
                <div className="text-4xl mb-4">📊</div>
                <h4 className="font-bold text-lg text-white mb-2">Pitch Deck</h4>
                <p className="text-foreground/60 text-sm mb-4">
                  Investor overview, metrics, and growth projections
                </p>
                <span className="text-primary font-bold text-sm group-hover:underline">
                  Download PDF →
                </span>
              </a>

              <a
                href="https://dropx.io/litepaper.pdf"
                target="_blank"
                rel="noreferrer"
                className="group bg-card border border-card-border p-6 rounded-2xl hover:border-primary transition-all duration-300"
              >
                <div className="text-4xl mb-4">📑</div>
                <h4 className="font-bold text-lg text-white mb-2">Litepaper</h4>
                <p className="text-foreground/60 text-sm mb-4">
                  Quick executive summary and key points
                </p>
                <span className="text-primary font-bold text-sm group-hover:underline">
                  Download PDF →
                </span>
              </a>
            </div>
          </div>

          {/* Documentation Topics */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Documentation Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docs.map((section, idx) => (
                <div key={idx} className="bg-card/50 border border-card-border p-6 rounded-2xl">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-2xl">{section.items[0]?.icon}</span>
                    {section.category}
                  </h4>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <span className="text-primary text-xl shrink-0 mt-0.5">•</span>
                        <div className="flex-1">
                          <p className="font-bold text-white text-sm">{item.title}</p>
                          <p className="text-foreground/60 text-xs mt-1">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Policies */}
      <section className="py-20 px-4 bg-card/30 border-y border-card-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Legal & <span className="text-primary">Policies</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/terms"
              className="group bg-card border border-card-border p-6 rounded-2xl hover:border-primary transition-all"
            >
              <div className="text-4xl mb-4">📋</div>
              <h4 className="font-bold text-lg text-white mb-2">Terms & Conditions</h4>
              <p className="text-foreground/60 text-sm">
                Platform usage terms and conditions for all users
              </p>
              <span className="text-primary font-bold text-sm mt-4 inline-block group-hover:underline">
                Read more →
              </span>
            </Link>

            <Link
              href="/privacy"
              className="group bg-card border border-card-border p-6 rounded-2xl hover:border-primary transition-all"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="font-bold text-lg text-white mb-2">Privacy Policy</h4>
              <p className="text-foreground/60 text-sm">
                How we collect, use, and protect your personal data
              </p>
              <span className="text-primary font-bold text-sm mt-4 inline-block group-hover:underline">
                Read more →
              </span>
            </Link>

            <Link
              href="/risk"
              className="group bg-card border border-card-border p-6 rounded-2xl hover:border-primary transition-all"
            >
              <div className="text-4xl mb-4">⚠️</div>
              <h4 className="font-bold text-lg text-white mb-2">Risk Disclosure</h4>
              <p className="text-foreground/60 text-sm">
                Important information about potential risks in using DropX
              </p>
              <span className="text-primary font-bold text-sm mt-4 inline-block group-hover:underline">
                Read more →
              </span>
            </Link>

            <a
              href="mailto:contact@dropx.io"
              className="group bg-card border border-card-border p-6 rounded-2xl hover:border-primary transition-all"
            >
              <div className="text-4xl mb-4">✉️</div>
              <h4 className="font-bold text-lg text-white mb-2">Contact Support</h4>
              <p className="text-foreground/60 text-sm">
                Get in touch with our team for inquiries and support
              </p>
              <span className="text-primary font-bold text-sm mt-4 inline-block group-hover:underline">
                Email us →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is DropX safe to use?",
                a: "Yes, DropX uses industry-standard security practices. We never access your private keys and use secure wallet integration through Web3 protocols."
              },
              {
                q: "How do I start earning rewards?",
                a: "Connect your wallet, browse available tasks, and complete them. Each completed task earns you XP and $DPX tokens. Higher tiers unlock better rewards."
              },
              {
                q: "When will $DPX token launch?",
                a: "The $DPX token is planned for Phase 3 of our roadmap. Keep checking the platform for updates and announcements."
              },
              {
                q: "What wallets are supported?",
                a: "We support all major Ethereum-compatible wallets including MetaMask, Trust Wallet, and others that work with Web3."
              },
              {
                q: "Can I withdraw my rewards?",
                a: "Yes, once $DPX is launched, you can transfer your tokens to your connected wallet and use them freely."
              },
              {
                q: "Is there a minimum amount to join?",
                a: "No! DropX is completely free to join. You just need a Web3 wallet to get started."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-card border border-card-border rounded-2xl p-6 cursor-pointer transition-all hover:border-primary/50"
              >
                <summary className="flex items-center justify-between font-bold text-white text-lg">
                  {faq.q}
                  <span className="text-primary text-xl group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-foreground/70 mt-4 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5 border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start <span className="text-primary">Earning?</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Head back to the rewards page and complete your first task today.
          </p>
          <Link
            href="/rewards"
            className="inline-block bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          >
            Start Earning →
          </Link>
        </div>
      </section>
    </div>
  );
}
