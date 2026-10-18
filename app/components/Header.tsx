import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="bg-[#F9F9F9] dark:bg-[#111] py-4 text-white">
      <div className="max-w-300  gap-8 mx-auto px-4 lg:px-24 w-full flex items-center justify-between">
        <Link href="/">HOME</Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
