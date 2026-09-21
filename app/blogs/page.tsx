// app/blogs/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, User, ArrowRight, Search } from "lucide-react";

const WP_API_URL = "https://cms.adshouz.com/wp-json/wp/v2";

interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    author?: Array<{ name: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    year: "numeric", month: "short", day: "numeric",
  });
}

function readingTime(excerpt: string) {
  const text = excerpt.replace(/<[^>]*>/g, "");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 40));
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").substring(0, 120).trim();
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────
function SkeletonCard({ featured = false }: { featured?: boolean }) {
  return (
    <div className={`bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden animate-pulse ${featured ? "lg:flex" : ""}`}>
      <div className={`bg-gray-200 dark:bg-white/[0.06] flex-shrink-0 ${featured ? "lg:w-[420px] h-56 lg:h-auto" : "h-48 sm:h-52"}`} />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-3 bg-gray-200 dark:bg-white/[0.06] rounded-full w-32" />
        <div className="h-4 bg-gray-200 dark:bg-white/[0.06] rounded-full w-full" />
        <div className="h-4 bg-gray-200 dark:bg-white/[0.06] rounded-full w-3/4" />
        <div className="h-3 bg-gray-200 dark:bg-white/[0.06] rounded-full w-full" />
        <div className="h-3 bg-gray-200 dark:bg-white/[0.06] rounded-full w-2/3" />
      </div>
    </div>
  );
}

