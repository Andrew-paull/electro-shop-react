import { Link } from 'react-router-dom';
import { 
  ArrowRight, Truck, Shield, Headphones, CreditCard, Zap, Star,
  Percent, Timer, TrendingUp, Quote, CheckCircle, Play
} from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import CategoryCard from '../components/CategoryCard';
import Banner from '../components/Banner';
import { products, categories } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const newArrivals = products.slice(0, 8);
  const trendingProducts = products.filter((p) => p.rating >= 4.8).slice(0, 4);
  const dealProducts = products.slice(5, 9);

  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100' },
    { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support' },
    { icon: CreditCard, title: 'Easy Returns', desc: '30-day return policy' },
  ];

  const brands = [
    { name: 'Apple', logo: '🍎' },
    { name: 'Samsung', logo: '📱' },
    { name: 'Sony', logo: '🎮' },
    { name: 'Microsoft', logo: '💻' },
    { name: 'Google', logo: '🔍' },
    { name: 'Dell', logo: '🖥️' },
    { name: 'LG', logo: '📺' },
    { name: 'Canon', logo: '📷' },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Tech Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      content: 'Absolutely love shopping at Techhy! Fast shipping and the products are always authentic. My go-to store for all tech needs.',
      rating: 5,
    },
    {
      name: 'James K.',
      role: 'Professional Photographer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      content: 'Got my Sony A7 IV from here. Great prices and excellent customer service. Highly recommend for camera gear!',
      rating: 5,
    },
    {
      name: 'Emily R.',
      role: 'Software Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      content: 'The MacBook Pro I ordered arrived perfectly packaged. Best online tech store I\'ve used. Will definitely buy again!',
      rating: 5,
    },
  ];

  const whyChooseUs = [
    { title: 'Authentic Products', desc: '100% genuine items from authorized dealers' },
    { title: 'Best Prices', desc: 'Competitive pricing with price match guarantee' },
    { title: 'Fast Delivery', desc: 'Same-day dispatch on orders before 2PM' },
    { title: 'Expert Support', desc: 'Tech experts ready to help 24/7' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 badge mb-6">
                <Zap className="w-4 h-4" />
                New Collection 2024
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display mb-6 leading-tight">
                The Future of
                <span className="block gradient-text">Tech is Here</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Discover the latest electronics and gadgets. Premium quality, 
                cutting-edge technology, and unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="btn-outline inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
                <div>
                  <p className="text-3xl font-bold gradient-text">500+</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">50K+</p>
                  <p className="text-sm text-muted-foreground">Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">4.9</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Star className="w-3 h-3 fill-warning text-warning" /> Rating
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
                  alt="Latest smartphone"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{feature.title}</p>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 via-transparent to-warning/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-14 h-14 rounded-2xl bg-destructive/20 flex items-center justify-center animate-pulse">
                <Percent className="w-7 h-7 text-destructive" />
              </div>
              <div>
                <h2 className="section-title mb-0">Flash Deals</h2>
                <p className="text-muted-foreground">Limited time offers - Don't miss out!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Timer className="w-5 h-5 text-warning" />
              <div className="flex gap-2">
                {['12', '34', '56'].map((time, i) => (
                  <div key={i} className="glass-card px-3 py-2 text-center min-w-[50px]">
                    <p className="text-xl font-bold gradient-text">{time}</p>
                    <p className="text-xs text-muted-foreground">
                      {['Hours', 'Mins', 'Secs'][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ProductGrid products={dealProducts} columns={4} />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              Browse our wide selection of electronics and gadgets
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle mb-0">
                Handpicked selection of our best sellers
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} columns={4} />
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-warning" />
              </div>
              <div>
                <h2 className="section-title mb-0">Trending Now</h2>
                <p className="text-muted-foreground">Most popular products this week</p>
              </div>
            </div>
            <Link
              to="/products?sort=rating"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0"
            >
              View All Trending
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductGrid products={trendingProducts} columns={4} />
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Banner
            title="New iPhone 15 Pro"
            subtitle="Experience the most powerful iPhone ever with revolutionary camera system and titanium design."
            buttonText="Pre-order Now"
            buttonLink="/products/1"
            image="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose Techhy?</h2>
              <p className="text-muted-foreground mb-8">
                We're committed to providing the best shopping experience with authentic 
                products, competitive prices, and exceptional service.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2 mt-8">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-8 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
                  alt="Tech workspace"
                  className="rounded-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 glass-card p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">50,000+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 md:py-20 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl font-semibold mb-2">Trusted by Leading Brands</h2>
            <p className="text-muted-foreground">Official authorized retailer</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <span className="text-4xl">{brand.logo}</span>
                <span className="text-sm font-medium">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Join thousands of satisfied customers worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="section-title">New Arrivals</h2>
              <p className="section-subtitle mb-0">
                Check out our latest products
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductGrid products={newArrivals} columns={4} />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200"
              alt="Tech showcase"
              className="w-full h-80 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <div className="text-center">
                <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform animate-glow">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </button>
                <h3 className="text-2xl md:text-3xl font-bold font-display mb-2">
                  Experience the Future
                </h3>
                <p className="text-muted-foreground">
                  Watch our latest product showcase
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 p-8 md:p-16 text-center">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
                Get 20% Off Your First Order
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and receive exclusive deals, 
                early access to new products, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field flex-1"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
