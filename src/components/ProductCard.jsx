import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/products/${product.id}`} className="product-card block">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500';
          }}
        />
        
        {/* Badge */}
        {product.featured && (
          <span className="absolute top-3 left-3 badge">Featured</span>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary flex items-center justify-center gap-2 py-2.5"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-muted-foreground">{product.brand}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{product.category}</span>
        </div>
        
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-warning text-warning" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">(128 reviews)</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">${product.price}</span>
          {product.inStock ? (
            <span className="badge-success text-xs">In Stock</span>
          ) : (
            <span className="text-xs text-destructive">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
