import Image from 'next/image';
import headshot from '../../public/images/profile/headshot.jpeg';
import Button from '../ui/Button';
import profile from '../../data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.section} aria-label="Hero — Professional Introduction">
      <div className={`container ${styles.grid}`}>

        {/* Left: Portrait */}
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <Image
              src={headshot}
              alt={`Headshot of ${profile.name}`}
              sizes="(max-width: 767px) 320px, (max-width: 991px) 50vw, 40vw"
              priority
              className={styles.portrait}
            />
            <div className={styles.imageCaption} aria-hidden="true">
              <span className="mono">FIGURE 1 // ROBBIE_DELIA_HERO_ASSET</span>
              <span className="mono">TYPE: PORTRAIT</span>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className={styles.contentCol}>
          <div className={styles.categoryBadge}>
            <span className={`${styles.badgeInner} mono`}>
              // CANDIDATE // ARCHITECTURE & SYSTEMS ENGINEERING
            </span>
          </div>

          <h1 className={styles.name}>[ {profile.name} ]</h1>
          <p className={`${styles.subtitle} mono`}>
            [ {profile.title} ]
          </p>

          <div className={styles.summaryBlock}>
            <span className={`${styles.summaryLabel} mono`}>// PROFESSIONAL_ABSTRACT</span>
            <p className={styles.summary}>{profile.summary}</p>
          </div>

          <div className={styles.actions}>
            <Button
              href={profile.resumeFile}
              variant="primary"
              download
              aria-label="Download resume PDF"
            >
              ▼ Resume.pdf
            </Button>
            <Button
              href={profile.github}
              variant="secondary"
              external
              aria-label="GitHub profile"
            >
              { '{ ' }GitHub{ ' }' }
            </Button>
            <Button
              href={profile.linkedin}
              variant="secondary"
              external
              aria-label="LinkedIn profile"
            >
              &lt; LinkedIn / crit-delia &gt;
            </Button>
          </div>

          {/* Metadata cards */}
          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <span className={`${styles.metaLabel} mono`}>DISCIPLINE</span>
              <span className={styles.metaValue}>{profile.discipline}</span>
            </div>
            <div className={styles.metaCard}>
              <span className={`${styles.metaLabel} mono`}>FOCUS</span>
              <span className={styles.metaValue}>{profile.focus}</span>
            </div>
            <div className={styles.metaCard}>
              <span className={`${styles.metaLabel} mono`}>AVAILABILITY</span>
              <span className={styles.metaValue}>{profile.availability}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

