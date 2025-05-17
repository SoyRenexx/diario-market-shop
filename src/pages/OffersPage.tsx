
import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { TagIcon } from 'lucide-react';

// For the sake of demonstration, let's say these products are on special offer
const discountedProducts = products.map(product => ({
  ...product,
  originalPrice: product.price,
  price: +(product.price * 0.8).toFixed(2), // 20% discount
  discountPercentage: 20
}));

const OffersPage: React.FC = () => {
  const [sortBy, setSortBy] = useState<'discount' | 'price'>('discount');

  const sortedProducts = [...discountedProducts].sort((a, b) => {
    if (sortBy === 'discount') {
      return b.discountPercentage - a.discountPercentage;
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Ofertas Especiales</h1>
        <p className="text-gray-600 mb-6">
          ¡Aprovecha nuestras promociones exclusivas por tiempo limitado!
        </p>
        
        <div className="bg-teal text-white p-6 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">20% de descuento en todos los productos</h2>
              <p>Válido hasta fin de mes. No acumulable con otras promociones.</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-white text-teal hover:bg-cream">
              Ver detalles
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-gray-700 font-medium">Ordenar por:</span>
          <Button 
            variant={sortBy === 'discount' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setSortBy('discount')}
            className={sortBy === 'discount' ? 'bg-teal' : ''}
          >
            Mayor descuento
          </Button>
          <Button 
            variant={sortBy === 'price' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setSortBy('price')}
            className={sortBy === 'price' ? 'bg-teal' : ''}
          >
            Menor precio
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <div key={product.id} className="relative">
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-coral text-white flex items-center gap-1">
                <TagIcon size={14} />
                {product.discountPercentage}% OFF
              </Badge>
            </div>
            <ProductCard product={product} />
            <div className="mt-2 text-center">
              <span className="line-through text-gray-500 mr-2">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="font-bold text-coral">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
