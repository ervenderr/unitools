const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} UniTools. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-blue-600 hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-blue-600 hover:underline mx-2">Terms of Service</a>
          <a href="#" className="text-blue-600 hover:underline mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
