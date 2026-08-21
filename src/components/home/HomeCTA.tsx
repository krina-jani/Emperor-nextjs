'use client';

import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';
import styles from './HomeCTA.module.css';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HomeCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'web-development',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const titleEl = titleRef.current;
    if (!titleEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(titleEl,
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 40 },
        {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
          y: 0,
          duration: 1.0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleEl,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', projectType: 'web-development', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="consultation-cta" ref={containerRef} className={styles.section}>
      {/* Decorative organic shapes */}
      <div className={cn(styles.bgShape, 'hero-bg-shape')} />

      <Container>
        <div className={styles.panel}>
          <div className={styles.grid}>
            {/* Left Column: Copy */}
            <div className={styles.copySide}>
              <span className={styles.badge}>GET IN TOUCH</span>
              <h2 ref={titleRef} className={styles.title}>
                Let&apos;s Build Something Smart.
              </h2>
              <p className={styles.desc}>
                Discuss your website requirements and create a digital solution designed around your business.
              </p>
              
              <div className={styles.benefitList}>
                <div className={styles.benefit}>
                  <CheckCircle size={16} className={styles.checkIcon} />
                  <span>No obligation technical briefing</span>
                </div>
                <div className={styles.benefit}>
                  <CheckCircle size={16} className={styles.checkIcon} />
                  <span>Custom scope proposal provided</span>
                </div>
                <div className={styles.benefit}>
                  <CheckCircle size={16} className={styles.checkIcon} />
                  <span>E-signed mutual NDA prior to consultation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className={styles.formSide}>
              <div className={styles.formCard}>
                {isSuccess ? (
                  <div className={styles.successBlock}>
                    <CheckCircle className={styles.successIcon} size={48} />
                    <h3 className={styles.successTitle}>Request Submitted</h3>
                    <p className={styles.successDesc}>
                      Thank you. Our engineering team will review your requirements and email you within 2 business hours to schedule a consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                      <label htmlFor="cta-name" className={styles.label}>Full Name</label>
                      <input
                        type="text"
                        id="cta-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="cta-email" className={styles.label}>Corporate Email</label>
                      <input
                        type="email"
                        id="cta-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="cta-projectType" className={styles.label}>Project Scope</label>
                      <select
                        id="cta-projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="web-development">Web Application Development</option>
                        <option value="ecommerce">E-commerce Integration</option>
                        <option value="corporate-site">Corporate Landing Design</option>
                        <option value="performance">Performance & Auditing</option>
                        <option value="security">Security & Hardening</option>
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="cta-message" className={styles.label}>How can we help?</label>
                      <textarea
                        id="cta-message"
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your objectives or challenges..."
                        className={styles.textarea}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="secondary"
                      isLoading={isSubmitting}
                      rightIcon={<ArrowRight size={14} />}
                      className={styles.submitBtn}
                    >
                      Start Your Project
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;
