'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/shopify';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, isCartOpen, setIsCartOpen, clearCart } = useCart();

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      
      const data = await response.json();
      
      if (data.error) {
        alert(data.error);
        return;
      }
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Checkout failed. Please try again.');
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-heading text-xl font-semibold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart ({items.length})
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 font-body mb-4">Your cart is empty</p>
              <Link 
                href="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="text-primary hover:underline font-body"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl">
                  <div className="relative w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body font-semibold text-sm text-text-primary truncate">
                      {item.title}
                    </h4>
                    {item.variantTitle !== 'Default Title' && (
                      <p className="text-xs text-gray-500">{item.variantTitle}</p>
                    )}
                    <p className="font-body font-bold text-primary mt-1">
                      {formatPrice(item.price.toString())}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-body text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 hover:bg-gray-200 rounded self-start"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-body text-text-secondary">Subtotal</span>
              <span className="font-body font-bold text-lg">{formatPrice(total.toString())}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4 font-body">
              Shipping and taxes calculated at checkout
            </p>
            <div className="space-y-2">
              <Button onClick={handleCheckout} className="w-full">
                Proceed to Checkout
              </Button>
              <Link 
                href="/cart" 
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-primary hover:underline font-body text-sm"
              >
                View Full Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}