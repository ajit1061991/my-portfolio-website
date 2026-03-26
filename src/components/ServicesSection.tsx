import { motion } from "framer-motion";
import { Code2, ShoppingBag, Palette, BarChart3, Plug, Server } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "WordPress Development",
    desc: "Custom themes and plugin development tailored to your exact needs. Clean, maintainable code that scales.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Themes",
    desc: "Bespoke Shopify storefronts designed to convert. From custom sections to full theme builds.",
  },
  {
    icon: Palette,
    title: "Web Design",
    desc: "User-centered design that balances aesthetics with usability. Responsive across every device.",
  },
  {
    icon: BarChart3,
    title: "Tracking & Analytics",
    desc: "Custom tracking implementations — GA4, GTM, Meta Pixel, server-side tagging, and conversion APIs.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    desc: "Connecting your site to CRMs, payment gateways, ERPs, and third-party services seamlessly.",
  },
  {
    icon: Server,
    title: "Web Hosting & Support",
    desc: "Reliable hosting setup, SSL, CDN configuration, and ongoing maintenance to keep you online.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-wider uppercase mb-3">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance mb-4">
            Services built on a decade of hands-on experience
          </h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            From concept to deployment, I handle every layer of the web stack so you can focus on running your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-6 lg:p-8 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
