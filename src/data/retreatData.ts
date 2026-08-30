import { Peer, ItineraryDay, InsightArticle } from '../types';

export const RETREAT_META = {
  name: 'Next Mile Club',
  tagline: 'Strategic quietude for the architectural mind.',
  heroEyebrow: 'THE RETREAT',
  heroHeadline: 'The Altitude of Ambition.',
  heroSubhead: 'Strategic quietude for the architectural mind.',
  location: 'Kumaon Himalayas, India',
  dates: 'October 24–26, 2024',
  cohortSize: 'Strictly 14',
  altitude: '7,200 ft (2,195 m) MSL',
  coordinates: '29.3803° N, 79.4636° E',
  access: 'Private helicopter transfer from Dehradun or scenic mountain drive via Pantnagar',
  estateName: 'The High Sanctuary at Mukteshwar',
  ctaText: 'REQUEST AN INVITATION',
  images: {
    hero: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop', // Elegant estate lawn with warm sunlight and mountain retreat aura
    heroAlt: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
    convener: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop', // Solitary figure on dramatic high-altitude cliff / mist
    estateLawn: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop',
    library: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1600&auto=format&fit=crop',
    himalayas: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
  }
};

export const CONVENER_INFO = {
  name: 'Maya Sharma',
  role: 'Convener & Curator, Next Mile Club',
  background: 'Former Senior Partner, Tier-1 Strategy & Architecture Group',
  shortBio: "Drawing from a decade in Tier-1 consultancy, Maya curates spaces that demand intellectual rigor while providing absolute sanctuary. She believes in the 'architecture of silence'—that the profoundest insights require environments stripped of digital noise and performative expectations.",
  fullBio: `Maya Sharma spent twelve years advising Fortune 50 chief executives, enterprise architects, and foundational technology creators across North America, Europe, and Asia on capital allocation, organizational resilience, and core technological infrastructure.

Throughout her tenure leading Tier-1 strategic advisory engagements, she identified a recurring systemic deficit: high-performing leaders rarely fail for lack of intelligence or drive; they fail because modern executive life systematically eradicates unbroken contemplative time. The constant performative velocity of modern boardrooms and public forums degrades long-horizon clarity.

In 2021, Maya founded the Next Mile Club to construct an antidote: an uncompromising high-altitude sanctuary where exactly fourteen selected peers can step outside the velocity trap. Her convenings strictly enforce the Chatham House Rule, zero presentation decks, and absolute analog disconnect, fostering discourse grounded in structural truth rather than self-promotion.`,
  quote: "The profoundest insights require environments stripped of digital noise and performative expectations. True scale begins in silence.",
  location: 'Kumaon, India & Geneva, Switzerland'
};

