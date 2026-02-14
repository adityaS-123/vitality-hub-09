import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { useState } from "react";

const weeklySteps = [
  { day: "Mon", steps: 8200 },
  { day: "Tue", steps: 6500 },
  { day: "Wed", steps: 9800 },
  { day: "Thu", steps: 7200 },
  { day: "Fri", steps: 11000 },
  { day: "Sat", steps: 5400 },
  { day: "Sun", steps: 6482 },
];

const monthlyWeight = [
  { week: "Week 1", weight: 80 },
  { week: "Week 2", weight: 79.5 },
  { week: "Week 3", weight: 79.2 },
  { week: "Week 4", weight: 78.6 },
  { week: "Week 5", weight: 78.2 },
  { week: "Week 6", weight: 78 },
];

const heartRateOverTime = [
  { time: "6 AM", bpm: 62 },
  { time: "9 AM", bpm: 75 },
  { time: "12 PM", bpm: 82 },
  { time: "3 PM", bpm: 78 },
  { time: "6 PM", bpm: 95 },
  { time: "9 PM", bpm: 68 },
  { time: "12 AM", bpm: 58 },
];

const workoutDistribution = [
  { name: "Cardio", value: 40, color: "hsl(217, 91%, 60%)" },
  { name: "Strength", value: 30, color: "hsl(48, 96%, 53%)" },
  { name: "Flexibility", value: 15, color: "hsl(142, 71%, 45%)" },
  { name: "HIIT", value: 15, color: "hsl(0, 72%, 51%)" },
];

const caloriesData = [
  { day: "Mon", burned: 2100, consumed: 1950 },
  { day: "Tue", burned: 1800, consumed: 2050 },
  { day: "Wed", burned: 2400, consumed: 2100 },
  { day: "Thu", burned: 1950, consumed: 1900 },
  { day: "Fri", burned: 2800, consumed: 2200 },
  { day: "Sat", burned: 1600, consumed: 2300 },
  { day: "Sun", burned: 1400, consumed: 1800 },
];

const summaryStats = [
  { label: "Avg. Steps", value: "7,797", change: "+12%", trend: "up" },
  { label: "Avg. Heart Rate", value: "72 BPM", change: "-3%", trend: "down" },
  { label: "Total Calories", value: "14,050", change: "+8%", trend: "up" },
  { label: "Avg. Sleep", value: "7h 32m", change: "0%", trend: "neutral" },
  { label: "Workouts", value: "11", change: "+2", trend: "up" },
  { label: "Body Weight", value: "78 kg", change: "-2 kg", trend: "down" },
];

const periods = ["This Week", "This Month", "Last 3 Months"] as const;

const tooltipStyle = {
  backgroundColor: "hsl(240 10% 12%)",
  border: "1px solid hsl(240 8% 18%)",
  borderRadius: "8px",
  color: "hsl(0 0% 95%)",
};

const Statistics = () => {
  const [period, setPeriod] = useState<typeof periods[number]>("This Week");

  return (
    <DashboardLayout title="Statistics" subtitle="Deep dive into your fitness analytics and trends.">
      {/* Period Selector */}
      <div className="flex gap-2 mb-6">
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              period === p
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        {summaryStats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-lg p-4 border border-border/50">
            <p className="text-muted-foreground text-xs mb-1">{stat.label}</p>
            <p className="text-foreground font-bold text-lg">{stat.value}</p>
            <div className="flex items-center gap-1 mt-1">
              {stat.trend === "up" && <TrendingUp size={12} className="text-green" />}
              {stat.trend === "down" && <TrendingDown size={12} className="text-primary" />}
              {stat.trend === "neutral" && <Minus size={12} className="text-muted-foreground" />}
              <span className={`text-xs font-medium ${
                stat.trend === "up" ? "text-green" : stat.trend === "down" ? "text-primary" : "text-muted-foreground"
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* Steps Chart */}
        <div className="bg-card rounded-lg p-6 border border-border/50">
          <h3 className="text-foreground font-semibold mb-4">Daily Steps</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklySteps} barSize={20}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 8% 18%)" vertical={false} />
                <XAxis dataKey="day" stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="steps" fill="hsl(48 96% 53%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heart Rate Chart */}
        <div className="bg-card rounded-lg p-6 border border-border/50">
          <h3 className="text-foreground font-semibold mb-4">Heart Rate Today</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={heartRateOverTime}>
                <defs>
                  <linearGradient id="hrGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(0 72% 51%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(0 72% 51%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 8% 18%)" vertical={false} />
                <XAxis dataKey="time" stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} domain={[50, 110]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="bpm" stroke="hsl(0 72% 51%)" fill="url(#hrGradient)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Calories Chart */}
        <div className="bg-card rounded-lg p-6 border border-border/50">
          <h3 className="text-foreground font-semibold mb-1">Calories: Burned vs Consumed</h3>
          <p className="text-muted-foreground text-xs mb-4">Maintaining a healthy deficit</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={caloriesData} barGap={4} barSize={14}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 8% 18%)" vertical={false} />
                <XAxis dataKey="day" stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="burned" fill="hsl(0 72% 51%)" radius={[4, 4, 0, 0]} name="Burned" />
                <Bar dataKey="consumed" fill="hsl(48 96% 53%)" radius={[4, 4, 0, 0]} name="Consumed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weight Trend */}
        <div className="bg-card rounded-lg p-6 border border-border/50">
          <h3 className="text-foreground font-semibold mb-1">Weight Trend</h3>
          <p className="text-muted-foreground text-xs mb-4">Last 6 weeks — Target: 75 kg</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyWeight}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 8% 18%)" vertical={false} />
                <XAxis dataKey="week" stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} domain={[74, 81]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="weight" stroke="hsl(217 91% 60%)" strokeWidth={2} dot={{ fill: "hsl(217 91% 60%)", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Workout Distribution Pie */}
      <div className="bg-card rounded-lg p-6 border border-border/50">
        <h3 className="text-foreground font-semibold mb-4">Workout Type Distribution</h3>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="h-52 w-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={workoutDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {workoutDistribution.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-4">
            {workoutDistribution.map((entry) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-muted-foreground text-sm">{entry.name} — {entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;
