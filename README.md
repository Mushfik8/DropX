# Lumina (Web3 Reward Dashboard)

Lumina is a highly responsive, modern Web3 reward dashboard MVP. The project replicates precise UI mechanics for loyalty and points distribution in the Web3 space. 

It is currently running entirely on **Mock LocalStorage State** to provide an instant, zero-configuration local demo. This document outlines how to replace the mock state with a live Database (e.g., Supabase) and real API endpoints.

## Tech Stack
* **Framework**: Next.js 15 (App Router)
* **Styling**: Tailwind CSS v4 (Custom Dark/Yellow palette)
* **Web3 Integration**: Ethers.js
* **State Management**: React Context (`AppContext.tsx`) + LocalStorage

## How to Run Locally

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Connecting a Database (Supabase Guide)

Right now, tasks, users, and XP are managed in `src/context/AppContext.tsx`. To connect a real backend:

### 1. Setup Supabase
Create a free project at [Supabase.com](https://supabase.com). 
Run the following SQL to set up your tables:

```sql
CREATE TABLE users (
  wallet_address text PRIMARY KEY,
  xp_balance integer DEFAULT 0,
  created_at timestamp DEFAULT now()
);

CREATE TABLE tasks (
  id serial PRIMARY KEY,
  title text NOT NULL,
  description text,
  points integer NOT NULL,
  type text NOT NULL
);

CREATE TABLE user_tasks (
  id serial PRIMARY KEY,
  wallet_address text REFERENCES users(wallet_address),
  task_id integer REFERENCES tasks(id),
  completed_at timestamp DEFAULT now()
);
```

### 2. Configure Environment Variables
Create a `.env.local` file at the root of the project:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Refactor AppContext.tsx
Inside `src/context/AppContext.tsx`, replace the `localStorage` logic with Supabase client calls.

**Example Fetching Database Tasks instead of Default Tasks:**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// inside useEffect:
const loadTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*');
  if (data) setTasks(data);
};
```

**Example Updating XP:**
```typescript
const completeTask = async (taskId: number) => {
  if (!walletAddress) return;
  // 1. Write the completion to Supabase
  await supabase.from('user_tasks').insert({ wallet_address: walletAddress, task_id: taskId });
  
  // 2. Refresh local state
  // ... update local React Context as usual to keep UI snappy
};
```

## Adding More Web3 Integrations
Currently, `connectWallet` uses a generic `BrowserProvider` from Ethers v6. 
If you want to read token balances (e.g., `$LUMI` token on BSC):
1. Import the ABI array for an ERC20 Token.
2. Initialize a local Contract inside `AppContext.tsx`.
3. Call `await contract.balanceOf(address)`.
