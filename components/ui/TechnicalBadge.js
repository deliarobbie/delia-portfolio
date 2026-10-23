import styles from './TechnicalBadge.module.css';

/**
 * @param {{ children: React.ReactNode, variant?: 'default'|'accent'|'muted', className?: string }} props
 */
export default function TechnicalBadge({ children, variant = 'default', className = '' }) {
  return (
    <span className={`${styles.badge} ${styles[variant]} mono ${className}`}>
      {children}
    </span>
  );
}

