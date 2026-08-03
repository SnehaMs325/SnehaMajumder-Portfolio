import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, RotateCw, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings from data to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Users,
  Briefcase,
  Award,
};

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const handleCardClick = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {experience.title}{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {experience.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base mb-4">
            {experience.subtitle}
          </p>

          {/* Flip Card Interaction Hint */}
          <span className="inline-flex items-center gap-1.5 text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 font-medium">
            <RotateCw className="w-3.5 h-3.5" />
            Tap or hover on a card to flip and view details
          </span>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experience.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Briefcase;
            const isFlipped = !!flippedCards[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-[280px] w-full [perspective:1000px] cursor-pointer"
                onClick={() => handleCardClick(item.id)}
                onMouseEnter={() =>
                  setFlippedCards((prev) => ({ ...prev, [item.id]: true }))
                }
                onMouseLeave={() =>
                  setFlippedCards((prev) => ({ ...prev, [item.id]: false }))
                }
              >
                {/* 3D Inner Wrapper */}
                <div
                  className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 w-full h-full rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between [backface-visibility:hidden]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-purple-300 font-medium mb-3">
                        {item.organization}
                      </p>
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                      <span className="text-purple-400 font-medium text-[11px]">
                        Hover / Tap for details →
                      </span>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 w-full h-full rounded-xl bg-slate-800/90 border border-purple-500/40 p-6 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-300 mb-2 border-b border-purple-500/20 pb-1">
                        Key Responsibilities & Impact
                      </h4>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {item.details}
                      </p>
                    </div>

                    <div className="pt-2 text-right">
                      <span className="text-[11px] text-purple-300/80 italic">
                        Click to flip back
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};