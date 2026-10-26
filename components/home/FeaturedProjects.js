import CardCarousel from '../ui/CardCarousel';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import SkillTag from '../ui/SkillTag';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import projects from '../../data/projects';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="projects" className={styles.section} aria-label="Featured Projects">
      <div className="container">
        <SectionHeading
          number="02"
          title="[ FEATURED PROJECTS ]"
          meta="[ ↗ BROWSE ALL ]"
        />

        <CardCarousel id="project-carousel" label="projects" count={featured.length}>
          {featured.map((project) => <ProjectCard key={project.id} project={project} />)}
        </CardCarousel>
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
          <span className={`${styles.statusBadge} ${styles.liveStatus} mono`}>{project.status === 'concept' ? 'CONCEPT' : project.status === 'prototype' ? 'PROTOTYPE' : 'PROJ_READY'}</span>
        )}
      </div>

      {/* Project preview image */}
      <div className={styles.imageWrapper}>
        <ImagePlaceholder
          src={project.cardImage || project.image}
          alt={project.cardImageAlt || project.imageAlt}
          label={isPlaceholder ? '// RESERVE_SLOT — ARCHITECTURE IN PROGRESS' : '// PROJECT_PREVIEW_IMG // 16:9'}
          sublabel={isPlaceholder ? '' : 'FREQUENCY: PYTHON / (360 > 16:9)'}
          aspectRatio="16/9"
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>{isPlaceholder || project.cardOnly ? project.title : <Link href={`/projects/${project.slug}`} className={styles.cardLink}>{project.title}</Link>}</h2>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <SkillTag key={tech}>{tech}</SkillTag>
          ))}
        </div>



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

