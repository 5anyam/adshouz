// app/blogs/[slug]/page.tsx
import { Metadata } from "next";
import { Calendar, User, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/blog/share-button";

const WP_API_URL = "https://cms.rigvedaadds.com/wp-json/wp/v2";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    author?: Array<{ name: string }>;
  };
}

// ─── Data Fetchers ────────────────────────────────────────────────────────────
async function getAllPosts(): Promise<WordPressPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?per_page=100`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

async function getPost(slug: string): Promise<WordPressPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] || null;
  } catch {
    return null;
  }
}

// ─── Static Params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post Not Found" };

  const description = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .substring(0, 160);

  return {
    title: `${post.title.rendered} | Rigveda Ads Blog`,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [{ url: post._embedded["wp:featuredmedia"][0].source_url }]
        : [],
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function readingTime(content: string) {
  const text = content.replace(/<[^>]*>/g, "");
  return Math.ceil(text.split(/\s+/).length / 200);
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const featuredImg = post._embedded?.["wp:featuredmedia"]?.[0];
  const authorName  = post._embedded?.author?.[0]?.name;

  return (
    <div className="bg-white dark:bg-[#0B0B0F] min-h-screen text-gray-900 dark:text-white">

      {/* ── HERO / BREADCRUMB ───────────────────────────────────────── */}
      <section className="relative pt-10 pb-12 overflow-hidden border-b border-gray-100 dark:border-white/10">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs mb-6 flex-wrap">
            <Link href="/"
              className="text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white flex-shrink-0" />
            <Link href="/blogs"
              className="text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">
              Blogs
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white flex-shrink-0" />
            {/* ✅ solid white */}
            <span
              className="text-gray-700 dark:text-white truncate max-w-[200px] sm:max-w-xs font-medium"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </nav>

          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl lg:text-[40px] font-black leading-tight tracking-tight text-gray-900 dark:text-white mb-5"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta row — ✅ solid white */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 dark:text-white">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
              <span>{readingTime(post.content.rendered)} min read</span>
            </div>
            {authorName && (
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
                <span>By {authorName}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
      <section className="py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Back button — ✅ solid white */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>

          {/* Featured Image */}
          {featuredImg?.source_url && (
            <div className="relative w-full h-64 sm:h-80 lg:h-[440px] rounded-2xl overflow-hidden mb-10 border border-gray-200 dark:border-white/10">
              <Image
                src={featuredImg.source_url}
                alt={featuredImg.alt_text || post.title.rendered}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          {/* ✅ Article body — wp-content class (prose hataya) */}
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Footer actions */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <ShareButton title={post.title.rendered} />
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────────── */}
      <section className="py-12 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            {/* ✅ solid white */}
            <p className="font-black text-gray-900 dark:text-white text-lg">
              Ready to grow your business?
            </p>
            <p className="text-gray-500 dark:text-white text-sm mt-0.5">
              Get a free audit from our performance marketing team.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-6 py-3 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-violet-500/25 text-sm group"
          >
            Get Free Audit
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
