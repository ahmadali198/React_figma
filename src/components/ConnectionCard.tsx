
import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface ConnectionCardProps {
  title: string;
  status: 'active' | 'warning' | 'error';
}

const ConnectionCard: React.FC<ConnectionCardProps> = ({ title, status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'active':
        return {
          icon: CheckCircle,
          iconColor: 'text-green-500',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          iconColor: 'text-yellow-500',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200'
        };
      case 'error':
        return {
          icon: XCircle,
          iconColor: 'text-red-500',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200'
        };
      default:
        return {
          icon: CheckCircle,
          iconColor: 'text-green-500',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-lg p-4 transition-all hover:shadow-md`}>
      <div className="flex items-center justify-between mb-2">
        <Icon className={`${config.iconColor} w-5 h-5`} />
        <span className="text-xs text-gray-500">22</span>
      </div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">Connected with Apple</p>
    </div>
  );
};

export default ConnectionCard;
