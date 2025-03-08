import { Agent } from '@/types/agent';
import Link from 'next/link';

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{agent.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {agent.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {agent.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${agent.price}/mo</span>
          <Link
            href={`/marketplace/${agent.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
