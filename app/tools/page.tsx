import ToolCard from '../components/ToolCard';

const tools = [
  { name: 'Design', description: 'Access design tools and resources.', link: '/tools/design' },
  { name: 'Development', description: 'Access development tools and resources.', link: '/tools/development' },
  { name: 'Productivity', description: 'Access productivity tools and resources.', link: '/tools/productivity' },
  { name: 'Analytics', description: 'Access analytics tools and resources.', link: '/tools/analytics' },
  { name: 'Communication', description: 'Access communication tools and resources.', link: '/tools/communication' },
  { name: 'Project Management', description: 'Access project management tools and resources.', link: '/tools/project-management' },
];

export default function ToolsOverview() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">UniTools Categories</h1>
      <p className="mb-6">Explore our curated collection of open-source tools across various categories.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.name}
            name={tool.name}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
}