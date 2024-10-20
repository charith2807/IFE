"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Switch } from "@nextui-org/react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="border border-gray-600 rounded-lg p-1">
      <Switch
        checked={isDarkMode}
        size="lg"
        color="success"
        startContent={isDarkMode ? <Sun /> : <Moon />}
        endContent={!isDarkMode ? <Moon /> : <Sun />}
        onChange={toggleTheme}
      ></Switch>
    </div>
  );
};
