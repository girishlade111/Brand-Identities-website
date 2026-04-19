import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const skills = [
  'Product Design', 'Brand Identity Design', 'UX Design', 'Branding',
  'Packaging Design', 'Figma', 'Photoshop'
];

const experience = [
  { role: 'Freelance', company: 'GreenLeaf Co', period: 'Currently' },
  { role: 'Brand Designer', company: 'UrbanFit Studio', period: '2023-24' },
  { role: 'Package Designer', company: 'GreenK Studio', period: '2020-22' },
];

const recentWorks = [
  { img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=350&h=440&fit=crop', title: 'Dark Pouch' },
  { img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=350&h=440&fit=crop', title: 'Spa Set' },
  { img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=350&h=440&fit=crop', title: 'Tote Bag' },
  { img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=350&h=440&fit=crop', title: 'Skincare' },
];

export default function AboutSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-container">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Main Split Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 50, damping: 15 }}
              >
                <h2 className="text-[44px] sm:text-[56px] md:text-[68px] font-display font-semibold tracking-[-0.04em] mb-6 leading-[0.92]">
                  Meet Meily
                </h2>
                <p className="text-white/30 text-[14px] leading-relaxed mb-10 max-w-[480px] font-medium">
                  I&apos;m Meily, a passionate Brand Identity & Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2.5 mb-12">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-[11px] font-medium text-white/40 hover:text-white/60 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Experience Table */}
                <div className="space-y-0 max-w-[520px]">
                  {experience.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between py-4 border-b border-white/5 group hover:bg-white/[0.01] transition-colors px-2 -mx-2 rounded-lg"
                    >
                      <span className="text-[13px] font-medium text-white/20 group-hover:text-white/40 transition-colors">{exp.role}</span>
                      <span className="text-[13px] font-medium text-white/50 group-hover:text-white/80 transition-colors">{exp.company}</span>
                      <span className="text-[13px] font-medium text-white/20 group-hover:text-white/40 transition-colors">{exp.period}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Works Label */}
                <div className="flex items-center gap-3 mt-12 opacity-40">
                  <span className="text-[11px] uppercase tracking-widest font-bold">Recent Works</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
                    <ArrowDown size={14} />
                  </div>
                </div>
              </motion.div>

              {/* Right: Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 40, damping: 12, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-white/[0.02] border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop&crop=face"
                    alt="Meily - Brand Designer"
                    className="w-full h-full object-cover grayscale contrast-110 brightness-90 transition-all duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* Horizontal Scroll Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-20 -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16"
            >
              <div className="flex gap-4 overflow-hidden py-4">
                <div className="flex gap-4 animate-scroll-slow hover:pause" style={{ width: 'max-content' }}>
                  {[...recentWorks, ...recentWorks, ...recentWorks].map((work, i) => (
                    <div
                      key={i}
                      className="relative w-[300px] sm:w-[380px] aspect-[4/5] rounded-2xl overflow-hidden group"
                    >
                      <img
                        src={work.img}
                        alt={work.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <button className="view-casestudy-btn shadow-2xl">
                          View Casestudy
                          <ArrowUpRight size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
