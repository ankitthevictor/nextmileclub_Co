import { Peer, ItineraryDay, InsightArticle } from '../types';

export const RETREAT_META = {
  name: 'Next Mile Club',
  tagline: 'Strategic quietude for the architectural mind.',
  heroEyebrow: 'THE RETREAT',
  heroHeadline: 'The Altitude of Ambition.',
  heroSubhead: 'Strategic quietude for the architectural mind.',
  location: 'Near Bangalore',
  dates: 'Dates to be announced soon',
  cohortSize: '14–18 Curated Peers',
  altitude: 'Private Countryside Estate',
  coordinates: 'Near Bangalore, Karnataka',
  access: 'Chauffeured pickup & private transfer from Bangalore',
  estateName: 'Private Countryside Estate, near Bangalore',
  ctaText: 'REQUEST AN INVITATION',
  emailDestination: 'thenextmileclub@gmail.com',
  images: {
    hero: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop',
    heroAlt: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop',
    convener: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    estateLawn: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop',
    library: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1600&auto=format&fit=crop',
    peaks: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1600&auto=format&fit=crop',
  }
};

export const CONVENER_INFO = {
  name: 'Akanksha Sharma',
  role: 'Convener & Founder, Next Mile Club',
  background: 'ISB MBA • Ex-Associate Director at Meesho, Sprinklr, Accenture & Deloitte',
  shortBio: "Akanksha Sharma has spent her career in high-velocity executive rooms where senior women are often the only one at the table. After leading teams and scaling business units across Meesho, Sprinklr, Accenture, and Deloitte, she founded Next Mile Club because the breakthroughs that truly moved her life and career never happened in conference halls—they happened in quiet, honest conversations with trusted women who had nothing to sell each other.",
  fullBio: `Akanksha Sharma has spent over a decade in the high-stakes rooms where senior women are all too often the solitary voice at the table. An ISB MBA, she has led high-impact teams and scaled core P&Ls across Meesho, Sprinklr, Accenture, and Deloitte — most recently serving as Associate Director at Meesho.

Throughout years of relentless execution, high-profile launches, and board presentations, she realized a fundamental truth that many senior leaders feel but rarely voice: as your altitude of responsibility rises, the space to be genuinely honest shrinks. You are expected to have all the answers, hold the team together, and maintain unwavering poise.

The moments that truly changed her trajectory—the moments of deep clarity, unexpected courage, and career-defining decisions—never came from noisy convention centers or transactional mixers. They happened during unhurried walks in nature, around dinner tables where titles were forgotten, and among a small group of women who offered honest truth without competition.

Next Mile Club is that experience, crafted with care. Small, curated cohorts of 14 to 18 women. Two unhurried days away from the everyday noise at a quiet estate near Bangalore. A safe, peaceful space where you can drop the armor, speak your truth, and gain absolute clarity on what your next mile looks like.`,
  quote: "We spend so much time carrying everyone else's expectations that we forget to ask what we actually want to build next. True clarity begins the moment you give yourself permission to pause.",
  location: 'Bangalore & New Delhi'
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
    date: 'Day One',
    title: 'The Arrival & Unburdening',
    subtitle: 'Leaving behind the daily rush and settling into quiet countryside calm.',
    schedule: [
      {
        time: '13:00',
        label: 'Welcome & Settling In',
        description: 'Arrive at the private retreat estate near Bangalore. A warm cup of local herbal tea, settling into your room, and the instant relief of being somewhere unhurried.',
        type: 'solo'
      },
      {
        time: '15:30',
        label: 'The Nature Walk Under Tree Canopies',
        description: 'An unhurried walk through lush greenery and open trails. Breathing in fresh air, unwinding the mental static, and resetting your internal pace.',
        type: 'solo'
      },
      {
        time: '18:00',
        label: 'The Hearth & First Names',
        description: 'Gathering around the warm evening hearth. No stage, no presentations, and no job titles—just honest first names and the feeling that you are among kindred spirits.',
        type: 'collective'
      },
      {
        time: '19:30',
        label: 'The Long Table Dinner',
        description: 'A slow, nourishing feast with fresh local ingredients, laughter, shared wine, and the kind of unscripted conversation that builds real trust.',
        type: 'culinary'
      }
    ]
  },
  {
    dayNumber: '02',
    date: 'Day Two',
    title: 'Honest Conversations & Deep Clarity',
    subtitle: 'Three intimate sessions where you can speak what is usually left unsaid and discover what truly matters.',
    schedule: [
      {
        time: '07:00',
        label: 'Morning Nature Reflection',
        description: 'Watching the morning light break across open gardens. Freshly brewed coffee on the terrace and uninterrupted morning quiet.',
        type: 'solo'
      },
      {
        time: '08:30',
        label: 'Session I: The Unspoken Weight',
        description: 'A structured, safe space where each peer shares the real challenge, inflection point, or dilemma they have been carrying alone. Compassionate, sharp, and genuine peer insight.',
        type: 'dialogue'
      },
      {
        time: '13:00',
        label: 'The Open Afternoon',
        description: 'Hours with absolutely nothing scheduled. Nap, journal by the window, wander the gardens, or sit in pairs by the library.',
        type: 'solo'
      },
      {
        time: '16:00',
        label: 'Session II: The Decision You Have Been Postponing',
        description: 'Cutting through fear and hesitation. A focused working circle to map the courageous decision that will define your next chapter.',
        type: 'dialogue'
      },
      {
        time: '20:00',
        label: 'Fireside Sisterhood Dialogue',
        description: 'Under the starlit sky by the crackling fire, sharing the vulnerable, unvarnished truths of ambition, leadership, family, and personal fulfillment.',
        type: 'collective'
      }
    ]
  },
  {
    dayNumber: '03',
    date: 'Day Three',
    title: 'The Written Commitment & Lifelong Allies',
    subtitle: 'Leaving with unshakeable conviction, a handwritten compass, and women who will cheer and hold you to it.',
    schedule: [
      {
        time: '07:30',
        label: 'Morning Walk in Pairs',
        description: 'Walking side by side through the morning gardens, distilling insights with a trusted peer partner.',
        type: 'dialogue'
      },
      {
        time: '09:30',
        label: 'The Handwritten Promise',
        description: 'Putting pen to paper: committing to your core decision and priorities. A tangible anchor for the months and years ahead.',
        type: 'solo'
      },
      {
        time: '12:00',
        label: 'Farewell Table & The Journey Ahead',
        description: 'A celebratory final lunch together. Leaving not just with clarity of purpose, but with a lifelong circle of trusted allies.',
        type: 'culinary'
      }
    ]
  }
];

