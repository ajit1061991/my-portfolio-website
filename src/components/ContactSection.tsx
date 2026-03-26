import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Mail size={24} className="text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-dark-foreground tracking-tight text-balance mb-5 leading-[1.1]">
            Have a project in mind? Let's make it happen.
          </h2>
          <p className="text-surface-dark-foreground/60 text-lg mb-10 text-pretty leading-relaxed">
            Whether it's a new website, a redesign, or a complex integration —
            I'd love to hear about it. Drop me a line and I'll get back to you
            within 24 hours.
          </p>

          <motion.a
            href="mailto:hello@yoursite.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            hello@yoursite.com
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
