// components/SideNav.jsx

import React from "react";
import { Link } from "@nextui-org/react";
import ClearIcon from "@mui/icons-material/Clear";

interface SideNavProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`content-center fixed inset-0 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 z-50 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:hidden`}
    >
      <div className='p-4'>
        <button onClick={toggleSidebar} className='mb-4'>
          <ClearIcon fontSize='large' />
        </button>
        <div className='flex flex-col content-center'>
          <Link
            color='foreground'
            href='/movies'
            className='block text-3xl text-center font-bold hover:transform hover:scale-105 transition-transform duration-300 mb-8'
          >
            Movies
          </Link>
          <Link
            href='/tv_shows'
            aria-current='page'
            color='secondary'
            className='block text-3xl text-center font-bold hover:transform hover:scale-105 transition-transform duration-300 mb-8'
          >
            TV Shows
          </Link>
          <Link
            color='foreground'
            href='/audio'
            className='block text-3xl text-center font-bold hover:transform hover:scale-105 transition-transform duration-300 mb-8'
          >
            Audio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
