import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, ShoppingCart, Heart, Share2, Truck, Shield, 
  RotateCcw, ChevronLeft, Plus, Minus, Check 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/checkout');
  };

  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100' },
    { icon: Shield, title: '2 Year Warranty', desc: 'Full coverage' },
    { icon: RotateCcw, title: '30-Day Returns', desc: 'Hassle-free' },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-foreground">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>

        {/* Product Info */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className="glass-card p-4 md:p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-xl"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500';
              }}
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">{product.brand}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{product.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-warning text-warning'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">(128 reviews)</span>
              </div>

              <p className="text-3xl font-bold gradient-text">
                ${product.price.toLocaleString()}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.specs?.map((spec, index) => (
                  <span key={index} className="badge">
                    <Check className="w-3 h-3 mr-1" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            {product.inStock ? (
              <p className="flex items-center gap-2 text-success">
                <Check className="w-5 h-5" />
                In Stock - Ships within 24 hours
              </p>
            ) : (
              <p className="text-destructive">Out of Stock</p>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-secondary rounded-lg p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-primary transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-semibold text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-primary transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="btn-outline w-full disabled:opacity-50"
            >
              Buy Now
            </button>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t border-border">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="flex gap-4 border-b border-border mb-6">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium capitalize transition-colors relative ${
                  activeTab === tab
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="glass-card p-6">
            {activeTab === 'description' && (
              <div>
                <h3 className="font-semibold mb-4">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Experience cutting-edge technology with this premium product. 
                  Designed for professionals and enthusiasts alike, it combines 
                  exceptional performance with elegant design. Built with premium 
                  materials and backed by our comprehensive warranty.
                </p>
              </div>
            )}
            {activeTab === 'specifications' && (
              <div>
                <h3 className="font-semibold mb-4">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.specs?.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      <Check className="w-5 h-5 text-primary" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="font-semibold mb-4">Customer Reviews</h3>
                <p className="text-muted-foreground">
                  No reviews yet. Be the first to review this product!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="section-title">Related Products</h2>
            <p className="section-subtitle">You might also like</p>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
