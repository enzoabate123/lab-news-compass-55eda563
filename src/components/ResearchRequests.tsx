
import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResearchRequests = () => {
  const requests = [
    {
      id: 1,
      researcher: 'Dr. Carlos Lima',
      project: 'Análise de Biomarcadores',
      time: '2h atrás',
      status: 'pending'
    },
    {
      id: 2,
      researcher: 'Dra. Sofia Mendes',
      project: 'Estudo Genético',
      time: '5h atrás',
      status: 'pending'
    },
    {
      id: 3,
      researcher: 'Prof. André Costa',
      project: 'Pesquisa Farmacológica',
      time: '1d atrás',
      status: 'approved'
    }
  ];

  return (
    <div className="w-80 p-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Solicitações de Acesso
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{request.researcher}</h4>
                  <p className="text-xs text-gray-600 mb-1">{request.project}</p>
                  <span className="text-xs text-gray-400">{request.time}</span>
                </div>
                <div className="flex items-center">
                  {request.status === 'pending' ? (
                    <Clock className="w-4 h-4 text-yellow-500" />
                  ) : request.status === 'approved' ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              </div>
              
              {request.status === 'pending' && (
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs h-7">
                    Aprovar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs h-7">
                    Recusar
                  </Button>
                </div>
              )}
            </div>
          ))}
          
          <Button variant="ghost" className="w-full text-sm text-blue-600">
            Ver todas as solicitações
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResearchRequests;
