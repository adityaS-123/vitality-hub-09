import { LayoutDashboard, Target, Calendar, BarChart3, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Target, label: "My Goals", path: "/goals" },
  { icon: Calendar, label: "Schedule", path: "/schedule" },
  { icon: BarChart3, label: "Statistics", path: "/statistics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-sidebar border-r border-border p-6">
      {/* Profile */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-4">
          <svg className="w-20 h-20" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="36" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
            <circle
              cx="40" cy="40" r="36"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeDasharray={`${0.72 * 226} ${226}`}
              strokeLinecap="round"
              transform="rotate(-90 40 40)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-xl font-bold text-foreground">
              JD
            </div>
          </div>
        </div>
        <h3 className="text-foreground font-semibold text-lg">John Doe</h3>
        <p className="text-muted-foreground text-sm">28 yrs • Male</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="pt-6 border-t border-border">
        <p className="text-muted-foreground text-xs text-center">FitPulse v2.0</p>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
