import SectionHeading from '../ui/SectionHeading';
import SkillTag from '../ui/SkillTag';
import skillCategories from '../../data/skills';
import styles from './SkillsGrid.module.css';

export default function SkillsGrid() {
  return (
    <section id="skills" className={styles.section} aria-label="Technical Skills & Clusters">
      <div className="container">
        <SectionHeading
          number="03"
          title="[ TECHNICAL SKILLS & CLUSTERS ]"
          meta={`CATEGORIES: ${skillCategories.length.toString().padStart(2, '0')}`}
        />

        <div className={styles.grid}>
          {skillCategories.map((cat, index) => (
            <div key={cat.id} className={styles.cluster}>
              <div className={styles.clusterHeader}>
                <span className={`${styles.clusterLabel} mono`}>{cat.label}</span>
                <span className={`${styles.clusterNum} mono`}>{(index + 1).toString().padStart(2, '0')}</span>
              </div>

              <div className={styles.tags}>
                {cat.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>

              <p className={`${styles.descriptor} mono`}>LEVEL: {cat.descriptor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

