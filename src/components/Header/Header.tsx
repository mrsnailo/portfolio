import React, { useState } from "react";

import { Menu } from "lucide-react";
import { X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  isActive?: boolean;
}

type NavLinks = NavLink[];

const navLinks: NavLinks = [
  { name: "Home", href: "#home", isActive: true },
  { name: "Skills", href: "#about" },
  { name: "Project", href: "#contact" },
  { name: "Experience", href: "#contact" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <>
      <header className="py-5">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold gradient-text">Shahid Parvez</h1>
          {/* main menu */}
          <nav>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuVisibility(!menuVisibility)}
          >
            {menuVisibility ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      {menuVisibility && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                {" "}
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
