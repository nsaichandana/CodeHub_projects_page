"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import ProcessFlow from "./components/ProcessFlow";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0f1a] text-white">
      
      {/* Sparkles Effect - Added Here */}
      <div className="fixed inset-0 -z-10">
        <SparklesCore
          id="projects-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      {/* Layer 1: Purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,0,173,0.35),transparent_40%)]"></div>
      
      {/* Layer 2: Blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(2,79,103,0.35),transparent_45%)]"></div>
      
      {/* Layer 3: Overall gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#222A38]/60 via-transparent to-[#510682]/50"></div>
      
      {/* Page Content */}
      <div className="relative z-10 px-6 pt-28">
        <div className="mx-auto max-w-7xl space-y-16">
          
          {/* Header */}
          <section className="text-center">
            <h1 className="mb-4 text-5xl font-bold">Projects</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              CodeHub is a newly formed technical club. Our projects section is
              designed to grow as members collaborate and build real-world ideas.
            </p>
          </section>

          {/* Top 3 Cards */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="text-white">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Why Projects Matter</h3>
                <ul className="text-gray-300 mb-4 space-y-1">
                  <li>• Hands-on learning beyond classrooms</li>
                  <li>• Team collaboration and problem-solving</li>
                  <li>• Building practical technical skills</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="text-white">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">What This Space Is For</h3>
                <ul className="text-gray-300 mb-4 space-y-1">
                  <li>• Showcasing CodeHub initiatives</li>
                  <li>• Future project announcements</li>
                  <li>• Collaborative learning experiences</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="text-white">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Getting Started with Projects</h3>
                <ul className="text-gray-300 mb-4 space-y-1">
                  <li>• Learn the required fundamentals</li>
                  <li>• Participate in discussions</li>
                  <li>• Be ready for team formation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process Flow */}
          <section>
            <ProcessFlow />
          </section>

          {/* Bottom 2 Cards */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="text-white">
                <div className="text-3xl mb-4">⏳</div>
                <h3 className="text-xl font-semibold mb-2">No Active Projects Yet</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">This space will be updated as CodeHub begins its project initiatives.</p>
                  <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                    <span className="text-gray-400">Coming Soon...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="text-white">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-2">How to Stay Involved</h3>
                <ul className="text-gray-300 mb-4 space-y-1">
                  <li>• <span className="font-medium text-white">Follow CodeHub updates</span> - Join announcements</li>
                  <li>• <span className="font-medium text-white">Participate in discussions</span> - Share ideas</li>
                  <li>• <span className="font-medium text-white">Watch this space</span> - Future projects here</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bottom Spacing */}
          <div className="pb-32"></div>

        </div>
      </div>
      
    </div>
  );
}