import { Link } from 'react-router-dom';
import { Zap, Users, Award, Globe, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [{ value: '500+', label: 'Products' }, { value: '50K+', label: 'Happy Customers' }, { value: '100+', label: 'Brands' }, { value: '24/7', label: 'Support' }];
  const values = [
    { icon: Zap, title: 'Innovation', description: 'We bring you the latest and most innovative tech products.' },
    { icon: Users, title: 'Customer First', description: 'Your satisfaction is our priority.' },
    { icon: Award, title: 'Quality', description: 'We only offer authentic products from trusted brands.' },
    { icon: Globe, title: 'Accessibility', description: 'Making premium technology accessible to everyone.' },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-6">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Bringing the Future of<span className="block gradient-text">Tech to You</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Since 2020, Techhy has been your trusted destination for premium electronics.</p>
        </div>
      </section>
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (<div key={index} className="text-center"><p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p><p className="text-muted-foreground">{stat.label}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-title">Our Values</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (<div key={index} className="glass-card-hover p-6 text-center"><div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><value.icon className="w-7 h-7 text-primary" /></div><h3 className="font-semibold text-lg mb-2">{value.title}</h3><p className="text-muted-foreground text-sm">{value.description}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Ready to Explore?</h2>
        <Link to="/products" className="btn-primary inline-flex items-center gap-2">Shop Now <ArrowRight className="w-5 h-5" /></Link>
      </section>
    </div>
  );
};

export default About;