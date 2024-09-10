import Link from 'next/link';

interface ToolCardProps {
  name: string;
  description: string;
  link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-blue-500 hover:underline">
        Use this tool
      </Link>
    </div>
  );
};

export default ToolCard;
