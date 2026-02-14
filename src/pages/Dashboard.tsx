import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ActivityCard from "@/components/dashboard/ActivityCard";
import WaterIntakeCard from "@/components/dashboard/WaterIntakeCard";
import HeartRateCard from "@/components/dashboard/HeartRateCard";
import HealthOverviewCard from "@/components/dashboard/HealthOverviewCard";
import WeeklyPerformanceChart from "@/components/dashboard/WeeklyPerformanceChart";
import { Menu } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-background/80" onClick={() => setSidebarOpen(false)} />
          <div className="relative w-64 h-full">
            <DashboardSidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        {/* Mobile header */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="text-foreground">
            <Menu size={24} />
          </button>
          <h1 className="text-foreground font-bold text-xl">FitPulse</h1>
          <div className="w-6" />
        </div>

        {/* Desktop header */}
        <div className="hidden lg:block mb-8">
          <h1 className="text-foreground font-bold text-2xl">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Welcome back, John! Here's your fitness summary.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6">
          <ActivityCard />
          <WaterIntakeCard />
          <HeartRateCard />
          <HealthOverviewCard />
        </div>

        {/* Weekly Performance */}
        <WeeklyPerformanceChart />
      </main>
    </div>
  );
};

export default Dashboard;
