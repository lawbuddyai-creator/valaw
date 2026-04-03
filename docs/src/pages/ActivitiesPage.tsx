import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Gavel, Building, Heart, PenTool, Trophy } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const activities = [
  { icon: Gavel, title: "Debate Club", description: "Research complex topics, form persuasive arguments, and think on your feet — essential skills for law students.", category: "Competition" },
  { icon: Users, title: "Mock Trial", description: "Simulate courtroom proceedings. Learn courtroom etiquette, legal reasoning, and team collaboration.", category: "Competition" },
  { icon: Building, title: "Student Government", description: "Foster leadership abilities and gain insight into policy‑making and governance.", category: "Leadership" },
  { icon: Heart, title: "Community Service", description: "Volunteer with local nonprofits or legal aid organizations. Demonstrates commitment to public service.", category: "Service" },
  { icon: PenTool, title: "Journalism & Writing", description: "Writing for the school newspaper or blog sharpens communication of complex ideas.", category: "Writing" },
  { icon: Trophy, title: "Leadership Programs", description: "FBLA, DECA, Youth & Government, and other programs enhance public speaking and organizational skills.", category: "Leadership" },
];

const categories = [
  { key: "Advocacy & Civic", items: ["Youth & Government or civic education programs", "Volunteer with local nonprofits and attend public meetings", "Student government and community advisory boards"] },
  { key: "Competition & Speaking", items: ["Debate and public speaking (speech & forensics)", "Mock trial and moot court", "Model UN and policy competitions"] },
  { key: "Writing & Research", items: ["School newspaper, blog, or opinion writing", "Writing contests and research projects", "Policy briefs and National History Day"] },
  { key: "Service & Leadership", items: ["Consistent volunteering with community organizations", "Club leadership and organizing projects", "Mentoring younger students"] },
];

const filters = ["All", "Competition", "Leadership", "Service", "Writing"];

const ActivitiesPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? activities : activities.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading badge="Get Involved" title="Extracurricular Activities" description="Build skills and experience outside the classroom that strengthen law school applications." />

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((f) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <a.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-body mb-2">{a.category}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{a.description}</p>
            </motion.div>
          ))}
        </div>

        <SectionHeading title="Go Deeper by Category" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.key} className="p-5 rounded-2xl bg-card border border-border shadow-card">
              <h3 className="font-display font-semibold text-foreground mb-3">{cat.key}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                    <span className="text-gold mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/resources" className="inline-flex items-center gap-2 text-gold-dark font-body font-medium hover:underline">
            Next: Explore resources →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
