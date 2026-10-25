import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import SkillTag from '../ui/SkillTag';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import experiences from '../../data/experiences';
import styles from './ExperienceTimeline.module.css';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className={styles.section} aria-label="Experience & Career Timeline">
      <div className="container">
        <SectionHeading
          number="01"
          title="[ EXPERIENCE & CAREER TIMELINE ]"
          meta="[ ↗ BROWSE ALL ]"
        />

        <div className={styles.grid}>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience: exp }) {
  const statusLabel = exp.status === 'active' ? 'ACTIVE' : 'ARCHIVED';
  const dateLabel = exp.dateRange;

  return (
    <article className={styles.card}>
      {/* Card header */}
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <span className={`${styles.roleId} mono`}>ROLE_ID: {exp.id}</span>
        </div>
        <div className={styles.headerRight}>
          <span className={`${styles.date} mono`}>{dateLabel}</span>
          <span className={`${styles.statusBadge} ${styles[exp.status]} mono`}>
            {statusLabel}
          </span>
        </div>
      </div>

      {/* Logo + title row */}
      <div className={styles.titleRow}>
        <div className={styles.logoBox} aria-hidden="true">
          <span className="mono" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>LOGO</span>
        </div>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>{exp.title}</h2>
          <div className={styles.orgRow}>
            <span className={`${styles.org} mono`}>{exp.organization}</span>
            <span className={`${styles.location} mono`}>// {exp.location}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className={styles.summary}>{exp.summary}</p>

      {/* Tech tags */}
      <div className={styles.tags}>
        {exp.technologies.map((tech) => (
          <SkillTag key={tech}>{tech}</SkillTag>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.cardFooter}>
        <Link href={`/experience/${exp.slug}`} className={`${styles.inspectLink} mono`}>
          [ Inspect Role & Metrics → ]
        </Link>
        <span className={`${styles.statusText} mono`}>STATUS: {statusLabel}</span>
      </div>
    </article>
  );
}

