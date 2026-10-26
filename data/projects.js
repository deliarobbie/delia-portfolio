const projects = [
  {
    id: 'PROJ-001',
    slug: 'makerspace-access-control',
    title: 'Makerspace Access Control & Web Infrastructure',
    status: 'live',
    featured: true,
    description:
      'Co-engineered a full-stack facility management system with a 3-tier architecture, implementing secure session handling (RBAC), database-level constraints, and an edge-computing verification unit (Raspberry Pi, RFID) for sub-second member authentication.',
    longDescription:
      'Co-engineered a full-stack facility management system with a 3-tier architecture, implementing secure session handling (RBAC), database-level constraints, and an edge-computing verification unit (Raspberry Pi, RFID) for sub-second member authentication.',
    problemStatement:
      'University makerspace required a robust, secure access control solution that could authenticate members in real-time at the physical access point while maintaining a full administrative web interface.',
    architecture:
      '3-tier architecture: PostgreSQL database tier, Next.js/Node.js application tier, and Raspberry Pi edge unit for physical RFID authentication. RBAC implemented at the database and session layers.',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Raspberry Pi', 'Python'],
    implementationHighlights: [
      'Role-based access control (RBAC) with database-level enforcement',
      'Edge-computing RFID verification unit on Raspberry Pi',
      'Sub-second member authentication pipeline',
      'Secure session handling with PostgreSQL constraints',
      'Admin dashboard for member management',
    ],
    challenges:
      'Synchronizing real-time physical access events with the web application while maintaining security and sub-second latency.',
    outcomes:
      'Deployed full-stack access control system integrating physical RFID hardware with a web-based administrative platform.',
    githubUrl: 'https://github.com/PLACEHOLDER_GITHUB/makerspace-access-control',
    liveUrl: null,
    imageAlt: 'Makerspace Access Control System Architecture',
  },
  {
    id: 'PROJ-002',
    slug: 'portfolio-prototype',
    title: 'Portfolio Design & AI-Assisted Prototyping',
    status: 'prototype',
    featured: true,
    description: 'Developed portfolio mockups with Google Stitch and AI prototyping tools, exploring content hierarchy, navigation, and a professional visual direction.',
    longDescription: 'A portfolio design project focused on communicating my projects, skills, experience, and professional identity. I used Google Stitch and AI prototyping tools to develop mockups. The project brief progresses from content organization and ideation to wireframes, high-fidelity prototyping, and usability-informed refinement.',
    problemStatement: 'Help visitors understand my background, discover relevant projects, and find resume and contact information through a clear, cohesive portfolio experience.',
    approachLabel: 'DESIGN_PROCESS',
    architecture: 'The design brief starts with content organization and partner and individual sketching, then develops three low-fidelity directions into one mid-fidelity mockup. Google Stitch and AI prototyping tools supported mockup development, with attention to hierarchy, alignment, spacing, and navigation.',
    technologies: ['Google Stitch', 'AI Prototyping', 'UI/UX Design', 'Information Architecture'],
    highlightsLabel: 'PROJECT_FOCUS',
    implementationHighlights: [
      'Portfolio mockups developed using Google Stitch and AI prototyping tools',
      'Content organization across projects, experience, skills, resume, and contact information',
      'Exploration of visual hierarchy, navigation, spacing, and professional presentation',
      'Planned evaluation through a heuristic review, card sort, or peer task walkthrough',
    ],
    challenges: 'Balance a distinctive visual style with readable content and straightforward navigation. The next evaluation step is task-based testing with at least three participants, including someone outside the immediate peer group, using observations, think-aloud feedback, and notes.',
    outcomes: 'Created portfolio mockups and an original prototype exploration in Google Stitch. Next steps are to gather participant feedback, prioritize usability issues, refine the prototype, and document revisions with annotated before-and-after screenshots and a reflection.',
    githubUrl: null,
    liveUrl: 'https://stitch.withgoogle.com/projects/12134267849680044716',
    liveLabel: 'Original Prototypes',
    image: '/images/projects/portfolio.jpg',
    imageAlt: 'Robbie Delia portfolio homepage and professional introduction',
  },
];

export default projects;

