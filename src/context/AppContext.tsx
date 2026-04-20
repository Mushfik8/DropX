"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { BrowserProvider, Eip1193Provider } from "ethers";

// Types
export type Task = {
  id: number;
  title: string;
  description: string;
  points: number;
  type: string;
  category: string;
  status: 'pending' | 'completed';
  link?: string;
  frequency: string;
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
  isConnecting: boolean;
  completeTask: (taskId: number) => void;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultTasks: Task[] = [
  {
    id: 1, title: 'Follow Twitter',
    description: 'Follow DropX official Twitter account.',
    points: 50, type: 'social', category: 'Social', status: 'pending',
    link: 'https://x.com/DropX',
    frequency: 'One-time',
  },
  {
    id: 2, title: 'Join Telegram',
    description: 'Join DropX Telegram community.',
    points: 40, type: 'social', category: 'Social', status: 'pending',
    link: 'https://t.me/DropX',
    frequency: 'One-time',
  },
  {
    id: 3, title: 'Visit Website',
    description: 'Visit DropX homepage and explore.',
    points: 20, type: 'social', category: 'Quick', status: 'pending',
    link: '/',
    frequency: 'One-time',
  },
  {
    id: 4, title: 'Invite Friends',
    description: 'Refer friends and earn rewards.',
    points: 100, type: 'social', category: 'Referrals', status: 'pending',
    frequency: 'Per referral',
  },
  {
    id: 5, title: 'Connect Wallet',
    description: 'Link your Web3 wallet to receive $DPX tokens.',
    points: 30, type: 'web3', category: 'On-chain', status: 'pending',
    frequency: 'One-time',
  },
  {
    id: 6, title: 'Daily Check-in',
    description: 'Check in daily to earn XP and build your streak.',
    points: 10, type: 'daily', category: 'Quick', status: 'pending',
    frequency: 'Daily',
  },
  {
    id: 7, title: 'Retweet Announcement',
    description: 'Retweet our latest announcement on X.',
    points: 25, type: 'social', category: 'Social', status: 'pending',
    link: 'https://x.com/DropX',
    frequency: 'One-time',
  },
];

const defaultActivity: Activity[] = [
  { id: 101, action: 'Account Created', detail: 'Welcome to DropX!', amount: '+0 XP', time: 'Just now' },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [points, setPoints] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [recentActivity, setRecentActivity] = useState<Activity[]>(defaultActivity);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  // Load from localStorage on mount - using a single effect to batch updates
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedPoints = localStorage.getItem('dropx_points');
      const savedTasks = localStorage.getItem('dropx_tasks_v3');
      const savedActivity = localStorage.getItem('dropx_activity');
      const savedWallet = localStorage.getItem('dropx_wallet');

      if (savedPoints) setPoints(parseInt(savedPoints));
      if (savedTasks) {
        const parsed = JSON.parse(savedTasks);
        if (Array.isArray(parsed) && parsed.length > 0 && 'category' in parsed[0]) {
          setTasks(parsed);
        }
      }
      if (savedActivity) setRecentActivity(JSON.parse(savedActivity));
      if (savedWallet) setWalletAddress(savedWallet);
    } catch (err) {
      console.error("Error loading state from localStorage", err);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (!isInitialized) return;

    const saveState = () => {
      localStorage.setItem('dropx_points', points.toString());
      localStorage.setItem('dropx_tasks_v3', JSON.stringify(tasks));
      localStorage.setItem('dropx_activity', JSON.stringify(recentActivity));
      if (walletAddress) {
        localStorage.setItem('dropx_wallet', walletAddress);
      } else {
        localStorage.removeItem('dropx_wallet');
      }
    };

    // Use requestIdleCallback if available for better performance, or just a small timeout
    const timeoutId = setTimeout(saveState, 500);
    return () => clearTimeout(timeoutId);
  }, [points, tasks, recentActivity, walletAddress, isInitialized]);

  const completeTask = useCallback((taskId: number) => {
    setTasks(prev => {
      const taskIndex = prev.findIndex(t => t.id === taskId);
      if (taskIndex === -1 || prev[taskIndex].status === 'completed') return prev;

      const task = prev[taskIndex];
      
      // Update points and activity in the same tick if possible
      setPoints(p => p + task.points);
      
      const newActivity: Activity = {
        id: Date.now(),
        action: 'Completed Task',
        detail: task.title,
        amount: `+${task.points} XP`,
        time: 'Just now'
      };
      setRecentActivity(act => [newActivity, ...act].slice(0, 10));

      // Open link after state updates
      if (task.link && task.link !== '/') {
        window.open(task.link, '_blank', 'noopener,noreferrer');
      }

      const newTasks = [...prev];
      newTasks[taskIndex] = { ...task, status: 'completed' as const };
      return newTasks;
    });
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert("Please install a Web3 wallet (like MetaMask) to use this feature!");
      return;
    }

    setIsConnecting(true);
    try {
      const provider = new BrowserProvider(window.ethereum as Eip1193Provider);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);

      // Batch updates for points and tasks
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
      console.error("Wallet connection failed", err);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <AppContext.Provider value={{ 
      points, 
      tasks, 
      recentActivity, 
      walletAddress, 
      isConnecting,
      completeTask, 
      connectWallet, 
      disconnectWallet 
    }}>
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
    ethereum?: Eip1193Provider;
  }
}
