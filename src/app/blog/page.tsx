import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    slug: 'benefits-of-ashwagandha',
    title: 'Ashwagandha: The Ultimate Adaptogen for Stress Relief',
    excerpt: 'Discover the ancient wisdom behind this powerful herb and how it can help you manage stress, improve sleep, and boost overall wellness.',
    content: 'Ashwagandha, known as &quot;Indian Ginseng,&quot; has been used for centuries in Ayurvedic medicine...',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&h=500&fit=crop',
    category: 'Health Tips',
    author: 'Dr. Rajesh Sharma',
    date: '2024-01-15',
  },
  {
    id: '2',
    slug: 'ayurvedic-digestion-guide',
    title: 'Complete Guide to Ayurvedic Digestion',
    excerpt: 'Learn how to improve your digestive health using traditional Ayurvedic practices and natural remedies.',
    content: 'In Ayurveda, digestion is considered the foundation of health...',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=500&fit=crop',
    category: 'Ayurveda Guide',
    author: 'Dr. Priya Patel',
    date: '2024-01-10',
  },
  {
    id: '3',
    slug: 'boost-immunity-naturally',
    title: '5 Natural Ways to Boost Your Immune System',
    excerpt: 'Strengthen your body\'s natural defenses with these proven Ayurvedic immunity boosters.',
    content: 'A strong immune system is your best defense against illness...',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=500&fit=crop',
    category: 'Health Tips',
    author: 'Dr. Rajesh Sharma',
    date: '2024-01-05',
  },
  {
    id: '4',
    slug: 'skincare-ayurveda',
    title: 'Ayurvedic Secrets for Glowing Skin',
    excerpt: 'Unlock the ancient secrets to radiant, healthy skin through traditional Ayurvedic skincare routines.',
    content: 'Ayurveda offers a holistic approach to skincare that addresses the root cause...',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800&h=500&fit=crop',
    category: 'Product Info',
    author: 'Dr. Priya Patel',
    date: '2024-01-01',
  },
];

export const metadata = {
  title: 'Blog | AyushVeda',
  description: 'Explore our blog for the latest articles on Ayurvedic medicine, health tips, and wellness guides.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-secondary font-body text-sm uppercase tracking-wider">
            Our Blog
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-2 mb-4">
            Health & Wellness Blog
          </h1>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Explore articles on Ayurvedic medicine, health tips, and natural wellness 
            from our expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-body text-primary font-medium">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-heading text-xl font-semibold text-text-primary hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="font-body text-text-secondary text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-body text-white/80 mb-6 max-w-xl mx-auto">
            Get the latest Ayurvedic health tips, product updates, and exclusive offers 
            delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-white font-body font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}