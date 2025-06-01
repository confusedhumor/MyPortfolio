import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import VarunLogo from '../assets/icons/varun.svg';

const centerRoutes = [
  { path: "/", name: "Home" },
  { path: "/aboutme", name: "About Me" },
  { path: "/projects", name: "Projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-background p-4 font-ubuntu w-full">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <img src={VarunLogo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Centered Menu Links (no Contact Me here) */}
            <div className="hidden sm:flex sm:flex-1 justify-center relative">
              <div className="flex space-x-6 border-[0.1px] rounded-full px-5 py-1 relative">
                {centerRoutes.map(({ path, name }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#0BDA51] px-3 py-2 font-[500] relative"
                        : "text-gray-300 px-3 py-2 font-[500] relative"
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative inline-block">
                        {name}
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0BDA51] rounded"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Right side Contact Me button */}
            <div className="hidden sm:flex">
              <NavLink
                to="/contactme"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0BDA51] px-3 py-2 rounded-md text-m font-[500]"
                    : "text-gray-300 px-3 py-2 rounded-md text-m font-[500]"
                }
              >
                Contact Me
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="sm:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile menu includes all routes including Contact Me */}
            {[...centerRoutes, { path: "/contactme", name: "Contact Me" }].map(({ path, name }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0BDA51] block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
}
