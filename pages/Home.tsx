
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Cpu, Globe } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { PostCard } from '../components/PostCard';

const Home: React.FC = () => {
  const featuredPosts = BLOG_POSTS.filter(p => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">
          <Globe className="w-4 h-4" />
          <span>Chào mừng tới blog cá nhân của tôi</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Kiến thức <span className="text-brand">Lập trình Mạng</span> & <span className="text-brand">Hệ thống</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Nơi chia sẻ kinh nghiệm chuyên sâu về Java, JavaScript và các giao thức mạng dành cho lập trình viên.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link to="/blog" className="px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors flex items-center gap-2">
            Khám phá Blog <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="px-6 py-3 border border-slate-300 dark:border-slate-700 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Về tôi
          </Link>
        </div>
      </section>

      {/* Topics Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Cpu />
          </div>
          <h3 className="text-xl font-bold mb-2">Java Mastery</h3>
          <p className="text-slate-500 text-sm">Học OOP, Multi-threading và tối ưu JVM một cách bài bản.</p>
        </div>
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Globe />
          </div>
          <h3 className="text-xl font-bold mb-2">Modern JS</h3>
          <p className="text-slate-500 text-sm">Xử lý bất đồng bộ, Node.js và xây dựng ứng dụng web hiệu năng cao.</p>
        </div>
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Network />
          </div>
          <h3 className="text-xl font-bold mb-2">Network Layer</h3>
          <p className="text-slate-500 text-sm">Khám phá TCP/IP, WebSocket và cơ chế bảo mật mạng HTTPS.</p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="text-brand" /> Bài viết nổi bật
          </h2>
          <Link to="/blog" className="text-brand font-medium hover:underline flex items-center gap-1">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

// Helper for icons used in JSX
const Network = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
  </svg>
);

export default Home;
