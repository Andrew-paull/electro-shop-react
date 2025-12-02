import { Link } from 'react-router-dom';
import { Zap, Users, Award, Globe, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '500+', label: 'Products' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '100+', label: 'Brands' },
    { value: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We bring you the latest and most innovative tech products from around the world.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide exceptional service at every step.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We only offer authentic products from trusted brands with full warranty.',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making premium technology accessible to everyone, everywhere.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-6">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Bringing the Future of
            <span className="block gradient-text">Tech to You</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Since 2020, TechStore has been your trusted destination for premium 
            electronics and cutting-edge gadgets. We're passionate about technology 
            and committed to making it accessible to everyone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TechStore was founded with a simple mission: to make premium 
                  technology accessible to everyone. What started as a small 
                  online shop has grown into a trusted destination for tech 
                  enthusiasts worldwide.
                </p>
                <p>
                  We carefully curate our product selection, partnering only 
                  with reputable brands and manufacturers. Every product in 
                  our store is authentic, comes with full warranty, and is 
                  backed by our dedicated customer support team.
                </p>
                <p>
                  Today, we serve over 50,000 happy customers and continue 
                  to grow, driven by our passion for innovation and commitment 
                  to exceptional service.
                </p>
              </div>
              <Link to="/products" className="btn-primary inline-flex items-center gap-2 mt-8">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
                alt="Our workspace"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The people behind TechStore
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 text-center group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-border group-hover:border-primary transition-colors"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Explore?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Discover our collection of premium electronics and find the 
            perfect tech for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
