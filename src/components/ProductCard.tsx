// ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  color: string;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ color, children }) => {
  return (
    <div
      className={`${color} rounded-lg h-24 flex items-center justify-center transition-transform hover:scale-105`}
    >
      {children}
    </div>
  );
};

export default ProductCard;