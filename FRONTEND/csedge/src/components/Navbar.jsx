import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center justify-between">
      <div className="flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Link to='/'>
          <h1 className='font-semibold'>CSEdge</h1>
        </Link>
        <span className="sr-only">CSEdge</span>
      </div>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary-foreground focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:items-center lg:w-auto lg:gap-6`}>
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-sm font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <div className="block mt-4 lg:inline-block lg:mt-0 text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={() => scrollToSection('courses')}>
          Courses
        </div>
        <div className="block mt-4 lg:inline-block lg:mt-0 text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={() => scrollToSection('about')}>
          About
        </div>
        <div className="block mt-4 lg:inline-block lg:mt-0 text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={() => scrollToSection('contact')}>
          Contact
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
