import React from "react";

interface NavLink {
  name: string;
  href: string;
  isActive?: boolean;
}

type NavLinks = NavLink[];

const navLinks: NavLinks = [
  { name: "Home", href: "/", isActive: true },
  { name: "Skills", href: "/about" },
  { name: "Project", href: "/contact" },
  { name: "Experience", href: "/contact" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  return (
    <header className="border-b py-5">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold gradient-text">Shahid Parvez</h1>
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li className="nav-links" key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
