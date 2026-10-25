export const COMMANDS = [
    'help',
    'whoami',
    'ls projects',
    'cat experience',
    'cat education',
    'contact',
    'gui',
    'theme',
    'clear',
]

export const DESCRIPTIONS = {
    help: 'list commands',
    whoami: 'short introduction',
    'ls projects': 'selected projects',
    'cat experience': 'work history, newest first',
    'cat education': 'degrees',
    contact: 'where to find me',
    gui: 'graphical view (coming soon)',
    theme: 'switch light and dark',
    clear: 'clear the screen',
}

/* **text** marks a term to highlight */
export const EXPERIENCE = [
    {
        role: 'Software Developer',
        org: 'Everest Systems GmbH',
        when: 'Jun 2025 - present',
        where: 'Heidelberg',
        now: true,
        points: [
            'ERP applications, HR and Cloud Cost modules, in **TypeScript**',
            'Designed an integrated job portal for applicant tracking',
            'Added Slack and personnel costs to Cloud Cost visibility',
        ],
    },
    {
        role: 'Working Student, Web Developer',
        org: 'Retcor GmbH',
        when: 'Apr 2023 - May 2024',
        where: 'Bielefeld',
        points: [
            'Frontend for a ledger tracking app in **React** and **Redux**',
            'REST integration with Axios, tested with Jest and RTL',
            'Scrum Master for the team; built the company portfolio site',
        ],
    },
    {
        role: 'Working Student, Software Engineer',
        org: 'Venture Leap GmbH',
        when: 'Jan 2022 - Jan 2023',
        where: 'Berlin',
        points: [
            'Shopping cart and catalog for an online laundry platform, in **PHP**',
            'Test lifecycle with Selenium in Java; cut QA-found bugs by **47%**',
        ],
    },
    {
        role: 'Associate Software QC Engineer',
        org: 'Deloitte USI',
        when: 'Jan 2019 - Jul 2020',
        where: 'Hyderabad',
        points: [
            'Rebuilt a fintech test framework in **Java**, TestNG, Selenium',
            'Cut automated test code by about 25%',
        ],
    },
]

export const EDUCATION = [
    {
        role: 'MSc, Computer Science',
        org: 'RPTU Kaiserslautern-Landau',
        when: 'Mar 2021 - Jan 2024',
        where: 'Kaiserslautern',
        points: ['Software engineering, requirements engineering, HCI, ML'],
    },
    {
        role: 'BTech, Information Technology',
        org: 'VNR VJIET',
        when: 'Aug 2015 - May 2019',
        where: 'Hyderabad',
        points: ['Graduated with honours, GPA **8.41**, top 10% of class'],
    },
]

export const PROJECTS = [
    {
        name: 'crdt-learning-platform',
        kind: 'for BASF',
        desc: 'Real-time learning platform. Import and export for PDF, CSV, HTML; moved UI to Material UI.',
    },
    {
        name: 'learning-progress-framework',
        kind: 'MSc thesis',
        desc: 'Collaborative commenting, flagging and a teacher dashboard built on CRDTs.',
    },
    {
        name: 'john-deere-sync',
        kind: 'capstone, with Fraunhofer IESE',
        desc: 'Architecture and REST integration for a sync service.',
    },
]

export const GITHUB_URL = 'https://github.com/AbhitejVennapu'
/* leave empty to show a placeholder */
export const LINKEDIN_URL = ''
export const CONTACT_EMAIL = ''
