import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "High School Preparation",
    description: "Focus on strong academics, especially English, history, government, and speech. Participate in debate or mock trial to build critical thinking and public speaking skills.",
    grade: "Grades 9–12",
    color: "gold",
  },
  {
    title: "Undergraduate Degree",
    description: "Attend a four-year college and choose a major that develops analytical and writing skills (political science, history, English, philosophy). Maintain a strong GPA and build professor relationships.",
    grade: "4 Years",
    color: "gold",
  },
  {
    title: "Law School (J.D.)",
    description: "Take the LSAT and apply to accredited law schools. Virginia's top schools include UVA Law, William & Mary Law, George Mason's Scalia Law, and University of Richmond School of Law.",
    grade: "3 Years",
    color: "gold",
  },
  {
    title: "Bar Exam & Licensing",
    description: "After law school, pass the Virginia Bar Exam and meet character & fitness requirements. Continuing legal education is required to maintain your license.",
    grade: "Final Step",
    color: "gold",
  },
];

const PathPage = () => {
  const [checked, setChecked] = useState<boolean[]>(() => {
    try {
      const saved = localStorage.getItem("valaw-path");
      return saved ? JSON.parse(saved) : new Array(steps.length).fill(false);
    } catch { return new Array(steps.length).fill(false); }
  });

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
    localStorage.setItem("valaw-path", JSON.stringify(next));
  };

  const progress = Math.round((checked.filter(Boolean).length / steps.length) * 100);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading badge="Your Journey" title="Path to Becoming a Lawyer" description="Track each milestone on your journey. Check off steps you've completed — progress saves automatically." />

        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-body text-muted-foreground">Progress</span>
            <span className="text-sm font-body font-semibold text-gold-dark">{progress}%</span>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-4"
              >
                <button onClick={() => toggle(i)} className="relative z-10 flex-shrink-0 mt-1">
                  {checked[i] ? (
                    <CheckCircle2 className="w-12 h-12 text-gold fill-gold/20" />
                  ) : (
                    <Circle className="w-12 h-12 text-border hover:text-gold/50 transition-colors" />
                  )}
                </button>
                <div className={`flex-1 p-6 rounded-2xl border transition-all ${checked[i] ? "bg-gold/5 border-gold/30" : "bg-card border-border"} shadow-card`}>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/10 text-gold-dark text-xs font-body font-semibold mb-2">{step.grade}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border">
          <h3 className="font-display font-semibold text-foreground mb-2">💡 Preparing Early</h3>
          <p className="text-sm text-muted-foreground font-body">
            Even in high school, you can set yourself up for success by reading widely, improving your writing skills, and exploring internships or shadowing opportunities at local Virginia law firms or courthouses.
          </p>
          <Link to="/classes" className="inline-block mt-3 text-sm font-medium text-gold-dark font-body hover:underline">
            Explore recommended classes →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PathPage;
