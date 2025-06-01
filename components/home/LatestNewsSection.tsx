import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const newsItems = [
  {
    id: 1,
    title: 'Understanding and Managing Lower Back Pain',
    excerpt: 'Lower back pain affects millions of people worldwide. Learn about the causes, prevention strategies, and effective treatment options.',
    date: '12 Jun 2025',
    image: 'https://images.pexels.com/photos/4506106/pexels-photo-4506106.jpeg',
    category: 'Pain Management'
  },
  {
    id: 2,
    title: 'The Benefits of Hydrotherapy for Joint Conditions',
    excerpt: 'Discover how hydrotherapy can provide relief for various joint conditions, improve mobility, and enhance overall wellbeing.',
    date: '5 Jun 2025',
    image: 'https://images.pexels.com/photos/260367/pexels-photo-260367.jpeg',
    category: 'Treatment Techniques'
  },
  {
    id: 3,
    title: 'Physiotherapy Approaches for Post-COVID Recovery',
    excerpt: 'Exploring effective physiotherapy strategies to help patients recovering from COVID-19 regain strength and respiratory function.',
    date: '28 May 2025',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg',
    category: 'Rehabilitation'
  }
];

const LatestNewsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Insights & News</h2>
            <p className="text-muted-foreground">
              Stay informed with our latest articles, research updates, and clinic news
              on physiotherapy treatments and health management.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 border-chart-2 text-chart-2 hover:bg-chart-2 hover:text-white"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className="group bg-card rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <Link href={`/news/${item.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block py-1 px-3 bg-chart-2 text-white text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                
                <Link href={`/news/${item.id}`}>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-chart-2 transition-colors">
                    {item.title}
                  </h3>
                </Link>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {item.excerpt}
                </p>
                
                <Link 
                  href={`/news/${item.id}`}
                  className="text-chart-2 font-medium inline-flex items-center text-sm hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;