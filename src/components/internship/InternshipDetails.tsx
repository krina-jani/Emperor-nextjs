import React from 'react';
import styles from './InternshipDetails.module.css';

const InternshipDetails = () => {
  return (
    <section className={styles.detailsSection}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Company Info & About */}
          <div className={styles.leftColumn}>
            <div className={styles.infoBox}>
              <h3 className={styles.boxTitle}>Company Details</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Company Name</span>
                  <span className={styles.value}>Emperor Smart Solutions.</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Founded</span>
                  <span className={styles.value}>2025</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Industry</span>
                  <span className={styles.value}>Technology & Software Development</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Headquarters</span>
                  <span className={styles.value}>2nd floor 202, Shiti Ratna, Commercial, Panchavati Rd, Ellisbridge, Ahmedabad, Gujarat 380006</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Contact</span>
                  <span className={styles.value}>
                    <a href="mailto:emperorsmartsolutions@gmail.com">emperorsmartsolutions@gmail.com</a><br/>
                    <a href="tel:+919327935248">+91 9327 935248</a>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.aboutBox}>
              <h3 className={styles.aboutTitle}>About Emperor</h3>
              <p className={styles.aboutText}>
                Emperor Inc. is a pioneering technology firm specializing in enterprise solutions, digital transformation, and innovative software development. We&apos;re committed to nurturing young talent through our comprehensive internship program that provides real-world experience and mentorship from industry experts.
              </p>
            </div>
          </div>

          {/* Right Column: Available Positions */}
          <div className={styles.rightColumn}>
            <h2 className={styles.sectionTitle}>Available Positions</h2>
            <div className={styles.positionsList}>
              {/* Position 1 */}
              <div className={styles.positionCard}>
                <h4 className={styles.positionTitle}>Web Development</h4>
                <p className={styles.positionDesc}>Build scalable web applications using modern frameworks.</p>
                <div className={styles.skills}>
                  <span className={styles.skill}>JavaScript</span>
                  <span className={styles.skill}>Vue/React</span>
                  <span className={styles.skill}>Node.js</span>
                  <span className={styles.skill}>CSS</span>
                </div>
                <a href="#apply-form" className={styles.applyLink}>Apply Now &rarr;</a>
              </div>

              {/* Position 2 */}
              <div className={styles.positionCard}>
                <h4 className={styles.positionTitle}>Mobile Development</h4>
                <p className={styles.positionDesc}>Create cross-platform mobile applications.</p>
                <div className={styles.skills}>
                  <span className={styles.skill}>React Native</span>
                  <span className={styles.skill}>Flutter</span>
                  <span className={styles.skill}>iOS/Android</span>
                  <span className={styles.skill}>Firebase</span>
                </div>
                <a href="#apply-form" className={styles.applyLink}>Apply Now &rarr;</a>
              </div>

              {/* Position 3 */}
              <div className={styles.positionCard}>
                <h4 className={styles.positionTitle}>Algo Trading</h4>
                <p className={styles.positionDesc}>Build and test algorithmic trading strategies using real market data.</p>
                <div className={styles.skills}>
                  <span className={styles.skill}>Python</span>
                  <span className={styles.skill}>Pandas</span>
                  <span className={styles.skill}>Backtesting</span>
                  <span className={styles.skill}>Trading APIs</span>
                </div>
                <a href="#apply-form" className={styles.applyLink}>Apply Now &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipDetails;
