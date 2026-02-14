import { Footprints } from "lucide-react";

const ActivityCard = () => {
  const steps = 6482;
  const goal = 10000;
  const percentage = (steps / goal) * 100;
  const radius = 70;
  const circumference = Math.PI * radius; // semi-circle

  return (
    <div className="bg-card rounded-lg p-6 card-hover glow-yellow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-muted-foreground text-sm font-medium">Activity</h3>
        <Footprints className="text-accent" size={20} />
      </div>

      {/* Semi-circular gauge */}
      <div className="flex justify-center mb-4">
        <svg width="160" height="90" viewBox="0 0 160 90">
          <path
            d="M 10 85 A 70 70 0 0 1 150 85"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 10 85 A 70 70 0 0 1 150 85"
            fill="none"
            stroke="hsl(var(--yellow))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * circumference} ${circumference}`}
            className="transition-all duration-1000"
          />
          <text x="80" y="70" textAnchor="middle" className="fill-foreground text-3xl font-bold" fontSize="28">
            {steps.toLocaleString()}
          </text>
          <text x="80" y="85" textAnchor="middle" className="fill-muted-foreground" fontSize="10">
            steps
          </text>
        </svg>
      </div>

      <div className="flex justify-between text-center">
        <div>
          <p className="text-foreground font-semibold text-sm">4.2 km</p>
          <p className="text-muted-foreground text-xs">Distance</p>
        </div>
        <div>
          <p className="text-foreground font-semibold text-sm">312</p>
          <p className="text-muted-foreground text-xs">Calories</p>
        </div>
        <div>
          <p className="text-foreground font-semibold text-sm">65%</p>
          <p className="text-muted-foreground text-xs">Goal</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
