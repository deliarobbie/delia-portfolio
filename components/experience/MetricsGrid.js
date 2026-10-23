import styles from './MetricsGrid.module.css';

export default function MetricsGrid({ metrics }) {
  return (
    <section className={styles.section} aria-label="Quantifiable impact and telemetry">
      <div className={styles.header}>
        <span className={`${styles.sectionTag} mono`}>[ SKILLS_TAXONOMY: CORE_COMPETENCIES ]</span>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>[ QUANTIFIABLE IMPACT / TELEMETRY ]</h2>
          <span className={`${styles.matrixTag} mono`}>[ 2x2_MATRIX ]</span>
        </div>
        {metrics.some((m) => m.isDraft) && (
          <div className={styles.draftWarning}>
            <span className={`${styles.draftText} mono`}>
              ⚠ DRAFT_DATA — Metrics marked with * are wireframe estimates pending verification. Do not present as verified achievements.
            </span>
          </div>
        )}
      </div>

      <div className={styles.grid}>
        {metrics.map((metric, i) => (
          <div key={i} className={`${styles.metricCard} ${metric.isDraft ? styles.draft : ''}`}>
            <div className={styles.metricMeta}>
              <span className={`${styles.metricId} mono`}>[ METRIC_{String(i + 1).padStart(2, '0')} ]</span>
              {metric.isDraft && <span className={`${styles.draftTag} mono`}>*DRAFT</span>}
            </div>
            <div className={styles.metricValue}>{metric.value}</div>
            <div className={`${styles.metricLabel} mono`}>[ {metric.label.toUpperCase()} ]</div>
            {metric.sublabel && (
              <div className={`${styles.metricSublabel} mono`}>{metric.sublabel}</div>
            )}
          </div>
        ))}
      </div>

      {/* Telemetry bar */}
      <div className={styles.telemetry} aria-hidden="true">
        <span className={`${styles.telemetryLabel} mono`}>[ MAAP_PLANNING_CYCLE_THROUGHPUT ]</span>
        <span className={`${styles.telemetryStatus} mono`}>LIVE_MONITOR</span>
        <div className={styles.telemetryLine}>
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className={styles.telemetryDot}
              style={{ opacity: Math.random() * 0.6 + 0.2, height: `${Math.random() * 12 + 4}px` }}
            />
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className={styles.statusBar}>
        <span className={`${styles.statusItem} mono`}>[ STATUS: STAKEHOLDERS_VERIFIED // ACTIVE ]</span>
        <span className={`${styles.statusItem} mono`}>[ PROGRAM_PHASE: *FLIGHT_TEST_READINESS ]</span>
      </div>
    </section>
  );
}

