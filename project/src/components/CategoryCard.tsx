import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  itemCount: number;
  slug: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon: Icon, itemCount, slug, description }) => {
  return (
    <Link to={`/products/${slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-lg mb-4 group-hover:bg-emerald-200 transition-colors">
          <Icon className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-emerald-600 font-medium">{itemCount} items</span>
          <span className="text-gray-400 group-hover:text-emerald-600 transition-colors">→</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;