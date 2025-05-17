
import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Tu carrito está vacío</h2>
        <p className="text-muted-foreground text-center mb-4">
          Parece que aún no has añadido ningún producto a tu carrito
        </p>
        <Button className="bg-teal hover:bg-teal-dark text-white">
          Empezar a comprar
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Tu Carrito ({cart.totalItems})</h2>
        <Button variant="ghost" size="sm" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>

      <div className="flex-grow overflow-y-auto">
        {cart.items.map((item) => (
          <div key={item.product.id} className="py-4">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded overflow-hidden flex-shrink-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium line-clamp-1">{item.product.name}</h3>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  ${item.product.price.toFixed(2)}
                </p>
                <div className="flex items-center border rounded-md w-fit">
                  <button
                    className="px-2 py-1 text-gray-600 hover:text-teal"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-3 py-1 text-sm">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-gray-600 hover:text-teal"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <Separator className="mt-4" />
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal:</span>
          <span>${cart.totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Envío:</span>
          <span>Calculado en el checkout</span>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <span>Total:</span>
          <span>${cart.totalPrice.toFixed(2)}</span>
        </div>
        <Button className="w-full bg-teal hover:bg-teal-dark text-white">
          Proceder al pago
        </Button>
        <Button variant="outline" className="w-full">
          Seguir comprando
        </Button>
      </div>
    </div>
  );
};

export default Cart;
