import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="bg-white dark:bg-[#111] py-4 text-white">
      <div className="container mx-auto w-full flex items-center justify-between">
        <Link href="/">HOME</Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
