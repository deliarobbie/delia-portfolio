import Link from 'next/link';
import experiences from '../../data/experiences';
import SectionHeading from '../../components/ui/SectionHeading';
import SkillTag from '../../components/ui/SkillTag';
import { getStatusInfo } from '../../lib/utils';
import styles from './page.module.css';

export const metadata = {
  title: 'Experience',
  description: 'Career timeline and professional experience in defense systems, AI planning, and software engineering.',
};

export default function ExperiencePage() {
  return (
    <div className={`container ${styles.page}`}>
      <SectionHeading
        number="EXP"
        title="[ EXPERIENCE & CAREER TIMELINE ]"
        meta={`[ TOTAL: ${String(experiences.length).padStart(2, '0')} ]`}
      />

      <div className={styles.list}>
        {experiences.map((exp, i) => {
          const { label } = getStatusInfo(exp.status);
          return (
            <article key={exp.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                  <span className={`${styles.expId} mono`}>{exp.id}</span>
                  <span className={`${styles.orgShort} mono`}>{exp.orgShort}</span>
                </div>
                <div className={styles.headerRight}>
                  <span className={`${styles.date} mono`}>{exp.dateRange}</span>
                  <span className={`${styles.status} ${styles[exp.status]} mono`}>{label}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <img src={exp.logo} alt={exp.logoAlt} className={styles.logo} />
                <div className={styles.content}>
                  <h2 className={styles.title}>{exp.title}</h2>
                  <p className={`${styles.org} mono`}>{exp.organization} // {exp.location}</p>
                  <p className={styles.summary}>{exp.summary}</p>
                  <div className={styles.tags}>
                    {exp.technologies.map((t) => (
                      <SkillTag key={t}>{t}</SkillTag>
                    ))}
                  </div>
                </div>
                <div className={styles.cardCta}>
                  <Link href={`/experience/${exp.slug}`} className={`${styles.viewLink} mono`}>
                    [ VIEW DETAILS → ]
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