export const PEERS_DATA: Peer[] = [
  {
    id: 'peer-1',
    name: 'Sun Rong',
    title: 'Co-Founder & CEO',
    company: 'Ergeon',
    domain: 'Enterprise Architecture',
    bio: 'Pioneered distributed all-remote hardware-enabled construction services scaling across 40+ countries. Focused on sovereign organizational topologies.',
    depthInquiry: 'How do we design governance models for borderless organizations without central managerial choke points?',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for depth in resilient distributed organizational architecture.',
    location: 'Palo Alto, CA'
  },
  {
    id: 'peer-2',
    name: 'Tracy Young',
    title: 'Co-Founder & CEO',
    company: 'TigerEye (ex-PlanGrid)',
    domain: 'Deep Systems',
    bio: 'Co-founded PlanGrid (acquired by Autodesk for $875M); currently architecting autonomous simulation engines for enterprise revenue mechanics.',
    depthInquiry: 'What are the mathematical limits of deterministic planning in volatile enterprise market ecosystems?',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for structural command of mission-critical systems and multi-decade longevity.',
    location: 'San Francisco, CA'
  },
  {
    id: 'peer-3',
    name: 'Wei Deng',
    title: 'Founder & CEO',
    company: 'Clipper Systems',
    domain: 'Capital Systems',
    bio: 'Serial operator scaling liquidity engines across Southeast Asia and Latin America. Investigates post-traditional treasury protocols.',
    depthInquiry: 'How will autonomous agent economies settle systemic settlement risks across high-frequency jurisdictions?',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for mathematical clarity in counter-cyclical liquidity frameworks.',
    location: 'Singapore & London'
  },
  {
    id: 'peer-4',
    name: 'Elena Rostova',
    title: 'Founding Partner',
    company: 'Helios Kinetics',
    domain: 'AI Infrastructure',
    bio: 'Architected foundational low-latency inference routing networks. Researches thermodynamic efficiency bounds in sovereign compute clusters.',
    depthInquiry: 'Are current transformer topologies asymptotically bounded by physical interconnect thermodynamics?',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for breakthrough contributions to non-silicon computational paradigms.',
    location: 'Zurich, Switzerland'
  },
  {
    id: 'peer-5',
    name: 'Devendra Kulkarni',
    title: 'Chief Architect',
    company: 'Vanguard Compute',
    domain: 'AI Infrastructure',
    bio: 'Specialist in fault-tolerant distributed consensus algorithms for next-generation quantum-resistant state machines.',
    depthInquiry: 'Can decentralized state verification survive sub-millisecond adversarial partitions at global scale?',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for uncompromising rigor in mission-critical protocol design.',
    location: 'Bengaluru, India'
  },
  {
    id: 'peer-6',
    name: 'Astrid Lindholm',
    title: 'Managing Director',
    company: 'Nordic Sovereign Vault',
    domain: 'Capital Systems',
    bio: 'Oversees multi-generational allocation strategies across zero-carbon infrastructure, maritime energy, and synthetic biology.',
    depthInquiry: 'What mental models protect capital purchasing power across 100-year civilizational inflection points?',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for multi-generational philosophical discipline and fiduciary guardianship.',
    location: 'Stockholm, Sweden'
  },
  {
    id: 'peer-7',
    name: 'Marcus Vance',
    title: 'Founder & Chairman',
    company: 'Aethelgard Bio',
    domain: 'Biosystems',
    bio: 'Pioneered computational proteomics for targeted cellular regeneration. Holds 28 patents in biological signal transduction.',
    depthInquiry: 'What prevents biological feedback loops from achieving closed-loop homeostasis during acute metabolic crises?',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for profound synthesis between physical biology and algorithmic computation.',
    location: 'Cambridge, MA'
  },
  {
    id: 'peer-8',
    name: 'Dr. Tariq Al-Mansoor',
    title: 'Director of Systems Theory',
    company: 'Emirates Advanced Labs',
    domain: 'Deep Systems',
    bio: 'Mathematician exploring non-linear dynamics, game theoretic equilibria in resource allocation, and arid-climate energy microgrids.',
    depthInquiry: 'How do complex adaptive networks maintain stability when transition states happen faster than observation cycles?',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for pure theoretical excellence and topological network modeling.',
    location: 'Abu Dhabi, UAE'
  },
  {
    id: 'peer-9',
    name: 'Claire Chen-Morrison',
    title: 'VP of Platform Architecture',
    company: 'Strata Cloudworks',
    domain: 'Enterprise Architecture',
    bio: 'Oversaw kernel redesigns supporting 40% of global financial clearing traffic. Author of "The Silent Backbone: Engineering for 99.9999%".',
    depthInquiry: 'How can modern software architectures eliminate cognitive debt without continuous rewrites?',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for unyielding standards in zero-downtime infrastructure engineering.',
    location: 'Seattle, WA'
  },
  {
    id: 'peer-10',
    name: 'Julian Thorne',
    title: 'Principal',
    company: 'Oakhaven Macro Reserve',
    domain: 'Capital Systems',
    bio: 'Analyzes macro-prudential regime shifts, sovereign debt cycles, and commodity physical logistics bottlenecks.',
    depthInquiry: 'When geopolitical fragmentation accelerates, which fundamental commodities retain structural pricing leverage?',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for second-order causal thinking across global trade and energy matrices.',
    location: 'London, UK'
  },
  {
    id: 'peer-11',
    name: 'Siddharth Rao',
    title: 'Founder & CTO',
    company: 'Anvil Robotics',
    domain: 'Deep Systems',
    bio: 'Building deterministic spatial intelligence engines for heavy industrial fabrication and deep-sea mineral survey vessels.',
    depthInquiry: 'What is the minimum sensory feedback necessary for physical robotics to operate under unmodeled friction anomalies?',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for real-world mechanical tenacity and zero-error tolerances.',
    location: 'Munich & Hyderabad'
  },
  {
    id: 'peer-12',
    name: 'Genevieve Dupond',
    title: 'Head of Biospheric Modelling',
    company: 'Caelum Analytics',
    domain: 'Biosystems',
    bio: 'Specialist in satellite atmospheric spectrometry, cloud microphysics, and carbon sink verification algorithms.',
    depthInquiry: 'Can probabilistic climate feedback models accurately decouple anthropogenic forcing from solar variability?',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for uncompromising empirical standards in environmental physical systems.',
    location: 'Paris, France'
  },
  {
    id: 'peer-13',
    name: 'Lucas Brandão',
    title: 'Chief Cryptographer',
    company: 'Aethelgard Secure Protocol',
    domain: 'AI Infrastructure',
    bio: 'Researches zero-knowledge succinct non-interactive arguments of knowledge (zk-SNARKs) and verifiable off-chain execution.',
    depthInquiry: 'How do we design cryptographic proofs that remain computationally lightweight on edge silicon without trusted setups?',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for mathematical precision in privacy-preserving distributed state.',
    location: 'São Paulo, Brazil'
  },
  {
    id: 'peer-14',
    name: 'Ananya Mehra',
    title: 'Founder & Chief Scientist',
    company: 'Synapse Logic',
    domain: 'Enterprise Architecture',
    bio: 'Pioneering graph-based neural reasoning engines for complex multi-jurisdictional legal and supply chain compliance.',
    depthInquiry: 'Where does programmatic logic break down when translating ambiguous human treaties into automated execution code?',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop',
    selectedStatement: 'Selected for mastery over high-dimensional symbolic and cognitive graphs.',
    location: 'New Delhi & Singapore'
  }
];

