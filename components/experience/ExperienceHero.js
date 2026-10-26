import ImagePlaceholder from '../ui/ImagePlaceholder';
import TechnicalBadge from '../ui/TechnicalBadge';
import SkillTag from '../ui/SkillTag';
import { getStatusInfo } from '../../lib/utils';
import styles from './ExperienceHero.module.css';

export default function ExperienceHero({ experience: exp }) {
  const { label: statusLabel } = getStatusInfo(exp.status);

  return (
    <section className={styles.section} aria-label="Experience hero">
      <div className={styles.label}>
        <span className={`${styles.labelText} mono`}>[ SECTION: HERO_SUMMARY ]</span>
      </div>

      <div className={styles.grid}>
        {/* Left: diagram */}
        <div className={styles.imageCol}>
          {exp.image ? (
            <img src={exp.image} alt="Air Force Research Laboratory" className={styles.heroImage} />
          ) : <ImagePlaceholder
            label="[ ARCHITECTURAL_OVERVIEW ]"
            sublabel="[ 4:3 WIREFRAME_MEDIA_BOX ]"
            aspectRatio="4/3"
            className={styles.diagram}
          />}
          {!exp.image && <div className={styles.imageMeta} aria-hidden="true">
            <span className="mono">{exp.id}_AIR_ATTACK_SCHEMATIC_V2.PNG</span>
            <span className="mono">APEX_GEAR // HCD_AI_FLOW</span>
          </div>}
          <span className={`${styles.figNum} mono`}>FIG_01_A</span>
        </div>

        {/* Right: content */}
        <div className={styles.contentCol}>
          <div className={styles.topMeta}>
            <TechnicalBadge variant="accent">EXP #{exp.id.split('-')[1]}</TechnicalBadge>
            <span className={`${styles.roleTier} mono`}>
              ROLE_TIER: DEFENSE SYSTEMS // LEAD AI ARCHITECTURE
            </span>
          </div>

          <h1 className={styles.title}>
            [ {exp.title.toUpperCase()} ]
          </h1>

          <div className={styles.orgRow}>
            <TechnicalBadge>{exp.organization} ({exp.metaContract?.split(':')[1]?.trim() || ''})</TechnicalBadge>
            <TechnicalBadge>DEFENSE SYSTEMS / AI ARCHITECTURE</TechnicalBadge>
          </div>
          <TechnicalBadge>ACTIVE CONTRACT / DELIVERY</TechnicalBadge>

          <div className={styles.scopeBlock}>
            <span className={`${styles.scopeLabel} mono`}>[ ROLE OVERVIEW / SCOPE ]</span>
            <p className={styles.scopeText}>{exp.fullDescription || exp.summary}</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.metaRow}>
            {exp.metaScope && <span className={`${styles.metaItem} mono`}>[ SCOPE COORDINATES ]: {exp.metaScope}</span>}
            {exp.metaContract && <span className={`${styles.metaItem} mono`}>{exp.metaContract}</span>}
            {exp.metaClearance && <span className={`${styles.metaItem} mono`}>{exp.metaClearance}</span>}
          </div>

          {exp.stack && (
            <TechnicalBadge variant="muted">{exp.stack}</TechnicalBadge>
          )}
        </div>
      </div>
    </section>
  );
}

