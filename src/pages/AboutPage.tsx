
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Sobre Nosotros</h1>
        
        <div className="mb-12 text-center">
          <img 
            src="/placeholder.svg" 
            alt="Our team" 
            className="w-full h-64 object-cover rounded-lg mb-6" 
          />
          <p className="text-lg text-gray-600">
            DiarioShop nació con una misión clara: proporcionar productos de uso diario excepcionales que mejoren tu calidad de vida mientras cuidan el planeta.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-teal">Nuestra Misión</h2>
            <p className="text-gray-600">
              Ofrecemos productos de uso diario de alta calidad, sostenibles y a precios accesibles para todos. Creemos que los pequeños cambios en nuestros hábitos diarios pueden generar un gran impacto en nuestro bienestar y en el medio ambiente.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-teal">Nuestros Valores</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Calidad en cada producto</li>
              <li>• Sostenibilidad y respeto al medio ambiente</li>
              <li>• Transparencia con nuestros clientes</li>
              <li>• Precios justos</li>
              <li>• Excelencia en servicio al cliente</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            DiarioShop fue fundada en 2020 por un grupo de amigos que compartían la visión de cambiar la forma en que consumimos productos cotidianos. Frustrados por la falta de opciones sostenibles y de calidad, decidimos crear nuestra propia tienda online.
          </p>
          <p className="text-gray-600 mb-4">
            Comenzamos con una pequeña selección de productos para el hogar y, gracias a nuestros fieles clientes, hemos podido crecer y expandir nuestra oferta a múltiples categorías, siempre manteniendo nuestro compromiso con la calidad y la sostenibilidad.
          </p>
          <p className="text-gray-600">
            Hoy, estamos orgullosos de servir a miles de clientes en todo el país, ofreciendo productos que no solo son útiles y duraderos, sino que también contribuyen a un estilo de vida más consciente y responsable.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nuestro Equipo</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <h3 className="font-medium">Nombre Apellido</h3>
                <p className="text-sm text-gray-600">Cargo</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-cream p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres formar parte de nuestro equipo?</h2>
          <p className="text-gray-600 mb-6">
            Siempre estamos buscando personas talentosas y apasionadas que compartan nuestros valores y quieran contribuir a nuestra misión.
          </p>
          <Button className="bg-teal hover:bg-teal-dark text-white">
            Ver oportunidades
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
