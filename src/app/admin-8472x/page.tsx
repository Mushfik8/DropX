"use client";

import { useState } from "react";
import Link from "next/link";

const ADMIN_USERNAME = "mushfik8";
const ADMIN_PASSWORD = "admin";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Follow Twitter', points: 50, completions: 124 },
    { id: 2, title: 'Join Telegram', points: 40, completions: 89 },
    { id: 3, title: 'Daily Check-in', points: 10, completions: 312 },
    { id: 4, title: 'Invite Friends', points: 100, completions: 45 },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPoints, setNewTaskPoints] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle && newTaskPoints) {
      setTasks([...tasks, { id: Date.now(), title: newTaskTitle, points: parseInt(newTaskPoints), completions: 0 }]);
      setNewTaskTitle('');
      setNewTaskPoints('');
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-card border border-card-border rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🔒</div>
              <h1 className="text-2xl font-extrabold text-white">ZyroX Admin</h1>
              <p className="text-foreground/50 text-sm mt-1">Enter your credentials to continue</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1.5">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Enter username" autoComplete="off" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1.5">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Enter password" />
              </div>
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 text-center font-medium">{error}</div>
              )}
              <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-black font-bold py-3 rounded-xl transition-colors mt-2">Login</button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/" className="text-foreground/40 text-sm hover:text-foreground/60 transition-colors">← Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1 text-white">ZyroX Admin</h1>
            <p className="text-foreground/50 text-sm">Logged in as <span className="text-primary font-bold">{ADMIN_USERNAME}</span></p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIsLoggedIn(false)} className="border border-red-500/30 text-red-400 hover:bg-red-500/10 px-4 py-2 rounded-xl text-sm font-medium transition-colors">Logout</button>
            <Link href="/rewards" className="bg-card border border-card-border hover:border-primary px-4 py-2 rounded-xl text-center transition-colors text-sm font-medium">Back to App</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-card-border p-6 rounded-2xl col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleAddTask} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">Task Title</label>
                <input type="text" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="e.g. Join Discord" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">Reward Points</label>
                <input type="number" value={newTaskPoints} onChange={(e) => setNewTaskPoints(e.target.value)}
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 50" />
              </div>
              <button type="submit" className="bg-primary hover:bg-primary-hover text-black font-bold py-2.5 rounded-xl mt-2 transition-colors">Create Task</button>
            </form>
          </div>
          <div className="bg-card border border-card-border p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Platform Stats</h2>
            <div className="space-y-4">
              <div><p className="text-foreground/60 text-sm">Total Users</p><p className="text-2xl font-bold">12,024</p></div>
              <div><p className="text-foreground/60 text-sm">Tasks Completed</p><p className="text-2xl font-bold text-success">80,932</p></div>
              <div><p className="text-foreground/60 text-sm">Points Given</p><p className="text-2xl font-bold text-primary">2,450,200</p></div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-card-border rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-card-border"><h2 className="text-xl font-bold">Active Tasks</h2></div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-white/5 border-b border-card-border text-foreground/70">
                <th className="p-4 font-medium">Task</th><th className="p-4 font-medium">Points</th><th className="p-4 font-medium">Completions</th><th className="p-4 font-medium text-right">Actions</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {tasks.map((task) => (
                  <tr key={task.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium">{task.title}</td>
                    <td className="p-4 text-primary font-bold">{task.points}</td>
                    <td className="p-4">{task.completions}</td>
                    <td className="p-4 text-right"><button onClick={() => handleDeleteTask(task.id)} className="text-red-400 hover:text-red-300 px-3 py-1 bg-red-400/10 rounded-md text-sm font-medium transition-colors">Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
