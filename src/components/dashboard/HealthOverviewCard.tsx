import { Activity, Moon, Flame, TrendingUp } from "lucide-react";

const stats = [
  { icon: Activity, label: "Active Minutes", value: "47 min", color: "text-primary" },
  { icon: Moon, label: "Sleep", value: "7h 32m", color: "text-accent" },
  { icon: Flame, label: "Calories Burned", value: "1,842", color: "text-destructive" },
  { icon: TrendingUp, label: "Health Score", value: "86/100", color: "text-green" },
];

const HealthOverviewCard = () => {
  return (
    <div className="bg-card rounded-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-muted-foreground text-sm font-medium">Health Overview</h3>
      </div>

      <div className="space-y-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <stat.icon className={stat.color} size={18} />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-xs">{stat.label}</p>
              <p className="text-foreground font-semibold text-sm">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthOverviewCard;
