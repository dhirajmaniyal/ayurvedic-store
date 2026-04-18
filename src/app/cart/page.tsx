'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/shopify';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      
      const { url, error } = await response.json();
      
      if (error) {
        alert('Checkout is not available. Please configure Shopify API credentials to enable checkout.');
        return;
      }
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to create checkout. Please try again.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold text-text-primary mb-4">
            Your Cart is Empty
          </h1>
          <p className="font-body text-text-secondary mb-8">
            Looks like you haven&apos;t added any products to your cart yet.
          </p>
          <Link href="/shop">
            <Button size="lg">
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-card flex gap-4 md:gap-6"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/product/${item.handle}`}
                        className="font-heading text-lg font-semibold text-text-primary hover:text-primary line-clamp-1"
                      >
                        {item.title}
                      </Link>
                      {item.variantTitle !== 'Default Title' && (
                        <p className="font-body text-sm text-text-secondary mt-1">
                          {item.variantTitle}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-red-50 rounded-full transition-colors self-start"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>

                  <p className="font-body font-bold text-primary text-xl mt-2">
                    {formatPrice((item.price * item.quantity).toString())}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-body">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="font-body text-sm text-text-secondary">
                      {item.price >= 1000 ? 'Free Shipping' : '₹99 Shipping'}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-primary hover:underline font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-card sticky top-24">
              <h2 className="font-heading text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-body">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-text-primary">{formatPrice(total.toString())}</span>
                </div>
                <div className="flex justify-between font-body">
                  <span className="text-text-secondary">Shipping</span>
                  <span className="text-text-primary">
                    {total >= 1000 ? 'Free' : formatPrice('99')}
                  </span>
                </div>
                <div className="flex justify-between font-body">
                  <span className="text-text-secondary">Tax</span>
                  <span className="text-text-primary">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-body font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">
                    {formatPrice((total + (total >= 1000 ? 0 : 99)).toString())}
                  </span>
                </div>
              </div>

              <Button className="w-full mb-4" onClick={handleCheckout}>
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <div className="text-center">
                <p className="font-body text-xs text-text-secondary">
                  🔒 Secure checkout powered by Shopify
                </p>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="font-body text-sm text-text-secondary">
                  <strong>Free shipping</strong> on orders above ₹1000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}