export type AgentCategory = 
  | 'Sales'
  | 'Marketing'
  | 'Customer Success'
  | 'Lead Generation'
  | 'Analytics'
  | 'SEO'
  | 'Social Media';

export interface Agent {
  id: string;
  name: string;
  description: string;
  price: number;
  category: AgentCategory;
  features: string[];
  benefits: string[];
  useCase: string;
  integration?: string[];
}
import { Agent } from '@/types/agent';

export const agents: Agent[] = [
  {
    id: 'competitor-insights',
    name: 'Competitor Insights Agent',
    description: 'Get real-time updates on competitor news, features, and advertising strategies to inform your marketing decisions.',
    price: 199,
    category: 'Marketing',
    features: [
      'Real-time competitor monitoring',
      'Feature comparison tracking',
      'Ad campaign analysis',
      'Market strategy insights',
      'Automated reporting'
    ],
    benefits: [
      'Stay ahead of market trends',
      'Optimize marketing strategies',
      'Identify competitive advantages',
      'Make data-driven decisions'
    ],
    useCase: 'Track and analyze competitor activities to inform strategic marketing decisions',
    integration: ['CRM', 'Analytics Platforms', 'Social Media']
  },
  {
    id: 'lead-qualification',
    name: 'Lead Qualification Agent',
    description: 'Qualifies leads through targeted questions and organizes them in CRMs or spreadsheets for streamlined workflows.',
    price: 149,
    category: 'Lead Generation',
    features: [
      'Automated lead scoring',
      'Smart questionnaire system',
      'CRM integration',
      'Lead organization',
      'Automated follow-ups'
    ],
    benefits: [
      'Save time on lead qualification',
      'Improve lead quality',
      'Streamline sales process',
      'Better conversion rates'
    ],
    useCase: 'Automatically qualify and organize incoming leads for sales teams',
    integration: ['Salesforce', 'HubSpot', 'Google Sheets']
  }
  // Add more agents here...
];
