import React from 'react';
import { Home, MessageCircle, LayoutGrid, Instagram, ChevronsRight, Settings, Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    top: [
      { icon: '/icons/Home.svg', label: 'Dashboard', key: 'home' },
      { icon: '/icons/Connections.svg', label: 'Connections', key: 'connections' },
      { icon: '/icons/Apps.svg', label: 'Apps', key: 'apps' },
      { icon: '/icons/Instagram.svg', label: 'Instagram', key: 'instagram' },
      { icon: '/icons/Stack.svg', label: 'Stack', key: 'Stack' },
    ],
    bottom: [
      { icon: '/icons/right-arrow.svg', label: 'Right Arrow', key: 'right-arrow' },
      { icon: '/icons/settings.svg', label: 'Settings', key: 'settings' },
      { icon: '/icons/switch.svg', label: 'switch', key: 'switch' },
    ]
  };

  const renderMenuItems = (items) =>
    items.map((item) => (
      <div key={item.key} className="p-2 flex items-center justify-center">
        <img src={item.icon} alt={item.label} className="h-5 w-5 object-contain" />
      </div>
    ));

  return (
    <>
      {/* Static Three-Bar Menu (Mobile Only) */}
      <div className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-sm">
        <Menu size={24} />
      </div>

      {/* Desktop Sidebar (Always Visible) */}
      
      <div className="hidden md:block fixed h-screen w-20 bg-white border-r border-gray-200 overflow-y-auto z-30">
        <div className="flex flex-col items-center py-4 h-full">
          {/* Logo */}
          <div className="mb-8 px-2">
            <img src="/images/Feelix.png" alt="Feelix Logo" className="h-8 w-auto" />
          </div>
          
          {/* Top Menu Items */}
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

