import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code } from 'lucide-react';


const Header: React.FC = () => {
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-yellow-600 font-bold' : 'hover:text-blue-200';
  };
  const location = useLocation();
  // const navigate = useNavigate();
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Code size={32} />
          <span className="text-2xl font-bold">SmartKidsKenya</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/courses" className={isActive('/courses')} >Courses</Link></li>
            <li><Link to="/about" className={isActive('/about')} >About</Link></li>
            <li><Link to="/contact" className={isActive('/Contact')}>Contact</Link></li>
            <li><Link to="/login" className={isActive('/login')}>Join Class</Link></li>
            <li><Link to="/register" className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-full hover:bg-yellow-300">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;