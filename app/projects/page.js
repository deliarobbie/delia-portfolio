import Link from 'next/link';
import projects from '../../data/projects';
import SectionHeading from '../../components/ui/SectionHeading';
import SkillTag from '../../components/ui/SkillTag';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects',
  description: 'Engineering projects including full-stack systems, edge computing, and systems architecture work.',
};

export default function ProjectsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <SectionHeading
        number="PROJ"
        title="[ FEATURED PROJECTS ]"
        meta={`[ TOTAL: ${String(projects.length).padStart(2, '0')} ]`}
      />

      <div className={styles.grid}>
        {projects.map((project) => {
          const isPlaceholder = project.status === 'placeholder';
          return (
            <article key={project.id} className={`${styles.card} ${isPlaceholder ? styles.placeholderCard : ''}`}>
              <div className={styles.cardMeta}>
                <span className={`${styles.metaId} mono`}>// {project.id}</span>
                <span className={`${styles.statusBadge} ${isPlaceholder ? styles.placeholderStatus : styles.liveStatus} mono`}>
                  {project.status.toUpperCase()}
                </span>
              </div>

              <div className={styles.imageWrapper}>
                <ImagePlaceholder
          src={project.cardImage || project.image}
          alt={project.cardImageAlt || project.imageAlt}
                  label={isPlaceholder ? '// RESERVE_SLOT — ARCHITECTURE IN PROGRESS' : `// ${project.id} PREVIEW`}
                  aspectRatio="16/9"
                />
              </div>

              <div className={styles.content}>
                <h2 className={styles.title}>{isPlaceholder ? project.title : <Link href={`/projects/${project.slug}`} className={styles.cardLink}>{project.title}</Link>}</h2>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.technologies.map((t) => (
                    <SkillTag key={t}>{t}</SkillTag>
                  ))}
                </div>
                {!isPlaceholder && (
                  <div className={styles.actions}>
                    {project.liveUrl && (<a href={project.liveUrl} className={`${styles.sourceLink} mono`} target="_blank" rel="noopener noreferrer">[ {project.liveLabel || 'Live Demo'} ]</a>)}
{project.githubUrl && !project.githubUrl.includes('PLACEHOLDER') && (
                      <a
                        href={project.githubUrl}
                        className={`${styles.sourceLink} mono`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [ View Source ]
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

