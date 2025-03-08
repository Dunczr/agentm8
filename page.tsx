'use client';

import { useState } from 'react';
import { Agent } from '@/types/agent';
import { PriceRange, SortOption } from '@/types/marketplace';
import AgentCard from '@/components/marketplace/AgentCard';
import { agents } from '@/data/agents';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 1000 });

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    const matchesPrice = agent.price >= priceRange.min && agent.price <= priceRange.max;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">AI Agent Marketplace</h1>
        <input
          type="text"
          placeholder="Search agents..."
          className="w-full px-4 py-2 border rounded-lg"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}
