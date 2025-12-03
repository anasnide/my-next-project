"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  href?: string;
  subMenu?: { name: string; href: string }[];
}

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/about",
      subMenu: [
        { name: "Skills", href: "/about#skills" },
        { name: "Experience", href: "/about#experience" },
      ]
    },
    { 
      name: "Projects",
      subMenu: [
        { name: "Web", href: "/projects/web" },
        { name: "Mobile", href: "/projects/mobile" },
        { name: "AI", href: "/projects/ai" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <span className="font-bold text-xl">Mr Anas Nidir</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href || "#"}
                className={`transition px-2 py-1 rounded ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
              >
                {item.name}
              </Link>

              {/* Desktop Dropdown */}
              {item.subMenu && (
                <div className="absolute top-full left-0 bg-black/70 backdrop-blur-md shadow-lg rounded flex flex-col mt-2 min-w-[150px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                  {item.subMenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="px-4 py-2 hover:bg-blue-500 transition rounded"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex flex-col justify-center items-center w-8 h-8"
          >
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${
                sidebarOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${
                sidebarOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                sidebarOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />

            {/* Sidebar Glass */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-64 h-full bg-black/50 backdrop-blur-lg z-50 flex flex-col p-6 space-y-2 rounded-r-md shadow-lg"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src="https://anasnidir.com/assets/logo.jpg"
                  alt="Logo"
                  className="w-32 object-contain"
                />
              </div>

              {menuItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <button
                    onClick={() => {
                      if (item.subMenu) {
                        setOpenDropdown(openDropdown === item.name ? null : item.name);
                      } else {
                        setSidebarOpen(false);
                      }
                    }}
                    className={`text-xl px-2 py-2 text-left rounded w-full ${
                      pathname === item.href
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>

                  {/* Mobile Accordion */}
                  {item.subMenu && (
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col ml-4 overflow-hidden"
                        >
                          {item.subMenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setSidebarOpen(false)}
                              className="text-lg px-2 py-1 hover:bg-blue-500 transition rounded"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}