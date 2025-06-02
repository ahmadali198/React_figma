import React, { useState } from 'react';
import {
  Home,          // Used for Dashboard/Home icon
  MessageCircle, // Used for Chat/Connections icon
  LayoutGrid,    // Used for Apps icon
  Instagram,     // Used for Instagram icon
  ChevronsRight, // Added for the double right arrow icon
  Settings,      // Used for Settings icon
} from 'lucide-react';

const Sidebar = () => {
  // State to manage which menu item is currently active.
  // 'home' is set as default to match the request for green highlight.
  const [activeItem, setActiveItem] = useState('home');

  // Define the menu items for the main navigation section.
  // Only 5 items are included as per the new image and request.
  const topMenuItems = [
    { icon: Home, label: 'Dashboard', key: 'home' },
    { icon: MessageCircle, label: 'Connections', key: 'connections' },
    { icon: LayoutGrid, label: 'Apps', key: 'apps' },
    { icon: Instagram, label: 'Instagram', key: 'instagram' },
     
 
  ];

  // Define the menu items for the bottom section of the sidebar.
  // Replaced Heart with ChevronsRight as requested.
  const bottomMenuItems = [
    { icon: ChevronsRight, label: 'Right Arrow', key: 'right-arrow' }, // Replaced Heart with ChevronsRight
    { icon: Settings, label: 'Settings', key: 'settings' },
  ];

  return (
    // Main container for the sidebar.
    // Changed width to w-16 to match the original request for icon-only sidebar.
    // Added padding (px-4) for better spacing.
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      {/* Top Logo Section */}
      <div className="mb-8 flex items-center justify-center px-2">
        {/* 'FEELIX' text is black and bold as requested. */}
        {/* Adjusted styling to center text for a narrower sidebar */}
        <span className="text-black font-bold text-xl">FEELIX</span> {/* Changed to 'F' as per the image for narrow sidebar */}
      </div>

      {/* Main Navigation Section */}
      {/* flex-grow allows this section to take up available space, pushing bottom items down */}
      <nav className="flex flex-col space-y-4 flex-grow"> {/* Increased space-y for icon-only layout */}
        {topMenuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveItem(item.key)} // Update active item on click
            className={`
              p-2 rounded-lg transition-colors flex items-center justify-center
              ${
                activeItem === item.key
                  ? 'bg-green-50 text-green-600' // Active state styling is green as requested
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50' // Default and hover state styling
              }
            `}
          >
            {/* Render the Lucide icon for the menu item */}
            <item.icon size={20} />
            {/* Removed the <span> for the label as requested */}
          </button>
        ))}
      </nav>

      {/* Bottom Navigation Section */}
      {/* mt-auto pushes this section to the bottom. pt-4 and border-t add a separator. */}
      <nav className="flex flex-col space-y-4 mt-auto pt-4 border-t border-gray-200"> {/* Increased space-y for icon-only layout */}
        {bottomMenuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveItem(item.key)} // Update active item on click
            className={`
              p-2 rounded-lg transition-colors flex items-center justify-center
              ${
                activeItem === item.key
                  ? 'bg-green-50 text-green-600' // Active state styling is green as requested
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50' // Default and hover state styling
              }
            `}
          >
            {/* Render the Lucide icon for the menu item */}
            <item.icon size={20} />
            {/* Removed the <span> for the label as requested */}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
