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
    title: 'Fandi Lai — Senior Product Designer (Fintech & Digital Banking)',
    description:
      'Fandi Lai is a Senior Product Designer with 7+ years in fintech, digital banking, and e-commerce, open to relocation in Europe. Lifted verified users 248% at KoinWorks and took a banking app from 3.2 to 4.5 stars.',
  },
  nav: { work: 'Work', resume: 'Résumé', about: 'About', contact: 'Contact', allWork: 'All work', email: 'Email', home: 'Home' },
  hero: {
    available: 'Available for work',
    remote: 'Open to relocation (EU)',
    roleLines: ['Senior Product Designer', 'fintech & digital banking'],
    introBefore: 'I make ',
    introHighlight: 'complicated money',
    introAfter: ' feel simple on a phone screen. Research, flows, prototypes — and the metric at the end.',
    cta: 'See the work',
    shippedAt: 'Shipped product at',
  },
  work: { eyebrow: 'Selected work', heading: ['Five bets,', 'up close'], idx: '01 — CASES', readCase: 'Read case' },
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
    screens: "Real screens",
    boards: "Process and before/after",
    next: 'Next case',
  },
}

export const heroStats = [
  { value: '248%', label: 'Jump in verified users at KoinWorks' },
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
    cover: { src: '/work/finku-fingpt/chat-answer.png', alt: "FinGPT answering a spending question, then asking if the answer was enough" },
    problem:
      "Finku is a personal finance app, and I'm the sole product designer working alongside one researcher — I own flows, UI, Bahasa Indonesia copy, and handoff. Two problems sat on top of each other: onboarding had ballooned to 20+ conversational screens before a user saw any value, and users had no fast way to understand where their money actually went. And an AI that talks about your money has to earn trust: it can't guess, stall or leave you stuck.",
    approach:
      "I cut onboarding down to 4 screens by ruthlessly separating what we need to start from what we can learn later, and I designed FinGPT — an AI feature that reads bank e-statements and surfaces spending insights — so the value shows up without the user doing the accounting themselves. I designed every FinGPT state, not just the happy path: what it says before it has enough data, when it misreads you, and when the system fails.",
    solutions: [
      { head: 'Async upload, three states', body: 'Statement parsing takes time, so I built a floating homepage card with three states (uploading, processing, ready) plus a push notification on completion — the user drops a file and gets on with their day instead of staring at a spinner.' },
      { head: "Prompts from what it noticed", body: "FinGPT opens with suggestions based on what it spotted in your transactions. If it sees a holiday coming, it offers a trip budget, a cost simulation, or an emergency fund to set aside. Nobody faces a blank text box." },
      { head: "Insights wait for enough data", body: "AI insights unlock after 15 logged transactions. Before that, the card says how many more are needed and offers to let FinGPT log them, rather than guessing from too little." },
      { head: "Never a dead end", body: "When FinGPT cannot read an input, it shows the format with examples. When a request fails, a one-tap retry sits in the same bubble. Every answer ends by asking whether that was enough or the user wants to dig further." },
      { head: 'Categories with rules', body: 'A custom category system lets users create sub-categories under existing ones — with duplicate blocking, a 30-category cap, and automatic budget cleanup when a category is removed, so the flexibility never turns into a mess.' },
      { head: 'A shared language for alignment', body: 'I introduced a Problem → Approach → Solution → Vision → Next Steps format for stakeholder presentations. It’s now the default for alignment meetings.' },
    ],
    screens: [
      { src: '/work/finku-fingpt/chat-answer.png', alt: "FinGPT chat answer comparing monthly spending", caption: "An answer with real numbers, then a check: \"Was that enough, or do you want to go further?\"" },
      { src: '/work/finku-fingpt/suggested-prompts.png', alt: "FinGPT suggested prompts", caption: "Suggested prompts based on what FinGPT noticed, here a planned holiday." },
      { src: '/work/finku-fingpt/unrecognized.png', alt: "FinGPT handling unrecognized input", caption: "Unreadable input gets the expected format and examples, not an error." },
      { src: '/work/finku-fingpt/retry.png', alt: "FinGPT error with retry button", caption: "A failed request keeps the conversation and offers a one-tap retry." },
      { src: '/work/finku-fingpt/insights-feed.png', alt: "Transaction list with AI financial summary", caption: "AI summary at the top of the transaction list, plus a nudge for uncategorised items." },
      { src: '/work/finku-fingpt/insights-threshold.png', alt: "AI insights empty state before 15 transactions", caption: "Below 15 transactions, insights explain what is needed instead of guessing." },
    ],
    impact: [
      { value: '20 → 4', label: 'Onboarding screens before a user sees value' },
      { value: "15", label: "Transactions before AI insights appear" },
      { value: '30', label: 'Category cap, with automatic budget cleanup' },
    ],
    closing:
      'This one is still in flight, so I am not going to claim a result yet. Onboarding is live and I am measuring time-on-task now — the design decision isn’t finished until the number moves.',
  },
  {
    slug: 'finku-q2-logging',
    index: '02',
    company: 'Finku',
    title: "Multi-currency, and four ways to log a transaction",
    tagline: "Opening a Rupiah-only app to other currencies and countries, and making logging the easy part.",
    role: "Senior Product Designer",
    timeline: "Q2 2026",
    scope: ["Multi-currency", "Global registration", "Document upload & OCR", "iOS Shortcuts", "Edge cases"],
    accentMetric: { value: '20', label: "Currencies supported" },
    cover: { src: '/work/finku-q2/logging-currency.png', alt: "Finku manual input in US dollars, with the Rupiah equivalent under the amount" },
    problem:
      "Finku was built for one country and one currency: Rupiah balances, Indonesian phone numbers. People who earn, save or travel in other currencies had nowhere to put that money. Logging was the other drag, because every transaction typed by hand is one more reason to stop tracking.",
    approach:
      "I made currency a property of each financial account rather than a global setting, so a user can hold IDR and USD side by side and still see one picture. For logging, I gathered every input path into one Upload screen and designed the review step that catches mistakes before anything is saved.",
    solutions: [
      { head: "Currency per account", body: "Users pick a currency during setup and per account after that, from a searchable list of 20. Logging in a foreign currency shows the Rupiah equivalent right under the amount, so nobody does the maths in their head. Global country codes open sign-up beyond Indonesian numbers." },
      { head: "One screen, four ways in", body: "Upload a statement from any bank, scan a receipt, pick a screenshot from the gallery, or paste a transaction from anywhere and let FinGPT record it." },
      { head: "Review before saving", body: "Parsed transactions arrive grouped by date and pre-selected. Rows without a detected date are flagged, and likely duplicates (same date, amount and account) arrive unticked with a note to check." },
      { head: "Logging without opening the app", body: "A setup guide for iOS Shortcuts lets users log from a notification, Apple Pay or a screenshot with a Triple Tap or the Action Button." },
    ],
    screens: [
      { src: '/work/finku-q2/logging-currency.png', alt: "Manual transaction input in USD", caption: "Manual input in US dollars, with the Rupiah equivalent under the amount." },
      { src: '/work/finku-q2/currency-picker.png', alt: "Currency picker list", caption: "Searchable currency picker: flag, code and symbol on every row." },
      { src: '/work/finku-q2/upload-hub.png', alt: "Upload screen with four logging options", caption: "Every logging path on one screen, with paste as the newest." },
      { src: '/work/finku-q2/review.png', alt: "Transaction review screen after a statement upload", caption: "Review step: grouped by date, with undetected dates and duplicates flagged. (Sample name removed.)" },
      { src: '/work/finku-q2/shortcut.png', alt: "iOS Shortcut setup guide", caption: "Setup guide for logging with an iOS Triple Tap or the Action Button." },
    ],
    impact: [
      { value: "20", label: "Currencies in the picker" },
      { value: "4", label: "Ways to log from one screen" },
    ],
    closing:
      "No launch numbers here yet. What I am watching: the share of transactions logged by upload instead of typing, and how many users add a second currency.",
  },
  {
    slug: "goers-discovery",
    index: "03",
    company: "Goers",
    title: "Helping people find events they were not looking for",
    tagline: "An audit and redesign of discovery on Goers: homepage, categories, explore and search.",
    role: "Senior Product Designer",
    timeline: "Jun 2025 – Jan 2026",
    scope: ["UX audit", "Competitor benchmark", "Homepage", "Search", "Information architecture", "Mobile web"],
    accentMetric: {"value": "4", "label": "Discovery problems fixed"},
    cover: {"src": "/work/goers/cover-home.png", "alt": "Redesigned Goers mobile homepage with location and categories"},
    problem: "Goers sells tickets for concerts, sports, attractions and community events, and lets creators publish their own. Most visitors arrived knowing what they wanted. The goal was organic discovery: people finding events they had not searched for. The homepage worked against that. Categories and location were hidden in the burger menu, every section used the same card, articles looked like events, and dates were missing from listings.",
    approach: "I started with a UX audit of the three places discovery happens (homepage, event exploration, search) and benchmarked Tiket.com, Loket and Eventbrite. That reduced a long list of issues to four problems: few entry points to discovery, no personalisation, weak hierarchy between content types, and curated lists that did not stand out. Each change in the redesign maps to one of them.",
    solutions: [
      {"head": "Categories and location up front", "body": "The category list moved out of the burger menu onto the homepage, next to a location picker. Location matters most for offline events, so it now filters everything below it."},
      {"head": "More ways into all events", "body": "An explore link in the top bar and a \"see all\" button under the daily list both open one explore page, set to all of Indonesia so people see beyond their own city."},
      {"head": "A reason to come back daily", "body": "The homepage opens with events by date: today's top three, with sold-out and expired ones pushed down. Date and time show on every card."},
      {"head": "Cards that match their content", "body": "Trending and attractions get their own coloured sections and card shapes. Attractions use a large image, events show date, venue and price."},
      {"head": "Search as a page", "body": "Search became a full page with recent and popular searches, filters, and trending events below. An empty result offers related events from the same category."},
      {"head": "Onboarding in two questions", "body": "A single optional screen asks where you are and what you like. The answers personalise the homepage, even for guests."},
    ],
    screens: [
      {"src": "/work/goers/search-landing.png", "alt": "Search landing page with recent and popular searches", "caption": "Search landing: recent searches, popular searches and trending events."},
      {"src": "/work/goers/search-result.png", "alt": "Search result for a musical", "caption": "A result card with date, venue, price and remaining tickets."},
      {"src": "/work/goers/search-not-found.png", "alt": "Empty search result with related events", "caption": "No match is not a dead end: related events from the same category."},
      {"src": "/work/goers/explore.png", "alt": "Explore all events page", "caption": "Explore all events, set to all of Indonesia, with sold-out events marked."},
    ],
    boards: [
      {"src": "/work/goers/board-home-top.png", "alt": "Homepage top before and after", "caption": "Homepage top, before and after: explore link, location and categories."},
      {"src": "/work/goers/board-event-list.png", "alt": "Homepage event lists before and after", "caption": "Event lists, before and after: events by date, trending and attractions each get their own shape."},
      {"src": "/work/goers/board-explore.png", "alt": "Explore page before and after", "caption": "Explore page, before and after."},
    ],
    impact: [
      {"value": "4", "label": "Discovery problems, each with a fix"},
      {"value": "3", "label": "Competitors benchmarked"},
      {"value": "2", "label": "New entry points to all events"},
    ],
    closing: "The redesign is live on goersapp.com. I led the homepage work, simplified the purchase journey end to end, and ran the usability testing myself.",
  },
  {
    slug: 'koinworks-registration',
    index: '04',
    company: 'KoinWorks',
    title: 'The registration flow that lifted verified users 248%',
    tagline: 'Fewer fields, real-time validation, and a 20% drop in abandonment.',
    role: 'Product Designer, Platform',
    timeline: 'Mar 2022 – Jun 2025',
    scope: ['Registration', 'Form design', 'New products 0→1', 'Voucher systems', 'UX research partnership'],
    accentMetric: { value: '+248%', label: 'Verified users' },
    cover: {"src": "/work/koinworks/cover-account-type.png", "alt": "KoinWorks account type selection screen"},
    problem:
      'KoinWorks is a lending and financial-education platform, and registration was leaking users. The form asked for too much, too early, and validated too late — people hit an error at the end and left.',
    approach:
      'I redesigned the registration flow around real-time validation and fewer form fields — catching mistakes the moment they happen and removing everything that did not need to be there to get a verified account.',
    solutions: [
      {"head": "KYC people can finish", "body": "Research showed three failures: reviews that failed without a reason, liveness checks that errored, and blurry ID photos. I split KYC into five visible steps, told people what each check needs before they start, and said why regulated data is requested."},
      { head: 'Validate as you type', body: 'Errors surface inline, at the field, at the moment they occur — never a wall of red at submit. The user always knows they are on track.' },
      { head: 'Cut the field count', body: 'I stripped the form to what verification genuinely requires and deferred the rest, so the path from "start" to "verified" got dramatically shorter.' },
      { head: 'Products from concept to launch', body: 'I also took KoinBill (bill payments) and KoinLearn (financial education) from concept through research, prototyping, usability testing, and launch — retention improved 15%.' },
      { head: 'Vouchers that bring people back', body: 'I designed the voucher and promotion systems that drove a 30% lift in repeat transactions, working closely with UX research on personas and stakeholder interviews.' },
    ],
    screens: [
      {"src": "/work/koinworks/kyc-account-type.png", "alt": "Account type selection", "caption": "One choice up front: investing or a business loan. Each card says what you get before you commit."},
      {"src": "/work/koinworks/kyc-phone.png", "alt": "Phone number entry with referral code", "caption": "Phone number first. The referral field confirms the reward inline as soon as the code is valid."},
      {"src": "/work/koinworks/kyc-otp.png", "alt": "OTP entry sent over WhatsApp", "caption": "OTP over WhatsApp, with SMS as the fallback. A 5-step bar shows how much is left."},
      {"src": "/work/koinworks/kyc-password.png", "alt": "Password creation with live rules", "caption": "Password rules tick off as you type, so there is no error to discover at submit."},
      {"src": "/work/koinworks/kyc-ektp.png", "alt": "e-KTP photo instructions", "caption": "Before the ID photo: three plain tips that prevent the blurry-KTP rejection, plus the OJK note on why we ask."},
      {"src": "/work/koinworks/home-final.png", "alt": "Redesigned personal homepage", "caption": "The personal homepage rebuilt around the investment products, after KoinWorks narrowed from super-app to investing."},
    ],
    impact: [
      { value: '+248%', label: 'Verified users' },
      {"value": "+78%", "label": "First transactions"},
      { value: '−20%', label: 'Drop-off' },
      { value: '+15%', label: 'Retention (KoinBill / KoinLearn)' },
      { value: '+30%', label: 'Repeat transactions (vouchers)' },
    ],
    closing:
      'The registration numbers are the ones I point to first — a focused change to one form, and the top of the funnel moved more than any redesign I have shipped since.',
  },
  {
    slug: "mandiri-taspen",
    index: "05",
    company: "Mandiri Taspen",
    title: "Rebuilding a banking app for retirees",
    tagline: "Movin’ by Mandiri Taspen: from a 3.2★ app to a 4.5★ one, designed for users aged 55 and up.",
    role: "Senior Product Designer (contract)",
    timeline: "Jul 2023 – Apr 2024",
    scope: ["Digital banking", "Design for older users", "Usability testing", "Onboarding", "Illustration guidelines", "Visual system"],
    accentMetric: {"value": "3.2 → 4.5", "label": "App store rating", "suffix": "★"},
    problem: "Bank Mandiri Taspen serves retired civil servants, soldiers and police. Most users are over 55 and 88% are on Android. The old app, Mantap Mobile, sat at 3.2 stars: text was small, icons were unclear, forms were long, and nothing confirmed that an action had worked. In testing, people asked someone else to look over their screen.",
    approach: "I was one of the designers on the full redesign and rebrand to Movin’, from registration to every feature. We ran usability tests on the old app, interviewed retirees with deliberately simple questions, and mapped what they said, did, thought and felt. Six findings came out of that, and each one got a specific answer in the design.",
    solutions: [
      {"head": "Onboarding as the first task", "body": "First-time users did not know where to start. Onboarding became a guided first mission that shows what the app does, with coach marks on the features that matter."},
      {"head": "Confirmation after every action", "body": "People were unsure whether a tap had worked. Every completed task now answers back with a toast or a small interaction, so nobody has to wonder."},
      {"head": "Icons that say what they do", "body": "Users said the buttons all looked the same. I redrew the icon set to match its context and gave every icon a readable label."},
      {"head": "Long forms, broken up", "body": "Registration became a wizard with a step indicator, so users always know how many steps are left and why each piece of information is needed."},
      {"head": "One visual language", "body": "Illustration guidelines and micro-interaction specs kept 50+ screens consistent. In banking, that consistency reads as safety."},
    ],
    boards: [
      {"src": "/work/mandiri-taspen/board-previous.png", "alt": "The previous Mantap Mobile app", "caption": "Before: Mantap Mobile. Dense tiles, small labels, promotion ahead of tasks."},
      {"src": "/work/mandiri-taspen/board-empathy-map.png", "alt": "Empathy map from interviews with retirees", "caption": "Empathy map from the interviews. \"I'm afraid to press the wrong thing and lose my money.\""},
      {"src": "/work/mandiri-taspen/board-lofi.png", "alt": "Low-fidelity wireframes for welcome, home and transfer", "caption": "Low-fidelity flows for welcome, home and transfer, tested before any visual design."},
      {"src": "/work/mandiri-taspen/board-final.png", "alt": "Final Movin' screens", "caption": "Final design: larger type, labelled icons, one clear action per screen."},
    ],
    impact: [
      {"value": "3.2 → 4.5", "label": "App store rating", "suffix": "★"},
      {"value": "50+", "label": "Screens under one system"},
      {"value": "6", "label": "Research findings, each with a design answer"},
    ],
    closing: "The design was delivered two months ahead of a one-year plan. The brief was trust, and the star rating was the scoreboard.",
  },
]

