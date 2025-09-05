import { ExternalLink, Github, Code, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "TalentSync Freelancing Platform",
      description: "A comprehensive freelancing platform connecting clients with skilled professionals, featuring project management, secure payments, and real-time communication.",
      tech: ["Java", "JSP", "MySQL", "Bootstrap"],
      icons: [<Code key="code" />, <Database key="db" />],
      features: ["User Authentication", "Project Management", "Payment Integration", "Real-time Chat"]
    },
    {
      title: "E-Learning Platform",
      description: "Modern educational platform built with MEAN stack, offering interactive courses, progress tracking, and collaborative learning features.",
      tech: ["MongoDB", "Express.js", "Angular", "Node.js"],
      icons: [<Code key="code" />, <Database key="db" />],
      features: ["Course Management", "Progress Tracking", "Interactive Quizzes", "Discussion Forums"]
    },
    {
      title: "Weather App",
      description: "Responsive weather application with real-time data, location-based forecasts, and beautiful UI animations for enhanced user experience.",
      tech: ["React.js", "API Integration", "CSS3", "JavaScript"],
      icons: [<Code key="code" />, <Cloud key="cloud" />],
      features: ["Real-time Weather", "Location Services", "5-Day Forecast", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills through innovative web applications and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group card-gradient p-6 rounded-xl hover-lift overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 text-secondary">
                  {project.icons}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 hover:bg-secondary hover:text-white"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="flex-1"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;