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
