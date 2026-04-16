"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { BrowserProvider } from "ethers";

// Types
export type Task = {
  id: number;
  title: string;
  description: string;
  points: number;
  type: string;       // daily | web3 | social | onchain
  category: string;   // Quick | Social | On-chain | Referrals
  status: 'pending' | 'completed';
  link?: string;      // External URL to open on "Start"
  frequency: string;  // One-time | Per referral | Daily
};

export type Activity = {
  id: number;
  action: string;
  detail: string;
  amount: string;
  time: string;
};

type AppContextType = {
  points: number;
  tasks: Task[];
  recentActivity: Activity[];
  walletAddress: string | null;
  completeTask: (taskId: number) => void;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultTasks: Task[] = [
  {
    id: 1, title: 'Daily check-in',
    description: 'Check in daily to earn XP and build your streak. Complete consecutive days to unlock bonus rewards.',
    points: 10, type: 'daily', category: 'Quick', status: 'pending',
    frequency: 'Daily',
  },
  {
    id: 2, title: 'Connect wallet',
    description: 'Link your Web3 wallet to receive $AIRDROP tokens.',
    points: 15, type: 'web3', category: 'On-chain', status: 'pending',
    frequency: 'One-time',
  },
  {
    id: 3, title: 'Follow on X (Twitter)',
    description: 'Follow @Airdropia on X to stay updated with the latest announcements.',
    points: 20, type: 'social', category: 'Social', status: 'pending',
    link: 'https://x.com/LuminaWeb3',
    frequency: 'One-time',
  },
  {
    id: 4, title: 'Like on X (Twitter)',
    description: 'Like our pinned post on X to earn XP.',
    points: 5, type: 'social', category: 'Social', status: 'pending',
    link: 'https://x.com/LuminaWeb3',
    frequency: 'One-time',
  },
  {
    id: 5, title: 'Join Telegram',
    description: 'Join the official Airdropia Telegram community group.',
    points: 25, type: 'social', category: 'Social', status: 'pending',
    link: 'https://t.me/LuminaWeb3',
    frequency: 'One-time',
  },
  {
    id: 6, title: 'Refer a friend',
    description: 'Invite friends and earn when they complete signup.',
    points: 100, type: 'social', category: 'Referrals', status: 'pending',
    frequency: 'Per referral',
  },
  {
    id: 7, title: 'Retweet announcement',
    description: 'Retweet the latest announcement from our X account.',
    points: 10, type: 'social', category: 'Social', status: 'pending',
    link: 'https://x.com/LuminaWeb3',
    frequency: 'One-time',
  },
];

const defaultActivity: Activity[] = [
  { id: 101, action: 'Account Created', detail: 'Welcome to Airdropia!', amount: '+0 XP', time: 'Just now' },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [points, setPoints] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [recentActivity, setRecentActivity] = useState<Activity[]>(defaultActivity);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedPoints = localStorage.getItem('lumina_points');
      const savedTasks = localStorage.getItem('lumina_tasks_v2');
      const savedActivity = localStorage.getItem('lumina_activity');
      const savedWallet = localStorage.getItem('lumina_wallet');

      if (savedPoints) setPoints(parseInt(savedPoints));
      if (savedTasks) {
        const parsed = JSON.parse(savedTasks);
        // Only use saved tasks if they have the new fields
        if (parsed.length > 0 && 'category' in parsed[0]) {
          setTasks(parsed);
        } else {
          setTasks(defaultTasks);
        }
      } else {
        setTasks(defaultTasks);
      }
      if (savedActivity) setRecentActivity(JSON.parse(savedActivity));
      if (savedWallet) setWalletAddress(savedWallet);
    } catch {
      // If anything fails, reset to defaults
      setTasks(defaultTasks);
    }

    setIsInitialized(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('lumina_points', points.toString());
      localStorage.setItem('lumina_tasks_v2', JSON.stringify(tasks));
      localStorage.setItem('lumina_activity', JSON.stringify(recentActivity));
      if (walletAddress) {
        localStorage.setItem('lumina_wallet', walletAddress);
      } else {
        localStorage.removeItem('lumina_wallet');
      }
    }
  }, [points, tasks, recentActivity, walletAddress, isInitialized]);

  const completeTask = useCallback((taskId: number) => {
    setTasks(prev => {
      const task = prev.find(t => t.id === taskId);
      if (!task || task.status === 'completed') return prev;

      // Open external link if the task has one
      if (task.link) {
        window.open(task.link, '_blank', 'noopener,noreferrer');
      }

      // Update points
      setPoints(p => p + task.points);

      // Add activity
      const newActivity: Activity = {
        id: Date.now(),
        action: 'Completed Task',
        detail: task.title,
        amount: `+${task.points} XP`,
        time: 'Just now'
      };
      setRecentActivity(act => [newActivity, ...act].slice(0, 10));

      // Return updated tasks
      return prev.map(t =>
        t.id === taskId ? { ...t, status: 'completed' as const } : t
      );
    });
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);

        // complete wallet task if pending
        setTasks(prev => {
          const walletTask = prev.find(t => t.type === 'web3' && t.status === 'pending');
          if (walletTask) {
            setPoints(p => p + walletTask.points);
            const newActivity: Activity = {
              id: Date.now(),
              action: 'Completed Task',
              detail: walletTask.title,
              amount: `+${walletTask.points} XP`,
              time: 'Just now'
            };
            setRecentActivity(act => [newActivity, ...act].slice(0, 10));
            return prev.map(t =>
              t.id === walletTask.id ? { ...t, status: 'completed' as const } : t
            );
          }
          return prev;
        });
      } catch (err) {
        console.error("User rejected request or error occurred", err);
      }
    } else {
      alert("Please install MetaMask to use this feature!");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <AppContext.Provider value={{ points, tasks, recentActivity, walletAddress, completeTask, connectWallet, disconnectWallet }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}
