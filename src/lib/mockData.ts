import { ShopifyProduct } from '@/types';

export const mockProducts: ShopifyProduct[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'ashwagandha-capsules',
    title: 'Ashwagandha Capsules - Stress Relief',
    description: 'Premium quality Ashwagandha extract for stress relief, better sleep, and enhanced immunity. Made with 100% natural ingredients.',
    descriptionHtml: '<p>Premium quality Ashwagandha extract for stress relief, better sleep, and enhanced immunity. Made with 100% natural ingredients.</p>',
    vendor: 'AyushVeda',
    productType: 'Immunity',
    tags: ['ashwagandha', 'stress relief', 'immune support'],
    priceRange: {
      minVariantPrice: { amount: '599', currencyCode: 'INR' },
      maxVariantPrice: { amount: '799', currencyCode: 'INR' },
    },
    images: {
      edges: [
        { node: { url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&h=600&fit=crop', altText: 'Ashwagandha Capsules' } },
        { node: { url: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&h=600&fit=crop', altText: 'Ashwagandha Capsules' } },
      ],
    },
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/1', title: '60 Capsules', availableForSale: true, price: { amount: '599', currencyCode: 'INR' }, compareAtPrice: null, selectedOptions: [{ name: 'Size', value: '60 Capsules' }] } },
      ],
    },
    options: [{ id: '1', name: 'Size', values: ['60 Capsules'] }],
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'triphala-churna',
    title: 'Triphala Churna - Digestive Health',
    description: 'Traditional Triphala formulation for healthy digestion and detox. A blend of three powerful herbs.',
    descriptionHtml: '<p>Traditional Triphala formulation for healthy digestion and detox. A blend of three powerful herbs.</p>',
    vendor: 'AyushVeda',
    productType: 'Digestion',
    tags: ['triphala', 'digestive', 'detox'],
    priceRange: {
      minVariantPrice: { amount: '349', currencyCode: 'INR' },
      maxVariantPrice: { amount: '449', currencyCode: 'INR' },
    },
    images: {
      edges: [
        { node: { url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop', altText: 'Triphala Churna' } },
      ],
    },
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/2', title: '100g', availableForSale: true, price: { amount: '349', currencyCode: 'INR' }, compareAtPrice: null, selectedOptions: [{ name: 'Size', value: '100g' }] } },
      ],
    },
    options: [{ id: '1', name: 'Size', values: ['100g'] }],
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'neem-tulsi-juice',
    title: 'Neem Tulsi Juice - Immunity Booster',
    description: 'Pure neem and tulsi juice for detoxification and immune support. 100% natural and chemical-free.',
    descriptionHtml: '<p>Pure neem and tulsi juice for detoxification and immune support. 100% natural and chemical-free.</p>',
    vendor: 'AyushVeda',
    productType: 'Immunity',
    tags: ['neem', 'tulsi', 'immunity', 'detox'],
    priceRange: {
      minVariantPrice: { amount: '299', currencyCode: 'INR' },
      maxVariantPrice: { amount: '399', currencyCode: 'INR' },
    },
    images: {
      edges: [
        { node: { url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop', altText: 'Neem Tulsi Juice' } },
      ],
    },
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/3', title: '500ml', availableForSale: true, price: { amount: '299', currencyCode: 'INR' }, compareAtPrice: null, selectedOptions: [{ name: 'Size', value: '500ml' }] } },
      ],
    },
    options: [{ id: '1', name: 'Size', values: ['500ml'] }],
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'brahmi-capsules',
    title: 'Brahmi Capsules - Brain Support',
    description: 'Enhance memory, focus, and mental clarity with our premium Brahmi extract.',
    descriptionHtml: '<p>Enhance memory, focus, and mental clarity with our premium Brahmi extract.</p>',
    vendor: 'AyushVeda',
    productType: 'Stress Relief',
    tags: ['brahmi', 'brain', 'memory', 'focus'],
    priceRange: {
      minVariantPrice: { amount: '449', currencyCode: 'INR' },
      maxVariantPrice: { amount: '549', currencyCode: 'INR' },
    },
    images: {
      edges: [
        { node: { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop', altText: 'Brahmi Capsules' } },
      ],
    },
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/4', title: '60 Capsules', availableForSale: true, price: { amount: '449', currencyCode: 'INR' }, compareAtPrice: null, selectedOptions: [{ name: 'Size', value: '60 Capsules' }] } },
      ],
    },
    options: [{ id: '1', name: 'Size', values: ['60 Capsules'] }],
  },
  {
    id: 'gid://shopify/Product/5',
    handle: 'aloevera-gel',
    title: 'Aloevera Gel - Skin Care',
    description: 'Pure aloevera gel for healthy, glowing skin. No artificial colors or fragrances.',
    descriptionHtml: '<p>Pure aloevera gel for healthy, glowing skin. No artificial colors or fragrances.</p>',
    vendor: 'AyushVeda',
    productType: 'Skin',
    tags: ['aloevera', 'skin', 'moisturizer'],
    priceRange: {
      minVariantPrice: { amount: '249', currencyCode: 'INR' },
      maxVariantPrice: { amount: '349', currencyCode: 'INR' },
    },
    images: {
      edges: [
        { node: { url: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=600&h=600&fit=crop', altText: 'Aloevera Gel' } },
      ],
    },
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/5', title: '100g', availableForSale: true, price: { amount: '249', currencyCode: 'INR' }, compareAtPrice: null, selectedOptions: [{ name: 'Size', value: '100g' }] } },
      ],
    },
    options: [{ id: '1', name: 'Size', values: ['100g'] }],
  },
  {
    id: 'gid://shopify/Product/6',
    handle: 'chawanprash',
    title: 'Chawanprash - Daily Wellness',
    description: 'The traditional Ayurvedic immunity booster with 40+ herbs. Rich in Vitamin C.',
    descriptionHtml: '<p>The traditional Ayurvedic immunity booster with 40+ herbs. Rich in Vitamin C.</p>',
    vendor: 'AyushVeda',
    productType: 'Immunity',
    tags: ['chawanprash', 'immunity', 'wellness'],
    priceRange: {
      minVariantPrice: { amount: '399', currencyCode: 'INR' },
      maxVariantPrice: { amount: '699', currencyCode: 'INR' },
    },
    images: {
      edges: [
        { node: { url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&h=600&fit=crop', altText: 'Chawanprash' } },
      ],
    },
    variants: {
      edges: [
        { node: { id: 'gid://shopify/ProductVariant/6', title: '250g', availableForSale: true, price: { amount: '399', currencyCode: 'INR' }, compareAtPrice: null, selectedOptions: [{ name: 'Size', value: '250g' }] } },
        { node: { id: 'gid://shopify/ProductVariant/7', title: '500g', availableForSale: true, price: { amount: '699', currencyCode: 'INR' }, compareAtPrice: null, selectedOptions: [{ name: 'Size', value: '500g' }] } },
      ],
    },
    options: [{ id: '1', name: 'Size', values: ['250g', '500g'] }],
  },
];

export function getMockProducts(): ShopifyProduct[] {
  return mockProducts;
}

export function getMockProductByHandle(handle: string): ShopifyProduct | undefined {
  return mockProducts.find(p => p.handle === handle);
}