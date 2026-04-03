import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const grades = ["9th grade", "10th grade", "11th grade", "12th grade"];
const interests = [
  "Speaking, debate, and advocacy",
  "Public service and helping people",
  "Business, policy, and leadership",
  "Research, writing, and argument",
];
const goals = [
  "Explore whether law is right for me",
  "Build a stronger resume",
  "Get an internship or shadowing opportunity",
  "Prepare for college and pre-law",
];

interface Plan {
  summary: string;
  classes: string[];
  activities: string[];
  action: string;
}

function generatePlan(grade: string, interest: string, goal: string): Plan {
  const classMap: Record<string, string[]> = {
    "Speaking, debate, and advocacy": ["Public Speaking & Debate", "AP Government & Politics", "AP English Language"],
    "Public service and helping people": ["U.S. Government", "Sociology/Psychology", "AP English Literature"],
    "Business, policy, and leadership": ["AP Economics", "AP Government", "Business Law or Entrepreneurship"],
    "Research, writing, and argument": ["AP English Language", "AP U.S. History", "Philosophy or Ethics"],
  };
  const actMap: Record<string, string[]> = {
    "Speaking, debate, and advocacy": ["Debate Club", "Mock Trial", "Model UN"],
    "Public service and helping people": ["Community Service", "Student Government", "Legal Aid Volunteering"],
    "Business, policy, and leadership": ["FBLA or DECA", "Student Government", "Youth & Government"],
    "Research, writing, and argument": ["School Newspaper", "Mock Trial", "National History Day"],
  };
  const actionMap: Record<string, string> = {
    "Explore whether law is right for me": "Shadow a local attorney or sit in on a court hearing this month.",
    "Build a stronger resume": "Join one new club this semester and commit to a leadership role by spring.",
    "Get an internship or shadowing opportunity": "Send 3 outreach emails today using our email templates page.",
    "Prepare for college and pre-law": "Research two Virginia pre-law summer programs and note their deadlines.",
  };
  return {
    summary: `As a ${grade} student interested in ${interest.toLowerCase()}, here's your personalized plan to ${goal.toLowerCase()}.`,
    classes: classMap[interest] || classMap["Research, writing, and argument"],
    activities: actMap[interest] || actMap["Research, writing, and argument"],
    action: actionMap[goal] || actionMap["Explore whether law is right for me"],
  };
}

const StartPage = () => {
  const [grade, setGrade] = useState("");
  const [interest, setInterest] = useState("");
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState<Plan | null>(null);

  const canGenerate = grade && interest && goal;

  const handleGenerate = () => {
    if (canGenerate) setPlan(generatePlan(grade, interest, goal));
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading badge="Personalized Next Steps" title="Start Here" description="Answer three quick questions and get a practical VA Law action plan you can start today." />

        <div className="space-y-8 mb-10">
          <SelectGroup label="What grade are you in?" options={grades} value={grade} onChange={setGrade} />
          <SelectGroup label="What interests you most?" options={interests} value={interest} onChange={setInterest} />
          <SelectGroup label="What do you want next?" options={goals} value={goal} onChange={setGoal} />
        </div>

        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className="w-full py-4 rounded-xl bg-gold text-secondary-foreground font-body font-semibold text-base hover:bg-gold-light transition-all disabled:opacity-40 disabled:cursor-not-allowed glow-gold"
        >
          <Sparkles className="inline w-4 h-4 mr-2" />
          Generate My Law Plan
        </button>

        {plan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 p-8 rounded-2xl bg-card border border-border shadow-card space-y-6"
          >
            <p className="font-body text-foreground">{plan.summary}</p>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2">📚 Recommended Classes</h3>
              <ul className="list-disc list-inside text-muted-foreground font-body text-sm space-y-1">
                {plan.classes.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2">🎯 Activities to Join</h3>
              <ul className="list-disc list-inside text-muted-foreground font-body text-sm space-y-1">
                {plan.activities.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-gold/10 border border-gold/20">
              <h3 className="font-display font-semibold text-gold-dark mb-1">⚡ Do This Today</h3>
              <p className="font-body text-sm text-foreground">{plan.action}</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/emails" className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-navy-light transition-colors">
                Open Email Templates <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/classes" className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-muted text-foreground font-body text-sm font-medium hover:bg-border transition-colors">
                See Classes <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/activities" className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-muted text-foreground font-body text-sm font-medium hover:bg-border transition-colors">
                See Activities <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Quick actions */}
        <div className="mt-16">
          <SectionHeading title="Do This Now" description="Pick one action and do it today." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { emoji: "✉️", title: "10-Minute Move", desc: "Copy one email template and send it to 3 local attorneys or organizations.", link: "/emails", cta: "Open templates" },
              { emoji: "📖", title: "Academic Move", desc: "Check the classes page and circle 2 courses for next year.", link: "/classes", cta: "See classes" },
              { emoji: "🏆", title: "Experience Move", desc: "Choose one activity and commit to trying it this semester.", link: "/activities", cta: "See activities" },
            ].map((item) => (
              <Link key={item.title} to={item.link} className="group block p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-body mb-3">{item.desc}</p>
                <span className="text-sm font-medium text-gold-dark font-body inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {item.cta} <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function SelectGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block font-display font-semibold text-foreground mb-3">{label}</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-3 rounded-xl border text-sm font-body text-left transition-all ${
              value === opt
                ? "border-gold bg-gold/10 text-foreground font-medium"
                : "border-border bg-card text-muted-foreground hover:border-gold/50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StartPage;
