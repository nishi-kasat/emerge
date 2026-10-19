import React from 'react';
import { organization } from '../../data/organization';

export default function GuidanceProcess() {
  const steps = organization.guidanceSteps;

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-badge">Systematic Support</div>
          <h2 className="section-title">Our Guidance Process</h2>
          <p className="section-subtitle">
            A transparent, structured 5-step counseling approach ensuring students and parents navigate entrance tests, merit cut-offs, and admissions smoothly.
          </p>
        </div>

        <div className="guidance-steps-row">
          {steps.map((item) => (
            <div key={item.step} className="step-card">
              <div className="step-number">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
