interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  insight: string;
  icon: string;
}

const projectsData: Project[] = [
  {
    title: "E-commerce App Redesign",
    category: "What You Know",
    description: "A comprehensive redesign of a mobile shopping experience, focusing on streamlining the checkout process and improving product discovery.",
    highlights: [
      "User research with personas and pain point mapping",
      "Wireframes to high-fidelity UI prototypes",
      "Scalable design system with reusable components",
      "Accessibility compliance (WCAG 2.1 AA)"
    ],
    insight: "This project demonstrates my understanding of the complete UX process from research to final delivery.",
    icon: "🛍️"
  },
  {
    title: "Healthcare App UX Case Study",
    category: "What You Learned",
    description: "Designing a patient appointment system that initially failed user testing, leading to valuable iterations and insights.",
    highlights: [
      "Multiple design iterations based on user feedback",
      "Documented what didn't work and why",
      "Simplified user flows after usability testing",
      "Improved task completion rate by 60%"
    ],
    insight: "This project taught me that failure is part of the design process, and user feedback is invaluable.",
    icon: "🏥"
  },
  {
    title: "AI Study Planner UX",
    category: "What You Aspire to Do",
    description: "A conceptual AI-powered study planning app that adapts to individual learning patterns and optimizes study schedules.",
    highlights: [
      "Innovative concept for personalized learning",
      "UX design for AI-driven recommendations",
      "Focus on trust and transparency in AI interactions",
      "Vision for future of educational technology"
    ],
    insight: "This project represents my ambition to design for emerging technologies and create meaningful educational experiences.",
    icon: "🤖"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-2">Passion led us here</p>
          <h2 className="text-4xl md:text-5xl font-black">What I can do for you</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="decorative-frame bg-beige p-8 hover:transform hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-white decorative-frame flex items-center justify-center text-3xl mb-6">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              
              <div className="inline-block px-3 py-1 bg-accent-yellow rounded-full text-xs font-medium">
                {project.category}
              </div>
            </div>
          ))}
        </div>
        
        {/* Detailed project cards */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="decorative-frame bg-beige p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{project.icon}</span>
                <div>
                  <span className="px-4 py-1 bg-accent-blue text-white rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-teal mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-white rounded-lg border-l-4 border-accent-pink">
                <p className="text-sm italic text-gray-700">
                  <strong>Insight:</strong> {project.insight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
