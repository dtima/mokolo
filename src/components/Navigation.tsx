import { useState } from "react";
import { Logo } from "./navigation/Logo";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";
import { SearchBar } from "./navigation/SearchBar";
import { LanguageToggle } from "./navigation/LanguageToggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-4">
          <DesktopNav />
          <SearchBar />
          <LanguageToggle />
        </div>
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
}