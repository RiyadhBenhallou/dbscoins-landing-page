import { Crown, RefreshCcw, Tag } from "lucide-react";

export default function Specs() {
  const features = [
    {
      icon: Crown,
      title: "High quality",
      description: "yea ofc we ain't selling no TRASH in here.",
      gradient: "from-yellow-300 to-yellow-400",
    },
    {
      icon: RefreshCcw,
      title: "Daily Updates",
      description: "Delivering the most up-to-date",
      gradient: "from-pink-300 to-yellow-300",
    },
    {
      icon: Tag,
      title: "Affordability",
      description: "STARTING FROM 15$",
      gradient: "from-yellow-300 to-yellow-400",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-400 px-4 py-16">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(45deg, #000 1px, transparent 1px), linear-gradient(-45deg, #000 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-5xl font-bold tracking-tight text-black">
          Characteristics
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center rounded-lg bg-gradient-to-br ${feature.gradient} p-8 text-center shadow-lg transition-transform hover:scale-105`}
            >
              <div className="mb-4 rounded-full bg-white/20 p-3">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-gray-800">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
