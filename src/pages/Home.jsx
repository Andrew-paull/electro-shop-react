import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, CreditCard, Zap, Star } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import CategoryCard from '../components/CategoryCard';
import Banner from '../components/Banner';
import { products, categories } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const newArrivals = products.slice(0, 8);

  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100' },
    { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support' },
    { icon: CreditCard, title: 'Easy Returns', desc: '30-day return policy' },
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

      {/* Banner */}
      <section className="py-16 md:py-24">
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

      {/* CTA Section */}
      <section className="py-16 md:py-24">
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
