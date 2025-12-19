
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const postIndex = BLOG_POSTS.findIndex(p => p.id === id);
  const post = BLOG_POSTS[postIndex];

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Opps! Bài viết không tồn tại.</h2>
        <button onClick={() => navigate('/blog')} className="text-brand hover:underline">
          Quay lại trang blog
        </button>
      </div>
    );
  }

  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-brand mb-8 transition-colors"
      >
        <ArrowLeft size={18} /> Quay lại danh sách
      </Link>

      <article>
        <header className="mb-10 space-y-4">
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="px-3 py-1 bg-brand/10 text-brand rounded-full">{post.category}</span>
            <div className="flex items-center gap-1 text-slate-500">
              <Calendar size={14} /> <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500">
              <Clock size={14} /> <span>{post.readTime} đọc</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Content Rendering Simulation */}
        <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
          {/* We use pre-defined simple markdown-like formatting for demonstration */}
          {post.content.split('\n').map((line, idx) => {
            if (line.startsWith('# ')) return <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>;
            if (line.startsWith('## ')) return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{line.replace('### ', '')}</h3>;
            if (line.startsWith('```')) return null; // Logic below handles code blocks
            if (line.trim() === '') return <br key={idx} />;
            
            // Simple logic for code blocks simulation in content
            if (post.content.includes('```')) {
              const codeBlocks = post.content.match(/```[\s\S]*?```/g);
              // This is a simplified display for this component context
            }

            return <p key={idx} className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">{line}</p>;
          })}
        </div>
      </article>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-6">
        {prevPost ? (
          <Link 
            to={`/blog/${prevPost.id}`}
            className="flex flex-col p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-brand transition-all flex-1 text-left group"
          >
            <span className="text-xs text-slate-500 mb-1 flex items-center gap-1">
              <ChevronLeft size={14} /> Bài trước
            </span>
            <span className="font-semibold group-hover:text-brand transition-colors line-clamp-1">{prevPost.title}</span>
          </Link>
        ) : <div className="flex-1" />}

        {nextPost ? (
          <Link 
            to={`/blog/${nextPost.id}`}
            className="flex flex-col p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-brand transition-all flex-1 text-right group"
          >
            <span className="text-xs text-slate-500 mb-1 flex items-center justify-end gap-1">
              Bài tiếp theo <ChevronRight size={14} />
            </span>
            <span className="font-semibold group-hover:text-brand transition-colors line-clamp-1">{nextPost.title}</span>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
};

export default BlogPost;
