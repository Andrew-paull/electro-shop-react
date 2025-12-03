import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Category } from '../data/products';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/products?category=${category.name}`}
      className="category-card group"
    >
      <div className="text-4xl mb-4 category-icon transition-all duration-300">
        {category.icon}
      </div>
      <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
      <p className="text-muted-foreground text-sm mb-3">
        {category.count} products
      </p>
      <div className="flex items-center justify-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm font-medium">Shop Now</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </Link>
  );
};

export default CategoryCard;