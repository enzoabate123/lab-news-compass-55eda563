
import React from 'react';
import { TrendingUp, Activity, BookOpen, Newspaper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ResearchCard from '@/components/ResearchCard';
import NewsCard from '@/components/NewsCard';

const Home = () => {
  const stats = [
    { title: 'Laboratórios Ativos', value: '24', icon: Activity },
    { title: 'Pesquisas em Andamento', value: '156', icon: BookOpen },
    { title: 'Publicações este Mês', value: '43', icon: TrendingUp },
    { title: 'Notícias Relevantes', value: '89', icon: Newspaper }
  ];

  const featuredResearch = [
    {
      title: 'Análise de Biomarcadores Cardíacos',
      description: 'Estudo inovador sobre a identificação precoce de doenças cardiovasculares através de biomarcadores específicos.',
      researchers: 8,
      lastUpdate: '2 dias atrás',
      category: 'Cardiologia',
      progress: 78
    },
    {
      title: 'Terapia Genética Avançada',
      description: 'Desenvolvimento de novas técnicas de terapia genética para tratamento de doenças raras.',
      researchers: 12,
      lastUpdate: '1 dia atrás',
      category: 'Genética',
      progress: 65
    },
    {
      title: 'Nanotecnologia Médica',
      description: 'Aplicação de nanotecnologia no desenvolvimento de sistemas de entrega de medicamentos.',
      researchers: 6,
      lastUpdate: '3 dias atrás',
      category: 'Nanotecnologia',
      progress: 45
    }
  ];

  const recentNews = [
    {
      title: 'Avanços em Inteligência Artificial Médica',
      summary: 'Nova pesquisa demonstra eficácia de 95% em diagnósticos automatizados de câncer.',
      source: 'Nature Medicine',
      time: '2h atrás',
      category: 'IA Médica'
    },
    {
      title: 'Breakthrough em Vacinas de mRNA',
      summary: 'Cientistas desenvolvem nova plataforma que pode acelerar desenvolvimento de vacinas.',
      source: 'Science Journal',
      time: '4h atrás',
      category: 'Vacinas'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Research Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Pesquisas em Destaque</h2>
            <button className="text-[#006298] hover:text-[#008542] text-sm font-medium transition-colors">
              Ver todas
            </button>
          </div>
          <div className="space-y-6">
            {featuredResearch.map((research, index) => (
              <ResearchCard key={index} {...research} />
            ))}
          </div>
        </div>

        {/* News Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Notícias Recentes</h2>
            <button className="text-[#006298] hover:text-[#008542] text-sm font-medium transition-colors">
              Ver todas
            </button>
          </div>
          <div className="space-y-6">
            {recentNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
