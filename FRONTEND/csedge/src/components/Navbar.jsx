import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
      <div className="flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Link to='/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
        </Link>
        <span className="sr-only">CSEDGE</span>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={scrollToCourses}>
          Courses
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={scrollToAbout}>
          About
        </div>
        <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
