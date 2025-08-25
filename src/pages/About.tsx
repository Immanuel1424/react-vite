import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react';
import aboutImage from '@/assets/about-illustration.jpg';

const About = () => {
  const technologies = [
    'React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 
    'React Router', 'Radix UI', 'ESLint', 'PostCSS'
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Performance First",
      description: "We prioritize speed and efficiency in every aspect of development, from build times to runtime performance."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Developer Experience", 
      description: "Creating tools and workflows that make developers more productive and happy to work with."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Staying ahead of the curve with the latest technologies and best practices in web development."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                About Our 
                <span className="text-primary block">Modern Stack</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We believe in building with the best tools available. Our carefully curated 
                technology stack combines performance, developer experience, and maintainability 
                to create exceptional web applications.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Production Ready
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Type Safe
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Optimized
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={aboutImage} 
                alt="Team collaboration illustration"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our stack is built on proven, modern technologies that ensure 
              scalability, maintainability, and exceptional performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {technologies.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-sm px-4 py-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up card-gradient"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Type Safe</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">⚡</div>
              <div className="text-muted-foreground">Lightning Fast</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">📱</div>
              <div className="text-muted-foreground">Mobile First</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">🚀</div>
              <div className="text-muted-foreground">Production Ready</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;