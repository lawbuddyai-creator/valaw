import { motion } from "framer-motion";
import { BookOpen, Landmark, Mic, DollarSign, Globe, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const classes = [
  { icon: BookOpen, title: "English & Writing", description: "Take honors or AP English courses to improve reading comprehension and writing ability. Strong writing skills are essential for drafting legal documents and arguments." },
  { icon: Landmark, title: "U.S. History & Government", description: "Classes like U.S. history, civics, and AP Government help you understand how laws are made and impact society. A solid grasp of civics is critical for law students." },
  { icon: Mic, title: "Public Speaking & Debate", description: "Speech and debate teach you to articulate thoughts clearly and persuasively — invaluable for courtroom settings and client interactions." },
  { icon: DollarSign, title: "Economics & Business", description: "Understanding economics and business concepts is beneficial for corporate or business law. Consider AP Economics or entrepreneurship courses." },
  { icon: Globe, title: "Foreign Language", description: "Learning another language broadens cultural understanding and is advantageous in immigration law or international practice." },
  { icon: Award, title: "Advanced Placement (AP)", description: "AP Government, AP U.S. History, AP Economics, and AP English prepare you for college rigor and strengthen your applications." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const ClassesPage = () => (
  <div className="min-h-screen pt-24 pb-20">
    <div className="max-w-5xl mx-auto px-4">
      <SectionHeading badge="Academics" title="Recommended High School Classes" description="Build a strong academic foundation with courses that enhance your writing, analytical, and critical thinking skills." />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {classes.map((c) => (
          <motion.div key={c.title} variants={item} className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all">
            <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <c.icon className="w-5 h-5 text-gold-dark" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{c.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <Link to="/activities" className="inline-flex items-center gap-2 text-gold-dark font-body font-medium hover:underline">
          Next: Find extracurriculars →
        </Link>
      </div>
    </div>
  </div>
);

export default ClassesPage;
