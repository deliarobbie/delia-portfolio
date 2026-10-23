import skillCategories from '../../data/skills';
import SectionHeading from '../../components/ui/SectionHeading';
import SkillTag from '../../components/ui/SkillTag';
import styles from './page.module.css';

export const metadata = {
  title: 'Tech Skills',
  description: 'Technical skill clusters covering programming, cloud, systems, web, AI, and methodologies.',
};

export default function SkillsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <SectionHeading
        number="SKL"
        title="[ TECHNICAL SKILLS & COMPETENCIES ]"
        meta={`[ CLUSTERS: ${String(skillCategories.length).padStart(2, '0')} ]`}
      />

      <div className={styles.intro}>
        <p className={styles.introText}>
          Comprehensive technical proficiencies spanning distributed systems engineering, cloud infrastructure,
          full-stack web development, defense simulation modeling, and human-centered AI systems.
        </p>
      </div>

      <div className={styles.grid}>
        {skillCategories.map((cat, index) => (
          <section key={cat.id} className={styles.cluster} aria-label={cat.title}>
            <div className={styles.clusterHeader}>
              <div className={styles.clusterMeta}>
                <span className={`${styles.clusterNum} mono`}>{String(index + 1).padStart(2, '0')}</span>
                <span className={`${styles.clusterLabel} mono`}>{cat.label}</span>
              </div>
              <h2 className={styles.clusterTitle}>{cat.title}</h2>
            </div>

            <div className={styles.skillList}>
              {cat.skills.map((skill, si) => (
                <div key={skill} className={styles.skillRow}>
                  <span className={`${styles.skillIndex} mono`}>{String(si + 1).padStart(2, '0')}</span>
                  <span className={styles.skillName}>{skill}</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillBarFill} />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.clusterFooter}>
              <div className={styles.tags}>
                {cat.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
              <p className={`${styles.descriptor} mono`}>LEVEL: {cat.descriptor}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

