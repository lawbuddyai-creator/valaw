import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-6 h-6 text-gold" />
            <span className="font-display text-lg font-bold">VA Law</span>
          </div>
          <p className="text-sm text-primary-foreground/70 font-body">
            Helping Virginia high school students navigate their path to a legal career.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Guide</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
            <li><Link to="/start" className="hover:text-gold transition-colors">Start Here</Link></li>
            <li><Link to="/path" className="hover:text-gold transition-colors">Path</Link></li>
            <li><Link to="/classes" className="hover:text-gold transition-colors">Classes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
            <li><Link to="/activities" className="hover:text-gold transition-colors">Activities</Link></li>
            <li><Link to="/resources" className="hover:text-gold transition-colors">Resources</Link></li>
            <li><Link to="/emails" className="hover:text-gold transition-colors">Email Templates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
            <li><a href="https://www.tiktok.com/@valawhs" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">@valawhs on TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50 font-body">
        © {new Date().getFullYear()} VA Law — For Virginia students, by Virginia students.
      </div>
    </div>
  </footer>
);

export default Footer;
