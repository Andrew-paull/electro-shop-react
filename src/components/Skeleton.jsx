const Skeleton = ({ variant = 'default', className = '' }) => {
  const variants = {
    default: 'h-4 w-full',
    product: (
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
    ),
    category: (
      <div className="glass-card p-6 text-center">
        <div className="skeleton w-16 h-16 rounded-full mx-auto mb-4" />
        <div className="skeleton h-5 w-24 mx-auto mb-2" />
        <div className="skeleton h-4 w-16 mx-auto" />
      </div>
    ),
    text: <div className={`skeleton ${className}`} />,
  };

  if (variant === 'product' || variant === 'category') {
    return variants[variant];
  }

  return <div className={`skeleton ${variants[variant]} ${className}`} />;
};

export default Skeleton;
