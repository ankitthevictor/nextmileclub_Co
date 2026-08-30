import React from 'react';
import { INSIGHTS_DATA } from '../data/retreatData';
import { InsightArticle } from '../types';
import { ArrowRight, Clock, Heart } from 'lucide-react';

interface InsightsViewProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ onSelectArticle }) => {
  return (
    <section id="insights-section" className="w-full py-20 md:py-28 bg-[#f9f9f7] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e5e5] gap-6">
          <div>
            <span className="text-[#3f4a3c] text-[11px] md:text-[12px] font-semibold tracking-[0.2em] uppercase font-mono mb-3 block">
              ESSAYS & REFLECTIONS
            </span>
            <h2 className="text-[#1a1c1b] font-serif text-[38px] sm:text-[46px] md:text-[50px] font-normal leading-[1.1] tracking-[-0.015em]">
              Stories & Perspectives
            </h2>
          </div>
          <p className="text-sm text-[#5f5e5e] font-mono max-w-sm">
            Honest reflections on leadership, ambition, sisterhood, and the courage to choose what comes next.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INSIGHTS_DATA.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer bg-[#f4f4f2] p-7 sm:p-8 border border-[#e5e5e5] hover:border-[#141e13] transition-all flex flex-col justify-between"
              style={{ borderRadius: 0 }}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#5f5e5e] pb-4 mb-4 border-b border-[#e2e3e1]">
                  <span className="text-[#3f4a3c] font-semibold">{article.number}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#757871]">
                  {article.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif text-[#1a1c1b] mt-2 mb-3 group-hover:text-[#3f4a3c] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-[#444842] leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#e2e3e1] flex items-center justify-between">
                <div>
                  <p className="text-xs font-sans font-medium text-[#1a1c1b]">{article.author}</p>
                  <p className="text-[10px] text-[#5f5e5e] font-mono">{article.authorRole}</p>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono text-[#141e13] group-hover:translate-x-1 transition-transform">
                  <span>Read Story</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
