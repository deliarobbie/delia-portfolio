import SkillTag from '../ui/SkillTag';
import styles from './ExperienceHero.module.css';

export default function ExperienceHero({ experience: exp }) {
  return (
    <header className={styles.hero}>
      {exp.image && <img src={exp.image} alt={exp.imageAlt || exp.organization} className={`${styles.image} ${exp.imageStyle === 'screenshot' ? styles.screenshot : ''}`} />}
      <div className={styles.content}>
        <p className={`${styles.meta} mono`}>{exp.organization} / {exp.dateRange}</p>
        <h1 className={styles.title}>{exp.title}</h1>
        <p className={`${styles.role} mono`}>{exp.role} / {exp.location}</p>
        <p className={styles.description}>{exp.summary}</p>
        <div className={styles.skills} aria-label="Skills and tools used">
          {exp.technologies.map((skill) => <SkillTag key={skill}>{skill}</SkillTag>)}
        </div>
        {exp.liveUrl && <a href={exp.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.website} mono`}>Visit Website ↗</a>}
      </div>
    </header>
  );
}
