import Link from 'next/link';
import { notFound } from 'next/navigation';
import projects from '../../../data/projects';
import SectionHeading from '../../../components/ui/SectionHeading';
import SkillTag from '../../../components/ui/SkillTag';
import Button from '../../../components/ui/Button';
import ImagePlaceholder from '../../../components/ui/ImagePlaceholder';
import styles from './page.module.css';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  params = await params;
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }) {
  params = await params;
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const isPlaceholder = project.status === 'placeholder';

  return (
    <div className={`container ${styles.page}`}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/projects" className={`${styles.backLink} mono`}>
          ← [ ← BACK TO PROJECTS ]
        </Link>
        <span className={`${styles.projectId} mono`}>[ {project.id} ]</span>
        <span className={`${styles.statusBadge} ${isPlaceholder ? styles.placeholderStatus : styles.liveStatus} mono`}>
          {project.status.toUpperCase()}
        </span>
      </div>

      {isPlaceholder && (
        <div className={styles.placeholderBanner}>
          <span className="mono">⚠ PLACEHOLDER — Replace content in data/projects.js</span>
        </div>
      )}

      {/* Hero */}
      <div className={styles.hero}>
        <ImagePlaceholder
          src={project.image}
          alt={project.imageAlt}
          label={isPlaceholder ? '// PROJECT_DIAGRAM — PLACEHOLDER' : '// PROJECT_OVERVIEW_DIAGRAM'}
          sublabel={project.id}
          aspectRatio="16/6"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.layout}>
        {/* Main content */}
        <div className={styles.main}>
          <h1 className={styles.title}>{project.title}</h1>

          <div className={styles.techRow}>
            {project.technologies.map((t) => (
              <SkillTag key={t}>{t}</SkillTag>
            ))}
          </div>

          <section className={styles.block}>
            <h2 className={`${styles.blockTitle} mono`}>// PROJECT_OVERVIEW</h2>
            <p className={styles.blockText}>{project.longDescription || project.description}</p>
          </section>

          <section className={styles.block}>
            <h2 className={`${styles.blockTitle} mono`}>// PROBLEM_STATEMENT</h2>
            <p className={styles.blockText}>{project.problemStatement}</p>
          </section>

          <section className={styles.block}>
            <h2 className={`${styles.blockTitle} mono`}>// {project.approachLabel || 'ARCHITECTURE'}</h2>
            <p className={styles.blockText}>{project.architecture}</p>
          </section>

          <section className={styles.block}>
            <h2 className={`${styles.blockTitle} mono`}>// {project.highlightsLabel || 'IMPLEMENTATION_HIGHLIGHTS'}</h2>
            <ul className={styles.highlightList}>
              {project.implementationHighlights.map((h, i) => (
                <li key={i} className={styles.highlightItem}>
                  <span className={`${styles.bullet} mono`}>→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h2 className={`${styles.blockTitle} mono`}>// CHALLENGES_&_SOLUTIONS</h2>
            <p className={styles.blockText}>{project.challenges}</p>
          </section>

          <section className={styles.block}>
            <h2 className={`${styles.blockTitle} mono`}>// OUTCOMES</h2>
            <p className={styles.blockText}>{project.outcomes}</p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={`${styles.sideTitle} mono`}>[ LINKS ]</h3>
            <div className={styles.sideLinks}>
              {project.githubUrl && !project.githubUrl.includes('PLACEHOLDER') ? (
                <Button href={project.githubUrl} variant="secondary" external>
                  [ GitHub Repository ]
                </Button>
              ) : (
                <span className={`${styles.sideDisabled} mono`}>[ GitHub — Not configured ]</span>
              )}
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="ghost" external>
                  [ {project.liveLabel || 'Live Demo'} ]
                </Button>
              )}
            </div>
          </div>

          <div className={styles.sideCard}>
            <h3 className={`${styles.sideTitle} mono`}>[ STATUS ]</h3>
            <span className={`${styles.statusBadge} ${isPlaceholder ? styles.placeholderStatus : styles.liveStatus} mono`}>
              {project.status.toUpperCase()}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}