export const ITINERARY_DATA: ItineraryDay[] = [
  {
    dayNumber: '01',
    date: 'Thursday, October 24',
    title: 'The Ascent & Unspooling',
    subtitle: 'Transitioning from the noise of the plains to the silence of the high ridge.',
    schedule: [
      {
        time: '13:00',
        label: 'High-Altitude Arrival & Chambers Allocation',
        description: 'Private arrival at the Mukteshwar Estate (7,200 ft). Surrender of digital transmitters into copper Faraday lockboxes. Analog journals and elevation herbal tea presented.',
        type: 'solo'
      },
      {
        time: '15:30',
        label: 'Walk of the Cedar Canopy',
        description: 'Silent 4-mile traverse through ancient deodar and oak forests to reset neural cadence. No conversation permitted; optical recalibration.',
        type: 'solo'
      },
      {
        time: '18:00',
        label: 'The Opening Dossier & Convening Fire',
        description: 'Maya Sharma frames the 72-hour covenant. Formal introduction of the 14 peers with no resumes, titles, or corporate valuation metrics.',
        type: 'collective'
      },
      {
        time: '19:30',
        label: 'Himalayan Foraged Feast',
        description: 'Kumaoni mountain table curated with cold-pressed mustard, regional grains, mountain stinging nettle, and slow-cooked earthen broths.',
        type: 'culinary'
      }
    ]
  },
  {
    dayNumber: '02',
    date: 'Friday, October 25',
    title: 'The Structural Interrogation',
    subtitle: 'Dissecting first principles without the crutch of slide decks or performative answers.',
    schedule: [
      {
        time: '06:30',
        label: 'Dawn Ridge Meditation & Surya Observation',
        description: 'Observation of the sunrise over Nanda Devi (25,643 ft) and Trishul peaks. Optional alpine breathing session.',
        type: 'solo'
      },
      {
        time: '08:30',
        label: 'Colloquium I: The Anti-Fragile Core',
        description: 'Seven peers present their core architectural paradox. 15 minutes of uninterrupted premise exposition followed by 45 minutes of rigorous dialectic.',
        type: 'dialogue'
      },
      {
        time: '13:00',
        label: 'Solitary Contemplation & Forest Luncheon',
        description: 'Independent bento baskets distributed across solitary clifftop pavilions for unbroken note-taking and cognitive synthesis.',
        type: 'solo'
      },
      {
        time: '15:30',
        label: 'Colloquium II: The 50-Year Horizon',
        description: 'Second cohort session examining capital allocation, sovereign intelligence, and civilizational shock absorbers.',
        type: 'dialogue'
      },
      {
        time: '20:00',
        label: 'Chatham House Fireside Discourse',
        description: 'Unrecorded, unmoderated roundtable around the central stone hearth. Difficult truths regarding executive isolation and architectural compromise.',
        type: 'collective'
      }
    ]
  },
  {
    dayNumber: '03',
    date: 'Saturday, October 26',
    title: 'Synthesis & The Descent Protocol',
    subtitle: 'Distilling unshakeable convictions before re-entering velocity.',
    schedule: [
      {
        time: '07:00',
        label: 'The Nanda Devi Horizon Walk',
        description: 'High-altitude ridge walk to the ancient temple overlook. Discussion in walking pairs on personal architectural theses.',
        type: 'dialogue'
      },
      {
        time: '10:00',
        label: 'Dossier Crystallization',
        description: 'Each peer pens their sealed "Summit Thesis"—a single page of strategic clarity committed to paper to be revisited in 12 months.',
        type: 'solo'
      },
      {
        time: '12:30',
        label: 'Farewell Table & Pact Exchange',
        description: 'Final collective meal. Return of communications hardware with calibrated intention. Helicopter and chauffeured departures begin.',
        type: 'culinary'
      }
    ]
  }
];

