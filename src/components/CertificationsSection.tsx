import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "SQL (Advanced)",
      provider: "HackerRank",
      issueDate: "2024",
      description: "Advanced SQL certification covering complex queries, optimization, and database management.",
      skills: ["Complex Queries", "Database Design", "Performance Optimization", "Data Analysis"],
      badgeColor: "from-blue-500 to-blue-600",
      link: "https://www.hackerrank.com/certificates/iframe/742501469f4d"
    },
    {
      title: "JavaScript (Intermediate)",
      provider: "HackerRank", 
      issueDate: "2024",
      description: "Comprehensive JavaScript certification covering ES6+, asynchronous programming, and modern JS concepts.",
      skills: ["ES6+ Features", "Async Programming", "DOM Manipulation", "Modern JavaScript"],
      badgeColor: "from-yellow-500 to-orange-500",
      link: "https://www.hackerrank.com/certificates/iframe/2fa06bab40b5"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating my technical expertise and continuous learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="card-gradient p-8 rounded-xl hover-lift overflow-hidden relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center shadow-lg glow-effect`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                {/* Verification Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-secondary font-medium">
                    <span>{cert.provider}</span>
                    <span>•</span>
                    <span className="text-muted-foreground">{cert.issueDate}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 group-hover:bg-secondary group-hover:text-white"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 glass-effect rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;