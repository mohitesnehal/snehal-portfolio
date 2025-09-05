import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(30, 42, 120, 0.8), rgba(46, 196, 182, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-glow"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Snehal
            <span className="block text-white">Mohite</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-secondary-glow font-medium">
            Full-Stack & Cloud-Native Developer
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            M.Sc. Computer Applications student passionate about building scalable web applications 
            with modern technologies and cloud solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="hover-lift font-semibold"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect text-white border-white/30 hover:bg-white/20 hover-lift"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/snehal-mohite-44b592289" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-secondary transition-colors duration-300 hover-lift"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-secondary transition-colors duration-300 hover-lift"
            >
              <Github size={28} />
            </a>
            <a 
              href="mailto:snehalmohite886@gmail.com"
              className="text-white/70 hover:text-secondary transition-colors duration-300 hover-lift"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-white/70 hover:text-secondary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;