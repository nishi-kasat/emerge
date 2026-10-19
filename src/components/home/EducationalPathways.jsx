import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Cpu, Briefcase, Hotel } from 'lucide-react';

export default function EducationalPathways() {
  const pathways = [
    {
      id: "medical",
      title: "Medical Education",
      icon: Stethoscope,
      image: "/images/medical-photo.jpg",
      description: "Direct guidance for MBBS, BHMS, BAMS, BPTH, BDS, BOPT, Nursing & Pharmacy. Management quota guidance for state and deemed medical institutions.",
      note: "Seats in Maharashtra, Karnataka, MP, UP, Rajasthan, Punjab & HP",
      filterParam: "Medical & Healthcare"
    },
    {
      id: "engineering",
      title: "Engineering & Technology",
      icon: Cpu,
      image: "/images/engineering-photo.jpg",
      description: "Private university & autonomous college seats for Computer Science, Artificial Intelligence, Robotics, Mechanical, Civil, and Electronics disciplines.",
      note: "Seats in Maharashtra, Karnataka, MP & Rajasthan",
      filterParam: "Engineering & Technology"
    },
    {
      id: "management",
      title: "Management & Business",
      icon: Briefcase,
      image: "/images/management-photo.jpg",
      description: "Top B-school admissions for MBA, PGDM, and BBA. Specialisations in Finance, Marketing, International Business, HR, and Business Analytics.",
      note: "Seats in Maharashtra, Karnataka, Gujarat & Rajasthan",
      filterParam: "Management & Business"
    },
    {
      id: "hospitality",
      title: "Hospitality & Hotel Management",
      icon: Hotel,
      image: "/images/hospitality-photo.jpg",
      description: "Premier hotel management, culinary arts, and luxury hospitality programmes in leading institutions across India and prestigious overseas academies.",
      note: "Admissions in India & Abroad (Switzerland, UAE, Singapore)",
      filterParam: "Hospitality & Tourism"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-badge">Featured Disciplines</div>
          <h2 className="section-title">Educational Pathways</h2>
          <p className="section-subtitle">
            Specialized admission guidance across India's most sought-after higher education pathways and top private universities.
          </p>
        </div>

        <div className="pathways-grid">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="pathway-card">
                <div className="pathway-img-wrap">
                  <img src={item.image} alt={item.title} className="pathway-img" />
                </div>
                <div className="pathway-content">
                  <h3 className="pathway-title">{item.title}</h3>
                  <div className="pathway-note">{item.note}</div>
                  <p className="pathway-desc">{item.description}</p>
                  
                  <Link 
                    to={`/courses?category=${encodeURIComponent(item.filterParam)}`} 
                    className="btn btn-outline-green btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Explore Courses</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
