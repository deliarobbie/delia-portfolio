import styles from './Deliverables.module.css';

export default function Deliverables({ deliverables }) {
  return (
    <section className={styles.section} aria-label="Key architectural milestones and deliverables">
      <div className={styles.header}>
        <span className={`${styles.sectionTag} mono`}>[ MODULE: ARCHITECTURAL_DELIVERABLES ]</span>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>[ KEY ARCHITECTURAL MILESTONES &amp; DELIVERABLES ]</h2>
          <span className={`${styles.count} mono`}>[ COUNT: {String(deliverables.length).padStart(2, '0')} ]</span>
        </div>
      </div>

      <div className={styles.list}>
        {deliverables.map((d) => (
          <div key={d.number} className={styles.item}>
            <div className={styles.itemHeader}>
              <span className={`${styles.itemNum} mono`}>{String(d.number).padStart(2, '0')}</span>
              <h3 className={`${styles.itemTitle} mono`}>[ {d.title.toUpperCase()} ]</h3>
              {d.tag && <span className={`${styles.itemTag} mono`}>[ {d.tag} ]</span>}
            </div>
            <p className={styles.itemDesc}>{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

