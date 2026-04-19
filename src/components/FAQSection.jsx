import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, X, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.',
  },
  {
    question: 'How do I start working with you?',
    answer: 'Simply reach out through the contact form or book a free call. We\'ll discuss your project needs and I\'ll provide a tailored proposal.',
  },
  {
    question: 'What design tools do you use?',
    answer: 'I primarily work with Figma, Adobe Photoshop, Illustrator, and After Effects for motion design projects.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Most projects are completed within 2-3 days for standard deliverables. Complex brand identity systems may take 1-2 weeks.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes! Every project includes 2 rounds of revisions to ensure the final deliverable perfectly matches your vision.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'I work across various industries including beauty, wellness, food & beverage, tech startups, and lifestyle brands.',
  },
  {
    question: 'Do you offer development services?',
    answer: 'While my core expertise is in design, I can collaborate with developers or recommend trusted partners for implementation.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing varies by project scope. I offer package-based pricing for common deliverables and custom quotes for complex projects.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! I can audit your current site and create a fresh, modern design that better represents your brand.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-container">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left: Image + Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40 font-medium mb-6">
                    <span className="w-1 h-1 bg-white/40 rounded-full" />
                    FAQ&apos;S
                  </span>
                  <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-display font-semibold tracking-[-0.04em] mb-4 leading-[0.92]">
                    Answers
                  </h2>
                  <p className="text-white/30 text-[14px] leading-relaxed max-w-sm mb-10 font-medium">
                    Find answers to common questions about my design process, services etc...
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 40, damping: 12, delay: 0.1 }}
                  className="rounded-2xl overflow-hidden aspect-[4/3] mb-10 border border-white/5"
                >
                  <img
                    src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&h=600&fit=crop"
                    alt="FAQ"
                    className="w-full h-full object-cover grayscale contrast-110"
                    loading="lazy"
                  />
                </motion.div>

                <div className="flex flex-wrap gap-2.5 mb-10">
                  {['Product Design', 'Brand Identity Design', 'Branding'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-[11px] font-medium text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Book a Free Call
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </a>
              </div>

              {/* Right: FAQ Accordion */}
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`glass-card overflow-hidden border-white/[0.03] transition-all duration-500 ${
                      openIndex === i ? 'bg-white/[0.04] border-white/10' : 'hover:bg-white/[0.01] hover:border-white/5'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors"
                    >
                      <span className={`text-[15px] font-display font-semibold transition-colors ${
                        openIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                      }`}>{faq.question}</span>
                      <motion.span
                        animate={{ rotate: openIndex === i ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`flex-shrink-0 ${openIndex === i ? 'text-white' : 'text-white/20'}`}
                      >
                        <Plus size={18} strokeWidth={2.5} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <p className="px-5 sm:px-6 pb-6 text-[14px] text-white/30 leading-relaxed font-medium max-w-[500px]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
