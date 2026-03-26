import { motion } from "framer-motion";

const techStack = [
  "WordPress", "Shopify", "PHP", "JavaScript", "React",
  "WooCommerce", "Liquid", "MySQL", "REST APIs", "GA4 / GTM",
  "CSS / Tailwind", "Git", "Linux / cPanel", "Cloudflare",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-sm text-primary tracking-wider uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance mb-6">
              A craftsman approach to web development
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty">
              <p>
                Over the past 10 years, I've worked with startups, agencies, and
                established businesses to build web solutions that actually move
                the needle. No cookie-cutter templates — every project gets the
                attention it deserves.
              </p>
              <p>
                My sweet spot is WordPress and Shopify ecosystems, where I go
                deep on custom theme development, plugin architecture, and
                performance optimization. I also specialize in analytics and
                tracking — making sure you're not flying blind on what's working.
              </p>
              <p>
                When we work together, you get a partner who understands both the
                technical side and the business goals behind every decision.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-sm text-muted-foreground tracking-wider uppercase mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                  className="px-4 py-2 rounded-lg bg-card border border-border/60 text-sm font-medium text-foreground/80 hover:border-primary/40 hover:text-foreground transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
