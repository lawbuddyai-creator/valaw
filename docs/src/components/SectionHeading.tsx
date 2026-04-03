import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ badge, title, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold font-body uppercase tracking-widest mb-4">
        {badge}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    {description && (
      <p className="max-w-2xl mx-auto text-muted-foreground font-body text-lg">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
