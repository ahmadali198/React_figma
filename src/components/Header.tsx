import React, { useEffect, useState } from 'react';
import { Bell, Menu } from 'lucide-react'; // Import Menu icon

// Function to get a random profile image URL
function getRandomImageUrl() {
  const imageIds = Array.from({ length: 20 }, (_, i) => i + 1);
  const randomId = imageIds[Math.floor(Math.random() * imageIds.length)];
  return `https://i.pravatar.cc/300?img=${randomId}`;
}

interface HeaderProps {
  toggleSidebar: () => void; // Prop to toggle the sidebar
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [profileImageUrl, setProfileImageUrl] = useState('');

  useEffect(() => {
    setProfileImageUrl(getRandomImageUrl());
  },); // Corrected empty dependency array ensures this runs only once on mount

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sm:px-6"> {/* Adjusted padding */}
      {/* Mobile Menu Button - visible only on small screens */}
      <button
        className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Welcome message section - now always visible in header */}
      <div className="flex-grow text-center sm:text-left"> {/* Center on mobile, left on sm+ */}
        <h1 className="text-xl font-semibold text-gray-900">Welcome Osman</h1>
      </div>

      {/* Notification bell and profile picture section */}
      <div className="flex items-center space-x-4">
        {/* Bell icon with notification dot */}
        <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile picture */}
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/300x300/CCCCCC/FFFFFF?text=User";
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;