export const PHILOSOPHY_TENETS = [
  {
    number: '01',
    title: 'The Architecture of Silence',
    description: 'High-velocity decision makers are bombarded with sensory clutter. True breakthroughs do not happen in the boardroom; they demand environments of radical sensory reduction.'
  },
  {
    number: '02',
    title: 'Zero-Performance Discourse',
    description: 'In typical executive conferences, every statement is a performance for shareholders, investors, or subordinates. At Next Mile Club, status signaling is eliminated. We operate strictly under Chatham House rules.'
  },
  {
    number: '03',
    title: 'Asymmetric Altitude',
    description: 'Physical geography dictates mental geography. At 7,200 feet, surrounded by Himalayan summits that have stood for 50 million years, transient quarterly pressures fall away, revealing enduring structural dynamics.'
  },
  {
    number: '04',
    title: 'The 14-Peer Ceiling',
    description: 'Dunbar dynamics dictate that meaningful intellectual intimacy decays rapidly past 15 individuals. Fourteen peers ensures that everyone is an active contributor to every dialectic.'
  }
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'insight-1',
    number: 'MONOGRAPH 01',
    title: 'The Architecture of Silence: Why Modern Leadership Fails in High Noise',
    subtitle: 'An inquiry into cognitive bandwidth degradation in the 24/7 executive ecosystem.',
    category: 'Cognitive Strategy',
    readTime: '7 min read',
    published: 'September 2024',
    author: 'Maya Sharma',
    authorRole: 'Founder, Next Mile Club',
    excerpt: 'The single greatest unmeasured cost in modern enterprise is the systematic eradication of unbroken contemplative time. When leaders operate at continuous 100% velocity, they optimize for the urgent at the permanent expense of the foundational.',
    content: [
      'In high-stakes corporate architecture, we frequently observe an inverse correlation between communication volume and strategic durability. The executive who answers 400 messages a day is rarely the architect who anticipates the 5-year structural shift that renders their business model obsolete.',
      'Silence is not the absence of productivity; it is the physical space in which complex cognitive synthesis occurs. In the Himalayas, stripped of ambient pings and performative status updates, the brain down-shifts into alpha-wave reflection, enabling second- and third-order causal modeling.',
      'Our summit protocol is specifically engineered to simulate an analog quarantine: 72 hours of uninterrupted focus to solve the one problem that actually matters.'
    ]
  },
  {
    id: 'insight-2',
    number: 'MONOGRAPH 02',
    title: 'The Anti-Network Protocol: Depth Over Utility',
    subtitle: 'Why transactional networking produces superficial alliances while shared intellectual rigor creates lifelong bonds.',
    category: 'Topological Dynamics',
    readTime: '6 min read',
    published: 'August 2024',
    author: 'Sun Rong & Tracy Young',
    authorRole: 'Next Mile Fellows',
    excerpt: 'Traditional executive networking is fundamentally extractive: people meet to trade rolodexes and extract near-term value. Strategic quietude convenes individuals solely around the shared pursuit of architectural truth.',
    content: [
      'When you remove pitch decks, name badges, and corporate valuations from a room, what remains is the naked caliber of an individual’s mind. Ideas stand or fall on their internal mathematical coherence, not the prestige of the speaker’s title.',
      'The bond created between 14 founders who have challenged each other’s deepest strategic assumptions by an open hearth in the Himalayas is orders of magnitude stronger than any connection forged in a conference convention hall.'
    ]
  },
  {
    id: 'insight-3',
    number: 'MONOGRAPH 03',
    title: 'Asymmetric Time Horizons in Capital Allocation',
    subtitle: 'Designing sovereign balance sheets that thrive across multi-decade geopolitical shifts.',
    category: 'Capital Systems',
    readTime: '9 min read',
    published: 'July 2024',
    author: 'Julian Thorne & Astrid Lindholm',
    authorRole: 'Macro Strategists',
    excerpt: 'Most institutional capital operates on 90-day reporting intervals, creating massive arbitrage opportunities for those equipped with the psychological patience to operate on 20-year cycles.',
    content: [
      'True wealth preservation requires constructing balance sheets that do not rely on perpetual low-interest liquidity or uninterrupted global supply chains.',
      'During our sessions in Mukteshwar, we examine the resilience of real-world energy assets, sovereign computational infrastructure, and biological longevity systems that will survive macro-prudential regime changes.'
    ]
  }
];
