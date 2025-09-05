import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "M.Sc. Computer Applications",
      institution: "Fergusson College",
      location: "Pune, Maharashtra",
      duration: "2023 - 2025",
      cgpa: "8.73",
      highlights: [
        "Specialized in Advanced Software Development",
        "Cloud Computing and Distributed Systems",
        "Database Management and Optimization",
        "Web Technologies and Modern Frameworks"
      ]
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "Fergusson College", 
      location: "Pune, Maharashtra",
      duration: "2020 - 2023",
      cgpa: "9.15",
      highlights: [
        "First Class with Distinction",
        "Strong Foundation in Programming",
        "Data Structures and Algorithms",
        "Software Engineering Principles"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and applications.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="card-gradient p-8 rounded-xl hover-lift border-l-4 border-secondary"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-secondary bg-secondary/10 p-3 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-secondary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {edu.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li 
                        key={hIndex}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 glass-effect rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">9.15</div>
              <div className="text-sm text-muted-foreground">B.Sc. CGPA</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">8.73</div>
              <div className="text-sm text-muted-foreground">M.Sc. CGPA</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years of Study</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;