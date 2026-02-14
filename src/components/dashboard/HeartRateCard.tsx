import { Heart } from "lucide-react";

const HeartRateCard = () => {
  const ecgPath = "M 0 40 L 20 40 L 25 20 L 30 55 L 35 10 L 40 50 L 45 35 L 50 40 L 70 40 L 75 20 L 80 55 L 85 10 L 90 50 L 95 35 L 100 40 L 120 40 L 125 20 L 130 55 L 135 10 L 140 50 L 145 35 L 150 40 L 170 40";

  return (
    <div className="bg-card rounded-lg p-6 card-hover glow-red">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-muted-foreground text-sm font-medium">Heart Rate</h3>
        <Heart className="text-destructive animate-pulse-glow" size={20} />
      </div>

      <div className="text-center mb-2">
        <p className="text-5xl font-bold text-foreground">072</p>
        <p className="text-muted-foreground text-sm">BPM</p>
      </div>

      {/* ECG Line */}
      <div className="my-4 overflow-hidden rounded-lg">
        <svg width="100%" height="60" viewBox="0 0 170 60" preserveAspectRatio="none">
          <path
            d={ecgPath}
            fill="none"
            stroke="hsl(var(--red))"
            strokeWidth="2"
            className="ecg-animate"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="flex justify-between text-center">
        <div>
          <p className="text-foreground font-semibold text-sm">58</p>
          <p className="text-muted-foreground text-xs">Min</p>
        </div>
        <div>
          <p className="text-foreground font-semibold text-sm">72</p>
          <p className="text-muted-foreground text-xs">Avg</p>
        </div>
        <div>
          <p className="text-foreground font-semibold text-sm">98</p>
          <p className="text-muted-foreground text-xs">Max</p>
        </div>
      </div>
    </div>
  );
};

export default HeartRateCard;
