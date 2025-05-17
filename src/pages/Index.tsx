
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Productos de calidad para tu día a día
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Descubre nuestra colección de productos esenciales para el hogar, diseñados para simplificar tu rutina diaria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-teal hover:bg-teal-dark text-white px-8 py-6">
                  Comprar ahora
                </Button>
                <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white px-8 py-6">
                  Ver ofertas
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-coral-light rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cream rounded-full"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Essential home products" 
                  className="relative z-10 rounded-lg h-80 w-80 object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías destacadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/products?category=kitchen" className="group">
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-teal hover:text-white transition-colors">
                <img 
                  src="/placeholder.svg" 
                  alt="Kitchen" 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" 
                />
                <h3 className="font-medium">Cocina</h3>
              </div>
            </Link>
            <Link to="/products?category=bathroom" className="group">
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-teal hover:text-white transition-colors">
                <img 
                  src="/placeholder.svg" 
                  alt="Bathroom" 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" 
                />
                <h3 className="font-medium">Baño</h3>
              </div>
            </Link>
            <Link to="/products?category=cleaning" className="group">
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-teal hover:text-white transition-colors">
                <img 
                  src="/placeholder.svg" 
                  alt="Cleaning" 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" 
                />
                <h3 className="font-medium">Limpieza</h3>
              </div>
            </Link>
            <Link to="/products?category=electronics" className="group">
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-teal hover:text-white transition-colors">
                <img 
                  src="/placeholder.svg" 
                  alt="Electronics" 
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" 
                />
                <h3 className="font-medium">Electrónica</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Productos destacados</h2>
            <Link to="/products" className="text-teal hover:text-teal-dark flex items-center">
              Ver todos
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {filteredProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-teal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Oferta especial</h2>
              <p className="mb-6 text-lg">
                20% de descuento en todos los productos ecológicos. ¡Por tiempo limitado!
              </p>
              <Button className="bg-white text-teal hover:bg-cream">
                Ver oferta
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 p-8 rounded-lg backdrop-blur-sm">
                <img 
                  src="/placeholder.svg" 
                  alt="Special offer" 
                  className="w-full h-64 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">María García</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Los productos son de excelente calidad y el envío fue muy rápido. Definitivamente volveré a comprar."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Carlos Rodríguez</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Me encanta la variedad de productos eco-friendly. El servicio al cliente también es excepcional."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Ana Martínez</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-300">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Buenos productos a precios razonables. Solo quité una estrella porque el envío tardó un poco más de lo esperado."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
            <p className="text-gray-600 mb-6">
              Recibe las últimas novedades y ofertas exclusivas directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Introduce tu email"
                className="flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <Button className="bg-teal hover:bg-teal-dark text-white">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
