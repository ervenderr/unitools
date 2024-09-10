import Link from 'next/link';

const designTools = [
  { name: 'Color Palette Generator', description: 'Create harmonious color schemes for your projects.' },
  { name: 'Logo Maker', description: 'Design professional logos with ease.' },
  { name: 'Image Editor', description: 'Edit and enhance images online.' },
  { name: 'Typography Tool', description: 'Explore and compare different fonts for your designs.' },
  { name: 'Icon Creator', description: 'Create custom icons for your applications and websites.' },
  { name: 'Mockup Generator', description: 'Generate realistic mockups for your designs.' },
];

export default function DesignTools() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Design Tools</h1>
      <p className="mb-8">Explore our collection of design tools to enhance your creative projects.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designTools.map((tool) => (
          <div key={tool.name} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <Link href={`/tools/design/${tool.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-500 hover:underline">
              Use this tool
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}