import Image from 'next/image';
import Link from 'next/link';
import unitoolsHero from '../public/images/unitools-hero.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-secondary-100 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-b-[50%] transform translate-y-[-30%]" />
        <div className="container relative mx-auto px-4 py-24 flex flex-col md:flex-row items-center z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold font-display mb-6 text-white md:text-neutral-800">
              Purrfect Tools for Every Creator
            </h1>
            <p className="text-xl mb-8 text-primary-100 md:text-neutral-600 font-sans">
              Discover a curated collection of open-source tools to streamline your workflow. 
              Let UniTools be your companion in creativity and productivity.
            </p>
            <div className="space-x-4">
              <Link href="/tools" className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors shadow-soft">
                Explore Tools
              </Link>
              <Link href="/about" className="bg-white text-primary-600 px-8 py-3 rounded-full hover:bg-neutral-100 transition-colors shadow-soft">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-30 transform scale-95 -rotate-3"></div>
            <Image
              src={unitoolsHero}
              alt="UniTools Hero Image"
              width={600}
              height={400}
              className="rounded-3xl shadow-soft transform hover:scale-105 transition-transform duration-300 relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-center mb-12">Why Choose UniTools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Open Source", description: "Access and contribute to a wide range of open-source tools.", icon: "🔓" },
              { title: "Curated Collection", description: "Handpicked tools to ensure quality and relevance.", icon: "🏆" },
              { title: "Community Driven", description: "Join a thriving community of creators and developers.", icon: "👥" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">Ready to Boost Your Productivity?</h2>
          <p className="text-xl mb-8">Join thousands of creators who trust UniTools for their projects.</p>
          <Link href="/signup" className="bg-white text-primary-600 px-8 py-3 rounded-2xl hover:bg-neutral-100 transition-colors shadow-soft">
            Get Started for Free
          </Link>
        </div>
      </div>
    </div>
  );
}
