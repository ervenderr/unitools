import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">UniTools</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/tools" className="hover:text-gray-300">Tools</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
