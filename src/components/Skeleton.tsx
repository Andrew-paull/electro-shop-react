interface SkeletonProps {
  variant?: 'default' | 'product' | 'category' | 'text';
  className?: string;
}

const Skeleton = ({ variant = 'default', className = '' }: SkeletonProps) => {
  if (variant === 'product') {
    return (
      <div className="glass-card overflow-hidden">
        <div className="skeleton aspect-square" />
        <div className="p-4 space-y-3">
          <div className="skeleton h-3 w-1/3" />
          <div className="skeleton h-5 w-3/4" />
          <div className="skeleton h-4 w-1/2" />
          <div className="flex justify-between">
            <div className="skeleton h-6 w-20" />
            <div className="skeleton h-5 w-16" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'category') {
    return (
      <div className="glass-card p-6 text-center">
        <div className="skeleton w-16 h-16 rounded-full mx-auto mb-4" />
        <div className="skeleton h-5 w-24 mx-auto mb-2" />
        <div className="skeleton h-4 w-16 mx-auto" />
      </div>
    );
  }

  if (variant === 'text') {
    return <div className={`skeleton ${className}`} />;
  }

  return <div className={`skeleton h-4 w-full ${className}`} />;
};

export default Skeleton;