export const PHILOSOPHY_TENETS = [
  {
    number: '01',
    title: 'The Courage to Pause',
    description: 'In an environment that rewards constant reactivity, choosing to step back into stillness is the ultimate act of leadership courage. When the noise stops, the right answers surface.'
  },
  {
    number: '02',
    title: 'Dropping the Armor',
    description: 'Senior leadership often forces you to look invulnerable. In our room, there is nothing to prove and no one to impress. Real growth and lasting clarity only begin when we allow ourselves to be authentic.'
  },
  {
    number: '03',
    title: 'A Breath of Fresh Air',
    description: 'Physical space expands mental capacity. Stepping away from the daily rush into open greenery, the urgent fires of the week fade away—leaving only what truly matters.'
  },
  {
    number: '04',
    title: 'A Circle That Truly Understands',
    description: 'It can be deeply lonely when you are carrying high stakes. Gathering with 14 to 18 women who operate at the same level creates a rare bond of empathy, wisdom, and unconditional support.'
  }
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'insight-1',
    number: 'ESSAY 01',
    title: 'The Loneliness at the Top: Why Senior Women Need Safe Spaces',
    subtitle: 'The unseen emotional tax of high responsibility, and why real breakthroughs happen in quiet rooms.',
    category: 'Leadership & Belonging',
    readTime: '6 min read',
    published: 'Autumn 2024',
    author: 'Akanksha Sharma',
    authorRole: 'Founder, Next Mile Club',
    excerpt: 'When you are the leader everyone looks to for confidence, where do you go when you feel uncertain? The greatest gift a senior leader can give herself is a room of peers where she can simply exhale.',
    content: [
      'In high-stakes corporate roles, senior women often master the art of composure. We learn to anticipate every question, manage cross-functional tensions, and navigate high-pressure rooms with seamless grace. But carrying that armor every single day comes at a quiet, unmeasured cost.',
      'The conversations that truly transform our careers and restore our spirit are rarely found on webinar stages or crowded networking mixers. They happen when we can finally sit across from women who understand our world intimately, look each other in the eye, and speak the truth without fear of judgment.',
      'Next Mile Club was born from the conviction that every ambitious woman deserves a peaceful retreat—a place where she can put down the weight of expectations, rediscover her own voice, and gain clarity on what she genuinely wants next.'
    ]
  },
  {
    id: 'insight-2',
    number: 'ESSAY 02',
    title: 'Beyond the Hamster Wheel: Redefining What Success Feels Like',
    subtitle: 'Moving from mindless achievement to intentional fulfillment and alignment.',
    category: 'Life & Career',
    readTime: '5 min read',
    published: 'Autumn 2024',
    author: 'Next Mile Fellowship',
    authorRole: 'Cohort Reflections',
    excerpt: 'We often climb the career mountain so quickly that we forget to check if we actually like the view. Taking two days to evaluate your priorities is how you ensure the next mile is yours, not someone else’s.',
    content: [
      'It is easy to get caught in the velocity trap: hitting one milestone only to immediately sprint toward the next, driven by momentum rather than genuine desire.',
      'When you remove yourself from the daily notifications, meetings, and obligations, a profound shift happens. You begin to separate the things you do out of habit from the things that truly bring meaning, energy, and joy.',
      'Our retreats are designed to help you step off the treadmill, look at your career and life with open eyes, and make the courageous choices that align your daily energy with your deepest values.'
    ]
  },
  {
    id: 'insight-3',
    number: 'ESSAY 03',
    title: 'The Power of Sisterhood at Scale',
    subtitle: 'Why the strongest network you will ever build is a small circle of women who tell you the truth.',
    category: 'Peer Circles',
    readTime: '7 min read',
    published: 'Autumn 2024',
    author: 'Next Mile Fellowship',
    authorRole: 'Cohort Reflections',
    excerpt: 'Traditional networking is about collecting contacts. Authentic peer circles are about building trust. When women support each other without rivalry, exponential breakthroughs happen.',
    content: [
      'Transactional networking asks, "What can this person do for my career?" Intimate peer sisterhood asks, "Who is in your corner when the road gets steep?"',
      'The bond forged between 14 to 18 women sharing meals, walks, and honest vulnerabilities around the hearth cannot be matched. It creates an enduring council of trusted advisors who celebrate your victories and hold your hand through transitions.',
      'You leave the retreat not just with clearer thoughts, but with a community that remains your touchstone for years to come.'
    ]
  }
];
