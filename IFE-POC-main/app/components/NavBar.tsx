"use client";

import React from "react";
import { useState } from "react";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "../components/SearchIcon";
import { ModeToggle } from "./ModeToggle";

interface AppNavbarProps {
  toggleSidebar: () => void;
}

const AppNavbar: React.FC<AppNavbarProps> = ({ toggleSidebar }) => {
  return (
    <Navbar isBordered className='dark:bg-slate-800'>
      <NavbarContent justify='start'>
        <button onClick={toggleSidebar} className='md:hidden ml-4'>
          <MenuIcon />
        </button>
        <NavbarBrand className='mr-9  hover:transform hover:scale-105 transition-transform duration-300'>
          <Link color='foreground' href='/'>
            <p className=' font-sans  text-lg font-bold'>OSI-IFE-POC</p>
            <SlideshowOutlinedIcon />
          </Link>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-10 mx-9 '>
          <NavbarItem className=' font-sans  text-lg font-bold hover:transform hover:scale-105 transition-transform duration-300'>
            <Link color='foreground' href='/movies'>
              Movies
            </Link>
          </NavbarItem>
          <NavbarItem className=' font-sans  text-lg font-bold hover:transform hover:scale-105 transition-transform duration-300'>
            <Link href='/tv_shows' aria-current='page' color='secondary'>
              TV Shows
            </Link>
          </NavbarItem>
          <NavbarItem className=' font-sans  text-lg font-bold hover:transform hover:scale-105 transition-transform duration-300'>
            <Link color='foreground' href='/audio'>
              Audio
            </Link>
          </NavbarItem>
          <NavbarItem className=' font-sans  text-lg font-bold hover:transform hover:scale-105 transition-transform duration-300'>
            <Link color='foreground' href='/planner'>
              Planner
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as='div' className='items-center' justify='end'>
        <ModeToggle />
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[12rem] h-10 border border-gray-600 rounded-md",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={<SearchIcon size={24} width={36} height={18} />}
          type='search'
        />
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
          <>ch</>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
