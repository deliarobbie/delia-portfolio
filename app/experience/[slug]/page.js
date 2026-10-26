import Link from 'next/link';
import { notFound } from 'next/navigation';
import experiences from '../../../data/experiences';
import ExperienceHero from '../../../components/experience/ExperienceHero';
import ExperienceNavigation from '../../../components/experience/ExperienceNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import styles from './page.module.css';

export function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) return { title: 'Experience Not Found' };
  return { title: exp.title, description: exp.summary };
}

export default async function ExperienceDetailPage({ params }) {
  const { slug } = await params;
  const expIndex = experiences.findIndex((e) => e.slug === slug);
  if (expIndex === -1) notFound();
  const exp = experiences[expIndex];

  return (
    <div className={`container ${styles.page}`}>
      <nav className={styles.topNav} aria-label="Experience breadcrumb">
        <Link href="/#experience" className={`${styles.backLink} mono`}>← BACK TO EXPERIENCE</Link>
        <span className={`${styles.archiveId} mono`}>{exp.id}</span>
      </nav>
      <ExperienceHero experience={exp} />
      <section aria-label="Technical breakdown" className={styles.breakdown}>
        <SectionHeading number="01" title="[ TECHNICAL BREAKDOWN ]" />
        <div className={styles.details}>
          {exp.technicalBreakdown.map((item, index) => (
            <article key={item.title} className={styles.detail}>
              <span className={`${styles.detailNumber} mono`}>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ExperienceNavigation
        prev={experiences[expIndex - 1] || null}
        current={expIndex}
        next={experiences[expIndex + 1] || null}
        total={experiences.length}
      />
    </div>
  );
}
