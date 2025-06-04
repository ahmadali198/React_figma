import React from 'react';
import { Home, MessageCircle, LayoutGrid, Instagram, ChevronsRight, Settings, Menu } from 'lucide-react';

const Sidebar = () => {
  // Static sidebar - no state management needed
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
      {/* Static Three-Bar Menu (Mobile Only) */}
      <div className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-sm">
        <Menu size={24} />
      </div>

      {/* Desktop Sidebar (Always Visible) */}
      
      <div className="hidden md:block fixed h-screen w-20 bg-white border-r border-gray-200 overflow-y-auto z-30">
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
