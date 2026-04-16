"use client";

import { useApp } from "@/context/AppContext";
import { useState } from "react";

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

  // Separate daily from rest
  const dailyTasks = filteredTasks.filter(t => t.type === 'daily');
  const otherTasks = filteredTasks.filter(t => t.type !== 'daily');

  // Social icon picker
  const getTaskIcon = (task: typeof tasks[0]) => {
    if (task.type === 'web3') return '👛';
    if (task.title.toLowerCase().includes('twitter') || task.title.toLowerCase().includes(' x ') || task.title.toLowerCase().includes('retweet')) return '𝕏';
    if (task.title.toLowerCase().includes('telegram')) return '✈️';
    if (task.title.toLowerCase().includes('refer')) return '🤝';
    if (task.type === 'daily') return '📅';
    return '🌐';
  };

  return (
    <div className="py-10 px-4 pb-28 md:pb-10 max-w-5xl mx-auto space-y-12">

      {/* Page Header */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Rewards</h1>
          <p className="text-foreground/60 text-lg">Earn and redeem rewards from actions, referrals, and partner activities</p>
        </div>

        {/* Tier & XP display */}
        <div className="flex items-center gap-6 mt-8">
          <div className="w-16 h-16 bg-[#b07d57]/20 rounded-full flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(176,125,87,0.3)]">
            ⭐
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-white">Bronze Tier</h2>
              <span className="bg-[#b07d57]/20 text-[#b07d57] text-xs font-bold px-2 py-0.5 rounded-full">Current tier</span>
            </div>
            <div className="text-white font-bold flex items-baseline gap-2">
              <span className="text-4xl">{points}</span>
              <span className="text-xl text-foreground/80">XP</span>
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
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-black'
                  : 'bg-card text-foreground/70 hover:bg-card-border hover:text-white border border-card-border/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Daily Check-in (only when visible in filter) */}
        {dailyTasks.map(task => (
          <div key={task.id} className="bg-card border border-card-border/50 p-6 md:p-8 rounded-2xl w-full">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl mt-1">📅</div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-white">{task.title}</h3>
                    <span className="bg-[#1e1a0f] text-primary text-xs font-bold px-2 py-1 rounded">+{task.points} XP / day</span>
                  </div>
                  <p className="text-foreground/60 text-sm max-w-md">
                    {task.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Streak Visual */}
            <div className="mt-10 mb-6 overflow-x-auto pb-4">
              <div className="flex items-center justify-between min-w-[500px] relative">
                <div className="absolute top-5 left-4 right-4 h-[1px] bg-card-border/80 z-0"></div>
                {streakDays.map((day) => {
                  const isCurrent = day === currentStreak + 1;
                  return (
                    <div key={day} className="flex flex-col items-center gap-2 relative z-10 w-12">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-card border-2
                        ${isCurrent ? 'border-primary text-primary shadow-[0_0_10px_rgba(250,204,21,0.2)]' : 'border-card-border text-foreground/40'}
                      `}>
                        {day}
                      </div>
                      <span className="text-xs text-foreground/50 whitespace-nowrap">Day {day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-card-border/30 gap-4">
              <div className="text-sm text-foreground/50 text-center sm:text-left">
                Day {currentStreak} of 7 completed · Next reward: check in tomorrow
                <br className="hidden sm:block" />
                <span className="sm:hidden"> · </span>Complete all 7 days to finish the cycle
              </div>
              <button
                onClick={() => completeTask(task.id)}
                disabled={task.status === 'completed'}
                className={`px-8 py-2.5 rounded-xl font-bold transition-colors shrink-0 ${
                  task.status === 'completed'
                    ? 'bg-card border border-card-border text-foreground/50 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-hover text-black'
                }`}
              >
                {task.status === 'completed' ? 'Checked in ✓' : 'Start'}
              </button>
            </div>
          </div>
        ))}

        {/* === SOCIAL LINK TASKS (Twitter/X, Telegram) - Bold and Prominent === */}
        {otherTasks.filter(t => t.link).length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              🔗 Social Tasks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherTasks.filter(t => t.link).map(task => (
                <div
                  key={task.id}
                  className={`bg-card border-2 rounded-2xl p-6 flex flex-col justify-between transition-all ${
                    task.status === 'completed'
                      ? 'border-green-500/30 opacity-70'
                      : 'border-primary/40 hover:border-primary shadow-[0_0_20px_rgba(250,204,21,0.05)] hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                      {getTaskIcon(task)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-white text-lg leading-tight mb-1">{task.title}</h3>
                      <p className="text-foreground/50 text-sm leading-snug">{task.description}</p>
                      {task.link && (
                        <a
                          href={task.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs font-bold mt-1 inline-block hover:underline"
                        >
                          {task.link.replace('https://', '')} →
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-end justify-between pt-4 border-t border-card-border/30">
                    <div>
                      <span className="text-primary font-extrabold text-lg">+{task.points} XP</span>
                      <span className="text-foreground/40 text-sm ml-2">{task.frequency}</span>
                    </div>
                    <button
                      onClick={() => completeTask(task.id)}
                      disabled={task.status === 'completed'}
                      className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                        task.status === 'completed'
                          ? 'bg-green-500/10 border border-green-500/30 text-green-400 cursor-not-allowed'
                          : 'bg-primary hover:bg-primary-hover text-black shadow-sm hover:shadow-md'
                      }`}
                    >
                      {task.status === 'completed' ? 'Claimed ✓' : 'Start'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === OTHER TASKS (no external link) === */}
        {otherTasks.filter(t => !t.link).length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherTasks.filter(t => !t.link).map(task => (
              <div key={task.id} className="bg-card border border-card-border/50 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-primary/20 transition-colors">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {getTaskIcon(task)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white leading-tight mb-1">{task.title}</h3>
                      <p className="text-foreground/50 text-sm leading-snug">{task.description}</p>
                    </div>
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
                    className={`px-6 py-2 rounded-xl font-bold transition-colors text-sm ${
                      task.status === 'completed'
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-hover text-black'
                    }`}
                  >
                    {task.status === 'completed' ? 'Claimed ✓' : task.type === 'web3' ? 'Claim' : 'Start'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredTasks.length === 0 && (
          <div className="text-center py-16 text-foreground/40">
            <p className="text-xl mb-2">No tasks in this category</p>
            <p className="text-sm">Try selecting a different filter above.</p>
          </div>
        )}
      </div>
    </div>
  );
}
