type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  gradient?: "pink-violet" | "blue-cyan" | "green-emerald" | "orange-amber";
};

export default function InfoCard({ 
  title, 
  children,
  icon,
  gradient = "blue-cyan"
}: InfoCardProps) {
  const gradientMap = {
    "pink-violet": "from-pink-500 to-violet-500",
    "blue-cyan": "from-blue-500 to-cyan-500",
    "green-emerald": "from-green-500 to-emerald-500",
    "orange-amber": "from-orange-500 to-amber-500"
  };

  const iconMap = {
    "pink-violet": "🚀",
    "blue-cyan": "💡",
    "green-emerald": "🌱",
    "orange-amber": "🔥"
  };

  return (
    <div className="group">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
        <div className="text-white">
          {/* Icon Container */}
          <div className={`w-12 h-12 bg-gradient-to-r ${gradientMap[gradient]} rounded-lg mb-4 flex items-center justify-center`}>
            <div className="text-white text-xl">
              {icon || iconMap[gradient]}
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          
          {/* Content */}
          <div className="text-white/80 mb-4">
            {children}
          </div>
          
          {/* Optional Button (uncomment if needed) */}
          {/* <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm transition-colors text-sm">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
}