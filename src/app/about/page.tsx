import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Leaf, Award, Shield, Users, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About Us | AyushVeda',
  description: 'Learn about AyushVeda\'s journey in bringing authentic Ayurvedic medicines to the world.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=1920&h=600&fit=crop"
            alt="Ayurvedic herbs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Rooted in the ancient wisdom of Ayurveda, we are committed to bringing 
            nature&apos;s healing to modern lives.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-body text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-6">
                Bridging Ancient Wisdom with Modern Science
              </h2>
              <p className="font-body text-text-secondary mb-6 leading-relaxed">
                At AyushVeda, we believe that true wellness comes from harmony between 
                mind, body, and nature. Our journey began with a simple vision: to make 
                authentic Ayurvedic medicines accessible to everyone seeking natural healing.
              </p>
              <p className="font-body text-text-secondary mb-8 leading-relaxed">
                We partner with traditional Ayurvedic practitioners and combine their 
                deep knowledge with modern quality standards to create products that 
                are both authentic and reliable.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-card">
                  <p className="font-heading text-3xl font-bold text-primary">15+</p>
                  <p className="font-body text-sm text-text-secondary">Years of Experience</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-card">
                  <p className="font-heading text-3xl font-bold text-primary">50+</p>
                  <p className="font-body text-sm text-text-secondary">Products</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-card">
                  <p className="font-heading text-3xl font-bold text-primary">1L+</p>
                  <p className="font-body text-sm text-text-secondary">Happy Customers</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-card">
                  <p className="font-heading text-3xl font-bold text-primary">20+</p>
                  <p className="font-body text-sm text-text-secondary">Awards Won</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800&h=600&fit=crop"
                  alt="Ayurvedic products"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-2xl shadow-lg">
                <p className="font-heading text-white text-2xl font-bold">100%</p>
                <p className="font-body text-white/80 text-sm">Natural Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              These principles guide everything we do at AyushVeda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background rounded-2xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Natural & Pure</h3>
              <p className="font-body text-text-secondary">
                We use only the finest natural ingredients, sourced from trusted 
                organic farms and suppliers.
              </p>
            </div>

            <div className="text-center p-8 bg-background rounded-2xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="font-body text-text-secondary">
                Our GMP-certified facility ensures the highest quality standards 
                in every product we manufacture.
              </p>
            </div>

            <div className="text-center p-8 bg-background rounded-2xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Customer First</h3>
              <p className="font-body text-text-secondary">
                Your health and satisfaction are our top priorities. We are 
                always here to help you on your wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-secondary font-body text-sm uppercase tracking-wider">
                Manufacturing
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-6">
                World-Class Manufacturing Facility
              </h2>
              <p className="font-body text-text-secondary mb-6 leading-relaxed">
                Our state-of-the-art manufacturing facility is equipped with modern 
                technology while preserving traditional Ayurvedic preparation methods.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-body">GMP (Good Manufacturing Practice) Certified</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-body">ISO 9001:2015 Quality Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-body">Ayush Ministry Registration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-body">FSSAI Certified</span>
                </li>
              <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="font-body">Third-party Lab Testing</span>
                </li>
              </ul>
            </div>
            
            <div className="relative order-1 md:order-2">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop"
                  alt="Manufacturing facility"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Meet Our Experts
            </h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              Our team of Ayurvedic practitioners and scientists work together 
              to create the best products for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Dr. Rajesh Sharma"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold">Dr. Rajesh Sharma</h3>
              <p className="font-body text-primary">Chief Ayurvedic Officer</p>
              <p className="font-body text-sm text-text-secondary mt-2">
                25+ years experience in Ayurvedic medicine
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Dr. Priya Patel"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold">Dr. Priya Patel</h3>
              <p className="font-body text-primary">Head of R&D</p>
              <p className="font-body text-sm text-text-secondary mt-2">
                PhD in Herbal Pharmacology
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://randomuser.me/api/portraits/men/52.jpg"
                  alt="Dr. Amit Kumar"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold">Dr. Amit Kumar</h3>
              <p className="font-body text-primary">Quality Control Head</p>
              <p className="font-body text-sm text-text-secondary mt-2">
                Certified Quality Auditor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Natural Healing?
          </h2>
          <p className="font-body text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our collection of premium Ayurvedic products and start your 
            journey to better health today.
          </p>
          <Link href="/shop">
            <Button size="lg" variant="secondary">
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}