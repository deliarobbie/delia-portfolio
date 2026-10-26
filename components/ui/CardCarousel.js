'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CardCarousel.module.css';

export default function CardCarousel({ children, id, label, count }) {
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
    <>
      <div className={`${styles.caption} mono`}>{count} {label.toUpperCase()} / SCROLL TO EXPLORE</div>
      <div className={styles.carousel}>
        <button className={styles.arrow} type="button" onClick={() => move(-1)} disabled={bounds.start} aria-label={`Previous ${label}`} aria-controls={id}>&larr;</button>
        <div ref={trackRef} id={id} className={styles.track} role="region" aria-label={`${label} carousel`} tabIndex={0}>
          {children}
        </div>
        <button className={styles.arrow} type="button" onClick={() => move(1)} disabled={bounds.end} aria-label={`Next ${label}`} aria-controls={id}>&rarr;</button>
      </div>
    </>
  );
}