import profile from '../../data/profile';
import Button from '../../components/ui/Button';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Robbie Delia — Solutions Architect & Software Systems Engineer.',
};

export default function ContactPage() {
  const emailDisabled = !profile.email || profile.email.includes('PLACEHOLDER');
  const linkedinDisabled = !profile.linkedin || profile.linkedin.includes('PLACEHOLDER');
  const githubDisabled = !profile.github || profile.github.includes('PLACEHOLDER');
  const scheduleDisabled = !profile.schedulingUrl || profile.schedulingUrl.includes('PLACEHOLDER');

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <span className={`${styles.headerTag} mono`}>[ CONTACT // ROUTING_PROTOCOL ]</span>
        <h1 className={styles.title}>[ INITIATE CONTACT ]</h1>
        <p className={styles.subtitle}>
          Available for senior engineering roles, systems architecture consulting, and research collaboration.
        </p>
      </div>

      <div className={styles.layout}>
        {/* Contact card */}
        <div className={styles.contactCard}>
          <div className={styles.avatarSection}>
            <div className={styles.avatarFrame}>
              <ImagePlaceholder
                label="RD"
                aspectRatio="1/1"
                className={styles.avatar}
              />
            </div>
            <div className={styles.nameBlock}>
              <h2 className={styles.name}>{profile.name}</h2>
              <p className={`${styles.role} mono`}>{profile.title}</p>
              <p className={styles.summary}>{profile.summary}</p>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Contact methods */}
          <div className={styles.methods}>
            <div className={styles.method}>
              <span className={`${styles.methodLabel} mono`}>EMAIL</span>
              {emailDisabled ? (
                <span className={`${styles.methodPlaceholder} mono`}>
                  Configure in data/profile.js
                </span>
              ) : (
                <a href={`mailto:${profile.email}`} className={`${styles.methodLink} mono`}>
                  {profile.email}
                </a>
              )}
            </div>

            <div className={styles.method}>
              <span className={`${styles.methodLabel} mono`}>GITHUB</span>
              {githubDisabled ? (
                <span className={`${styles.methodPlaceholder} mono`}>Configure in data/profile.js</span>
              ) : (
                <a href={profile.github} className={`${styles.methodLink} mono`} target="_blank" rel="noopener noreferrer">
                  {profile.github}
                </a>
              )}
            </div>

            <div className={styles.method}>
              <span className={`${styles.methodLabel} mono`}>LINKEDIN</span>
              {linkedinDisabled ? (
                <span className={`${styles.methodPlaceholder} mono`}>Configure in data/profile.js</span>
              ) : (
                <a href={profile.linkedin} className={`${styles.methodLink} mono`} target="_blank" rel="noopener noreferrer">
                  {profile.linkedin}
                </a>
              )}
            </div>

            <div className={styles.method}>
              <span className={`${styles.methodLabel} mono`}>RESUME</span>
              <a href={profile.resumeFile} className={`${styles.methodLink} mono`} download>
                [ Download PDF ]
              </a>
            </div>
          </div>
        </div>

        {/* Actions sidebar */}
        <div className={styles.actionsSidebar}>
          <div className={styles.actionsCard}>
            <span className={`${styles.actionsTitle} mono`}>[ QUICK_ACTIONS ]</span>

            <Button
              href={emailDisabled ? undefined : `mailto:${profile.email}`}
              variant="primary"
              disabled={emailDisabled}
            >
              ✉ Email Direct
            </Button>

            <Button
              href={scheduleDisabled ? undefined : profile.schedulingUrl}
              variant="secondary"
              external={!scheduleDisabled}
              disabled={scheduleDisabled}
            >
              ⊞ Schedule Screen
            </Button>

            <Button
              href={profile.resumeFile}
              variant="ghost"
              download
            >
              ▼ Download Resume
            </Button>

            {githubDisabled || (
              <Button
                href={profile.github}
                variant="ghost"
                external
              >
                ⊕ GitHub Profile
              </Button>
            )}

            {(emailDisabled || scheduleDisabled) && (
              <p className={`${styles.configNote} mono`}>
                ⚠ Configure placeholders in data/profile.js
              </p>
            )}
          </div>

          <div className={styles.statusCard}>
            <span className={`${styles.statusLabel} mono`}>[ AVAILABILITY ]</span>
            <span className={`${styles.statusValue} mono`}>{profile.availability}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

