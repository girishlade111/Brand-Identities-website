import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Github, Codepen } from 'lucide-react';

export default function FooterCTA() {
  const socialLinks = [
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/girish_lade_/', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/girish-lade-075bba201/', label: 'LinkedIn' },
    { icon: <Github size={18} />, href: 'https://github.com/girishlade111', label: 'GitHub' },
    { icon: <Codepen size={18} />, href: 'https://codepen.io/Girish-Lade-the-looper', label: 'CodePen' },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[400px] bg-white/[0.03] blur-[100px] animate-smoke-1 rounded-full" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[350px] bg-white/[0.02] blur-[80px] animate-smoke-2 rounded-full" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40 font-medium mb-10">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            Available For Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.1 }}
          className="text-[32px] sm:text-[44px] md:text-[56px] font-display font-semibold leading-[1.1] tracking-[-0.03em] mb-12 text-white/90 max-w-[800px] mx-auto"
        >
          Curious about what we can create together? Let&apos;s bring something extraordinary to life!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <a
            href="mailto:admin@ladestack.in"
            className="btn-primary inline-flex items-center gap-3 text-[15px] px-8 py-4"
          >
            Book a Free Call
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-5 mt-16"
        >
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center 
                         text-white/30 hover:text-white hover:border-white/30 hover:bg-white/[0.03] transition-all duration-500"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="relative z-10 max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/[0.05] 
                   flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-medium uppercase tracking-widest text-white/20"
      >
        <a href="mailto:admin@ladestack.in" className="hover:text-white/40 transition-colors lowercase">admin@ladestack.in</a>
        <span className="flex items-center gap-1.5">
          <a href="https://ladestack.in" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors underline underline-offset-[4px]">
            ladestack.in
          </a>
        </span>
        <span>All rights reserved, ©2026</span>
      </motion.div>
    </section>
  );
}
