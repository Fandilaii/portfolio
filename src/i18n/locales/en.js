// English — the source locale. Every other locale mirrors this shape exactly.
// `ui` holds interface chrome; the rest is portfolio content.

export const profile = {
  name: 'Fandi Lai',
  role: 'Senior Product Designer',
  location: 'Jakarta, Indonesia',
  email: 'fandilai46@gmail.com',
  phone: '+62 852-6929-7980',
  linkedin: 'linkedin.com/in/fandilai',
  linkedinUrl: 'https://linkedin.com/in/fandilai',
  intro:
    'Most of my work is fintech, where the hard part is rarely the screen — it is the rules underneath it. Edge cases, empty states, and what happens when the money does not arrive.',
  longIntro:
    'I spend my time in the unglamorous middle of a project: the states nobody specs, the error copy, the moment a flow forks. That is usually where the metric is hiding.',
  ownership:
    'I own the parts most people split up: user research, flows, UI, UX writing in Bahasa Indonesia, and the Figma handoff engineers actually want to build from.',
}

export const ui = {
  langName: 'English',
  meta: {
    title: 'Fandi Lai — Senior Product Designer (Fintech & Digital Banking), Jakarta',
    description:
      'Fandi Lai is a Senior Product Designer in Jakarta with 7+ years in fintech, digital banking, and e-commerce. Lifted verified users 245% at KoinWorks and took a banking app from 3.2 to 4.5 stars.',
  },
  nav: { work: 'Work', resume: 'Résumé', about: 'About', contact: 'Contact', allWork: 'All work', email: 'Email', home: 'Home' },
  hero: {
    available: 'Available for work',
    remote: 'Remote-friendly',
    roleLines: ['Senior Product Designer', 'fintech & digital banking'],
    introBefore: 'I make ',
    introHighlight: 'complicated money',
    introAfter: ' feel simple on a phone screen. Research, flows, prototypes — and the metric at the end.',
    cta: 'See the work',
    shippedAt: 'Shipped product at',
  },
  work: { eyebrow: 'Selected work', heading: ['Three bets', 'that moved'], idx: '01 — CASES', readCase: 'Read case' },
  about: { eyebrow: 'Who’s behind it', heading: ['Full loop,', 'start to metric'], idx: '02 — ABOUT' },
  index: {
    eyebrow: 'Every role, newest first',
    heading: ['The whole', 'timeline'],
    idx: '03 — RÉSUMÉ',
    now: 'Now',
    readCase: 'Read the case →',
    education: 'Education',
  },
  side: { eyebrow: 'Off the clock', heading: ['Side', 'projects'], idx: '04 — PLAY', cta: 'Play the guide' },
  footer: {
    eyebrow: 'Got a hard problem on a small screen?',
    cta: ['Let’s', 'talk.'],
    ctaAria: 'Let’s talk — email Fandi Lai',
    email: 'Email', linkedin: 'LinkedIn', phone: 'Phone', basedIn: 'Based in',
    backToTop: 'Back to top ↑',
    built: 'Designed & built end-to-end',
  },
  caseStudy: {
    back: '← All work',
    role: 'Role', timeline: 'Timeline', scope: 'Scope',
    problem: '01 — The problem', approach: '02 — The approach',
    shipped: '03 — What I shipped', impact: '04 — The impact',
    next: 'Next case',
  },
}

export const heroStats = [
  { value: '245%', label: 'Jump in verified users at KoinWorks' },
  { value: '3.2 → 4.5', label: 'App store rating at Mandiri Taspen', suffix: '★' },
  { value: '7+', label: 'Years designing products in Indonesia' },
]

export const shippedAt = ['Finku', 'Goers', 'KoinWorks', 'Mandiri Taspen', 'Disney+ Hotstar', 'Member.id']

export const tickerItems = [
  'Product Design', 'End-to-end', 'Fintech', 'User Research', 'Design Systems',
  'Prototyping', 'UX Writing (Bahasa Indonesia)', 'Usability Testing', 'Interaction Design',
]

