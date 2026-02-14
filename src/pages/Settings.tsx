import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { User, Bell, Moon, Globe, Lock, Palette, Activity, LogOut } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: "28",
    gender: "Male",
    height: "178",
    weight: "78",
  });

  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    goalAlerts: true,
    weeklyReport: true,
    hydrationReminders: false,
    heartRateAlerts: true,
  });

  const [preferences, setPreferences] = useState({
    units: "Metric",
    language: "English",
    stepGoal: "10000",
    waterGoal: "2000",
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <DashboardLayout title="Settings" subtitle="Manage your profile and app preferences.">
      <div className="max-w-3xl space-y-6">
        {/* Profile Section */}
        <div className="bg-card rounded-lg p-6 border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-primary" size={20} />
            <h3 className="text-foreground font-semibold text-lg">Profile Information</h3>
          </div>

          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-2xl font-bold text-foreground">
              JD
            </div>
            <div>
              <p className="text-foreground font-semibold">{profile.name}</p>
              <p className="text-muted-foreground text-sm">{profile.email}</p>
            </div>
            <button className="ml-auto px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
              Change Avatar
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Full Name", key: "name" as const, type: "text" },
              { label: "Email", key: "email" as const, type: "email" },
              { label: "Age", key: "age" as const, type: "number" },
              { label: "Gender", key: "gender" as const, type: "text" },
              { label: "Height (cm)", key: "height" as const, type: "number" },
              { label: "Weight (kg)", key: "weight" as const, type: "number" },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-muted-foreground text-xs font-medium mb-1.5 block">{field.label}</label>
                <input
                  type={field.type}
                  value={profile[field.key]}
                  onChange={(e) => setProfile((prev) => ({ ...prev, [field.key]: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            ))}
          </div>

          <button className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Save Profile
          </button>
        </div>

        {/* Notifications Section */}
        <div className="bg-card rounded-lg p-6 border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-accent" size={20} />
            <h3 className="text-foreground font-semibold text-lg">Notifications</h3>
          </div>

          <div className="space-y-4">
            {[
              { key: "workoutReminders" as const, label: "Workout Reminders", desc: "Get notified before scheduled workouts" },
              { key: "goalAlerts" as const, label: "Goal Alerts", desc: "Notifications when you reach daily goals" },
              { key: "weeklyReport" as const, label: "Weekly Report", desc: "Receive a weekly performance summary" },
              { key: "hydrationReminders" as const, label: "Hydration Reminders", desc: "Periodic reminders to drink water" },
              { key: "heartRateAlerts" as const, label: "Heart Rate Alerts", desc: "Alert when heart rate is abnormally high" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-foreground text-sm font-medium">{item.label}</p>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
                <button
                  onClick={() => toggleNotification(item.key)}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                    notifications[item.key] ? "bg-primary" : "bg-secondary"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 ${
                      notifications[item.key] ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-card rounded-lg p-6 border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-primary" size={20} />
            <h3 className="text-foreground font-semibold text-lg">Preferences</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-muted-foreground text-xs font-medium mb-1.5 block">
                <Globe size={12} className="inline mr-1" /> Units
              </label>
              <select
                value={preferences.units}
                onChange={(e) => setPreferences((prev) => ({ ...prev, units: e.target.value }))}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="Metric">Metric (kg, km)</option>
                <option value="Imperial">Imperial (lbs, mi)</option>
              </select>
            </div>
            <div>
              <label className="text-muted-foreground text-xs font-medium mb-1.5 block">
                <Globe size={12} className="inline mr-1" /> Language
              </label>
              <select
                value={preferences.language}
                onChange={(e) => setPreferences((prev) => ({ ...prev, language: e.target.value }))}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label className="text-muted-foreground text-xs font-medium mb-1.5 block">
                <Activity size={12} className="inline mr-1" /> Daily Step Goal
              </label>
              <input
                type="number"
                value={preferences.stepGoal}
                onChange={(e) => setPreferences((prev) => ({ ...prev, stepGoal: e.target.value }))}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="text-muted-foreground text-xs font-medium mb-1.5 block">
                <Activity size={12} className="inline mr-1" /> Daily Water Goal (ml)
              </label>
              <input
                type="number"
                value={preferences.waterGoal}
                onChange={(e) => setPreferences((prev) => ({ ...prev, waterGoal: e.target.value }))}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <button className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Save Preferences
          </button>
        </div>

        {/* Security & Account */}
        <div className="bg-card rounded-lg p-6 border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-destructive" size={20} />
            <h3 className="text-foreground font-semibold text-lg">Account</h3>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors text-left">
              <Lock size={16} className="text-muted-foreground" />
              Change Password
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors text-left">
              <Moon size={16} className="text-muted-foreground" />
              Dark Mode
              <span className="ml-auto text-xs text-muted-foreground">Always On</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors text-left">
              <LogOut size={16} />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
