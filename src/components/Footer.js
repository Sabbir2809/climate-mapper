const Footer = () => {
  return (
    <footer className="bg-green-900 p-8 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">Climate Mapper</h2>
          <p className="mt-2 text-gray-300">
            Helping to create a greener future through technology.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:underline transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline transition duration-200">
                About
              </a>
            </li>
            <li>
              <a href="/game" className="hover:underline transition duration-200">
                Game
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline transition duration-200">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-lg font-semibold">Connect</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition duration-200">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition duration-200">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition duration-200">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition duration-200">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Climate Mapper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
