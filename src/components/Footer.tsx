
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DiarioShop</h3>
            <p className="text-gray-600 mb-4">
              Tu tienda online para productos de uso diario de alta calidad.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-teal">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-600 hover:text-teal">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-teal">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=kitchen" className="text-gray-600 hover:text-teal">
                  Cocina
                </Link>
              </li>
              <li>
                <Link to="/products?category=bathroom" className="text-gray-600 hover:text-teal">
                  Baño
                </Link>
              </li>
              <li>
                <Link to="/products?category=cleaning" className="text-gray-600 hover:text-teal">
                  Limpieza
                </Link>
              </li>
              <li>
                <Link to="/products?category=household" className="text-gray-600 hover:text-teal">
                  Hogar
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email: info@diarioshop.com
              </li>
              <li className="text-gray-600">
                Teléfono: +34 123 456 789
              </li>
              <li className="text-gray-600">
                Dirección: Calle Principal 123, Madrid
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DiarioShop. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-600 text-sm hover:text-teal">
                Política de privacidad
              </Link>
              <Link to="/terms" className="text-gray-600 text-sm hover:text-teal">
                Términos de servicio
              </Link>
              <Link to="/shipping" className="text-gray-600 text-sm hover:text-teal">
                Envíos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
