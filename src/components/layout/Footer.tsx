import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🌿</span>
              </div>
              <span className="font-heading text-2xl font-bold">AyushVeda</span>
            </div>
            <p className="text-white/80 font-body text-sm mb-4">
              Authentic Ayurvedic medicines and natural wellness products for a healthier life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors font-body text-sm">Home</Link></li>
              <li><Link href="/shop" className="text-white/80 hover:text-white transition-colors font-body text-sm">Shop</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors font-body text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-white transition-colors font-body text-sm">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/shop?category=immunity" className="text-white/80 hover:text-white transition-colors font-body text-sm">Immunity Boosters</Link></li>
              <li><Link href="/shop?category=digestion" className="text-white/80 hover:text-white transition-colors font-body text-sm">Digestive Health</Link></li>
              <li><Link href="/shop?category=skin" className="text-white/80 hover:text-white transition-colors font-body text-sm">Skin Care</Link></li>
              <li><Link href="/shop?category=stress" className="text-white/80 hover:text-white transition-colors font-body text-sm">Stress Relief</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>123 Ayurvedic Lane, Wellness City, India</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>care@ayushveda.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 font-body text-sm">
              © {currentYear} AyushVeda. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <img src="https://img.shields.io/badge/GMP-Certified-green?style=flat-square" alt="GMP" className="h-8" />
              <img src="https://img.shields.io/badge/AYUSH-Registered-blue?style=flat-square" alt="AYUSH" className="h-8" />
              <img src="https://img.shields.io/badge/ISO-9001-yellow?style=flat-square" alt="ISO" className="h-8" />
            </div>
          </div>
          <p className="text-center text-white/50 text-xs mt-4 font-body">
            This product is not intended to diagnose, treat, cure or prevent any disease. 
            Individual results may vary. Please consult your healthcare provider before use.
          </p>
        </div>
      </div>
    </footer>
  );
}