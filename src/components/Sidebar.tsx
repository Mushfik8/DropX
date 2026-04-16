import Link from 'next/link';

export function Sidebar() {
  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Tasks', href: '/tasks', icon: '✅' },
    { name: 'Airdrops', href: '#', icon: '🪂' },
    { name: 'Referrals', href: '/referrals', icon: '👥' },
    { name: 'Wallet', href: '/wallet', icon: '👛' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-card-border flex flex-col hidden md:flex z-10">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
          LoyyalMVP
        </h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 px-4 py-3 rounded-btn text-foreground/80 hover:bg-white/5 hover:text-foreground transition-colors"
          >
            <span className="text-xl">{link.icon}</span>
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-card-border">
        <div className="text-sm text-foreground/60">
          <p>© 2026 LoyyalMVP</p>
        </div>
      </div>
    </aside>
  );
}
