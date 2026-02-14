import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { day: "Mon", steps: 8200, water: 1200, calories: 2100 },
  { day: "Tue", steps: 6500, water: 800, calories: 1800 },
  { day: "Wed", steps: 9800, water: 1400, calories: 2400 },
  { day: "Thu", steps: 7200, water: 1100, calories: 1950 },
  { day: "Fri", steps: 11000, water: 1500, calories: 2800 },
  { day: "Sat", steps: 5400, water: 900, calories: 1600 },
  { day: "Sun", steps: 6482, water: 500, calories: 1400 },
];

const WeeklyPerformanceChart = () => {
  return (
    <div className="bg-card rounded-lg p-6 card-hover">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-foreground font-semibold text-lg">Last Week Performance</h3>
          <p className="text-muted-foreground text-sm">Your weekly activity summary</p>
        </div>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-muted-foreground">9,850 Steps</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">5,650 Water</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-muted-foreground">Calories</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={2} barSize={12}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 8% 18%)" vertical={false} />
            <XAxis dataKey="day" stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(240 5% 55%)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(240 10% 12%)",
                border: "1px solid hsl(240 8% 18%)",
                borderRadius: "8px",
                color: "hsl(0 0% 95%)",
              }}
            />
            <Bar dataKey="steps" fill="hsl(48 96% 53%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="water" fill="hsl(217 91% 60%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="calories" fill="hsl(0 72% 51%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyPerformanceChart;
