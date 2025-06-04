import React, { useState } from 'react';
import {
  Home,
  MessageCircle,
  LayoutGrid,
  Instagram,
  ChevronsRight,
  Settings,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    top: [
      { icon: Home, label: 'Dashboard', key: 'home' },
      { icon: MessageCircle, label: 'Connections', key: 'connections' },
      { icon: LayoutGrid, label: 'Apps', key: 'apps' },
      { icon: Instagram, label: 'Instagram', key: 'instagram' },
    ],
    bottom: [
      { icon: ChevronsRight, label: 'Right Arrow', key: 'right-arrow' },
      { icon: Settings, label: 'Settings', key: 'settings' },
    ]
  };

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-sm cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center py-4 h-full">
          <div className="mb-8 px-2">
            <span className="text-black font-bold text-xl">FEELIX</span>
          </div>

          {/* Top Menu Items */}
          <nav className="flex flex-col space-y-4 flex-grow">
            {menuItems.top.map((item) => (
              <div key={item.key} className="p-2 flex items-center justify-center">
                <item.icon size={20} className="text-gray-500" />
              </div>
            ))}
          </nav>

          {/* Bottom Menu Items */}
          <nav className="flex flex-col space-y-4 mt-auto pt-4 border-t border-gray-200">
            {menuItems.bottom.map((item) => (
              <div key={item.key} className="p-2 flex items-center justify-center">
                <item.icon size={20} className="text-gray-500" />
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed h-screen w-20 bg-white border-r border-gray-200 z-30">
        <div className="flex flex-col items-center py-4 h-full">
          <div className="mb-8 px-2">
            <span className="text-black font-bold text-xl">FEELIX</span>
          </div>

          {/* Top Menu Items */}
          <nav className="flex flex-col space-y-4 flex-grow">
            {menuItems.top.map((item) => (
              <div key={item.key} className="p-2 flex items-center justify-center">
                <item.icon size={20} className="text-gray-500" />
              </div>
            ))}
          </nav>

          {/* Bottom Menu Items */}
          <nav className="flex flex-col space-y-4 mt-auto pt-4 border-t border-gray-200">
            {menuItems.bottom.map((item) => (
              <div key={item.key} className="p-2 flex items-center justify-center">
                <item.icon size={20} className="text-gray-500" />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

