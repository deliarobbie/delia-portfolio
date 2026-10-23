const experiences = [
  {
    id: 'EXP-001',
    slug: 'maap-automation',
    title: 'Master Air Attack Plan (MAAP) Automation & AI Planning',
    organization: 'USAF APEX GEAR Program',
    orgShort: 'USAF APEX GEAR',
    location: 'Remote / DoD Environment',
    dateRange: '2023 – Present',
    status: 'active', // 'active' | 'completed' | 'contract'
    summary:
      'Developed an interactive operational planning dashboard using Python and Plotly Dash to streamline scenario generation for a human-centered AI planning architecture on the $100M USAF Air Planning Environment for Execution Gaming Exploration Assessment and Refinement (APEX GEAR) program.',
    technologies: ['Python', 'Plotly Dash', 'AI Planning', 'Human-Centered AI', 'Systems Engineering'],
    skills: [
      { number: '01', name: 'Python', subtitle: 'Core Engine / Dashboards', category: 'backend' },
      { number: '02', name: 'Plotly Dash', subtitle: 'Interactive UI / Visuals', category: 'frontend' },
      { number: '03', name: 'AI Planning', subtitle: 'Human-Centered Architecture', category: 'backend' },
      { number: '04', name: 'Systems Eng.', subtitle: 'DoD / APEX Workflows', category: 'backend' },
      { number: '05', name: 'GenAI / Agents', subtitle: 'Agentic Tooling Suite', category: 'backend' },
      { number: '06', name: 'Docker', subtitle: 'Containerized Deployment', category: 'infrastructure' },
      { number: '07', name: 'Linux', subtitle: 'POSIX / Secure Enclaves', category: 'infrastructure' },
      { number: '08', name: 'Agile / Scrum', subtitle: 'Defense Sprint Delivery', category: 'backend' },
    ],
    deliverables: [
      {
        number: '01',
        title: 'Operational Planning Dashboard in Plotly Dash',
        tag: 'APEX CORE',
        description:
          'Engineered responsive web-based operational command dashboards in Python & Plotly Dash, equipping human air planners with instant scenario visualization, asset allocation grids, and real-time mission parameters.',
      },
      {
        number: '02',
        title: 'Human-Centered AI Planning Architecture',
        tag: 'HCD AI',
        description:
          'Designed modular decision support interfaces placing operator discretion at the core of AI-generated sortie recommendations, ensuring explainability and high trust for tactical commanders.',
      },
      {
        number: '03',
        title: 'Scenario Generation Optimization',
        tag: 'PIPELINE',
        description:
          'Re-architected combinatorial sortie and target pairing workflows, drastically streamlining operational test scenario synthesis from hours of manual collation down to minutes.',
      },
      {
        number: '04',
        title: 'USAF Stakeholder Verification & Integration',
        tag: 'VALIDATION',
        description:
          'Facilitated user testing cycles with USAF planners, refining interface affordances, data schemas, and deployment readiness on secured defense compute environments.',
      },
    ],
    metrics: [
      { value: '$100M', label: 'Program Scope', sublabel: 'USAF APEX GEAR Vehicle', isDraft: false },
      { value: '-75%', label: 'Scenario Gen Latency', sublabel: 'Hours → Real-Time (Mins)', isDraft: true },
      { value: '+3.8x', label: 'Planning Efficiency', sublabel: 'Combinatorial Sortie Eval', isDraft: true },
      { value: '100%', label: 'User Adoption Rate', sublabel: 'Operator Trust Score', isDraft: true },
    ],
    imageAlt: 'MAAP Air Attack Schematic — Architectural Overview',
    metaScope: 'PROGRAM: USAF_APEX_GEAR',
    metaContract: 'CONTRACT_VAL: $100M',
    metaClearance: 'CLEARANCE: DOD_SECRET',
    stack: 'STACK: PYTHON // PLOTLY_DASH',
  },
  {
    id: 'EXP-002',
    slug: 'afsim-simulation',
    title: 'USAF Advanced Framework for Simulation, Integration, and Modeling (AFSIM) Automated Simulation & Code Generation',
    organization: 'DoD 6.1 Foundational Research Initiative',
    orgShort: 'DoD 6.1 Research',
    location: 'Remote / Research Environment',
    dateRange: '2022 – 2023',
    status: 'completed',
    summary:
      'Architected a Python translation engine for a DoD 6.1 foundational research initiative, automating the conversion of JSON mission schemas into the AFSIM simulation suites and reducing configuration time from hours to minutes.',
    technologies: ['Python', 'AFSIM', 'Simulation Modeling', 'JSON Schemas', 'Code Generation'],
    skills: [
      { number: '01', name: 'Python', subtitle: 'Translation Engine', category: 'backend' },
      { number: '02', name: 'AFSIM', subtitle: 'Simulation Framework', category: 'backend' },
      { number: '03', name: 'JSON Schemas', subtitle: 'Mission Data Modeling', category: 'backend' },
      { number: '04', name: 'Code Generation', subtitle: 'Automated Pipeline', category: 'backend' },
      { number: '05', name: 'Sim. Modeling', subtitle: 'DoD Scenario Design', category: 'backend' },
      { number: '06', name: 'Linux', subtitle: 'Secure Environments', category: 'infrastructure' },
      { number: '07', name: 'Git', subtitle: 'Version Control', category: 'infrastructure' },
      { number: '08', name: 'Agile / Scrum', subtitle: 'Research Sprints', category: 'backend' },
    ],
    deliverables: [
      {
        number: '01',
        title: 'Python Translation Engine',
        tag: 'CORE ENGINE',
        description:
          'Built a high-fidelity translation layer converting structured JSON mission schemas directly into AFSIM-compatible simulation configurations with full parameter fidelity.',
      },
      {
        number: '02',
        title: 'JSON Mission Schema Architecture',
        tag: 'SCHEMA DESIGN',
        description:
          'Designed a standardized JSON schema system for representing complex DoD mission parameters, enabling repeatable and auditable simulation generation.',
      },
      {
        number: '03',
        title: 'AFSIM Suite Code Generation',
        tag: 'AUTOMATION',
        description:
          'Automated the full AFSIM configuration generation pipeline, reducing manual coding of simulation suites from hours to minutes per scenario.',
      },
      {
        number: '04',
        title: 'DoD Research Integration',
        tag: 'VALIDATION',
        description:
          'Integrated the toolchain into active DoD 6.1 foundational research workflows, supporting iterative simulation experiments and research validation cycles.',
      },
    ],
    metrics: [
      { value: '6.1', label: 'DoD Research Level', sublabel: 'Foundational Research', isDraft: false },
      { value: '-90%', label: 'Config Time Reduction', sublabel: 'Hours → Minutes', isDraft: true },
      { value: '100%', label: 'Schema Coverage', sublabel: 'Mission Parameter Fidelity', isDraft: true },
      { value: 'Auto', label: 'Code Generation', sublabel: 'Full Pipeline Automation', isDraft: false },
    ],
    imageAlt: 'AFSIM Simulation Architecture Diagram',
    metaScope: 'PROGRAM: DOD_6.1_RESEARCH',
    metaContract: 'TYPE: FOUNDATIONAL_RESEARCH',
    metaClearance: 'CLEARANCE: DOD',
    stack: 'STACK: PYTHON // AFSIM',
  },
];

export default experiences;

