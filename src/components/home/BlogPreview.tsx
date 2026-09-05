'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import styles from './BlogPreview.module.css';

const articles = [
  {
    id: 'algo-trading-speed',
    title: 'How Algorithmic Trading Software Works — And Why Speed Matters',
    category: 'Algo Trading',
    readTime: '6 min read',
    date: 'Sep 2026',
    excerpt:
      'Execution speed separates profitable trading strategies from costly slippage. Here is how direct broker API integrations, sub-millisecond execution, and strict risk rules work in production.',
    slug: '/blog/how-algorithmic-trading-software-works',
  },
  {
    id: 'custom-vs-off-the-shelf',
    title: 'Custom Software vs. Off-the-Shelf: Which One Does Your Business Need?',
    category: 'Custom Software',
    readTime: '8 min read',
    date: 'Aug 2026',
    excerpt:
      'SaaS subscriptions add up fast and rarely fit unique business operations. Learn how to evaluate whether a tailored software system pays off in efficiency and long-term cost.',
    slug: '/blog/custom-software-vs-off-the-shelf',
  },
  {
    id: 'websites-fail-leads',
    title: 'Why Most Business Websites Fail to Generate Leads (And How to Fix It)',
    category: 'Web Development',
    readTime: '5 min read',
    date: 'Aug 2026',
    excerpt:
      'Pretty designs do not matter if visitors leave in three seconds or cannot find the contact button. Discover the core factors that turn website traffic into high-value sales inquiries.',
    slug: '/blog/why-business-websites-fail-to-generate-leads',
  },
];

export const BlogPreview: React.FC = () => {
  return (
    <section className={styles.section} id="blog">
      <Container>
        <FadeIn direction="up">
          <div className={styles.header}>
            <span className={styles.eyebrow}>[09] Knowledge & Insights</span>
            <h2 className={styles.title}>From the Blog</h2>
            <p className={styles.introDesc}>
              Thoughts on web development, software, algo trading, and everything in between.
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <FadeIn key={article.id} direction="up" delay={`${index * 100}ms`}>
              <article className={styles.articleCard}>
                <div className={styles.metaTop}>
                  <span className={styles.categoryBadge}>{article.category}</span>
                  <div className={styles.timeWrapper}>
                    <Clock size={13} className={styles.clockIcon} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className={styles.articleTitle}>
                  <Link href={article.slug} className={styles.titleLink}>
                    {article.title}
                  </Link>
                </h3>

                <p className={styles.excerpt}>{article.excerpt}</p>

                <div className={styles.cardFooter}>
                  <Link href={article.slug} className={styles.readMoreLink}>
                    <span>Read Article</span>
                    <ArrowRight size={15} className={styles.linkArrow} />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay="200ms">
          <div className={styles.moreArticlesRow}>
            <Link href="/blog" className={styles.viewBlogBtn}>
              <BookOpen size={18} />
              <span>Explore All Articles</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default BlogPreview;
