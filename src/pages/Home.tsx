
import React from 'react';
import { TrendingUp, Activity, BookOpen, Newspaper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ResearchCard from '@/components/ResearchCard';
import NewsCard from '@/components/NewsCard';

const Home = () => {
  const stats = [
    { title: 'Laboratórios Ativos', value: '24', icon: Activity, change: '+12%' },
    { title: 'Pesquisas em Andamento', value: '156', icon: BookOpen, change: '+8%' },
    { title: 'Publicações este Mês', value: '43', icon: TrendingUp, change: '+23%' },
    { title: 'Notícias Relevantes', value: '89', icon: Newspaper, change: '+15%' }
  ];

  const featuredResearch = [
    {
      title: 'Análise de Biomarcadores Cardíacos',
      description: 'Estudo inovador sobre a identificação precoce de doenças cardiovasculares através de biomarcadores específicos.',
      researchers: 8,
      lastUpdate: '2 dias atrás',
      progress: 78,
      category: 'Cardiologia'
    },
    {
      title: 'Terapia Genética Avançada',
      description: 'Desenvolvimento de novas técnicas de terapia genética para tratamento de doenças raras.',
      researchers: 12,
      lastUpdate: '1 dia atrás',
      progress: 92,
      category: 'Genética'
    },
    {
      title: 'Nanotecnologia Médica',
      description: 'Aplicação de nanotecnologia no desenvolvimento de sistemas de entrega de medicamentos.',
      researchers: 6,
      lastUpdate: '3 dias atrás',
      progress: 65,
      category: 'Nanotecnologia'
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
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Research Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Pesquisas em Destaque</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Ver todas
            </button>
          </div>
          <div className="space-y-4">
            {featuredResearch.map((research, index) => (
              <ResearchCard key={index} {...research} />
            ))}
          </div>
        </div>

        {/* News Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Notícias Recentes</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Ver todas
            </button>
          </div>
          <div className="space-y-4">
            {recentNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors">
              <h3 className="font-medium text-gray-900 mb-1">Novo Laboratório</h3>
              <p className="text-sm text-gray-600">Registrar um novo laboratório na plataforma</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors">
              <h3 className="font-medium text-gray-900 mb-1">Iniciar Pesquisa</h3>
              <p className="text-sm text-gray-600">Começar um novo projeto de pesquisa</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors">
              <h3 className="font-medium text-gray-900 mb-1">Gerar Relatório</h3>
              <p className="text-sm text-gray-600">Criar relatório de atividades</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