export const workIndex = [
  { role: 'Senior Product Designer', company: 'Finku', dates: 'Feb 2026 – Present', current: true, slug: 'finku-fingpt',
    note: 'Sole product designer on a personal finance app. Designed FinGPT (AI assistant and AI-generated insights) and cut onboarding from 20+ screens to 4. Led multi-currency support, the Premium paywall, faster transaction logging (OCR, iOS Shortcuts), and the Household and Tracking Days MVPs from brief to handoff.' },
  { role: 'Senior Product Designer', company: 'Goers', dates: 'Jun 2025 – Jan 2026', slug: 'goers-discovery',
    note: 'Led the homepage redesign for content discoverability; simplified the purchase journey end-to-end and ran all usability testing myself.' },
  { role: 'Product Designer, Platform', company: 'KoinWorks', dates: 'Mar 2022 – Jun 2025', slug: 'koinworks-registration',
    note: 'Redesigned registration with real-time validation — verified users up 248%, drop-off down 20%. Took KoinBill and KoinLearn from concept to launch; vouchers drove a 30% lift in repeat transactions.' },
  { role: 'Senior Product Designer (contract)', company: 'Mandiri Taspen', dates: 'Jul 2023 – Apr 2024', slug: 'mandiri-taspen',
    note: 'Contract engagement, concurrent with KoinWorks. Redesigned and rebranded the bank’s app (Movin’) for retired civil servants aged 55+, from registration to every feature. App rating climbed from 3.2★ to 4.5★ across 50+ screens.' },
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
