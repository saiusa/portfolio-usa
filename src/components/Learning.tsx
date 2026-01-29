const learningAreas = [
  {
    title: "Advanced UX research methods",
    detail: "Usability testing, A/B testing",
    icon: "🔍"
  },
  {
    title: "Accessibility",
    detail: "WCAG guidelines, inclusive design",
    icon: "♿"
  },
  {
    title: "Motion design for UI",
    detail: "Micro-interactions",
    icon: "✨"
  },
  {
    title: "Design systems",
    detail: "Scalability & component libraries",
    icon: "🎨"
  },
  {
    title: "Frontend collaboration",
    detail: "HTML/CSS awareness",
    icon: "💻"
  }
];

export default function Learning() {
  return (
    <section id="learning" className="py-20 px-4 bg-beige relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent-pink rounded-full floating-icon opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent-blue rounded-full floating-icon opacity-30" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Currently Learning</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto italic">
            {`"I believe great design is a continuous process of learning, testing, and refining."`}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {learningAreas.map((area, index) => (
            <div 
              key={index}
              className="decorative-frame bg-white p-6 hover:transform hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center flex-shrink-0 text-2xl">
                  {area.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="decorative-frame bg-gradient-to-r from-accent-pink to-accent-blue p-8 text-white text-center">
          <p className="text-xl md:text-2xl font-bold mb-2">
            💡 Open to opportunities
          </p>
          <p className="text-sm md:text-base opacity-90">
            Where I can apply my skills and continue growing as a designer
          </p>
        </div>
      </div>
    </section>
  );
}