// ─── Blog Card ────────────────────────────────────────────────────────────────
function BlogCard({ post, featured = false }: { post: WordPressPost; featured?: boolean }) {
  const img        = post._embedded?.["wp:featuredmedia"]?.[0];
  const author     = post._embedded?.author?.[0]?.name;
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];
  const excerpt    = stripHtml(post.excerpt.rendered);

  return (
    <Link
      href={`/${post.slug}`}
      className={`group block bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden hover:border-violet-400/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/8 transition-all duration-300 ${featured ? "lg:flex" : ""}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-gray-100 dark:bg-white/[0.04] flex-shrink-0 ${featured ? "lg:w-[420px] h-56 lg:h-auto" : "h-48 sm:h-52"}`}>
        {img?.source_url ? (
          <img
            src={img.source_url}
            alt={img.alt_text || post.title.rendered}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-100 dark:from-violet-900/30 to-purple-100 dark:to-purple-900/10">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-violet-500" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        {categories[0] && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center bg-violet-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
              {categories[0].name}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-5 flex flex-col ${featured ? "lg:p-7 justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 dark:text-white mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-violet-500 flex-shrink-0" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-violet-500 flex-shrink-0" />
            <span>{readingTime(post.excerpt.rendered)} min read</span>
          </div>
          {author && (
            <div className="flex items-center gap-1.5">
              <User className="w-3 h-3 text-violet-500 flex-shrink-0" />
              <span>{author}</span>
            </div>
          )}
        </div>

        <h2
          className={`font-black text-gray-900 dark:text-white leading-snug tracking-tight mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors ${featured ? "text-xl lg:text-2xl" : "text-base sm:text-lg"}`}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <p className={`text-gray-500 dark:text-white leading-relaxed ${featured ? "text-sm mb-5 line-clamp-3" : "text-xs mb-4 line-clamp-2"}`}>
          {excerpt}…
        </p>

        <div className="mt-auto flex items-center gap-1.5 text-violet-600 dark:text-violet-400 font-bold text-xs group-hover:gap-2.5 transition-all">
          Read Article
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BlogsPage() {
  const [posts, setPosts]           = useState<WordPressPost[]>([]);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const [postsRes, catsRes] = await Promise.all([
          fetch(`${WP_API_URL}/posts?per_page=100&_embed&orderby=date&order=desc`),
          fetch(`${WP_API_URL}/categories?per_page=50&hide_empty=true`),
        ]);

        const [postsData, catsData] = await Promise.all([
          postsRes.ok ? postsRes.json() : [],
          catsRes.ok  ? catsRes.json()  : [],
        ]);

        setPosts(postsData);
        setCategories(catsData);
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const featuredPost   = posts[0];
  const recentPosts    = posts.slice(1, 4);
  const remainingPosts = posts.slice(4);

  return (
    <div className="bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-white min-h-screen">

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-10 pb-14 overflow-hidden border-b border-gray-100 dark:border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle,#8B5CF6 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs mb-7 flex-wrap">
            <Link href="/" className="text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white" />
            <span className="text-gray-700 dark:text-white font-medium">Blog</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                Digital Marketing Insights · Updated Weekly
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 text-gray-900 dark:text-white">
              Learn From India&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Performance Marketing
              </span>{" "}
              Experts
            </h1>

            <p className="text-gray-500 dark:text-white text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              Actionable guides, campaign teardowns, and SEO strategies from our team of
              Google-certified specialists — written for Indian businesses ready to grow.
            </p>

            <div className="flex flex-wrap gap-5">
              {[
                { num: loading ? "..." : `${posts.length}+`, label: "Articles" },
                { num: loading ? "..." : categories.length > 0 ? `${categories.length}` : "8+", label: "Topics" },
                { num: "Weekly", label: "New Posts" },
              ].map(({ num, label }, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-lg font-black text-gray-900 dark:text-white">{num}</span>
                  <span className="text-xs text-gray-400 dark:text-white font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTENT ═══════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Loading skeletons */}
        {loading && (
          <div className="space-y-12">
            <SkeletonCard featured />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-5">
              <Search className="w-7 h-7 text-red-500" />
            </div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">Failed to load posts</h2>
            <p className="text-gray-500 dark:text-white text-sm mb-6 max-w-xs">
              Something went wrong. Please try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all"
            >
              Try Again
            </button>
          </div>
        )}

        {/* No posts */}
        {!loading && !error && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-5">
              <Search className="w-7 h-7 text-violet-500" />
            </div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">No posts yet</h2>
            <p className="text-gray-500 dark:text-white text-sm mb-6 max-w-xs">
              We&apos;re working on some great content. Check back soon!
            </p>
            <Link href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all">
              Back to Home
            </Link>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <>
            {/* Featured */}
            {featuredPost && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
                    Featured Post
                  </span>
                  <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.06]" />
                </div>
                <BlogCard post={featuredPost} featured />
              </div>
            )}

            {/* Category pills */}
            {categories.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-gray-500 dark:text-white uppercase tracking-widest">Browse by Topic</span>
                  <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.06]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <div key={cat.id}
                      className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-700 dark:text-white text-xs font-semibold px-3.5 py-2 rounded-full hover:bg-violet-500/10 hover:border-violet-500/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all cursor-default">
                      {cat.name}
                      <span className="text-gray-400 dark:text-white/60 text-[10px]">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent posts */}
            {recentPosts.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-white uppercase tracking-widest">Recent Articles</span>
                  <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.06]" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {recentPosts.map((post) => <BlogCard key={post.id} post={post} />)}
                </div>
              </div>
            )}

            {/* All posts */}
            {remainingPosts.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-white uppercase tracking-widest">All Articles</span>
                  <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.06]" />
                  <span className="text-xs text-gray-400 dark:text-white font-medium">{remainingPosts.length} posts</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {remainingPosts.map((post) => <BlogCard key={post.id} post={post} />)}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* ══ CTA STRIP ═════════════════════════════════════════════════════ */}
      <section className="border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-[#0F0F14] py-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-black text-gray-900 dark:text-white text-lg">Ready to put this into action?</p>
            <p className="text-gray-500 dark:text-white text-sm mt-1">
              Get a free audit from our team and see exactly where your business can grow.
            </p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-7 py-3.5 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-violet-500/25 text-sm group">
            Get Free Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
