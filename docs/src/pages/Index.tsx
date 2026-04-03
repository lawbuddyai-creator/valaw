import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Mail, Users, GraduationCap, Compass, Quote, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-virginia.jpg";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Compass, title: "Start Here", desc: "Get a custom plan based on your grade, interests, and goals.", link: "/start", cta: "Build my plan" },
  { icon: Mail, title: "Email Templates", desc: "Ready-to-send messages for attorneys, nonprofits, and internships.", link: "/emails", cta: "Use templates" },
  { icon: Users, title: "Activities", desc: "Clubs and experiences that build speaking, leadership, and service.", link: "/activities", cta: "See activities" },
  { icon: BookOpen, title: "Classes", desc: "Courses that strengthen writing, civics, analysis, and speaking.", link: "/classes", cta: "See classes" },
  { icon: GraduationCap, title: "Resources", desc: "Organizations, prep tools, competitions, and opportunities.", link: "/resources", cta: "Explore" },
  { icon: Sparkles, title: "Your Path", desc: "Track milestones from high school to passing the Virginia bar.", link: "/path", cta: "View path" },
];

const testimonials = [
  { quote: "VA Law helped me discover pre‑law programs I never knew existed. The clear steps kept me on track through high school and into college.", name: "Maya", role: "UVA Student" },
  { quote: "I was overwhelmed at first, but the resources and email templates made it so much easier to connect with attorneys and professors.", name: "Jacob", role: "High School Senior" },
  { quote: "The timeline feature on the Path page is a game changer. It feels great to check off milestones and see my progress.", name: "Aaliyah", role: "Pre‑Law Student" },
];

const stats = [
  { value: "6", label: "Email Templates" },
  { value: "20+", label: "Resources Listed" },
  { value: "4", label: "Career Milestones" },
  { value: "100%", label: "Free to Use" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Virginia Capitol" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-semibold font-body uppercase tracking-widest mb-6"
          >
            For Virginia High School Students
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Figure out your next{" "}
            <span className="text-gradient-gold">law step</span>{" "}
            in minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10"
          >
            VA Law helps you choose classes, build experience, and take action. Start with a personalized plan, copy real outreach emails, and find the next move for your grade level.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/start" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-secondary-foreground font-body font-semibold text-base hover:bg-gold-light transition-all glow-gold">
              Start Here <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/emails" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-base hover:bg-primary-foreground/10 transition-all">
              Copy an Email Template
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-primary-foreground/50 font-body"
          >
            <strong className="text-primary-foreground/70">Seen on TikTok:</strong>{" "}
            practical steps from{" "}
            <a href="https://www.tiktok.com/@valawhs" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">@valawhs</a>
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">{s.value}</div>
              <div className="text-sm text-muted-foreground font-body mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading badge="Explore the Guide" title="Everything You Need to Start" description="From classes and activities to email templates and a full career path — all tailored to Virginia students." />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={item}>
                <Link
                  to={f.link}
                  className="group block h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <f.icon className="w-6 h-6 text-gold-dark" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">{f.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-gold-dark font-body group-hover:gap-2 transition-all">
                    {f.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading badge="Success Stories" title="What Students Are Saying" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-card"
              >
                <Quote className="w-8 h-8 text-gold/30 mb-3" />
                <p className="text-foreground font-body text-sm leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center font-display font-bold text-gold-dark text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="font-body text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-3xl bg-hero text-primary-foreground"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to take the first step?</h2>
            <p className="text-primary-foreground/70 font-body text-lg mb-8">
              Answer three quick questions and get a personalized action plan you can start today.
            </p>
            <Link to="/start" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-secondary-foreground font-body font-semibold hover:bg-gold-light transition-all glow-gold">
              Build My Plan <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
