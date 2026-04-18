'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { getProducts, formatPrice } from '@/lib/shopify';
import { ShopifyProduct, Category } from '@/types';

const categories: Category[] = [
  { name: 'All Products', slug: 'all', image: '', description: '' },
  { name: 'Immunity', slug: 'immunity', image: '', description: 'Boost your natural defenses' },
  { name: 'Digestion', slug: 'digestion', image: '', description: 'Support healthy digestion' },
  { name: 'Skin Care', slug: 'skin', image: '', description: 'Natural skincare solutions' },
  { name: 'Stress Relief', slug: 'stress', image: '', description: 'Calm mind, healthy body' },
];

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹1000', min: 500, max: 1000 },
  { label: '₹1000 - ₹2000', min: 1000, max: 2000 },
  { label: 'Above ₹2000', min: 2000, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const data = await getProducts(20);
        setProducts(data as ShopifyProduct[]);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'all') {
      const productType = product.productType?.toLowerCase() || '';
      if (!productType.includes(selectedCategory)) return false;
    }

    const price = parseFloat(product.priceRange.minVariantPrice.amount);
    const range = priceRanges[selectedPriceRange];
    if (price < range.min || price > range.max) return false;

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
    const priceB = parseFloat(b.priceRange.minVariantPrice.amount);

    switch (sortBy) {
      case 'price-asc':
        return priceA - priceB;
      case 'price-desc':
        return priceB - priceA;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Shop
          </h1>
          <p className="font-body text-text-secondary">
            Explore our collection of premium Ayurvedic products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl p-6 shadow-card sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-body font-semibold text-sm text-text-secondary uppercase tracking-wider mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-body text-sm transition-colors ${
                        selectedCategory === cat.slug
                          ? 'bg-primary text-white'
                          : 'text-text-primary hover:bg-gray-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-body font-semibold text-sm text-text-secondary uppercase tracking-wider mb-3">
                  Price Range
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPriceRange(index)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-body text-sm transition-colors ${
                        selectedPriceRange === index
                          ? 'bg-primary text-white'
                          : 'text-text-primary hover:bg-gray-100'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Filter Bar */}
            <div className="flex items-center justify-between mb-6 gap-4">
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-card font-body text-sm"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>

              <p className="font-body text-sm text-text-secondary">
                {sortedProducts.length} products
              </p>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card animate-pulse">
                    <div className="aspect-[4/3] bg-gray-200" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-body text-text-secondary mb-4">No products found</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPriceRange(0);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card animate-pulse">
                <div className="aspect-[4/3] bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}