import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to UniTools</h1>
        <p className="text-xl mb-6">
          Your all-in-one platform for digital creators, professionals, and hobbyists. 
          Discover a curated collection of open-source tools to streamline your workflow.
        </p>
        <div className="space-x-4">
          <Link href="/tools" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Explore Tools
          </Link>
          <Link href="/about" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Learn More
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/images/unitools-hero.jpg"
          alt="UniTools Hero Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
