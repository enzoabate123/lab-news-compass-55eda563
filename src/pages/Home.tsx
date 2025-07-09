
import React from 'react';
import { TrendingUp, Activity, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ResearchCard from '@/components/ResearchCard';

const Home = () => {
  const stats = [
    { title: 'Laboratórios Ativos', value: '24', icon: Activity },
    { title: 'Pesquisas em Andamento', value: '156', icon: BookOpen },
    { title: 'Publicações este Mês', value: '43', icon: TrendingUp }
  ];

  const featuredResearch = [
    {
      title: 'Análise de Reservatórios Petrolíferos',
      description: 'Estudo avançado sobre caracterização de reservatórios e otimização de produção de petróleo e gás natural.',
      researchers: 8,
      lastUpdate: '2 dias atrás',
      category: 'Petróleo e Gás',
      progress: 78
    },
    {
      title: 'Exploração Mineral Sustentável',
      description: 'Desenvolvimento de técnicas inovadoras para exploração mineral com menor impacto ambiental.',
      researchers: 12,
      lastUpdate: '1 dia atrás',
      category: 'Mineração',
      progress: 65
    },
    {
      title: 'Geoquímica de Rochas Sedimentares',
      description: 'Análise detalhada da composição geoquímica de formações rochosas para identificação de hidrocarbonetos.',
      researchers: 6,
      lastUpdate: '3 dias atrás',
      category: 'Geoquímica',
      progress: 45
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#008542] to-[#006298] rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Research Section - Full Width */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Pesquisas em Destaque</h2>
          <button className="text-[#006298] hover:text-[#008542] text-sm font-medium transition-colors">
            Ver todas
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredResearch.map((research, index) => (
            <ResearchCard key={index} {...research} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
