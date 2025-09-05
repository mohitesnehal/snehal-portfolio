import { useState } from 'react';
import { 
  Code, 
  Layers, 
  Cloud, 
  Settings, 
  Database, 
  Smartphone,
  GitBranch,
  Terminal
} from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "SQL", level: 85 }
      ]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "Express.js", level: 80 }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: "AWS Lambda", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 85 },
        { name: "Serverless", level: 75 }
      ]
    },
    tools: {
      title: "Tools & Databases",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Postman", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-secondary text-white shadow-lg'
                  : 'glass-effect hover:bg-secondary/20'
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="space-y-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Database className="w-8 h-8" />, name: "Databases" },
              { icon: <Smartphone className="w-8 h-8" />, name: "Mobile-First" },
              { icon: <GitBranch className="w-8 h-8" />, name: "Version Control" },
              { icon: <Terminal className="w-8 h-8" />, name: "CLI Tools" }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 glass-effect rounded-lg hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary">
                  {tech.icon}
                </div>
                <span className="text-sm text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;