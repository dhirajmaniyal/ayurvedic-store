import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Share2 } from 'lucide-react';

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
}> = {
  'benefits-of-ashwagandha': {
    title: 'Ashwagandha: The Ultimate Adaptogen for Stress Relief',
    excerpt: 'Discover the ancient wisdom behind this powerful herb and how it can help you manage stress, improve sleep, and boost overall wellness.',
    content: `
Ashwagandha, known as &quot;Indian Ginseng,&quot; has been used for centuries in Ayurvedic medicine as a premier adaptogen - a natural substance that helps the body adapt to stress.

## What is Ashwagandha?

Ashwagandha (Withania somnifera) is one of the most powerful herbs in Ayurvedic medicine. Its name comes from Sanskrit, meaning &quot;smell of horse,&quot; reflecting its unique aroma and the strength it imparts.

## Health Benefits

### 1. Reduces Stress and Anxiety
Ashwagandha is perhaps best known for its stress-relieving properties. Studies show it can significantly reduce cortisol levels, the primary stress hormone.

### 2. Improves Sleep Quality
Many people use ashwagandha to promote better sleep. Its calming properties help quiet the mind and prepare the body for restful sleep.

### 3. Boosts Immunity
This powerful herb strengthens the immune system by increasing the activity of natural killer cells, which fight infection.

### 4. Enhances Focus and Concentration
Ashwagandha supports cognitive function, helping improve memory, focus, and mental clarity.

## How to Use Ashwagandha

Ashwagandha is available in various forms:
- **Powder**: Can be mixed with milk or honey
- **Capsules**: Convenient for daily supplementation
- **Extract**: Highly concentrated form

## Recommended Dosage

The typical dosage ranges from 300-600mg per day of standardized extract. Always consult with a healthcare provider before starting any new supplement.

## Precautions

While generally safe, ashwagandha should be avoided during pregnancy and breastfeeding. It may interact with certain medications, so consult your doctor if you are on any prescription drugs.

Experience the power of nature with our premium Ashwagandha supplement - crafted using traditional Ayurvedic methods combined with modern quality standards.
    `,
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=1200&h=600&fit=crop',
    category: 'Health Tips',
    author: 'Dr. Rajesh Sharma',
    date: '2024-01-15',
  },
  'ayurvedic-digestion-guide': {
    title: 'Complete Guide to Ayurvedic Digestion',
    excerpt: 'Learn how to improve your digestive health using traditional Ayurvedic practices and natural remedies.',
    content: 'In Ayurveda, digestion is considered the foundation of health...',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&h=600&fit=crop',
    category: 'Ayurveda Guide',
    author: 'Dr. Priya Patel',
    date: '2024-01-10',
  },
  'boost-immunity-naturally': {
    title: '5 Natural Ways to Boost Your Immune System',
    excerpt: 'Strengthen your body\'s natural defenses with these proven Ayurvedic immunity boosters.',
    content: 'A strong immune system is your best defense against illness...',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&h=600&fit=crop',
    category: 'Health Tips',
    author: 'Dr. Rajesh Sharma',
    date: '2024-01-05',
  },
  'skincare-ayurveda': {
    title: 'Ayurvedic Secrets for Glowing Skin',
    excerpt: 'Unlock the ancient secrets to radiant, healthy skin through traditional Ayurvedic skincare routines.',
    content: 'Ayurveda offers a holistic approach to skincare that addresses the root cause...',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=1200&h=600&fit=crop',
    category: 'Product Info',
    author: 'Dr. Priya Patel',
    date: '2024-01-01',
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) return { title: 'Blog Post Not Found' };
  
  return {
    title: `${post.title} | AyushVeda Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-text-primary mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 font-body"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-body rounded-full mb-4">
          {post.category}
        </span>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-text-secondary mb-8">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <button className="flex items-center gap-1 hover:text-primary">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none font-body text-text-secondary">
          {post.content.split('\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="font-heading text-2xl font-bold text-text-primary mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={i} className="font-heading text-xl font-semibold text-text-primary mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('- **')) {
              const match = paragraph.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
              if (match) {
                return (
                  <li key={i} className="ml-4">
                    <strong className="text-text-primary">{match[1]}</strong>{match[2]}
                  </li>
                );
              }
            }
            if (paragraph.startsWith('- ')) {
              return <li key={i} className="ml-4">{paragraph.replace('- ', '')}</li>;
            }
            if (paragraph.trim() === '') return null;
            return <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>;
          })}
        </div>

        <div className="mt-12 p-6 bg-yellow-50 rounded-xl">
          <p className="font-body text-sm text-text-secondary">
            <strong>Disclaimer:</strong> This content is for informational purposes only and is not intended 
            as medical advice. Always consult with a qualified healthcare provider before making any changes 
            to your health regimen.
          </p>
        </div>
      </article>
    </div>
  );
}