'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/shopify';
import { ShopifyProduct } from '@/types';

interface ProductCardProps {
  product: ShopifyProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  
  const image = product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;
  const variant = product.variants.edges[0]?.node;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (variant) {
      addItem({
        variantId: variant.id,
        productId: product.id,
        title: product.title,
        variantTitle: variant.title,
        image: image?.url || '',
        price: parseFloat(price.amount),
        quantity: 1,
        handle: product.handle,
      });
    }
  };

  return (
    <Link href={`/product/${product.handle}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {image ? (
            <Image
              src={image.url}
              alt={image.altText || product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-body text-primary font-medium">
              {product.productType || 'Ayurvedic'}
            </span>
          </div>
          <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">(24)</span>
          </div>
          
          <h3 className="font-heading text-lg font-semibold text-text-primary mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="font-body text-xl font-bold text-primary">
                {formatPrice(price.amount, price.currencyCode)}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}