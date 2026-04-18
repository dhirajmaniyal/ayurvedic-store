export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  tags: string[];
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: ProductVariant;
    }>;
  };
  options: ProductOption[];
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
  compareAtPrice: Money | null;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface CartItem {
  id: string;
  variantId: string;
  productId: string;
  title: string;
  variantTitle: string;
  image: string;
  price: number;
  quantity: number;
  handle: string;
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: {
    url: string;
    altText: string | null;
  } | null;
}

export interface BlogPost {
  id: string;
  handle: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  image: string;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}