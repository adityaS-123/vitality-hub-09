import { ArrowRight, Activity, Droplets, Heart, BarChart3, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Activity,
    title: "Activity Tracking",
    description: "Monitor steps, distance, and calories with precision gauges and real-time data.",
  },
  {
    icon: Heart,
    title: "Heart Rate Monitor",
    description: "Live ECG visualization with min, avg, and max heart rate tracking.",
  },
  {
    icon: Droplets,
    title: "Hydration Goals",
    description: "Quick-log water intake and track progress toward daily hydration targets.",
  },
  {
    icon: BarChart3,
    title: "Weekly Analytics",
    description: "Beautiful bar charts showing your performance trends across the week.",
  },
  {
    icon: Zap,
    title: "Smart Insights",
    description: "AI-powered health scores and personalized recommendations for peak performance.",
  },
  {
    icon: Shield,
    title: "Health Overview",
    description: "Sleep, calories, active minutes — everything in one glanceable dashboard.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-5 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Activity className="text-primary" size={28} />
          <span className="text-foreground font-bold text-xl">FitPulse</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#" className="hover:text-foreground transition-colors">About</a>
        </div>
        <Link
          to="/dashboard"
          className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Open Dashboard
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs font-medium mb-8">
            <Zap size={14} className="text-accent" />
            Your fitness, reimagined
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
            Track Your Health.
            <br />
            <span className="gradient-text">Elevate Your Life.</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            A stunning dark-themed fitness dashboard that puts your health data front and center. Steps, hydration, heart rate — all beautifully visualized.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Launch Dashboard
              <ArrowRight size={18} />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-colors"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive health tracking with a beautiful, intuitive interface designed for your daily routine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg p-6 card-hover border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="bg-card rounded-2xl p-12 border border-border/50">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Health?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Start tracking your fitness journey today with the most beautiful dashboard you've ever seen.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Activity className="text-primary" size={20} />
            <span className="text-foreground font-semibold">FitPulse</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 FitPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
