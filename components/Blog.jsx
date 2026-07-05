import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { BLOG_POSTS } from '../lib/blogdata';

const MotionLink = motion.create(Link);

export default function BlogHub() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic Matrix
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeFilter === 'All' || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Industries', 'Equipment', 'Expertise'];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col justify-between pt-24 pb-16">
      
      {/* Background Ambience Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Hub Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase">
            <BookOpen className="h-3.5 w-3.5" /> Technical Knowledge Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-card-foreground">
            Thermovap Engineering Insights
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A comprehensive engineering matrix clarifying thermodynamic calculations, operational principles, and specific application methodologies across industrial boundaries.
          </p>
        </div>

        {/* Live Filter Controls & Search Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-10">
          {/* Category Pill Switcher */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === cat
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Search Field */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search technical profiles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-xl text-xs font-medium placeholder-muted-foreground focus:outline-hidden focus:border-primary transition-colors text-foreground"
            />
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const IconComp = post.icon;
              return (
                <MotionLink
                  key={post.id}
                  to={post.href}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors shadow-xs cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <IconComp className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase bg-secondary/60 px-2.5 py-1 rounded-md">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {post.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-border/40 flex items-center justify-between text-[11px] font-bold text-primary">
                    <span>Explore Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </MotionLink>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-card/40">
            <Layers className="h-8 w-8 text-muted-foreground/60 mx-auto mb-3" />
            <p className="text-xs font-bold text-muted-foreground">No engineering profiles found matching current criteria.</p>
          </div>
        )}

      </div>

      
    </div>
  );
}