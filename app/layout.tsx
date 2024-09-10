import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";

export const metadata = {
  title: 'UniTools',
  description: 'Your all-in-one platform for digital creators, professionals, and hobbyists.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
