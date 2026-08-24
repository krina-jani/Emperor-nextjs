'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INTERESTS = [
  'Web Development',
  'Mobile Applications',
  'AI Integration',
  'Custom Systems',
  'Other'
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    interest: 'Web Development',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message content is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleInterestSelect = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interest
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        interest: 'Web Development',
        message: ''
      });
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section className={styles.section} id="contact-form-section">
      <Container>
        <div className={styles.grid}>
          {/* Left Column: Info */}
          <div className={styles.infoColumn}>
            <div className={styles.headerGroup}>
              <h2 className={styles.infoTitle}>Let&apos;s start a conversation</h2>
              <p className={styles.infoDesc}>
                Whether you have a specific project outline, questions about our process, or simply want to explore how we can work together, we&apos;re here to help.
              </p>
            </div>

            <div className={styles.infoList}>
              {/* Email */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemLabel}>Email Us</span>
                  <a href="mailto:info@emperorsmartsolutions.com" className={styles.itemValue}>
                    info@emperorsmartsolutions.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemLabel}>Call Us</span>
                  <a href="tel:+916359120081" className={styles.itemValue}>
                    +91 63591 20081
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemLabel}>Our Location</span>
                  <span className={styles.itemValue}>202, Shitiratna Complex, Panchvati, Navrangpura, Ahmedabad - 380009, Gujarat, India</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Clock size={20} />
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemLabel}>Business Hours</span>
                  <span className={styles.itemValue}>Mon – Fri, 9:00 AM – 6:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <span className={styles.socialLabel}>Follow Us</span>
              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/emperorsmartsolutions?igsh=aXR5YXhxMjZhYXAx" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg> Instagram
                </a>
                <a href="https://www.linkedin.com/company/emperor-smart-solutions/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg> LinkedIn
                </a>
                <a href="https://www.facebook.com/people/Vardaan-smart-solutions/61575906045475/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className={styles.formCard}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.formRow}>
                  {/* Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                </div>

                {/* Service Interest Chips */}
                <div className={styles.formGroup}>
                  <label className={`${styles.label} ${styles.chipLabel}`}>
                    What are you looking to build?
                  </label>
                  <div className={styles.chipContainer}>
                    {INTERESTS.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        className={`${styles.chip} ${formData.interest === interest ? styles.chipActive : ''}`}
                        onClick={() => handleInterestSelect(interest)}
                        disabled={isSubmitting}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  rightIcon={<ArrowRight size={16} />}
                  className={styles.submitBtn}
                >
                  Send Message
                </Button>
              </form>
            ) : (
              <div className={styles.successContainer}>
                <div className={styles.successCircle}>
                  <Check size={36} />
                </div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successDesc}>
                  Thank you for reaching out. Our team of experts will review your message and get back to you within 24 hours.
                </p>
                <button type="button" className={styles.resetBtn} onClick={handleReset}>
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8841022131975!2d72.55395561502123!3d23.0278775849503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fa98d287bb%3A0x6739b69b068da6c9!2sShitiratna%20Complex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
              title="Emperor office location map"
            />
            <div className={styles.mapOverlay}>
              <h4 className={styles.overlayTitle}>Headquarters</h4>
              <p className={styles.overlayText}>202, Shitiratna Complex, Panchvati, Navrangpura, Ahmedabad - 380009, Gujarat, India</p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Shitiratna+Complex,+Panchvati,+Navrangpura,+Ahmedabad,+Gujarat,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.directionsBtn}
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
