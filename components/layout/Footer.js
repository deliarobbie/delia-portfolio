import Link from 'next/link';
import profile from '../../data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <span className={`${styles.copyright} mono`}>
          © {year} {profile.name}{' '}
          <span className={styles.meta}>[CIT_PORTFOLIO_V1.0.0]</span>
          <span className={styles.sep}> | </span>
          <span className={styles.status}>[STATUS: OPEN_TO_ROLES]</span>
        </span>

        <nav className={styles.links} aria-label="Footer navigation">
          {profile.github && profile.github !== 'https://github.com/PLACEHOLDER_GITHUB' && (
            <a
              href={profile.github}
              className={`${styles.link} mono`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              [ GitHub ]
            </a>
          )}
          {profile.github && profile.github.includes('PLACEHOLDER') && (
            <span className={`${styles.link} ${styles.placeholder} mono`} title="Configure in data/profile.js">
              [ GitHub ]
            </span>
          )}
          {profile.linkedin && !profile.linkedin.includes('PLACEHOLDER') && (
            <a
              href={profile.linkedin}
              className={`${styles.link} mono`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              [ LinkedIn ]
            </a>
          )}
          {profile.linkedin && profile.linkedin.includes('PLACEHOLDER') && (
            <span className={`${styles.link} ${styles.placeholder} mono`} title="Configure in data/profile.js">
              [ LinkedIn ]
            </span>
          )}
          <a
            href={profile.resumeFile}
            className={`${styles.link} mono`}
            download
            aria-label="Download resume"
          >
            [ Resume ]
          </a>
        </nav>
      </div>
    </footer>
  );
}

