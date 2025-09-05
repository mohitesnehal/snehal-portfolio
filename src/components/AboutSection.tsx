import { Code, Cloud, Database, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "React, Vue.js, Node.js, Java, Spring Boot"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Technologies",
      description: "AWS Lambda, Serverless Architecture"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "MySQL, MongoDB, SQL optimization"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Modern Web Apps",
      description: "Responsive design, API integration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate M.Sc. Computer Applications student from Pune, Maharashtra, 
            with expertise in full-stack development and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Profile Summary
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a dedicated computer applications student, I specialize in building 
              modern web applications using cutting-edge technologies. My experience 
              ranges from frontend technologies like HTML, CSS, JavaScript, React and Vue.js 
              to backend technologies including Node.js and Java Spring Boot.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm particularly passionate about cloud-native development and have 
              hands-on experience with AWS Lambda and serverless architectures, 
              allowing me to build scalable and efficient applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="card-gradient p-6 rounded-xl hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary mb-4">
                  {skill.icon}
                </div>
                <h4 className="font-semibold mb-2 text-foreground">
                  {skill.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;