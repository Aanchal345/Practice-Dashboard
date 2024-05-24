import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Compass, Laptop, GraduationCap, EarthLock, NotebookPen, AreaChart, Radio, Rss, UsersRound, Menu } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (path: any) => {
    setActiveLink(path);
    setIsOpen(false); // Close sidebar on mobile after clicking a link
  };

  const isLinkActive = (path: any) => {
    return activeLink === path;
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:w-[180px] bg-gray-100 p-4 shadow-lg lg:sticky flex flex-col">
      <button className="lg:hidden mb-4" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
      <nav className={`flex flex-col lg:block ${isOpen ? "block" : "hidden"}`}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="mb-2">
            <Link
              to="/"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/")}
              style={{ textDecoration: "none" }}
            >
              <Box size={20} />
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/explore"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/explore") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/explore")}
              style={{ textDecoration: "none" }}
            >
              <Compass size={20} />
              Explore
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/learn"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/learn") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/learn")}
              style={{ textDecoration: "none" }}
            >
              <Laptop size={20} />
              Learn
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/achieve"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/achieve") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/achieve")}
              style={{ textDecoration: "none" }}
            >
              <GraduationCap size={20} />
              Achieve
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/practice"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/practice") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/practice")}
              style={{ textDecoration: "none" }}
            >
              <NotebookPen size={20} />
              Practice
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/projects"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/projects") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/projects")}
              style={{ textDecoration: "none" }}
            >
              <EarthLock size={20} />
              Projects
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/career"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/career") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/career")}
              style={{ textDecoration: "none" }}
            >
              <AreaChart size={20} />
              Career
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/mentorship"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/mentorship") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/mentorship")}
              style={{ textDecoration: "none" }}
            >
              <Radio size={20} />
              Mentorship
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/blogs"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/blogs") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/blogs")}
              style={{ textDecoration: "none" }}
            >
              <Rss size={20} />
              Blogs
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/community"
              className={`flex flex-row items-center gap-3 py-2 ${
                isLinkActive("/community") ? "text-purple-700" : "text-black"
              }`}
              onClick={() => handleLinkClick("/community")}
              style={{ textDecoration: "none" }}
            >
              <UsersRound size={20} />
              Community
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center bg-purple-200 rounded-md mt-[10px]">
          <span>
            <h3>Connect With Us</h3>
            <div className="flex flex-row gap-3 items-center justify-center mb-4">
              <img src="/youtube.png" alt="" width={24} />
              <img src="/whatsapp.png" alt="" width={20} />
              <img src="/discord.png" alt="" width={26} />
              <img src="/linkedin.png" alt="" width={20} />
              <img src="/fb.png" alt="" width={24} />
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
