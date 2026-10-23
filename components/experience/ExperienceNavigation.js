import Link from 'next/link';
import styles from './ExperienceNavigation.module.css';

export default function ExperienceNavigation({ prev, current, next, total }) {
  return (
    <nav className={styles.nav} aria-label="Experience navigation">
      <div className={styles.prevSlot}>
        {prev ? (
          <Link href={`/experience/${prev.slug}`} className={`${styles.navBtn} mono`}>
            ← [ ← PREVIOUS EXPERIENCE ]
          </Link>
        ) : (
          <span className={`${styles.navBtnDisabled} mono`}>← [ ← PREVIOUS EXPERIENCE ]</span>
        )}
      </div>

      <div className={styles.indicator}>
        <span className={`${styles.indicatorLabel} mono`}>[ RECORD INDEX ]:</span>
        <div className={styles.dots}>
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              aria-label={`Experience ${i + 1}${i === current ? ' (current)' : ''}`}
            />
          ))}
        </div>
        <span className={`${styles.indicatorLabel} mono`}>[ TOTAL: {String(total).padStart(2, '0')} ]</span>
      </div>

      <div className={styles.nextSlot}>
        {next ? (
          <Link href={`/experience/${next.slug}`} className={`${styles.navBtn} mono`}>
            [ NEXT: {next.title.substring(0, 40).toUpperCase()}{next.title.length > 40 ? '…' : ''} → ] →
          </Link>
        ) : (
          <span className={`${styles.navBtnDisabled} mono`}>[ NO FURTHER EXPERIENCES ]</span>
        )}
      </div>
    </nav>
  );
}

