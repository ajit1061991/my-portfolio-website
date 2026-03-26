import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "80+", label: "Projects Delivered" },
  { value: "35+", label: "Happy Clients" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-surface-dark overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--highlight)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--highlight)) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-sm text-primary tracking-wider uppercase mb-6"
          >
            Web Specialist · Available for Projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-dark-foreground leading-[1.08] tracking-tight mb-6"
          >
            I build websites that{" "}
            <span className="text-primary">work harder</span> for your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-pretty text-lg text-surface-dark-foreground/70 max-w-xl mb-10 leading-relaxed"
          >
            A decade of crafting WordPress themes, Shopify stores, custom plugins,
            and tracking systems — turning ideas into high-performing digital
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#contact"
              className="bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Let's Talk
            </a>
            <a
              href="#work"
              className="border border-surface-dark-foreground/20 text-surface-dark-foreground font-semibold px-7 py-3.5 rounded-lg hover:border-surface-dark-foreground/40 transition-colors active:scale-[0.97]"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-12"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary tabular-nums">
                  {s.value}
                </div>
                <div className="text-sm text-surface-dark-foreground/50 mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-surface-dark-foreground/30 hover:text-primary transition-colors"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
