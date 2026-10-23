import styles from './ImagePlaceholder.module.css';

/**
 * @param {{ label?: string, aspectRatio?: string, className?: string, sublabel?: string }} props
 */
export default function ImagePlaceholder({ label = 'IMAGE', aspectRatio = '4/5', className = '', sublabel = '' }) {
  return (
    <div
      className={`${styles.placeholder} ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div className={styles.inner}>
        <div className={styles.crosshair} aria-hidden="true">
          <span className={styles.crossV} />
          <span className={styles.crossH} />
          <span className={styles.crossCircle} />
        </div>
        <span className={`${styles.label} mono`}>{label}</span>
        {sublabel && <span className={`${styles.sublabel} mono`}>{sublabel}</span>}
      </div>
      {/* Corner marks */}
      <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
    </div>
  );
}

