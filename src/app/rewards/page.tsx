"use client";

import { useApp } from "@/context/AppContext";
import { useState } from "react";
import Image from 'next/image';
import xIcon from '@/components/icons8-x-logo.svg';
import discordIcon from '@/components/discord.svg';
import telegramIcon from '@/components/telegram-svgrepo-com.svg';
import walletIcon from '@/components/wallet.png';

// Fixed: Moving icons outside of render
// Fixed: Moving icons outside of render
const XIcon = ({ className = "" }: { className?: string }) => (
  <Image src={xIcon} alt="X" width={24} height={24} className={`w-6 h-6 ${className} object-contain`} />
);
const DiscordIcon = ({ className = "" }: { className?: string }) => (
  <Image src={discordIcon} alt="Discord" width={24} height={24} className={`w-6 h-6 ${className} object-contain`} />
);
const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <Image src={telegramIcon} alt="Telegram" width={24} height={24} className={`w-6 h-6 ${className} object-contain`} />
);
const WalletIcon = ({ className = "" }: { className?: string }) => (
  <Image src={walletIcon} alt="Wallet" width={28} height={28} className={`w-7 h-7 ${className} object-contain`} />
);

export default function RewardsPage() {
  const { points, tasks, completeTask } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Quick', 'Social', 'On-chain', 'Referrals'];
  const streakDays = [1, 2, 3, 4, 5, 6, 7];
  const currentStreak = 0;

  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'All') return true;
    return task.category === activeFilter;
  });

  const dailyTasks = filteredTasks.filter(t => t.type === 'daily');
  const otherTasks = filteredTasks.filter(t => t.type !== 'daily');

  const getTaskIcon = (task: typeof tasks[0]) => {
    if (task.type === 'web3') return <WalletIcon />;
    if (task.title.toLowerCase().includes('twitter') || task.title.toLowerCase().includes('retweet')) return <XIcon />;
    if (task.title.toLowerCase().includes('discord')) return <DiscordIcon />;
    if (task.title.toLowerCase().includes('telegram')) return <TelegramIcon />;
    if (task.title.toLowerCase().includes('invite') || task.title.toLowerCase().includes('refer')) return '🤝';
    if (task.title.toLowerCase().includes('visit')) return '🌐';
    if (task.type === 'daily') return '📅';
    return '✨';
  };

  const getTier = () => {
    if (points >= 500) return { name: 'Gold', color: 'text-primary', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.3)]', border: 'border-primary/30', bg: 'bg-primary/5' };
    if (points >= 200) return { name: 'Silver', color: 'text-secondary', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]', border: 'border-secondary/30', bg: 'bg-secondary/5' };
    return { name: 'Bronze', color: 'text-orange-400', glow: '', border: 'border-orange-400/20', bg: 'bg-orange-400/5' };
  };
  const tier = getTier();

  return (
    <div className="py-20 px-4 min-h-screen max-w-6xl mx-auto space-y-16 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header & Stats Dashboard */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-4">
            REWARDS <span className="text-primary glow-text-primary italic">HUB</span>
          </h1>
          <p className="text-foreground/50 text-lg font-medium max-w-xl">
            Monetize your engagement. Complete daily missions and social tasks to unlock premium ecosystem rewards.
          </p>
        </div>
        
        <div className="lg:col-span-5">
          <div className={`glass-card p-6 sm:p-8 rounded-[32px] border-white/10 ${tier.glow} ${tier.border} ${tier.bg} relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl">⭐</span>
            </div>
            <div className="relative z-10 flex items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Current Tier Status</p>
                <h2 className={`text-4xl font-black tracking-tighter ${tier.color} mb-1`}>{tier.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-foreground/60 uppercase">Earning Active</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Total Points</p>
                <div className="text-5xl font-black text-white tracking-tighter flex items-baseline gap-1">
                  {points}<span className="text-xl text-primary">XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Explorer */}
      <div className="space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-6 bg-primary rounded-full" />
            Available Missions
          </h2>
          
          <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-2xl border border-white/5">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'text-foreground/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Daily Streak Section */}
        {dailyTasks.map(task => (
          <div key={task.id} className="glass-card p-8 sm:p-10 rounded-[40px] border-primary/20 bg-primary/5 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                   Recurrent Mission
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-4 group-hover:text-primary transition-colors">{task.title}</h3>
                <p className="text-foreground/50 font-medium leading-relaxed mb-6">
                  {task.description} Build your streak and multiply your rewards by checking in every single day.
                </p>
                <div className="flex items-center gap-4">
                   <div className="text-4xl font-black text-white">+{task.points}<span className="text-sm text-primary">XP</span></div>
                   <div className="h-10 w-px bg-white/10" />
                   <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest leading-tight">Daily<br />Multiplier</div>
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="bg-black/20 rounded-3xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-6">
                     <span className="text-xs font-black text-foreground/40 uppercase tracking-widest">Your Weekly Progress</span>
                     <span className="text-xs font-black text-primary uppercase tracking-widest">Day {currentStreak} of 7</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    {streakDays.map((day) => {
                      const isCurrent = day === currentStreak + 1;
                      const isPast = day <= currentStreak;
                      return (
                        <div key={day} className="flex flex-col items-center gap-3">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-all ${
                            isCurrent ? 'bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] scale-110' : 
                            isPast ? 'bg-success/20 text-success border border-success/30' : 
                            'bg-white/5 text-foreground/20 border border-white/5'
                          }`}>
                            {isPast ? '✓' : day}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => completeTask(task.id)}
                    disabled={task.status === 'completed'}
                    className={`w-full mt-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                      task.status === 'completed'
                        ? 'bg-success/10 text-success cursor-not-allowed opacity-50'
                        : 'bg-white text-black hover:bg-primary hover:text-white shadow-xl'
                    }`}
                  >
                    {task.status === 'completed' ? 'ALREADY CLAIMED' : 'CLAIM DAILY REWARD'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Task Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherTasks.map(task => (
            <div
              key={task.id}
              className={`glass-card p-8 rounded-[32px] flex flex-col justify-between transition-all group ${
                task.status === 'completed' ? 'opacity-60 grayscale-[0.5]' : 'hover:-translate-y-2 hover:border-primary/40'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {getTaskIcon(task)}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-white tracking-tighter">+{task.points}</div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">XP</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-white tracking-tight mb-2 uppercase group-hover:text-primary transition-colors">
                  {task.title}
                </h3>
                <p className="text-foreground/40 text-sm font-medium leading-relaxed mb-6">
                  {task.description}
                </p>
              </div>

              <div className="space-y-4">
                {task.link && task.link !== '/' && (
                  <div className="h-px bg-white/5" />
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em]">
                    {task.frequency}
                  </span>
                  <button
                    onClick={() => completeTask(task.id)}
                    disabled={task.status === 'completed'}
                    className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                      task.status === 'completed'
                        ? 'text-success bg-success/10'
                        : 'bg-white/5 text-white hover:bg-primary border border-white/10 hover:border-primary'
                    }`}
                  >
                    {task.status === 'completed' ? 'DONE ✓' : 'START'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="glass-card p-20 rounded-[40px] text-center border-dashed border-white/10">
            <div className="text-6xl mb-6 opacity-20">📂</div>
            <h3 className="text-2xl font-black text-white/40 tracking-tight">NO MISSIONS FOUND</h3>
            <p className="text-foreground/20 font-medium">Select another filter to explore available opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
}
