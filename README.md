# ZyroX — Web3 Reward Dashboard

ZyroX is a Web3 reward platform where users connect their wallet, complete tasks, and earn $ZYX tokens. Built with Next.js, Tailwind CSS, and Ethers.js.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Web3**: Ethers.js v6
- **State**: React Context + localStorage

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages
| Route | Description |
|-------|-------------|
| `/` | Landing page (Hero, Stats, About, Roadmap, Tokenomics, FAQ) |
| `/rewards` | Task dashboard with XP system |
| `/airdrop` | Airdrop eligibility tracker |
| `/admin-8472x` | Admin panel (login: mushfik8 / admin) |

## Connecting a Database

Currently using localStorage (mock). To add Supabase:

1. `npm install @supabase/supabase-js` (already installed)
2. Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```
3. Replace localStorage calls in `src/context/AppContext.tsx` with Supabase client calls.

## Token Info
- **Name**: ZyroX
- **Symbol**: $ZYX
- **Supply**: 1,000,000,000
- **Network**: BSC (BEP-20)
