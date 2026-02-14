import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Calendar, Clock, Dumbbell, Flame, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface WorkoutEvent {
  id: number;
  title: string;
  type: string;
  time: string;
  duration: string;
  calories: number;
  location: string;
  color: string;
}

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const scheduleData: Record<string, WorkoutEvent[]> = {
  Mon: [
    { id: 1, title: "Morning Run", type: "Cardio", time: "06:30 AM", duration: "45 min", calories: 420, location: "Central Park", color: "border-l-primary" },
    { id: 2, title: "Core Workout", type: "Strength", time: "05:30 PM", duration: "30 min", calories: 280, location: "Home Gym", color: "border-l-accent" },
  ],
  Tue: [
    { id: 3, title: "Upper Body", type: "Strength", time: "07:00 AM", duration: "60 min", calories: 350, location: "FitZone Gym", color: "border-l-accent" },
    { id: 4, title: "Yoga Session", type: "Flexibility", time: "06:00 PM", duration: "45 min", calories: 180, location: "Zen Studio", color: "border-l-green" },
  ],
  Wed: [
    { id: 5, title: "HIIT Training", type: "Cardio", time: "06:30 AM", duration: "30 min", calories: 480, location: "Home Gym", color: "border-l-destructive" },
  ],
  Thu: [
    { id: 6, title: "Lower Body", type: "Strength", time: "07:00 AM", duration: "60 min", calories: 380, location: "FitZone Gym", color: "border-l-accent" },
    { id: 7, title: "Swimming", type: "Cardio", time: "05:00 PM", duration: "45 min", calories: 400, location: "Aqua Center", color: "border-l-primary" },
  ],
  Fri: [
    { id: 8, title: "Morning Run", type: "Cardio", time: "06:30 AM", duration: "40 min", calories: 390, location: "Central Park", color: "border-l-primary" },
    { id: 9, title: "Full Body Stretch", type: "Flexibility", time: "06:30 PM", duration: "30 min", calories: 120, location: "Home", color: "border-l-green" },
  ],
  Sat: [
    { id: 10, title: "Long Distance Run", type: "Cardio", time: "07:00 AM", duration: "90 min", calories: 720, location: "River Trail", color: "border-l-primary" },
  ],
  Sun: [],
};

const upcomingEvents = [
  { title: "5K City Run", date: "Feb 22, 2026", type: "Event" },
  { title: "Fitness Assessment", date: "Mar 1, 2026", type: "Checkup" },
  { title: "Gym Membership Renewal", date: "Mar 15, 2026", type: "Reminder" },
];

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Mon");
  const todayWorkouts = scheduleData[selectedDay] || [];

  const weeklyTotal = Object.values(scheduleData).flat();
  const totalSessions = weeklyTotal.length;
  const totalCalories = weeklyTotal.reduce((sum, w) => sum + w.calories, 0);
  const totalMinutes = weeklyTotal.reduce((sum, w) => parseInt(w.duration) || 0, 0);

  return (
    <DashboardLayout title="Schedule" subtitle="Plan and manage your weekly workout routine.">
      {/* Weekly Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Sessions", value: totalSessions, icon: Dumbbell, color: "text-primary" },
          { label: "Total Minutes", value: `${totalMinutes} min`, icon: Clock, color: "text-accent" },
          { label: "Calories Target", value: totalCalories.toLocaleString(), icon: Flame, color: "text-destructive" },
          { label: "Rest Days", value: Object.values(scheduleData).filter(d => d.length === 0).length, icon: Calendar, color: "text-green" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-lg p-4 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className={stat.color} size={16} />
              <span className="text-muted-foreground text-xs">{stat.label}</span>
            </div>
            <p className="text-foreground font-bold text-xl">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Day Selector */}
      <div className="bg-card rounded-lg p-4 mb-6 border border-border/50">
        <div className="flex items-center justify-between mb-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft size={20} />
          </button>
          <h3 className="text-foreground font-semibold">This Week — Feb 10–16, 2026</h3>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day) => {
            const hasWorkout = (scheduleData[day] || []).length > 0;
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center gap-1 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <span>{day}</span>
                {hasWorkout && (
                  <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-primary-foreground" : "bg-primary"}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Day Schedule */}
        <div className="xl:col-span-2">
          <h3 className="text-foreground font-semibold text-lg mb-4">{selectedDay}'s Workouts</h3>
          {todayWorkouts.length === 0 ? (
            <div className="bg-card rounded-lg p-12 border border-border/50 text-center">
              <Calendar className="text-muted-foreground mx-auto mb-4" size={40} />
              <p className="text-foreground font-medium mb-1">Rest Day</p>
              <p className="text-muted-foreground text-sm">No workouts scheduled. Recovery is important!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {todayWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className={`bg-card rounded-lg p-5 border border-border/50 border-l-4 ${workout.color} card-hover`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-foreground font-semibold">{workout.title}</h4>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                        {workout.type}
                      </span>
                    </div>
                    <span className="text-primary font-medium text-sm">{workout.time}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Flame size={14} />
                      <span>{workout.calories} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{workout.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-foreground font-semibold text-lg mb-4">Upcoming</h3>
          <div className="bg-card rounded-lg p-5 border border-border/50 space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex items-start gap-3 pb-4 last:pb-0 border-b border-border/50 last:border-0">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-medium">{event.title}</p>
                  <p className="text-muted-foreground text-xs">{event.date} • {event.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
