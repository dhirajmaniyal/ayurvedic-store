import type { Metadata } from 'next';
import { CartProvider } from '@/hooks/useCart';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import './globals.css';

export const metadata: Metadata = {
  title: 'AyushVeda | Premium Ayurvedic Medicines',
  description: 'Authentic Ayurvedic medicines and natural wellness products for a healthier life. Shop immunity boosters, digestive health, skin care, and stress relief products.',
  keywords: 'Ayurvedic medicine, natural health, herbal products, immunity, digestion, skin care, stress relief',
  openGraph: {
    title: 'AyushVeda | Premium Ayurvedic Medicines',
    description: 'Authentic Ayurvedic medicines and natural wellness products for a healthier life.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}