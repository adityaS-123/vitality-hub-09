import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ActivityCard from "@/components/dashboard/ActivityCard";
import WaterIntakeCard from "@/components/dashboard/WaterIntakeCard";
import HeartRateCard from "@/components/dashboard/HeartRateCard";
import HealthOverviewCard from "@/components/dashboard/HealthOverviewCard";
import WeeklyPerformanceChart from "@/components/dashboard/WeeklyPerformanceChart";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard" subtitle="Welcome back, John! Here's your fitness summary.">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6">
        <ActivityCard />
        <WaterIntakeCard />
        <HeartRateCard />
        <HealthOverviewCard />
      </div>

      {/* Weekly Performance */}
      <WeeklyPerformanceChart />
    </DashboardLayout>
  );
};

export default Dashboard;
