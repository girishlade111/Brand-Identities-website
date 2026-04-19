import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#050505]/90 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-[60px]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-4 h-4 bg-white/[0.08] border border-white/10 rounded-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-[1px]" />
              </div>
              <span className="text-sm font-medium tracking-tight text-white/90">Portfolio</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-medium text-white/40 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.04] text-white/70 text-[11px] font-medium
                           rounded-full border border-white/10 hover:bg-white hover:text-black
                           transition-all duration-300"
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.5 4.5L11 6L7.5 7.5L6 11L4.5 7.5L1 6L4.5 4.5L6 1Z" fill="currentColor" />
                </svg>
                Get Template
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-1.5 text-white/50 hover:text-white transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050505]/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-white/50 hover:text-white transition-colors"
            >
              <X size={22} />
            </button>
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-display font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
