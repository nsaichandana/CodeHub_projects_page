export default function ProcessFlow() {
  const steps = [
    "Team Formation",
    "Idea Discussions", 
    "Project Announcement",
    "Team Building",
    "Development"
  ];

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-2xl">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Project Development Process
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {steps.map((step) => (
          <div 
            key={step} 
            className="rounded-lg bg-white/10 backdrop-blur-sm px-4 py-3 border border-white/20"
          >
            <span className="font-medium text-white">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}