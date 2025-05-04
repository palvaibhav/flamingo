import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Up to 5 goals", "7-day task history", "Email support"],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For individuals with serious goals",
    features: [
      "Unlimited goals",
      "Full task history",
      "Detailed analytics",
      "Priority support",
    ],
    buttonText: "Start Subscription",
    buttonVariant: "primary",
    featured: true,
  },
  {
    name: "Lifetime",
    price: "$99",
    period: "for life",
    description: "Pay once and enjoy the product for life",
    features: ["Everything in Pro", "All Future updates", "24/7 support"],
    buttonText: "Buy",
    buttonVariant: "outline",
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="flamingo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 flex flex-col ${
                plan.featured
                  ? "border-flamingo-400 shadow-lg transform md:-translate-y-4"
                  : "border-gray-200 hover:border-flamingo-300 hover:shadow"
              }`}
            >
              {plan.featured && (
                <div className="bg-black py-2 text-white text-center text-sm font-medium">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check
                        size={18}
                        className="text-flamingo-500 mr-2 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.buttonVariant === "primary"
                      ? "bg-black hover:bg-flamingo-600 text-white"
                      : "bg-white text-600 border border-flamingo-300 hover:bg-flamingo-50"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
