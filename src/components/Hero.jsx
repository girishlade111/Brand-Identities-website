import { motion } from 'framer-motion';

const brandLogos = [
  { name: 'Oasis', symbol: '' },
  { name: 'Asterisk', symbol: '✱' },
  { name: 'Fooks', symbol: '' },
  { name: 'Opal', symbol: '◉' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Animated Smoke/Silk Background - Rebuilt for accuracy */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Main Silk Wave - Top Left to Center */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[70%] opacity-[0.45] mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'smoke1 18s ease-in-out infinite',
          }}
        />
        
        {/* Secondary Silk Wave - Top Right */}
        <div 
          className="absolute top-0 -right-[10%] w-[80%] h-[60%] opacity-[0.35] mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 80%)',
            filter: 'blur(100px)',
            animation: 'smoke2 22s ease-in-out infinite alternate',
          }}
        />

        {/* Floating Wisp - Center Left */}
        <div 
          className="absolute top-[20%] left-[5%] w-[600px] h-[400px] opacity-[0.25]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
            filter: 'blur(120px)',
            animation: 'smoke3 15s ease-in-out infinite',
          }}
        />

        {/* Bottom Glow */}
        <div 
          className="absolute -bottom-[20%] left-[20%] w-[100%] h-[50%] opacity-[0.2]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 75%)',
            filter: 'blur(90px)',
            animation: 'smoke1 25s ease-in-out infinite reverse',
          }}
        />
        
        {/* Fine Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Dark Vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-5 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 rounded-full mb-8"
        >
          <span className="w-1 h-1 bg-white rounded-full" />
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Crafting Unique Brand Identities</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.3 }}
          className="text-[48px] sm:text-[64px] md:text-[84px] lg:text-[102px] font-display font-semibold leading-[0.92] tracking-[-0.04em] mb-8"
        >
          <span className="block text-white">Branding that you</span>
          <span className="block text-white">need Indeed</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/30 text-[13px] sm:text-[15px] max-w-[580px] mx-auto mb-10 leading-relaxed font-medium"
        >
          Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-20"
        >
          <a href="#contact" className="btn-primary">
            Get Started Now
          </a>
          <a href="#projects" className="btn-secondary">
            See Projects
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4 mb-20"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/20 font-medium">Scroll down</span>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-px bg-white/10" />
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-7 border border-white/20 rounded-full flex items-start justify-center p-1"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-white/40 rounded-full"
              />
            </motion.div>
            <div className="w-10 h-px bg-white/10" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-white/20 font-medium">to see projects</span>
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-12 sm:gap-20 opacity-30 grayscale"
        >
          {brandLogos.map((brand) => (
            <span
              key={brand.name}
              className="flex items-center gap-2 text-[15px] font-display font-medium tracking-tight"
            >
              {brand.symbol && <span className="text-[18px] leading-none">{brand.symbol}</span>}
              {brand.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
