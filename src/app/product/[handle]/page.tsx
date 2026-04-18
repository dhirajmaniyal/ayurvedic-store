'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Minus, Plus, Star, ShoppingBag, Heart, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { getProductByHandle, getProducts, formatPrice } from '@/lib/shopify';
import { ShopifyProduct } from '@/types';

export default function ProductPage() {
  const params = useParams();
  const handle = params?.handle as string;

  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const { addItem } = useCart();

  useEffect(() => {
    async function fetchData() {
      if (!handle) return;
      setLoading(true);
      try {
        const [productData, allProducts] = await Promise.all([
          getProductByHandle(handle),
          getProducts(6),
        ]);
        setProduct(productData as ShopifyProduct);
        setRelatedProducts(allProducts as ShopifyProduct[]);
        
        if (productData) {
          const prod = productData as ShopifyProduct;
          const defaultOptions: Record<string, string> = {};
          prod.options?.forEach((option) => {
            defaultOptions[option.name] = option.values[0];
          });
          setSelectedOptions(defaultOptions);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product) return;
    const variant = product.variants.edges[0]?.node;
    const image = product.images.edges[0]?.node;
    
    if (variant) {
      addItem({
        variantId: variant.id,
        productId: product.id,
        title: product.title,
        variantTitle: variant.title,
        image: image?.url || '',
        price: parseFloat(variant.price.amount),
        quantity,
        handle: product.handle,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-32 mb-8" />
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-square bg-gray-200 rounded-2xl" />
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4" />
                <div className="h-6 bg-gray-200 rounded w-1/4" />
                <div className="h-24 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-text-primary mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-primary hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = product.images.edges.map((edge) => edge.node);
  const price = product.priceRange.minVariantPrice;
  const variant = product.variants.edges[0]?.node;

  const benefits = [
    '100% Natural Ingredients',
    'GMP Certified Manufacturing',
    'No Side Effects',
    'Ayush Ministry Approved',
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-body text-text-secondary mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronLeft className="w-4 h-4 rotate-180" />
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <ChevronLeft className="w-4 h-4 rotate-180" />
          <span className="text-text-primary">{product.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-card">
              {images[selectedImage] ? (
                <Image
                  src={images[selectedImage].url}
                  alt={images[selectedImage].altText || product.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <Image src={image.url} alt={image.altText || ''} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-body rounded-full mb-4">
              {product.productType || 'Ayurvedic Medicine'}
            </span>
            
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="font-body text-text-secondary">(24 reviews)</span>
            </div>

            <p className="font-body text-3xl font-bold text-primary mb-6">
              {formatPrice(price.amount, price.currencyCode)}
            </p>

            <div className="prose prose-sm font-body text-text-secondary mb-8" 
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml || product.description }} 
            />

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 font-body text-sm">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-body">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              
              <button className="p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto text-primary mb-1" />
                <span className="text-xs font-body text-text-secondary">Free Shipping</span>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto text-primary mb-1" />
                <span className="text-xs font-body text-text-secondary">GMP Certified</span>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto text-primary mb-1" />
                <span className="text-xs font-body text-text-secondary">Easy Returns</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-xs text-text-secondary font-body bg-yellow-50 p-3 rounded-lg">
              <strong>Disclaimer:</strong> This product is not intended to diagnose, treat, cure, 
              or prevent any disease. Individual results may vary. Please consult your healthcare 
              provider before use, especially if you are pregnant, nursing, or on medication.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card">
            <h2 className="font-heading text-2xl font-bold mb-6">Product Details</h2>
            <div className="prose max-w-none font-body text-text-secondary" 
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml || product.description }} 
            />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}