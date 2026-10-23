import Hero from '../components/home/Hero';
import ExperienceTimeline from '../components/home/ExperienceTimeline';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsGrid from '../components/home/SkillsGrid';
import ContactPreview from '../components/home/ContactPreview';
import profile from '../data/profile';

export const metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.summary,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <FeaturedProjects />
      <SkillsGrid />
      <ContactPreview />
    </>
  );
}

