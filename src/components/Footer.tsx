import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/anuragbhattarai31/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-bhattarai-56000916b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:anuragbhattarai31@email.com"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;