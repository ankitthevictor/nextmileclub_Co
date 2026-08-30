export interface Peer {
  id: string;
  name: string;
  title: string;
  company: string;
  domain: 'Enterprise Architecture' | 'AI Infrastructure' | 'Capital Systems' | 'Deep Systems' | 'Biosystems';
  bio: string;
  depthInquiry: string;
  image: string;
  selectedStatement: string;
  location: string;
}

export interface ItineraryDay {
  dayNumber: string;
  date: string;
  title: string;
  subtitle: string;
  schedule: {
    time: string;
    label: string;
    description: string;
    type: 'collective' | 'solo' | 'culinary' | 'dialogue';
  }[];
}

export interface InsightArticle {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  published: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
}

export interface InvitationApplication {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  domain: string;
  bandwidthQuestion: string;
  solitudeStatement: string;
  agreedChathamHouse: boolean;
  agreedDigitalDisconnect: boolean;
  edition: string;
}
