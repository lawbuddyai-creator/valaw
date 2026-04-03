import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const resources = [
  { title: "Virginia State Bar", description: "The official organization regulating attorneys in Virginia. Learn about legal education requirements, bar exam info, and public resources.", link: "https://www.vsb.org/", category: "Organizations" },
  { title: "American Bar Association", description: "Extensive guidance on law schools, career paths, and scholarships for prospective law students.", link: "https://www.americanbar.org/", category: "Organizations" },
  { title: "LSAC & LSAT Preparation", description: "Find information about the LSAT and law school admissions. Free practice tests and application support.", link: "https://www.lsac.org/lsat", category: "Exam Prep" },
  { title: "Internships & Shadowing", description: "Reach out to local Virginia law firms, courts, or legal aid organizations to arrange internships or job shadowing.", category: "Internships" },
  { title: "Virginia Mock Trial League", description: "Participate in state and national mock trial programs to gain courtroom experience.", link: "https://www.vamlmu.org/", category: "Competitions" },
  { title: "Virginia Debate Association", description: "Sharpen advocacy skills through competitive debate.", link: "https://debatevirginia.org/", category: "Competitions" },
  { title: "Pre‑Law Summer Programs", description: "Virginia colleges including UVA and William & Mary offer summer institutes for high school students interested in law.", category: "Programs" },
  { title: "Scholarships & Financial Aid", description: "Research local and national scholarships specifically for future law students, including Virginia-based opportunities.", category: "Programs" },
];

const filterOptions = ["All", "Organizations", "Exam Prep", "Internships", "Competitions", "Programs"];

const ResourcesPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? resources : resources.filter((r) => r.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading badge="Tools & Opportunities" title="Helpful Resources" description="Explore tools, organizations, and programs that support your path to law school — all Virginia-focused." />

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                filter === f ? "bg-gold text-secondary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all"
            >
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/10 text-gold-dark text-xs font-body font-semibold mb-3">{r.category}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-3">{r.description}</p>
              {r.link && (
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-gold-dark font-body font-medium hover:underline">
                  Visit <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
