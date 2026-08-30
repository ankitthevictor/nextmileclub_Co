import React from 'react';
import { InsightArticle } from '../types';
import { X, Clock, Calendar, User, Bookmark, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      id="article-reader-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl bg-[#f9f9f7] border border-[#141e13] shadow-2xl p-6 sm:p-12 max-h-[90vh] overflow-y-auto"
        style={{ borderRadius: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#5f5e5e] hover:text-[#141e13] hover:bg-[#eeeeec] transition-colors"
          aria-label="Close article modal"
        >
          <X size={20} />
        </button>

        {/* Top Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#5f5e5e] pb-4 mb-6 border-b border-[#e5e5e5]">
          <span className="text-[#3f4a3c] font-semibold">{article.number}</span>
          <span>•</span>
          <span className="uppercase">{article.category}</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} />
            {article.readTime}
          </span>
          <span>•</span>
          <span>{article.published}</span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1a1c1b] leading-[1.12] mb-4">
          {article.title}
        </h2>
        <p className="text-base sm:text-lg text-[#444842] font-sans leading-relaxed italic mb-8 pb-6 border-b border-[#e5e5e5]">
          {article.subtitle}
        </p>

        {/* Author Line */}
        <div className="flex items-center justify-between mb-8 p-4 bg-[#f2f0eb] border border-[#e5e5e5]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#141e13] text-[#fcfcfa] flex items-center justify-center font-serif text-base">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-sans font-semibold text-[#1a1c1b]">{article.author}</p>
              <p className="text-[10px] font-mono text-[#5f5e5e]">{article.authorRole}</p>
            </div>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#3f4a3c] border border-[#c4c8c0] px-2 py-1">
            VERIFIED MONOGRAPH
          </span>
        </div>

        {/* Full Essay Content */}
        <div className="space-y-6 text-base sm:text-lg font-sans text-[#2f3130] leading-[1.75]">
          <p className="font-serif text-xl sm:text-2xl text-[#1a1c1b] leading-relaxed border-l-2 border-[#3f4a3c] pl-4 italic">
            &ldquo;{article.excerpt}&rdquo;
          </p>

          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-6 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-mono text-[#5f5e5e]">
          <span>NEXT MILE CLUB ARCHIVE // KUMAON HIMALAYAS</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#141e13] text-[#fcfcfa] uppercase tracking-wider text-[11px]"
            style={{ borderRadius: 0 }}
          >
            Close Monograph
          </button>
        </div>
      </div>
    </div>
  );
};
