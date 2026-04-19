import { motion } from 'framer-motion';
import { Lightbulb, ListChecks, Rocket } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: <Lightbulb size={16} />,
    title: 'Define Your Vision',
    description: 'Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.',
  },
  {
    number: '2',
    icon: <ListChecks size={16} />,
    title: 'Submit Your Request',
    description: 'Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.',
  },
  {
    number: '3',
    icon: <Rocket size={16} />,
    title: 'Project Delivered',
    description: 'As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-container">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=1000&fit=crop"
                  alt="Creative workspace"
                  className="w-full h-full object-cover grayscale contrast-110"
                  loading="lazy"
                />
              </motion.div>

              {/* Right: Process Steps */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40 font-medium mb-6">
                    <span className="w-1 h-1 bg-white/40 rounded-full" />
                    Design process
                  </span>
                  <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-display font-semibold tracking-[-0.04em] mb-4 leading-[0.92]">
                    Process
                  </h2>
                  <p className="text-white/30 text-[14px] leading-relaxed max-w-sm mb-8 font-medium">
                    crafting bold visuals that inspire and elevate brands with thought process.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="#contact" className="btn-primary">Book a Free Call</a>
                    <a href="#projects" className="btn-secondary">See Projects</a>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 50, damping: 15, delay: i * 0.1 }}
                      className="group glass-card p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-500 border-white/[0.03] hover:border-white/10"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                            {step.icon}
                          </div>
                          <h3 className="text-[18px] font-display font-semibold text-white/80 group-hover:text-white transition-colors tracking-tight">{step.title}</h3>
                        </div>
                        <span className="text-[12px] text-white/10 font-mono font-bold">{step.number}</span>
                      </div>
                      <p className="text-[13px] text-white/30 leading-relaxed max-w-[420px] font-medium group-hover:text-white/40 transition-colors">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
