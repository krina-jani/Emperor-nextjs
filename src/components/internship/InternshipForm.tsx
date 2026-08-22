'use client';

import React, { useState } from 'react';
import { Upload, ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';
import styles from './InternshipForm.module.css';

const POSITIONS = ['Web Development', 'Mobile Development', 'Algo Trading'];

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    course: '',
    graduationYear: '2026',
    position: '',
    skills: '',
    portfolio: '',
    coverLetter: '',
  });

  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handlePositionSelect = (position: string) => {
    setFormData((prev) => ({ ...prev, position }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section className={styles.formSection} id="apply-form">
      <div className="container">
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>Apply for Internship</h2>
            <p className={styles.subtitle}>Fill out the form below and we'll get back to you soon.</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className={styles.input} />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Graduation Year *</label>
                  <select name="graduationYear" required value={formData.graduationYear} onChange={handleInputChange} className={styles.select}>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>University/College *</label>
                  <input type="text" name="university" required value={formData.university} onChange={handleInputChange} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Course/Field of Study *</label>
                  <input type="text" name="course" required value={formData.course} onChange={handleInputChange} className={styles.input} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Position Applying For *</label>
                <div className={styles.chipContainer}>
                  {POSITIONS.map((pos) => (
                    <button
                      key={pos}
                      type="button"
                      className={`${styles.chip} ${formData.position === pos ? styles.chipActive : ''}`}
                      onClick={() => handlePositionSelect(pos)}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Technical Skills (comma separated) *</label>
                <input type="text" name="skills" required value={formData.skills} onChange={handleInputChange} placeholder="e.g. React, Node.js, Python" className={styles.input} />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Portfolio/GitHub Link (Optional)</label>
                <input type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange} placeholder="https://" className={styles.input} />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Cover Letter *</label>
                <textarea name="coverLetter" required value={formData.coverLetter} onChange={handleInputChange} rows={5} className={styles.textarea} placeholder="Why do you want to intern with us?"></textarea>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Upload Resume (PDF, DOC, DOCX) *</label>
                <div className={styles.uploadArea}>
                  <input type="file" id="resume" accept=".pdf,.doc,.docx" required onChange={handleFileChange} className={styles.fileInput} />
                  <label htmlFor="resume" className={styles.uploadLabel}>
                    <Upload size={24} className={styles.uploadIcon} />
                    <span className={styles.uploadText}>
                      {fileName ? fileName : 'Drop your resume here or click to browse'}
                    </span>
                    <span className={styles.uploadHint}>Max file size: 5MB</span>
                  </label>
                </div>
              </div>

              <div className={styles.submitWrapper}>
                <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} rightIcon={<ArrowRight size={16} />} className={styles.submitBtn}>
                  Submit Application
                </Button>
              </div>
            </form>
          ) : (
            <div className={styles.successState}>
              <div className={styles.successIcon}>
                <Check size={48} />
              </div>
              <h3 className={styles.successTitle}>Application Submitted!</h3>
              <p className={styles.successText}>Thank you for applying. Our team will review your application and get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InternshipForm;
