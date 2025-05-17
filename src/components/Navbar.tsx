
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, LogOut } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Cart from '@/components/Cart';

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-teal">
              DiarioShop
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-teal transition-colors">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-teal transition-colors">
              Productos
            </Link>
            <Link to="/offers" className="text-gray-600 hover:text-teal transition-colors">
              Ofertas
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-teal transition-colors">
              Nosotros
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center relative">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="px-4 py-2 pl-10 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {user && (
              <div className="hidden md:flex items-center">
                <span className="text-sm text-gray-600 mr-2">Hola, {user.name}</span>
                <Button variant="ghost" size="icon" onClick={handleLogout} title="Cerrar sesión">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cart.totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-coral text-white">
                      {cart.totalItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <Cart />
              </SheetContent>
            </Sheet>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex items-center relative mb-4">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="w-full px-4 py-2 pl-10 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-teal transition-colors" onClick={toggleMobileMenu}>
                Inicio
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-teal transition-colors" onClick={toggleMobileMenu}>
                Productos
              </Link>
              <Link to="/offers" className="text-gray-600 hover:text-teal transition-colors" onClick={toggleMobileMenu}>
                Ofertas
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-teal transition-colors" onClick={toggleMobileMenu}>
                Nosotros
              </Link>
              {user && (
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-gray-600">Hola, {user.name}</span>
                  <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center">
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar sesión
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
