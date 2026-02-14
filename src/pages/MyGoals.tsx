import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Target, Plus, Flame, Footprints, Droplets, Moon, Dumbbell, TrendingUp } from "lucide-react";
import { useState } from "react";

interface Goal {
  id: number;
  icon: React.ElementType;
  title: string;
  current: number;
  target: number;
  unit: string;
  color: string;
  bgColor: string;
}

const initialGoals: Goal[] = [
  { id: 1, icon: Footprints, title: "Daily Steps", current: 6482, target: 10000, unit: "steps", color: "text-accent", bgColor: "bg-accent/10" },
  { id: 2, icon: Flame, title: "Calories Burned", current: 1842, target: 2500, unit: "kcal", color: "text-destructive", bgColor: "bg-destructive/10" },
  { id: 3, icon: Droplets, title: "Water Intake", current: 1200, target: 2000, unit: "ml", color: "text-primary", bgColor: "bg-primary/10" },
  { id: 4, icon: Moon, title: "Sleep Duration", current: 7.5, target: 8, unit: "hrs", color: "text-accent", bgColor: "bg-accent/10" },
  { id: 5, icon: Dumbbell, title: "Workouts / Week", current: 4, target: 5, unit: "sessions", color: "text-green", bgColor: "bg-green/10" },
  { id: 6, icon: TrendingUp, title: "Weight Goal", current: 78, target: 75, unit: "kg", color: "text-primary", bgColor: "bg-primary/10" },
];

const milestones = [
  { label: "7-Day Step Streak", achieved: true, date: "Feb 10, 2026" },
  { label: "50 Workouts Completed", achieved: true, date: "Feb 5, 2026" },
  { label: "30-Day Hydration Streak", achieved: false, date: "22/30 days" },
  { label: "Run a 5K", achieved: false, date: "Best: 4.2 km" },
];

const MyGoals = () => {
  const [goals] = useState<Goal[]>(initialGoals);

  return (
    <DashboardLayout title="My Goals" subtitle="Track your fitness goals and milestones.">
      {/* Goals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-8">
        {goals.map((goal) => {
          const percentage = Math.min((goal.current / goal.target) * 100, 100);
          const isComplete = percentage >= 100;

          return (
            <div key={goal.id} className="bg-card rounded-lg p-6 card-hover border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${goal.bgColor} flex items-center justify-center`}>
                    <goal.icon className={goal.color} size={20} />
                  </div>
                  <h3 className="text-foreground font-semibold text-sm">{goal.title}</h3>
                </div>
                {isComplete && (
                  <span className="text-xs font-medium text-green bg-green/10 px-2 py-1 rounded-full">
                    Done
                  </span>
                )}
              </div>

              <div className="mb-3">
                <div className="flex items-end justify-between mb-1.5">
                  <span className="text-2xl font-bold text-foreground">{goal.current.toLocaleString()}</span>
                  <span className="text-muted-foreground text-sm">/ {goal.target.toLocaleString()} {goal.unit}</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isComplete ? "bg-green" : "bg-primary"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              <p className="text-muted-foreground text-xs">
                {isComplete
                  ? "Goal reached! Keep it up!"
                  : `${Math.round(percentage)}% complete — ${(goal.target - goal.current).toLocaleString()} ${goal.unit} to go`}
              </p>
            </div>
          );
        })}

        {/* Add Goal Card */}
        <button className="bg-card rounded-lg p-6 border border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-3 transition-colors min-h-[180px]">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <Plus className="text-muted-foreground" size={24} />
          </div>
          <span className="text-muted-foreground text-sm font-medium">Add New Goal</span>
        </button>
      </div>

      {/* Milestones */}
      <div className="bg-card rounded-lg p-6 border border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-accent" size={22} />
          <h3 className="text-foreground font-semibold text-lg">Milestones</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {milestones.map((m) => (
            <div key={m.label} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
              <div className={`w-3 h-3 rounded-full ${m.achieved ? "bg-green" : "bg-muted-foreground/30"}`} />
              <div className="flex-1">
                <p className={`text-sm font-medium ${m.achieved ? "text-foreground" : "text-muted-foreground"}`}>
                  {m.label}
                </p>
                <p className="text-xs text-muted-foreground">{m.date}</p>
              </div>
              {m.achieved && (
                <span className="text-xs text-green font-medium">Achieved</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyGoals;
