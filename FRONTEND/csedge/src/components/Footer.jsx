import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h6 className="text-xl font-semibold mb-4">About Us</h6>
            <p className="text-justify mb-4">
              This website offers straightforward guides and tutorials for interns, providing clear directions to complete tasks effectively. 
            </p>
            <a
              className="libutton"
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7202959273855713280"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe on LinkedIn
            </a>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 md:mb-0">
            <h6 className="text-xl font-semibold mb-4">Categories</h6>
            <ul className="footer-links space-y-2">
              <li><a href="#" className="hover:text-gray-400">Web Design</a></li>
              <li><a href="#" className="hover:text-gray-400">JavaScript</a></li>
              <li><a href="#" className="hover:text-gray-400">HTML</a></li>
              <li><a href="#" className="hover:text-gray-400">CSS</a></li>
              <li><a href="#" className="hover:text-gray-400">Freebies</a></li>
              <li><a href="#" className="hover:text-gray-400">Tutorials</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <h6 className="text-xl font-semibold mb-4">Quick Links</h6>
            <ul className="footer-links space-y-2">
              <li><a href="https://csedge.courses/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="https://csedge.courses/#contact" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="https://github.com/CSEdgeOfficial/learn.csedge.courses" className="hover:text-gray-400">Contribute</a></li>
              <li><a href="./csedge.courses/privacypolicy.html" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
            <ul className="social-icons flex mt-4 space-x-4">
              <li><a href="https://youtube.com/@CSEdgeOfficial" className="text-gray-500 hover:text-white"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a href="https://github.com/CSEdgeOfficial" className="text-gray-500 hover:text-white"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.linkedin.com/company/csedge/" className="text-gray-500 hover:text-white"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://www.instagram.com/csedgeofficial" className="text-gray-500 hover:text-white"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex justify-center">
          <p className="text-center text-gray-500">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved by CSEdge Learn
          </p>
        </div>
      </div>
      <style>
        {`
          .libutton {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 7px;
            text-align: center;
            outline: none;
            text-decoration: none !important;
            color: #ffffff !important;
            width: 200px;
            height: 32px;
            border-radius: 16px;
            background-color: #0A66C2;
            font-family: "SF Pro Text", Helvetica, sans-serif;
          }

          .libutton:hover {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 7px;
            text-align: center;
            outline: none;
            text-decoration: none;
            color: #0A66C2;
            width: 200px;
            height: 32px;
            border-radius: 16px;
            background-color: black;

            border-color: #0A66C2;
            font-family: "SF Pro Text", Helvetica, sans-serif;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
