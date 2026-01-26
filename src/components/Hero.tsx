import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-beige relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent-pink rounded-full floating-icon opacity-60"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-accent-yellow rounded-full floating-icon opacity-50" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent-teal rounded-full floating-icon opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 right-40 w-16 h-16 bg-accent-blue rounded-full floating-icon opacity-50" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center decorative-frame">
              <span className="text-2xl">🎨</span>
            </div>
            <span className="text-lg font-medium">sai.portfolio</span>
          </div>
          
          <p className="text-sm mb-2 text-gray-700">Hi, my name is Sai.</p>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            I DESIGN FOR{' '}
            <span className="relative">
              GROWTH.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C80 2 220 2 298 10" stroke="#F4C430" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md">
            I&apos;m a UI/UX designer passionate about turning user problems into simple, meaningful digital experiences.
          </p>
          
          <a 
            href="#projects" 
            className="inline-block px-8 py-4 bg-accent-yellow text-black rounded-full hover:bg-yellow-400 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start exploring
          </a>
        </div>
        
        {/* Right side - Photo with decorative elements */}
        <div className="relative">
          <div className="decorative-frame bg-accent-pink p-2 relative">
            <div className="relative w-full aspect-[3/4] bg-white rounded-2xl overflow-hidden">
              <Image 
                src="/images/grad-photo.jpg"
                alt="Sai - UI/UX Designer"
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
            
            {/* Available badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent-teal text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border-2 border-black">
              ✨ Available for Projects
            </div>
          </div>
          
          {/* Floating decorative icons */}
          <div className="absolute -top-8 -right-8 w-20 h-20 bg-accent-blue rounded-2xl decorative-frame flex items-center justify-center text-3xl floating-icon">
            🎯
          </div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-yellow rounded-full decorative-frame flex items-center justify-center text-2xl floating-icon" style={{animationDelay: '0.7s'}}>
            👁️
          </div>
          <div className="absolute top-1/2 -right-10 w-14 h-14 bg-white rounded-2xl decorative-frame flex items-center justify-center text-2xl floating-icon" style={{animationDelay: '1.2s'}}>
            📊
          </div>
        </div>
      </div>
    </section>
  );
}
