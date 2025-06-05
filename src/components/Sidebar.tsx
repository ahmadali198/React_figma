import React, { useState } from "react";
import { Menu, X, AppWindow, Instagram, Layers } from "lucide-react"; // Optional Lucide icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    top: [
      // Option 1: SVG file
      { icon: "/icons/Home.svg", label: "Dashboard", key: "home" },
      {
        icon: "/icons/Connections.svg",
        label: "Connections",
        key: "connections",
      },

      // Option 2: Lucide components
      { icon: <AppWindow size={26} />, label: "Apps", key: "apps" },
      { icon: <Instagram size={26} />, label: "Instagram", key: "instagram" },
      { icon: <Layers size={26} />, label: "Stack", key: "stack" },
    ],
    bottom: [
      {
        icon: "/icons/right-arrow.svg",
        label: "Right Arrow",
        key: "right-arrow",
      },
      { icon: "/icons/settings.svg", label: "Settings", key: "settings" },
      { icon: "/icons/switch.svg", label: "Switch", key: "switch" },
    ],
  };

  const renderMenuItems = (items) =>
    items.map((item) => (
      <div key={item.key} className="p-2 flex items-center justify-center">
        {typeof item.icon === "string" ? (
          <img
            src={item.icon}
            alt={item.label}
            className="h-8 w-8 object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          item.icon // Lucide or JSX icon component
        )}
      </div>
    ));

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <div
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center py-4 h-full">
          {/* Logo */}
          <div className="mb-8 px-2">
            <img
              src="/images/Feelix.png"
              alt="Feelix Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Top Menu */}
          <nav className="flex flex-col space-y-4 flex-grow">
            {renderMenuItems(menuItems.top)}
          </nav>

          {/* Bottom Menu */}
          <nav className="flex flex-col space-y-4 mt-auto pt-4 border-t border-gray-200">
            {renderMenuItems(menuItems.bottom)}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed h-screen w-20 bg-white border-r border-gray-200 z-30">
        <div className="flex flex-col items-center py-4 h-full">
          {/* Logo */}
          <div className="mb-8 px-2">
            <img
              src="/images/Feelix.png"
              alt="Feelix Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Top Menu */}
          <nav className="flex flex-col space-y-4 flex-grow">
            {renderMenuItems(menuItems.top)}
          </nav>

          {/* Bottom Menu */}
          <nav className="flex flex-col space-y-4 mt-auto pt-4 border-t border-gray-200">
            {renderMenuItems(menuItems.bottom)}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
