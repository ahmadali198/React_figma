
import React from 'react';

interface IntegrationCardProps {
  name: string;
  description: string;
  logo: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ name, description, logo }) => {
  return (
    <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
      <div className={`w-8 h-8 ${logo} rounded-lg flex items-center justify-center`}>
        <span className="text-white font-bold text-sm">{name[0]}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
        <p className="text-xs text-gray-500 truncate">{description}</p>
      </div>
    </div>
  );
};

export default IntegrationCard;
