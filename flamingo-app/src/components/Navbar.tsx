import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full border-b fixed top-0 bg-white text-slate-900 ${
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-bold text-xl px-4">flamingo</span>
          </div>

          {/* Login & signup */}
          <div className="flex flex-row">
            <Button>Login</Button>
            <Button variant="outline" className="mx-4">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
