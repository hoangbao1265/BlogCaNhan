
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-light">
            {post.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Calendar size={12} />
            <span>{post.date}</span>
          </div>
        </div>
        
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Clock size={12} />
            <span>{post.readTime} đọc</span>
          </div>
          <Link 
            to={`/blog/${post.id}`}
            className="text-sm font-semibold text-brand hover:underline"
          >
            Đọc tiếp →
          </Link>
        </div>
      </div>
    </article>
  );
};
