'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import SkillTag from '../ui/SkillTag';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import projects from '../../data/projects';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const trackRef = useRef(null);
  const [bounds, setBounds] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    const update = () => setBounds({
      start: track.scrollLeft <= 1,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
    });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      track.removeEventListener('scroll', update);
    };
  }, []);

  function move(direction) {
    const track = trackRef.current;
    const step = track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
    track.scrollBy({ left: direction * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  return (
    <section id="projects" className={styles.section} aria-label="Featured Projects">
      <div className="container">
        <SectionHeading
          number="02"
          title="[ FEATURED PROJECTS ]"
          meta="[ ↗ BROWSE ALL ]"
        />

        <div className={styles.carouselControls}>
          <span className="mono">{featured.length} PROJECTS / SCROLL TO EXPLORE</span>
        </div>
        <div className={styles.carousel}>
          <button className={styles.arrow} type="button" onClick={() => move(-1)} disabled={bounds.start} aria-label="Previous projects" aria-controls="project-carousel">&larr;</button>
        <div ref={trackRef} id="project-carousel" className={styles.grid} role="region" aria-label="Project carousel" tabIndex={0}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
          <button className={styles.arrow} type="button" onClick={() => move(1)} disabled={bounds.end} aria-label="Next projects" aria-controls="project-carousel">&rarr;</button>
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
          <span className={`${styles.statusBadge} ${styles.liveStatus} mono`}>{project.status === 'prototype' ? 'PROTOTYPE' : 'PROJ_READY'}</span>
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
        <h2 className={styles.title}>{isPlaceholder ? project.title : <Link href={`/projects/${project.slug}`} className={styles.cardLink}>{project.title}</Link>}</h2>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <SkillTag key={tech}>{tech}</SkillTag>
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
                [ View Source Code ]
              </a>
            )}
            {!project.liveUrl && (!project.githubUrl || project.githubUrl.includes('PLACEHOLDER')) && (
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

