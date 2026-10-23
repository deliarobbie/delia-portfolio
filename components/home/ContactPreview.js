import ImagePlaceholder from '../ui/ImagePlaceholder';
import Button from '../ui/Button';
import profile from '../../data/profile';
import styles from './ContactPreview.module.css';

export default function ContactPreview() {
  const scheduleDisabled = !profile.schedulingUrl || profile.schedulingUrl.includes('PLACEHOLDER');
  const emailDisabled = !profile.email || profile.email.includes('PLACEHOLDER');

  return (
    <section className={styles.section} aria-label="Profile — Contact Preview">
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className={`${styles.labelText} mono`}>// PROFILE_BANNER // BIO PREVIEW & ROUTING //</span>
          <span className={`${styles.labelMeta} mono`}>DRAFT_STATIC_DECISION // DRAFT_STAMP</span>
        </div>

        <div className={styles.inner}>
          {/* Left: Avatar */}
          <div className={styles.avatarCol}>
            <div className={styles.avatarFrame}>
              <ImagePlaceholder
                label="AVATAR_1.2"
                sublabel="// ID_BADGE_V2"
                aspectRatio="1/1"
                className={styles.avatar}
              />
            </div>
            <span className={`${styles.avatarLabel} mono`}>// RD_BADGE_V2</span>
          </div>

          {/* Center: Bio */}
          <div className={styles.bioCol}>
            <h2 className={styles.name}>[ {profile.name} — CIT Specialist ]</h2>
            <p className={`${styles.title} mono`}>
              [ Solutions Architect & Software Systems Engineer ]
            </p>
            <p className={styles.bio}>
              Actively pursuing technical architecture roles with high-impact infrastructure challenges.
              Let&apos;s discuss system reliability, latency reduction, or distributed engineering paths.
            </p>
            <div className={styles.meta}>
              <span className={`${styles.metaItem} mono`}>FOR: 1000_IMPACT_CLI</span>
              <span className={`${styles.metaItem} mono`}>// [RD_OPS_BADGE_2]</span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className={styles.actionsCol}>
            <Button
              href={emailDisabled ? undefined : `mailto:${profile.email}`}
              variant="primary"
              disabled={emailDisabled}
              aria-label={emailDisabled ? 'Email not configured' : `Email ${profile.name}`}
            >
              ✉ Email Direct
            </Button>
            <Button
              href={scheduleDisabled ? undefined : profile.schedulingUrl}
              variant="secondary"
              external={!scheduleDisabled}
              disabled={scheduleDisabled}
              aria-label={scheduleDisabled ? 'Scheduling not configured' : 'Schedule a screen'}
            >
              ⊞ Schedule Screen
            </Button>
            {(scheduleDisabled || emailDisabled) && (
              <span className={`${styles.configNote} mono`}>
                Configure in data/profile.js
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

