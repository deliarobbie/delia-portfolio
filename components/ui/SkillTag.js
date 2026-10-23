import styles from './SkillTag.module.css';

export default function SkillTag({ children, className = '' }) {
  return (
    <span className={`${styles.tag} mono ${className}`}>
      {children}
    </span>
  );
}

