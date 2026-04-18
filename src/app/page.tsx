import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Leaf, Heart, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
import { getProducts } from '@/lib/shopify';
import { Category, Testimonial } from '@/types';

const categories: Category[] = [
  {
    name: 'Immunity',
    slug: 'immunity',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&h=400&fit=crop',
    description: 'Boost your natural defenses',
  },
  {
    name: 'Digestion',
    slug: 'digestion',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    description: 'Support healthy digestion',
  },
  {
    name: 'Skin Care',
    slug: 'skin',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=600&h=400&fit=crop',
    description: 'Natural skincare solutions',
  },
  {
    name: 'Stress Relief',
    slug: 'stress',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    description: 'Calm mind, healthy body',
  },
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'AyushVeda products have completely transformed my health. The immunity booster is amazing!',
    product: 'Immunity Plus',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Excellent quality Ayurvedic products. Highly recommended for natural healing.',
    product: 'Digestive Gold',
  },
  {
    id: '3',
    name: 'Anita Patel',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Been using their skin care range for 3 months. Natural glow is back!',
    product: 'Skin Radiance',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'GMP Certified',
    description: 'Manufactured under Good Manufacturing Practice standards',
  },
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Pure herbs and natural ingredients, no chemicals',
  },
  {
    icon: Heart,
    title: 'Ayush Registered',
    description: 'Approved by Ministry of AYUSH, Government of India',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'ISO 9001:2015 certified manufacturing facility',
  },
];

const faqs = [
  {
    question: 'Are your products safe for long-term use?',
    answer: 'Yes, our products are made from natural ingredients and are safe for long-term use when taken as directed. However, we recommend consulting your healthcare provider if you have any medical conditions.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Ayurvedic products work gradually. Most customers see improvements within 2-4 weeks of regular use. For best results, we recommend continuing for at least 3 months.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Shipping times vary by location. Contact us for specific shipping information to your country.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unopened products. If you are not satisfied with your purchase, please contact our customer support.',
  },
];

async function getFeaturedProducts() {
  try {
    const products = await getProducts(6);
    return products;
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=1920&h=1080&fit=crop"
            alt="Ayurvedic herbs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-body mb-6">
              🌿 Authentic Ayurvedic Medicines
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nature&apos;s Healing
              <br />
              <span className="text-secondary">For Modern Life</span>
            </h1>
            <p className="font-body text-lg text-white/90 mb-8 leading-relaxed">
              Discover the ancient wisdom of Ayurveda with our premium collection 
              of natural medicines, crafted for your holistic well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop">
                <Button size="lg" className="group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Shop by Category
            </h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              Explore our carefully curated categories designed for your specific wellness needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm font-body">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-6 md:p-8 bg-background rounded-2xl hover:shadow-card transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Featured Products
              </h2>
              <p className="font-body text-text-secondary max-w-xl">
                Our most popular Ayurvedic formulations, trusted by thousands
              </p>
            </div>
            <Link href="/shop">
              <Button variant="outline">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
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
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-body text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                Rooted in Ayurveda,
                <br />
                <span className="text-secondary">Backed by Science</span>
              </h2>
              <p className="font-body text-white/80 mb-6 leading-relaxed">
                At AyushVeda, we believe in the power of ancient Ayurvedic wisdom 
                combined with modern quality standards. Our products are crafted 
                using traditional formulations and premium quality herbs sourced 
                from trusted suppliers.
              </p>
              <p className="font-body text-white/80 mb-8 leading-relaxed">
                Every product undergoes rigorous quality checks and is manufactured 
                in our GMP-certified facility to ensure purity and potency.
              </p>
              <Link href="/about">
                <Button variant="secondary">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop"
                  alt="Ayurvedic manufacturing"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-text-primary p-6 rounded-2xl shadow-lg">
                <p className="font-heading text-4xl font-bold text-primary">15+</p>
                <p className="font-body text-sm text-text-secondary">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              Join thousands of satisfied customers who have experienced the power of Ayurveda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-text-secondary mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-sm text-text-secondary">
                      {testimonial.product}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-text-secondary">
              Got questions? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-background rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-heading text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-white transition-transform group-open:rotate-180">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-body text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to Start Your Ayurvedic Journey?
          </h2>
          <p className="font-body text-text-secondary mb-8 max-w-2xl mx-auto">
            Explore our collection of premium Ayurvedic products and experience 
            the natural way to wellness.
          </p>
          <Link href="/shop">
            <Button size="lg">
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}