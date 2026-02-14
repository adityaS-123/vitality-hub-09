import { Droplets } from "lucide-react";
import { useState } from "react";

const quickAmounts = [100, 200, 300, 500];

const WaterIntakeCard = () => {
  const [intake, setIntake] = useState(500);
  const goal = 1500;

  return (
    <div className="bg-card rounded-lg p-6 card-hover glow-blue">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-muted-foreground text-sm font-medium">Water Intake</h3>
        <Droplets className="text-primary" size={20} />
      </div>

      <div className="text-center mb-4">
        <p className="text-4xl font-bold text-foreground">{intake}</p>
        <p className="text-muted-foreground text-sm">ml consumed</p>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-secondary rounded-full mb-3">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${Math.min((intake / goal) * 100, 100)}%` }}
        />
      </div>
      <p className="text-muted-foreground text-xs text-center mb-4">Goal: {goal} ml</p>

      {/* Quick add buttons */}
      <div className="flex gap-2 justify-center mb-4">
        {quickAmounts.map((amt) => (
          <button
            key={amt}
            onClick={() => setIntake((prev) => prev + amt)}
            className="w-10 h-10 rounded-full bg-secondary text-foreground text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            +{amt >= 1000 ? `${amt / 1000}L` : amt}
          </button>
        ))}
      </div>

      <button className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
        Record Drink
      </button>
    </div>
  );
};

export default WaterIntakeCard;
