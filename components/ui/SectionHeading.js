import styles from './SectionHeading.module.css';

/**
 * @param {{ number?: string, title: string, meta?: string, className?: string }} props
 */
export default function SectionHeading({ number, title, meta, className = '' }) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.labelRow}>
        {number && <span className={`${styles.number} mono`}>{number}</span>}
        <span className={`${styles.title}`}>{title}</span>
        {meta && <span className={`${styles.meta} mono`}>{meta}</span>}
      </div>
      <div className={styles.rule} aria-hidden="true" />
    </div>
  );
}

