import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import SkillTag from '../ui/SkillTag';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import Button from '../ui/Button';
import projects from '../../data/projects';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className={styles.section} aria-label="Featured Projects">
      <div className="container">
        <SectionHeading
          number="02"
          title="[ FEATURED PROJECTS ]"
          meta="[ ↗ BROWSE ALL ]"
        />

        <div className={styles.grid}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const isPlaceholder = project.status === 'placeholder';

  return (
    <article className={`${styles.card} ${isPlaceholder ? styles.placeholderCard : ''}`}>
      {/* Header metadata */}
      <div className={styles.cardMeta}>
        <span className={`${styles.metaId} mono`}>// {project.id}</span>
        {isPlaceholder ? (
          <span className={`${styles.statusBadge} ${styles.placeholderStatus} mono`}>PLACEHOLDER</span>
        ) : (
          <span className={`${styles.statusBadge} ${styles.liveStatus} mono`}>PROJ_READY</span>
        )}
      </div>

      {/* Project preview image */}
      <div className={styles.imageWrapper}>
        <ImagePlaceholder
          label={isPlaceholder ? '// RESERVE_SLOT — ARCHITECTURE IN PROGRESS' : '// PROJECT_PREVIEW_IMG // 16:9'}
          sublabel={isPlaceholder ? '' : 'FREQUENCY: PYTHON / (360 > 16:9)'}
          aspectRatio="16/9"
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <SkillTag key={tech}>{tech}</SkillTag>
          ))}
        </div>

        {!isPlaceholder && (
          <div className={styles.actions}>
            <Button
              href={`/projects/${project.slug}`}
              variant="primary"
            >
              ⊕ Open Case Study
            </Button>
            {project.githubUrl && !project.githubUrl.includes('PLACEHOLDER') && (
              <a
                href={project.githubUrl}
                className={`${styles.sourceLink} mono`}
                target="_blank"
                rel="noopener noreferrer"
              >
                [ View Source Code ]
              </a>
            )}
            {(!project.githubUrl || project.githubUrl.includes('PLACEHOLDER')) && (
              <span className={`${styles.sourceLink} ${styles.sourcePlaceholder} mono`} title="Configure in data/projects.js">
                [ View Source Code ]
              </span>
            )}
          </div>
        )}

        {isPlaceholder && (
          <div className={styles.placeholderNote}>
            <span className={`${styles.noteText} mono`}>
              STATUS: TIMELINE_ALLOCATION — Replace in data/projects.js
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

