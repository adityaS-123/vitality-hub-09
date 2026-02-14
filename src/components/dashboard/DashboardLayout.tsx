import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title, subtitle }: DashboardLayoutProps) => {
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
          <h1 className="text-foreground font-bold text-2xl">{title}</h1>
          {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
        </div>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
