
import React from 'react';
import { Users, MapPin, Calendar, Mail, Globe, Star, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LaboratorioDetalhes = () => {
  const laboratorio = {
    id: 1,
    name: 'Laboratório de Geoquímica Avançada',
    description: 'Centro de excelência em análises geoquímicas de rochas sedimentares e caracterização de reservatórios petrolíferos. Nosso laboratório está na vanguarda da pesquisa em exploração de hidrocarbonetos, desenvolvendo soluções que podem revolucionar a indústria de petróleo e gás.',
    location: 'São Paulo, SP',
    founded: '2018',
    director: 'Dr. Carlos Pereira',
    email: 'contato@geoquimicaavancada.br',
    website: 'www.geoquimicaavancada.br',
    totalResearchers: 25,
    activeProjects: 12,
    publications: 89
  };

  const researchers = [
    { id: 1, name: 'Dr. Carlos Pereira', role: 'Diretor', avatar: 'CP' },
    { id: 2, name: 'Prof. Ana Rocha', role: 'Pesquisadora Sênior', avatar: 'AR' },
    { id: 3, name: 'Dr. João Silva', role: 'Pesquisador Principal', avatar: 'JS' },
    { id: 4, name: 'Dra. Marina Costa', role: 'Pós-Doutora', avatar: 'MC' },
    { id: 5, name: 'Msc. Eduardo Lima', role: 'Doutorando', avatar: 'EL' }
  ];

  const featuredResearch = [
    {
      title: 'Caracterização de Reservatórios do Pré-Sal',
      description: 'Análise detalhada de rochas carbonáticas para otimização da produção',
      status: 'Em destaque',
      progress: 85
    },
    {
      title: 'Geoquímica de Folhelhos Geradores',
      description: 'Identificação de biomarcadores em rochas geradoras de petróleo',
      status: 'Publicado',
      progress: 100
    }
  ];

  const ongoingResearch = [
    {
      title: 'Análise Isotópica de Hidrocarbonetos',
      description: 'Aplicação de isótopos estáveis na correlação óleo-rocha',
      progress: 45
    },
    {
      title: 'Modelagem Geoquímica 3D',
      description: 'Desenvolvimento de modelos tridimensionais de bacias sedimentares',
      progress: 67
    },
    {
      title: 'Biomarcadores Avançados',
      description: 'Identificação de novos biomarcadores em óleos pesados',
      progress: 30
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header do Laboratório */}
      <div className="bg-gradient-to-r from-[#008542] to-[#006298] text-white rounded-lg p-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">{laboratorio.name}</h1>
            <p className="text-lg opacity-90 mb-4 max-w-3xl">{laboratorio.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{laboratorio.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Fundado em {laboratorio.founded}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{laboratorio.totalResearchers} pesquisadores</span>
              </div>
            </div>
          </div>
          
          <div className="ml-8">
            <Button className="bg-[#fdc82f] text-black hover:bg-[#fdc82f]/90">
              Solicitar Acesso
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#008542] to-[#006298] rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{laboratorio.totalResearchers}</p>
            <p className="text-sm text-gray-600">Pesquisadores</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#008542] to-[#006298] rounded-lg flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{laboratorio.activeProjects}</p>
            <p className="text-sm text-gray-600">Projetos Ativos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#008542] to-[#006298] rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{laboratorio.publications}</p>
            <p className="text-sm text-gray-600">Publicações</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pesquisadores */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-[#008542]" />
              Equipe de Pesquisadores
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {researchers.map((researcher) => (
              <div key={researcher.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className="w-10 h-10 bg-gradient-to-br from-[#008542] to-[#006298] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {researcher.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{researcher.name}</h4>
                  <p className="text-sm text-gray-600">{researcher.role}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Ver todos os pesquisadores
            </Button>
          </CardContent>
        </Card>

        {/* Pesquisas em Destaque */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-[#fdc82f]" />
              Pesquisas em Destaque
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {featuredResearch.map((research, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{research.title}</h4>
                  <span className="text-xs bg-[#fdc82f] text-black px-2 py-1 rounded-full">
                    {research.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{research.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#008542] to-[#006298] h-2 rounded-full"
                    style={{ width: `${research.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Pesquisas em Andamento */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-[#006298]" />
            Pesquisas em Andamento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ongoingResearch.map((research, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{research.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{research.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-[#008542] to-[#006298] h-2 rounded-full"
                    style={{ width: `${research.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{research.progress}% concluído</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Informações de Contato */}
      <Card>
        <CardHeader>
          <CardTitle>Informações de Contato</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#006298]" />
                <span>{laboratorio.email}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-[#006298]" />
                <span>{laboratorio.website}</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Diretor</h4>
              <p className="text-gray-600">{laboratorio.director}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LaboratorioDetalhes;
