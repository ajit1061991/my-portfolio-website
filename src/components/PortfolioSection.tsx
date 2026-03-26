import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Charter Sports",
    category: "WordPress · E-commerce",
    desc: "Premier ski & bike rental shop in Colorado. Full WordPress build with booking system, multi-location pages, and bilingual support.",
    url: "https://chartersports.com",
    image: "https://api.microlink.io/?url=https://chartersports.com&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&overlay.browser=none&viewport.width=1280&viewport.height=800",
  },
  {
    title: "Arizona Wildlife Control",
    category: "WordPress · Service Business",
    desc: "Phoenix-area wildlife removal service. Custom WordPress theme with lead generation forms, service pages, and local SEO optimization.",
    url: "https://www.arizonawildlifecontrol.com",
    image: "https://api.microlink.io/?url=https://www.arizonawildlifecontrol.com&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&overlay.browser=none&viewport.width=1280&viewport.height=800",
  },
  {
    title: "Invstory",
    category: "WordPress · Education Platform",
    desc: "India's leading stock market learning platform. Feature-rich build with course management, user authentication, and payment integration.",
    url: "https://invstory.com",
    image: "https://api.microlink.io/?url=https://invstory.com&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&overlay.browser=none&viewport.width=1280&viewport.height=800",
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-24 lg:py-32 bg-surface-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-wider uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-surface-dark-foreground text-balance">
            Projects that deliver real results
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group grid md:grid-cols-5 gap-6 md:gap-8 items-center p-5 md:p-6 rounded-2xl border border-surface-dark-foreground/10 hover:border-primary/30 hover:bg-surface-dark-foreground/[0.03] transition-all duration-300"
            >
              <div className="md:col-span-3 overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={`${p.title} website screenshot`}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover object-top rounded-xl group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
              <div className="md:col-span-2">
                <p className="font-mono text-xs text-primary/80 tracking-wider uppercase mb-2">
                  {p.category}
                </p>
                <h3 className="text-xl font-bold text-surface-dark-foreground mb-3 flex items-center gap-2">
                  {p.title}
                  <ExternalLink
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                  />
                </h3>
                <p className="text-sm text-surface-dark-foreground/60 leading-relaxed text-pretty">
                  {p.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
