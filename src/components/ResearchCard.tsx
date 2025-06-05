
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
  progress,
  category
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full mb-2">
              {category}
            </span>
            <CardTitle className="text-lg mb-2">{title}</CardTitle>
          </div>
          <TrendingUp className="w-5 h-5 text-green-500" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="space-y-3">
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
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progresso</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchCard;
