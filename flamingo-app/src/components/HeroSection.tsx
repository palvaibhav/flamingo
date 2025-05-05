import { Button } from "./ui/button";

const HeroSection = () => (
  <section className="py-20 h-screen flex items-center justify-center">
    <div className="flamingo-container">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">
              Track your goals with flamingo
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Set goals, track progress, and achieve more. Our intuitive goal
            tracking system helps you stay on top of your tasks with SLA timers
            and detailed progress analytics.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Button size="lg">Get Started - It's Free</Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="rounded-2xl shadow-2xl bg-white p-4 md:p-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  2025 Goals Progress
                </h3>
                <p className="text-sm text-gray-500">
                  Last updated: 2 hours ago
                </p>
              </div>
              <div className="bg-flamingo-100 text-flamingo-700 py-1 px-3 rounded-full text-sm font-medium">
                45% Complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
