import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, to = '/services' }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="bg-mopps-light/30 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <Icon className="text-mopps-blue" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-mopps-navy">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button to={to} variant="outline" size="sm">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;