import SectionHeading from '../ui/SectionHeading';
import SkillTag from '../ui/SkillTag';
import skillCategories from '../../data/skills';
import styles from './SkillsGrid.module.css';

export default function SkillsGrid() {
  return (
    <section id="skills" className={styles.section} aria-label="Technical Skills">
      <div className="container">
        <SectionHeading
          number="03"
          title="[ TECHNICAL SKILLS ]"
          className={styles.heading}
        />

        <dl className={styles.grid}>
          {skillCategories.map((cat) => (
            <div key={cat.id} className={styles.cluster}>
              <dt className={`${styles.category} mono`}>{cat.title}</dt>
              <dd className={styles.skills}>
                {cat.skills.map((skill) => (
                  <SkillTag key={skill} className={styles.chip}>{skill}</SkillTag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

