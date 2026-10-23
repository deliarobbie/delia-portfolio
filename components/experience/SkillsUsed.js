'use client';

import { useState } from 'react';
import styles from './SkillsUsed.module.css';

const filters = ['ALL', 'BACKEND', 'INFRA'];
const filterMap = { ALL: 'all', BACKEND: 'backend', INFRA: 'infrastructure' };

export default function SkillsUsed({ skills }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = skills.filter((skill) => {
    if (activeFilter === 'ALL') return true;
    return skill.category === filterMap[activeFilter];
  });

  return (
    <section className={styles.section} aria-label="Skills and tools used">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={`${styles.sectionTag} mono`}>[ SKILLS_TAXONOMY: CORE_COMPETENCIES ]</span>
          <h2 className={styles.title}>[ SKILLS &amp; TOOLS USED ]</h2>
          <span className={`${styles.subtitle} mono`}>
            STACK_DEPENDENCY_GRAPH // PRIMARY_STACK_CONTAINERS
          </span>
        </div>
        <div className={styles.filterGroup} role="group" aria-label="Filter skills">
          <span className={`${styles.filterLabel} mono`}>[ FILTER_VIEW ]:</span>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''} mono`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.map((skill) => (
          <div key={skill.name} className={`${styles.skillCard} ${styles[skill.category]}`}>
            <span className={`${styles.skillNum} mono`}>{skill.number}</span>
            <div className={styles.skillContent}>
              <span className={`${styles.skillName} mono`}>[ {skill.name} ]</span>
              <span className={styles.skillSub}>{skill.subtitle}</span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className={styles.empty}>
            <span className="mono">No skills in this category</span>
          </div>
        )}
      </div>
    </section>
  );
}

