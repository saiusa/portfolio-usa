export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent-yellow rounded-lg flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold">Sai</h3>
            </div>
            <p className="text-gray-400">
              UI/UX Designer crafting meaningful digital experiences
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-gray-400 hover:text-accent-yellow transition-colors">Projects</a></li>
              <li><a href="#learning" className="text-gray-400 hover:text-accent-yellow transition-colors">Currently Learning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:sai@example.com" className="text-gray-400 hover:text-accent-yellow transition-colors">Email</a></li>
              <li><a href="https://linkedin.com" className="text-gray-400 hover:text-accent-yellow transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" className="text-gray-400 hover:text-accent-yellow transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sai. Designed with passion 💛</p>
        </div>
      </div>
    </footer>
  );
}
