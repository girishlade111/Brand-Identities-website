import { motion } from 'framer-motion';
import { Palette, Sparkles, Box, Image } from 'lucide-react';

const categories = ['Product Design', 'Brand Identity Design', 'Branding', 'Packaging Design', 'Mochup Design'];

const services = [
  {
    icon: <Palette size={16} />,
    title: 'Brand Identity',
    description: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
  },
  {
    icon: <Sparkles size={16} />,
    title: 'Brand Design',
    description: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
  },
  {
    icon: <Box size={16} />,
    title: 'Package Design',
    description: 'Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.',
  },
  {
    icon: <Image size={16} />,
    title: 'Mochup Design',
    description: "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.",
  },
];

const tagChips = [
  'Brand Graphics', 'Brand Migration', 'Package Design', 'Branding', 'Slide Decks',
  'Copywriting', 'Brand Graphics', 'Brand Migration', 'Brand Visibility',
  'Brand Integrations', 'Optimization', 'Brand Landing Pages', 'Social Media',
  'Icons', 'Brand Visibility', 'Brand Integrations'
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-container">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40 font-medium mb-6">
                    <span className="w-1 h-1 bg-white/40 rounded-full" />
                    Design services
                  </span>
                  <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-display font-semibold tracking-[-0.04em] mb-4 leading-[0.92]">
                    Services
                  </h2>
                  <p className="text-white/30 text-[14px] leading-relaxed max-w-md mb-8 font-medium">
                    Helping businesses standout with brand identity packaging that captivates and converts effectively.
                  </p>

                  {/* Category Chips */}
                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-[11px] font-medium text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a href="#contact" className="btn-primary">Book a Free Call</a>
                    <a href="#projects" className="btn-secondary">See Projects</a>
                  </div>
                </motion.div>
              </div>

              {/* Right: Feature Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 40, damping: 12 }}
                className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop"
                  alt="Services showcase"
                  className="w-full h-full object-cover grayscale contrast-110"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Service Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-16">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 50, damping: 15, delay: i * 0.1 }}
                  className="group glass-card p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-500 border-white/[0.03] hover:border-white/10"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-[18px] font-display font-semibold text-white/80 group-hover:text-white transition-colors tracking-tight">{service.title}</h3>
                  </div>
                  <p className="text-[13px] text-white/30 leading-relaxed max-w-[420px] font-medium group-hover:text-white/40 transition-colors">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Tag Chips - Scrolling */}
            <div className="overflow-hidden -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16">
              <div className="flex gap-3 py-2 animate-scroll-slow hover:pause" style={{ width: 'max-content' }}>
                {[...tagChips, ...tagChips, ...tagChips].map((tag, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 bg-white/[0.02] border border-white/5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white/15 flex-shrink-0 hover:text-white/40 hover:border-white/10 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
