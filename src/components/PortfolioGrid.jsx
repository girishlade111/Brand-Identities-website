import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 16 },
  },
};

// Masonry layout: 3 columns, center column shifted up
const masonryLayout = [
  [0, 3, 6],  // Left column
  [1, 4, 7],  // Center column
  [2, 5, 8],  // Right column
];

export default function PortfolioGrid() {
  return (
    <section id="projects" className="section-padding pt-0">
      <div className="max-w-[1400px] mx-auto">
        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {masonryLayout.map((colIndices, colIdx) => (
            <div 
              key={colIdx} 
              className={`flex flex-col gap-4 md:gap-5 ${
                colIdx === 1 ? 'md:translate-y-12 lg:translate-y-16' : ''
              }`}
            >
              {colIndices.map((itemIdx) => {
                const item_data = portfolioItems[itemIdx];
                if (!item_data) return null;
                return (
                  <motion.div
                    key={itemIdx}
                    variants={item}
                    className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a]"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={item_data.image}
                        alt={item_data.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                    {/* Always-visible overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <button className="view-casestudy-btn">
                        View Casestudy
                        <ArrowUpRight size={12} strokeWidth={2.5} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-24"
        >
          <a href="#" className="text-[11px] uppercase tracking-widest text-white/30 hover:text-white transition-colors underline underline-offset-[6px]">
            All Projects
          </a>
          <a href="#contact" className="btn-primary">
            Book a Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
