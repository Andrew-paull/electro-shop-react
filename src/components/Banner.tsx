import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BannerProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary' | 'dark';
  image?: string;
}

const Banner = ({
  title,
  subtitle,
  buttonText = 'Shop Now',
  buttonLink = '/products',
  variant = 'primary',
  image,
}: BannerProps) => {
  const variants: Record<string, string> = {
    primary: 'bg-gradient-to-r from-primary/20 to-accent/20',
    secondary: 'bg-secondary',
    dark: 'bg-card',
  };

  return (
    <div className={`${variants[variant]} rounded-2xl overflow-hidden`}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg mb-6 max-w-md">
              {subtitle}
            </p>
          )}
          <Link to={buttonLink} className="btn-primary inline-flex items-center gap-2">
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        {image && (
          <div className="flex-1 p-8">
            <img
              src={image}
              alt={title}
              className="w-full max-w-sm mx-auto animate-float"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;