export const caseStudies = [
  {
    slug: 'finku-fingpt',
    index: '01',
    company: 'Finku',
    title: 'FinGPT & the 4-screen onboarding',
    tagline: 'An AI feature that reads your bank statements — and an onboarding that stops asking so many questions.',
    role: 'Senior Product Designer',
    timeline: 'Feb 2026 – Present',
    scope: ['AI feature design', 'Onboarding', 'Async systems', 'Bahasa Indonesia copy', 'Figma handoff'],
    accentMetric: { value: '20 → 4', label: 'Onboarding screens' },
    problem:
      "Finku is a personal finance app, and I'm the sole product designer working alongside one researcher — I own flows, UI, Bahasa Indonesia copy, and handoff. Two problems sat on top of each other: onboarding had ballooned to 20+ conversational screens before a user saw any value, and users had no fast way to understand where their money actually went.",
    approach:
      'I cut onboarding down to 4 screens by ruthlessly separating what we need to start from what we can learn later, and I designed FinGPT — an AI feature that reads bank e-statements and surfaces spending insights — so the value shows up without the user doing the accounting themselves.',
    solutions: [
      { head: 'Async upload, three states', body: 'Statement parsing takes time, so I built a floating homepage card with three states (uploading, processing, ready) plus a push notification on completion — the user drops a file and gets on with their day instead of staring at a spinner.' },
      { head: 'A chatroom that reads your money', body: 'FinGPT surfaces insights through a chatroom interaction model, so asking "where did my money go last month?" feels like a conversation, not a report.' },
      { head: 'Categories with rules', body: 'A custom category system lets users create sub-categories under existing ones — with duplicate blocking, a 30-category cap, and automatic budget cleanup when a category is removed, so the flexibility never turns into a mess.' },
      { head: 'A shared language for alignment', body: 'I introduced a Problem → Approach → Solution → Vision → Next Steps format for stakeholder presentations. It’s now the default for alignment meetings.' },
    ],
    impact: [
      { value: '20 → 4', label: 'Onboarding screens before a user sees value' },
      { value: '3', label: 'Upload states, so parsing never blocks the user' },
      { value: '30', label: 'Category cap, with automatic budget cleanup' },
    ],
    closing:
      'This one is still in flight, so I am not going to claim a result yet. Onboarding is live and I am measuring time-on-task now — the design decision isn’t finished until the number moves.',
  },
  {
    slug: 'koinworks-registration',
    index: '02',
    company: 'KoinWorks',
    title: 'The registration flow that lifted verified users 245%',
    tagline: 'Fewer fields, real-time validation, and a 20% drop in abandonment.',
    role: 'Product Designer, Platform',
    timeline: 'Mar 2022 – Jun 2025',
    scope: ['Registration', 'Form design', 'New products 0→1', 'Voucher systems', 'UX research partnership'],
    accentMetric: { value: '+245%', label: 'Verified users' },
    problem:
      'KoinWorks is a lending and financial-education platform, and registration was leaking users. The form asked for too much, too early, and validated too late — people hit an error at the end and left.',
    approach:
      'I redesigned the registration flow around real-time validation and fewer form fields — catching mistakes the moment they happen and removing everything that did not need to be there to get a verified account.',
    solutions: [
      { head: 'Validate as you type', body: 'Errors surface inline, at the field, at the moment they occur — never a wall of red at submit. The user always knows they are on track.' },
      { head: 'Cut the field count', body: 'I stripped the form to what verification genuinely requires and deferred the rest, so the path from "start" to "verified" got dramatically shorter.' },
      { head: 'Products from concept to launch', body: 'I also took KoinBill (bill payments) and KoinLearn (financial education) from concept through research, prototyping, usability testing, and launch — retention improved 15%.' },
      { head: 'Vouchers that bring people back', body: 'I designed the voucher and promotion systems that drove a 30% lift in repeat transactions, working closely with UX research on personas and stakeholder interviews.' },
    ],
    impact: [
      { value: '+245%', label: 'Verified users' },
      { value: '−20%', label: 'Drop-off' },
      { value: '+15%', label: 'Retention (KoinBill / KoinLearn)' },
      { value: '+30%', label: 'Repeat transactions (vouchers)' },
    ],
    closing:
      'The registration numbers are the ones I point to first — a focused change to one form, and the top of the funnel moved more than any redesign I have shipped since.',
  },
  {
    slug: 'mandiri-taspen',
    index: '03',
    company: 'Mandiri Taspen',
    title: 'Rebuilding digital banking for small business',
    tagline: 'From a 3.2★ app to a 4.5★ one — and a visual system across 50+ screens.',
    role: 'Senior Product Designer (contract)',
    timeline: 'Jul 2023 – Apr 2024',
    scope: ['Digital banking', 'E-wallet & billing', 'Illustration guidelines', 'Micro-interactions', 'Visual system'],
    accentMetric: { value: '3.2 → 4.5', label: 'App store rating', suffix: '★' },
    problem:
      'The digital banking experience for small-business users was stuck at 3.2 stars. Core jobs — e-wallet top-ups, billing, account management — were all there, but the experience felt inconsistent and hard to trust.',
    approach:
      'I rebuilt the experience for SME users end to end, then created the connective tissue — illustration guidelines and micro-interaction specs — that made 50+ screens feel like one product rather than fifty.',
    solutions: [
      { head: 'The core jobs, rebuilt', body: 'E-wallet top-ups, billing, and account management were redesigned around what a small-business owner actually does day to day — the money tasks that have to be fast and unambiguous.' },
      { head: 'One visual language', body: 'I created illustration guidelines and micro-interaction specs that brought visual consistency across 50+ screens, so the app stopped feeling like it was assembled by different hands.' },
      { head: 'Trust through polish', body: 'In banking, small details read as safety. Consistent motion and illustration did quiet work: the rating climbed from 3.2 to 4.5 stars.' },
    ],
    impact: [
      { value: '3.2 → 4.5', label: 'App store rating', suffix: '★' },
      { value: '50+', label: 'Screens under one system' },
    ],
    closing: 'A contract engagement where the brief was trust — and the star rating was the scoreboard.',
  },
]

