
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card group">
      <Link to={`/products/${product.id}`}>
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-bold text-teal">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="w-full bg-teal hover:bg-teal-dark text-white"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
