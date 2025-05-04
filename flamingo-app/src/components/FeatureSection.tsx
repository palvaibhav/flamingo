import { CheckCircle, Clock, ListTodo, BarChart4 } from "lucide-react";

const features = [
  {
    title: "Goal Tracking",
    description:
      "Create, organize, and track your goals with our intuitive interface. Break down big goals into manageable tasks.",
    icon: CheckCircle,
  },
  {
    title: "SLA Timers",
    description:
      "Set deadlines and track the time remaining for each task. Automatic SLA timers help you stay on schedule.",
    icon: Clock,
  },
  {
    title: "Task Management",
    description:
      "Create tasks and sub-tasks with detailed descriptions, priorities, and deadlines. Keep everything organized.",
    icon: ListTodo,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize your progress with beautiful charts and graphs. See where you're spending your time and optimize.",
    icon: BarChart4,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="flamingo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to achieve your goals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flamingo provides powerful tools to help you set, track, and
            accomplish your goals with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-flamingo-100 text-flamingo-600">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
