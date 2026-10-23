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
    slug: 'placeholder-project',
    title: '[ PROJECT TITLE — PLACEHOLDER ]',
    status: 'placeholder',
    featured: true,
    description:
      'Additional project details to be supplied. This card is a placeholder for an upcoming case study. Replace content in data/projects.js.',
    longDescription: 'Additional project details to be supplied. Replace this content in data/projects.js.',
    problemStatement: '[ PROBLEM STATEMENT — TO BE SUPPLIED ]',
    architecture: '[ ARCHITECTURE — TO BE SUPPLIED ]',
    technologies: ['PLACEHOLDER_TECH_A', 'PLACEHOLDER_TECH_B'],
    implementationHighlights: ['[ HIGHLIGHT — TO BE SUPPLIED ]'],
    challenges: '[ CHALLENGES — TO BE SUPPLIED ]',
    outcomes: '[ OUTCOMES — TO BE SUPPLIED ]',
    githubUrl: null,
    liveUrl: null,
    imageAlt: 'Project placeholder — architecture diagram to be supplied',
  },
];

export default projects;

