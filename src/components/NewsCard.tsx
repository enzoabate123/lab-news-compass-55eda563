
import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsCardProps {
  title: string;
  summary: string;
  source: string;
  time: string;
  category: string;
  imageUrl?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  summary,
  source,
  time,
  category,
  imageUrl
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      {imageUrl && (
        <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full mb-2">
            {category}
          </span>
          <ExternalLink className="w-4 h-4 text-gray-400" />
        </div>
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{summary}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="font-medium">{source}</span>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {time}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
