import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const templates = [
  {
    id: "legislator",
    title: "Delegate / Legislator",
    subject: "Virginia student hoping to learn about public service",
    body: `Hello Delegate [Last Name],

My name is [Your Name], and I'm a high school student in [City], Virginia interested in law and public service.

I'm reaching out because [one specific reason: committee you serve on / bill topic / local issue]. If you're open to it, could I ask a few questions (by email or a brief call) about what your work is like and how students can start preparing?

Thank you for your time and for serving our community.

Sincerely,
[Your Full Name]
[School Name] • [City, VA]`,
  },
  {
    id: "attorney",
    title: "Attorney / Law Firm",
    subject: "Student interested in learning about [Practice Area]",
    body: `Hello Mr./Ms. [Last Name],

My name is [Your Name], and I'm a high school student in [City], Virginia interested in pursuing law.

I found your work through [how: firm website / article / recommendation], and I'm especially interested in [one specific detail]. If you have 10–15 minutes, I'd appreciate the chance to ask a few questions about your career path and what students can do now to prepare.

Thank you for considering my request.

Best regards,
[Your Full Name]
[School Name] • [City, VA]`,
  },
  {
    id: "nonprofit",
    title: "Nonprofit / Organization",
    subject: "High school student seeking volunteer opportunities",
    body: `Hello [Organization Name] Team,

My name is [Your Name], and I'm a student at [School Name] in [City], Virginia. I admire the work your organization does in [area of focus] and would love to learn how I could contribute as a volunteer.

Could you please let me know if there are any opportunities for high school students to get involved? I'm particularly interested in [specific task or program].

Thank you for your time and for the impact you make.

Sincerely,
[Your Full Name]
[School Name] • [City, VA]`,
  },
  {
    id: "internship",
    title: "Internship Inquiry",
    subject: "High school student seeking legal internship experience",
    body: `Dear [Recipient Name],

I'm [Your Name], a high school student eager to gain hands-on experience in the legal field. I was inspired by [something notable about the firm or organization] and would like to inquire about internship or shadowing opportunities for students.

Would it be possible to arrange a short informational interview or internship? I'm available [timeframe] and open to any guidelines you might have for applicants.

Thank you for considering my request.

Sincerely,
[Your Full Name]
[School Name] • [City, VA]`,
  },
  {
    id: "followup",
    title: "Follow‑up (7–10 Days)",
    subject: "Checking in on my previous message",
    body: `Hello [Name],

I hope you're doing well. I wanted to follow up on my message sent on [date] regarding [topic]. I understand you're busy and just wanted to see if you might have a few minutes to discuss [your request].

Thank you again for your time and consideration.

Sincerely,
[Your Full Name]
[School Name] • [City, VA]`,
  },
  {
    id: "thankyou",
    title: "Thank‑You / Appreciation",
    subject: "Thank you for your guidance",
    body: `Hello [Name],

Thank you for taking the time to [speak with me/meet with me/respond to my questions]. I appreciate your willingness to share your experience and advice — it has been incredibly helpful as I plan my path toward a legal career.

Sincerely,
[Your Full Name]
[School Name] • [City, VA]`,
  },
];

const EmailsPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(templates[0].id);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const active = templates.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading badge="Copy, Paste, and Send" title="Outreach Email Templates" description="Pick a template, personalize one line, and send it today to attorneys, firms, nonprofits, judges, or community organizations." />

        <div className="p-5 rounded-2xl bg-gold/10 border border-gold/20 mb-10">
          <p className="font-body text-sm text-foreground"><strong>Quick rule:</strong> Keep it short, specific, and polite. Proofread before you send.</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { step: "1", title: "Find 5 places", desc: "Search for local Virginia law firms, legal aid groups, courthouses, prosecutors, or nonprofits." },
            { step: "2", title: "Copy one template", desc: "Use the copy button below, then change the name, city, and one personal sentence." },
            { step: "3", title: "Send today", desc: "Send 3–5 emails. If no reply after 7–10 days, use the follow-up template." },
          ].map((s) => (
            <div key={s.step} className="p-4 rounded-xl bg-card border border-border shadow-card">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center font-display font-bold text-gold-dark text-sm mb-2">{s.step}</div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground font-body">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                activeTab === t.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Active template */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-card border border-border shadow-card"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg font-semibold text-foreground">{active.title}</h3>
            <button
              onClick={() => handleCopy(active.id, `Subject: ${active.subject}\n\n${active.body}`)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-secondary-foreground font-body text-sm font-medium hover:bg-gold-light transition-all"
            >
              {copiedId === active.id ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy template</>}
            </button>
          </div>
          <div className="mb-3 text-sm font-body">
            <span className="text-muted-foreground">Subject: </span>
            <span className="text-foreground font-medium">{active.subject}</span>
          </div>
          <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-body bg-muted/50 p-4 rounded-xl border border-border">{active.body}</pre>
        </motion.div>
      </div>
    </div>
  );
};

export default EmailsPage;
