'use client'

import { useState } from 'react';
import ToolCard from '../components/ToolCard';

const tools = [
  { name: 'Background Remover', description: 'Remove backgrounds from images easily', category: 'Image Editing' },
  { name: 'Chat Generation', description: 'Generate conversational text using AI', category: 'AI' },
  { name: 'URL Shortener', description: 'Create short links for long URLs', category: 'Web Tools' },
  { name: 'PDF Converter', description: 'Convert documents to and from PDF format', category: 'Document Tools' },
  { name: 'QR Code Generator', description: 'Create QR codes for various purposes', category: 'Web Tools' },
  { name: 'Image Compressor', description: 'Reduce image file sizes without losing quality', category: 'Image Editing' },
  { name: 'Text to Speech', description: 'Convert text into spoken audio', category: 'AI' },
  { name: 'Password Generator', description: 'Create strong, secure passwords', category: 'Security' },
  // Add more tools as needed
];

const categories = ['All', 'Image Editing', 'AI', 'Web Tools', 'Document Tools', 'Security'];

export default function ToolsOverview() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = selectedCategory === 'All'
    ? tools
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">UniTools</h1>
      <p className="mb-6">Explore our curated collection of open-source tools.</p>

      <div className="mb-6">
        <label htmlFor="category-filter" className="mr-2">Filter by category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded p-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard
            key={tool.name}
            name={tool.name}
            description={tool.description}
            link={`/tools/${tool.name.toLowerCase().replace(' ', '-')}`}
          />
        ))}
      </div>
    </div>
  );
}