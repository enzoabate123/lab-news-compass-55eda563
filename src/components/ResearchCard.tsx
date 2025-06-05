
import React from 'react';
import { Users, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ResearchCardProps {
  title: string;
  description: string;
  researchers: number;
  lastUpdate: string;
  progress: number;
  category: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  description,
  researchers,
  lastUpdate,
  category
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#008542]">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-[#008542] text-white rounded-full mb-2">
              {category}
            </span>
            <CardTitle className="text-lg mb-2">{title}</CardTitle>
          </div>
          <TrendingUp className="w-5 h-5 text-[#fdc82f]" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            {researchers} pesquisadores
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {lastUpdate}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchCard;
