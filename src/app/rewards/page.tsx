"use client";

import { useApp } from "@/context/AppContext";
import { useState } from "react";
import Image from 'next/image';
import xIcon from '@/components/icons8-x-logo.svg';
import discordIcon from '@/components/discord.svg';
import telegramIcon from '@/components/telegram-svgrepo-com.svg';
import walletIcon from '@/components/wallet.png';

export default function RewardsPage() {
  const { points, tasks, completeTask } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Quick', 'Social', 'On-chain', 'Referrals'];

  const streakDays = [1, 2, 3, 4, 5, 6, 7];
  const currentStreak = 0;

  // Filter tasks based on active filter
  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'All') return true;
    return task.category === activeFilter;
  });

  const dailyTasks = filteredTasks.filter(t => t.type === 'daily');
  const otherTasks = filteredTasks.filter(t => t.type !== 'daily');

  const XIcon = () => <Image src={xIcon} alt="X" className="w-6 h-6 object-contain" />;
  const DiscordIcon = () => <Image src={discordIcon} alt="Discord" className="w-6 h-6 object-contain" />;
  const TelegramIcon = () => <Image src={telegramIcon} alt="Telegram" className="w-6 h-6 object-contain" />;
  const WalletIcon = () => <Image src={walletIcon} alt="Wallet" className="w-7 h-7 object-contain" />;

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

  // Tier calculation
  const getTier = () => {
    if (points >= 500) return { name: 'Gold', color: 'text-warning', bg: 'bg-warning/10' };
    if (points >= 200) return { name: 'Silver', color: 'text-foreground/80', bg: 'bg-white/5' };
    return { name: 'Bronze', color: 'text-[#b07d57]', bg: 'bg-[#b07d57]/10' };
  };
  const tier = getTier();

  return (
    <div className="py-10 px-4 pb-10 max-w-5xl mx-auto space-y-12">

      {/* Page Header */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Rewards</h1>
          <p className="text-foreground/60 text-lg">Earn XP by completing tasks. Climb tiers and unlock $DPX airdrops.</p>
        </div>

        {/* Tier & XP display */}
        <div className="flex items-center gap-6 mt-8">
          <div className={`w-16 h-16 ${tier.bg} rounded-full flex items-center justify-center text-4xl`}>
            ⭐
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-white">{tier.name} Tier</h2>
              <span className={`${tier.bg} ${tier.color} text-xs font-bold px-2 py-0.5 rounded-full`}>Current tier</span>
            </div>
            <div className="text-white font-bold flex items-baseline gap-2">
              <span className="text-4xl">{points}</span>
              <span className="text-xl text-foreground/60">XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Earn Rewards Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Earn rewards</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition-colors text-sm ${
                activeFilter === filter
                  ? 'bg-primary text-black'
                  : 'bg-card text-foreground/70 hover:bg-card-border hover:text-white border border-card-border/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Daily Check-in */}
        {dailyTasks.map(task => (
          <div key={task.id} className="bg-card border border-card-border p-6 md:p-8 rounded-2xl w-full">
            <div className="flex items-start gap-4">
              <div className="text-primary text-2xl mt-1">📅</div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg text-white">{task.title}</h3>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">+{task.points} XP / day</span>
                </div>
                <p className="text-foreground/60 text-sm max-w-md">{task.description}</p>
              </div>
            </div>

            {/* Streak */}
            <div className="mt-8 mb-6 overflow-x-auto pb-2">
              <div className="flex items-center justify-between min-w-120 relative">
                <div className="absolute top-5 left-4 right-4 h-px bg-card-border z-0" />
                {streakDays.map((day) => {
                  const isCurrent = day === currentStreak + 1;
                  return (
                    <div key={day} className="flex flex-col items-center gap-2 relative z-10 w-12">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-card border-2 ${
                        isCurrent ? 'border-primary text-primary' : 'border-card-border text-foreground/40'
                      }`}>
                        {day}
                      </div>
                      <span className="text-xs text-foreground/50 whitespace-nowrap">Day {day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-card-border gap-4">
              <p className="text-sm text-foreground/50 text-center sm:text-left">
                Day {currentStreak} of 7 · Complete all 7 days to finish the cycle
              </p>
              <button
                onClick={() => completeTask(task.id)}
                disabled={task.status === 'completed'}
                className={`px-8 py-2.5 rounded-xl font-bold transition-colors shrink-0 ${
                  task.status === 'completed'
                    ? 'bg-success/10 border border-success/30 text-success cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-hover text-black'
                }`}
              >
                {task.status === 'completed' ? 'Checked in ✓' : 'Check in'}
              </button>
            </div>
          </div>
        ))}

        {/* Social Tasks (with links) */}
        {otherTasks.filter(t => t.link).length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">🔗 Social Tasks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherTasks.filter(t => t.link).map(task => (
                <div
                  key={task.id}
                  className={`bg-card border rounded-2xl p-6 flex flex-col justify-between transition-all ${
                    task.status === 'completed'
                      ? 'border-success/30 opacity-80'
                      : 'border-card-border hover:border-primary/40'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {getTaskIcon(task)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-base mb-1">{task.title}</h3>
                      <p className="text-foreground/50 text-sm">{task.description}</p>
                      {task.link && task.link !== '/' && (
                        <a href={task.link} target="_blank" rel="noopener noreferrer"
                          className="text-primary text-xs font-bold mt-1 inline-block hover:underline">
                          {task.link.replace('https://', '')} →
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-end justify-between pt-4 border-t border-card-border/50">
                    <div>
                      <span className="text-primary font-extrabold text-lg">+{task.points} XP</span>
                      <span className="text-foreground/40 text-sm ml-2">{task.frequency}</span>
                    </div>
                    <button
                      onClick={() => completeTask(task.id)}
                      disabled={task.status === 'completed'}
                      className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${
                        task.status === 'completed'
                          ? 'bg-success/10 border border-success/30 text-success cursor-not-allowed'
                          : 'bg-primary hover:bg-primary-hover text-black'
                      }`}
                    >
                      {task.status === 'completed' ? 'Done ✓' : 'Start'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Tasks (no link) */}
        {otherTasks.filter(t => !t.link).length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherTasks.filter(t => !t.link).map(task => (
              <div key={task.id} className="bg-card border border-card-border p-6 rounded-2xl flex flex-col justify-between h-full hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                    {getTaskIcon(task)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{task.title}</h3>
                    <p className="text-foreground/50 text-sm">{task.description}</p>
                  </div>
                </div>
                <div className="flex items-end justify-between mt-6">
                  <div className="text-sm">
                    <span className="text-primary font-bold">+{task.points} XP </span>
                    <span className="text-foreground/40">{task.frequency}</span>
                  </div>
                  <button
                    onClick={() => completeTask(task.id)}
                    disabled={task.status === 'completed'}
                    className={`px-5 py-2 rounded-xl font-bold text-sm transition-colors ${
                      task.status === 'completed'
                        ? 'bg-success/10 border border-success/30 text-success cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-hover text-black'
                    }`}
                  >
                    {task.status === 'completed' ? 'Done ✓' : task.type === 'web3' ? 'Claim' : 'Start'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredTasks.length === 0 && (
          <div className="text-center py-16 text-foreground/40">
            <p className="text-xl mb-2">No tasks in this category</p>
            <p className="text-sm">Try selecting a different filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
