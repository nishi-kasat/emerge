import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, Wheat, Atom, Building2, Palette, Briefcase, 
  GraduationCap, Cpu, Stethoscope, Landmark, Brain, Terminal, 
  BookOpen, Scale, Radio, Music, Dumbbell, Trophy, Ship, Hotel, ArrowRight 
} from 'lucide-react';
import { fieldsOfStudy } from '../../data/fields';

const iconMap = {
  Calculator,
  Wheat,
  Atom,
  Building2,
  Palette,
  Briefcase,
  GraduationCap,
  Cpu,
  Stethoscope,
  Landmark,
  Brain,
  Terminal,
  BookOpen,
  Scale,
  Radio,
  Music,
  Dumbbell,
  Trophy,
  Ship,
  Hotel
};

export default function FieldsOfStudy() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-badge">Comprehensive Directory</div>
          <h2 className="section-title">Explore Fields of Study</h2>
          <p className="section-subtitle">
            Beyond conventional courses, Emerge provides counselling across 20 diverse academic streams for domestic and overseas opportunities.
          </p>
        </div>

        <div className="fields-grid">
          {fieldsOfStudy.map((field) => {
            const IconComponent = iconMap[field.icon] || GraduationCap;
            return (
              <Link 
                key={field.id}
                to={`/courses?category=${encodeURIComponent(field.category)}`}
                className="field-card"
              >
                <div className="field-icon-box">
                  <IconComponent size={22} />
                </div>
                <div className="field-info">
                  <h4>{field.name}</h4>
                  <p>{field.desc}</p>
                  <span className="field-count">{field.coursesCount}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/courses" className="btn btn-primary">
            <span>View Full Course Directory</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
