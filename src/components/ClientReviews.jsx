import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'June Lee',
    role: 'CEO of GreenRoots',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    text: "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    rating: 5,
  },
  {
    name: 'Jona Carter',
    role: 'Founder of EcoLux',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    text: "Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.",
    rating: 5,
  },
  {
    name: 'Sofia Toms',
    role: 'Founder at GreenK Studios',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    text: "Meily's designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging that resonated with our target audience and boosted our product's visibility.",
    rating: 5,
  },
];

const stats = [
  { value: '180+', label: 'design projects completed.' },
  { value: '96%', label: 'Client satisfaction rate.' },
  { value: '15+', label: 'Years of experience' },
];

export default function ClientReviews() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-container">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 40, damping: 12 }}
                className="rounded-2xl overflow-hidden aspect-video border border-white/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop"
                  alt="Client collaboration"
                  className="w-full h-full object-cover grayscale contrast-110"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                className="flex flex-col justify-center"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40 font-medium mb-6">
                  <span className="w-1 h-1 bg-white/40 rounded-full" />
                  Reviews
                </span>
                <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-display font-semibold tracking-[-0.04em] mb-4 leading-[0.92]">
                  Client Reviews
                </h2>
                <p className="text-white/30 text-[14px] leading-relaxed max-w-sm mb-8 font-medium">
                  Real feedback from clients who trusted my design expertise to elevate their brands successfully.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#contact" className="btn-primary">Book a Free Call</a>
                  <a href="#services" className="btn-secondary">See Services</a>
                </div>
              </motion.div>
            </div>

            {/* Review Cards - Auto scrolling carousel */}
            <div className="overflow-hidden -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 mb-16">
              <div className="flex gap-4 py-4 animate-scroll-slow hover:pause" style={{ width: 'max-content' }}>
                {[...reviews, ...reviews, ...reviews].map((review, i) => (
                  <div
                    key={i}
                    className="w-[340px] flex-shrink-0 glass-card p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-500 border-white/[0.03] hover:border-white/10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-11 h-11 rounded-full object-cover grayscale border border-white/10"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-[15px] font-display font-semibold text-white/80 group-hover:text-white transition-colors">{review.name}</h4>
                        <p className="text-[11px] font-medium text-white/30 uppercase tracking-widest">{review.role}</p>
                      </div>
                    </div>
                    <p className="text-[14px] text-white/30 leading-relaxed mb-6 font-medium italic">"{review.text}"</p>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[13px] text-white/50 font-bold">5.0</span>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star key={j} size={12} className="fill-white/80 text-white/80" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5 border-white/[0.03]"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center py-6 sm:py-0 sm:px-8">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white/90 tracking-tight">{stat.value}</span>
                  <p className="text-[11px] uppercase tracking-widest text-white/20 mt-3 font-bold">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
