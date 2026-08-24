import Link from 'next/link';
import Container from '../components/ui/Container';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.pageWrapper}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className={styles.button}>
            Return Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
