
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const postIndex = BLOG_POSTS.findIndex(p => p.id === id);
  const post = BLOG_POSTS[postIndex];

  React.useEffect(() => {
    if (post) {
      document.title = `${post.title} | BBaoHG`;
    }
  }, [post]);

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

        {/* Content Rendering with basic markdown + code block support */}
        <div className="prose prose-slate dark:prose-invert max-w-none prose-lg">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4 space-y-1" {...props} />,
              li: ({ node, ...props }) => <li className="pl-1" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-brand/50 pl-4 italic text-slate-600 dark:text-slate-400 mb-4" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
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


