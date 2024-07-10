import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center justify-between px-4 md:px-6 border-t bg-gray-800 text-white">
      <p className="text-xs text-muted-foreground">© 2024 CSEDGE. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="text-white hover:text-primary">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="#" aria-label="Twitter" className="text-white hover:text-primary">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="#" aria-label="Instagram" className="text-white hover:text-primary">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-white hover:text-primary">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
