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
    <div className="w-full pb-32 bg-mesh min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(139,92,246,1)]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground/80">Documentation Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            <span className="bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent italic">Protocol</span><br />
            <span className="bg-linear-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent glow-text-primary">Guides & Assets</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto font-medium">
            Everything you need to know about the DropX ecosystem, from technical specifications to earning strategies.
          </p>
        </div>
      </section>

      {/* Quick Links / Resources */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic">Key <span className="text-primary glow-text-primary">Resources</span></h2>
          </div>

          {/* Official Documents */}
          <div className="mb-32">
            <h3 className="text-xs font-black text-foreground/30 uppercase tracking-[0.4em] mb-10 text-center">Official Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                href="/DropX_Whitepaper.pdf"
                download="DropX_Whitepaper.pdf"
                target="_blank"
                rel="noreferrer"
                className="group glass-card p-10 rounded-[32px] border-white/5 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">📄</div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">📘</div>
                  <h4 className="font-black text-2xl text-white mb-3 uppercase tracking-tight">Whitepaper</h4>
                  <p className="text-foreground/40 text-sm font-medium leading-relaxed mb-8">
                    Complete protocol architecture and technical specifications.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Download PDF <span className="text-xl">→</span>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="group glass-card p-10 rounded-[32px] border-white/5 hover:border-secondary/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">📊</div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">📊</div>
                  <h4 className="font-black text-2xl text-white mb-3 uppercase tracking-tight">Pitch Deck</h4>
                  <p className="text-foreground/40 text-sm font-medium leading-relaxed mb-8">
                    Investor overview, metrics, and growth projections.
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Download PDF <span className="text-xl">→</span>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="group glass-card p-10 rounded-[32px] border-white/5 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">📑</div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">📑</div>
                  <h4 className="font-black text-2xl text-white mb-3 uppercase tracking-tight">Litepaper</h4>
                  <p className="text-foreground/40 text-sm font-medium leading-relaxed mb-8">
                    Quick executive summary and key points for fast reading.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Download PDF <span className="text-xl">→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Documentation Topics */}
          <div>
            <h3 className="text-xs font-black text-foreground/30 uppercase tracking-[0.4em] mb-10 text-center">Documentation Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docs.map((section, idx) => (
                <div key={idx} className="glass-card p-10 rounded-[40px] border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-7xl opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">{section.items[0]?.icon}</div>
                  <h4 className="text-2xl font-black text-white mb-10 flex items-center gap-4 uppercase tracking-tighter italic">
                    <span className="w-8 h-1 bg-primary rounded-full" />
                    {section.category}
                  </h4>
                  <ul className="space-y-6">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-4 group/item">
                        <span className="text-primary text-xl shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform">•</span>
                        <div className="flex-1">
                          <p className="font-black text-white text-sm uppercase tracking-tight">{item.title}</p>
                          <p className="text-foreground/40 text-xs mt-1 font-medium leading-relaxed">{item.description}</p>
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
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 scale-110 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-black mb-16 text-center text-white tracking-tighter uppercase italic">Legal & <span className="text-primary glow-text-primary">Policies</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { href: "/terms", title: "Terms of Service", desc: "Platform usage terms and conditions for all users.", icon: "📋" },
              { href: "/privacy", title: "Privacy Policy", desc: "How we collect, use, and protect your personal data.", icon: "🔒" },
              { href: "/risk", title: "Risk Disclosure", desc: "Important information about potential risks in using DropX.", icon: "⚠️" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group glass-card p-8 rounded-3xl border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-black text-xl text-white mb-3 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-foreground/40 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="text-primary font-black text-xs uppercase tracking-widest mt-8 group-hover:gap-2 flex items-center transition-all">
                  Read more <span className="ml-1">→</span>
                </span>
              </Link>
            ))}

            <a
              href="mailto:contact@dropx.io"
              className="group glass-card p-8 rounded-3xl border-white/5 hover:border-secondary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">✉️</div>
                <h4 className="font-black text-xl text-white mb-3 uppercase tracking-tight">Contact Support</h4>
                <p className="text-foreground/40 text-sm font-medium leading-relaxed">
                  Get in touch with our team for inquiries and support.
                </p>
              </div>
              <span className="text-secondary font-black text-xs uppercase tracking-widest mt-8 group-hover:gap-2 flex items-center transition-all">
                Email us <span className="ml-1">→</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4 italic uppercase">FAQ</h2>
            <p className="text-foreground/40 font-medium uppercase tracking-widest text-xs">Everything you need to know about getting started</p>
          </div>
          
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
              }
            ].map((faq, idx) => (
              <div key={idx} className="glass-card rounded-3xl border-white/5 overflow-hidden group">
                <div className="p-8">
                  <h4 className="font-black text-white text-lg tracking-tight mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {faq.q}
                  </h4>
                  <p className="text-foreground/40 text-sm leading-relaxed font-medium pl-4.5 border-l border-white/5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 text-white tracking-tighter leading-tight uppercase italic">
            Ready to Start <br /><span className="text-primary glow-text-primary">Earning?</span>
          </h2>
          <p className="text-lg text-foreground/50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Head back to the rewards hub and complete your first task today. The ecosystem is waiting for you.
          </p>
          <Link
            href="/rewards"
            className="inline-block bg-linear-to-r from-primary to-purple-600 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
          >
            Go to Rewards Hub →
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}
