import { Building, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Saiya Software Pvt. Ltd.",
      position: "Software Development Intern",
      duration: "Feb 2025 - July 2025",
      achievements: [
        "Developed interactive Vue.js UI components for enhanced user experience",
        "Built robust Node.js APIs for seamless data management",
        "Deployed serverless functions using AWS Lambda for scalable solutions",
        "Collaborated with cross-functional teams on full-stack projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and technology innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-secondary rounded-full glow-effect"></div>
              
              <div className="card-gradient p-8 rounded-xl hover-lift ml-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-secondary">
                    <Building size={20} />
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium text-primary mb-4">
                  {exp.position}
                </h4>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;