export const workIndex = [
  { role: 'Senior Product Designer', company: 'Finku', dates: 'Feb 2026 – Present', current: true, slug: 'finku-fingpt',
    note: 'Sole product designer on a personal finance app. Designed FinGPT (AI e-statement insights), cut onboarding from 20+ screens to 4, and shipped a custom category system with duplicate blocking and automatic budget cleanup.' },
  { role: 'Senior Product Designer', company: 'Goers', dates: 'Jun 2025 – Jan 2026',
    note: 'Led the homepage redesign for content discoverability; simplified the purchase journey end-to-end and ran all usability testing myself.' },
  { role: 'Product Designer, Platform', company: 'KoinWorks', dates: 'Mar 2022 – Jun 2025', slug: 'koinworks-registration',
    note: 'Redesigned registration with real-time validation — verified users up 245%, drop-off down 20%. Took KoinBill and KoinLearn from concept to launch; vouchers drove a 30% lift in repeat transactions.' },
  { role: 'Senior Product Designer (contract)', company: 'Mandiri Taspen', dates: 'Jul 2023 – Apr 2024', slug: 'mandiri-taspen',
    note: 'Contract engagement, concurrent with KoinWorks. Rebuilt digital banking for small business users — e-wallet top-ups, billing, account management. App rating climbed from 3.2★ to 4.5★ across 50+ screens.' },
  { role: 'Senior UI/UX Designer', company: 'Member.id', dates: 'Mar 2021 – Feb 2022',
    note: 'Built a shared design system for Disney+ Hotstar CMS and the Plataan loyalty app — cut handoff time 40%. Usability scores up 25%.' },
  { role: 'Senior Product Designer', company: 'isiruma', dates: 'Apr 2020 – Feb 2021',
    note: 'Led a cross-functional team to launch an online furniture marketplace. Revenue up 54%, ad click-through up 35%.' },
  { role: 'UI/UX Designer', company: 'Member.id', dates: 'Mar 2019 – Apr 2020',
    note: 'Built the foundational design system across converter points, hotel loyalty, and internal tools. Set up the first usability testing and design QA process.' },
  { role: 'Jr. UI/UX Designer', company: 'Dusdusan.com', dates: 'Sep 2018 – Feb 2019',
    note: 'First job. Designed mobile-first web and app interfaces, working directly with PMs on scoping and flows. Learned fast.' },
]

export const skills = [
  { group: 'Design', items: ['Product design (end-to-end)', 'User research', 'Prototyping', 'Usability testing', 'Design systems', 'Interaction design', 'Information architecture', 'UX writing (Bahasa Indonesia)'] },
  { group: 'Tools', items: ['Figma', 'FigJam', 'ProtoPie', 'Maze', 'Mixpanel', 'Amplitude', 'Google Analytics', 'Notion', 'Jira'] },
  { group: 'Growth', items: ['Conversion optimization', 'Retention metrics', 'A/B testing', 'Stakeholder alignment'] },
  { group: 'Industries', items: ['Fintech', 'Digital banking', 'Events & entertainment', 'SaaS', 'E-commerce'] },
]

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Bina Nusantara University',
  years: '2014 – 2018',
  note: 'HCI, Algorithms',
}

// Personal projects outside client work. `href` is a standalone static page
// under public/, so it's a full page load, not a router route.
export const sideProjects = [
  {
    href: '/mahjong_101/',
    tag: 'Side project',
    meta: 'Interactive web guide',
    title: 'Mahjong 101',
    tagline: 'A game-style guide that teaches mahjong to kids aged 7 and up. 10 levels, a quiz, stars and trophies.',
    metric: { value: '10', label: 'Levels to Mahjong Master' },
  },
]
