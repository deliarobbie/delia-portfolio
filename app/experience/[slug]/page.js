import Link from 'next/link';
import { notFound } from 'next/navigation';
import experiences from '../../../data/experiences';
import ExperienceHero from '../../../components/experience/ExperienceHero';
import SkillsUsed from '../../../components/experience/SkillsUsed';
import Deliverables from '../../../components/experience/Deliverables';
import MetricsGrid from '../../../components/experience/MetricsGrid';
import ExperienceNavigation from '../../../components/experience/ExperienceNavigation';
import { getStatusInfo } from '../../../lib/utils';
import styles from './page.module.css';

export function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export function generateMetadata({ params }) {
  const exp = experiences.find((e) => e.slug === params.slug);
  if (!exp) return { title: 'Experience Not Found' };
  return {
    title: exp.title,
    description: exp.summary,
  };
}

export default function ExperienceDetailPage({ params }) {
  const expIndex = experiences.findIndex((e) => e.slug === params.slug);
  if (expIndex === -1) notFound();

  const exp = experiences[expIndex];
  const prev = expIndex > 0 ? experiences[expIndex - 1] : null;
  const next = expIndex < experiences.length - 1 ? experiences[expIndex + 1] : null;
  const { label: statusLabel } = getStatusInfo(exp.status);

  return (
    <div className={`container ${styles.page}`}>
      {/* Top breadcrumb nav */}
      <div className={styles.topNav}>
        <Link href="/experience" className={`${styles.backLink} mono`}>
          ← [ ← BACK TO ALL EXPERIENCES ]
        </Link>
        <div className={styles.topMeta}>
          <span className={`${styles.archiveId} mono`}>
            [ ARCHIVE_ID: {exp.id}_USAF_MAAP_{String(expIndex + 1).padStart(2, '0')} ]
          </span>
        </div>
        <div className={styles.topRight}>
          <span className={`${styles.statusDot} ${exp.status === 'active' ? styles.dotActive : ''}`} />
          <span className={`${styles.statusText} mono`}>[ {statusLabel} ]</span>
          <span className={`${styles.draftStamp} mono`}>[ DRAFT_STAMP: V2.4_WIREFRAME ]</span>
        </div>
      </div>

      {/* Main experience content */}
      <ExperienceHero experience={exp} />

      {/* Two-column lower layout */}
      <div className={styles.lowerGrid}>
        <div className={styles.leftCol}>
          <SkillsUsed skills={exp.skills} />
          <Deliverables deliverables={exp.deliverables} />
        </div>
        <div className={styles.rightCol}>
          <MetricsGrid metrics={exp.metrics} />
        </div>
      </div>

      {/* Experience navigation */}
      <ExperienceNavigation
        prev={prev}
        current={expIndex}
        next={next}
        total={experiences.length}
      />
    </div>
  );
}

