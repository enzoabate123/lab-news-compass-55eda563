
import React from 'react';
import { Users, MapPin, Calendar, Mail, Globe, Star, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LaboratorioDetalhes = () => {
  const laboratorio = {
    id: 1,
    name: 'Laboratório de Biotecnologia Avançada',
    description: 'Centro de excelência em pesquisas de engenharia genética e desenvolvimento de terapias inovadoras. Nosso laboratório está na vanguarda da pesquisa biotecnológica, desenvolvendo soluções que podem revolucionar o tratamento de doenças genéticas raras.',
    location: 'São Paulo, SP',
    founded: '2018',
    director: 'Dr. Maria Silva',
    email: 'contato@biotecavancada.br',
    website: 'www.biotecavancada.br',
    totalResearchers: 25,
    activeProjects: 12,
    publications: 89
  };

  const researchers = [
    { id: 1, name: 'Dr. Maria Silva', role: 'Diretora', avatar: 'MS' },
    { id: 2, name: 'Prof. João Santos', role: 'Pesquisador Sênior', avatar: 'JS' },
    { id: 3, name: 'Dra. Ana Costa', role: 'Pesquisadora Principal', avatar: 'AC' },
    { id: 4, name: 'Dr. Carlos Lima', role: 'Pós-Doutor', avatar: 'CL' },
    { id: 5, name: 'Msc. Sofia Mendes', role: 'Doutoranda', avatar: 'SM' }
  ];

  const featuredResearch = [
    {
      title: 'Terapia Genética para Doenças Raras',
      description: 'Desenvolvimento de vetores virais seguros para correção genética',
      status: 'Em destaque',
      progress: 85
    },
    {
      title: 'Biomarcadores de Câncer',
      description: 'Identificação de novos biomarcadores para diagnóstico precoce',
      status: 'Publicado',
      progress: 100
    }
  ];

  const ongoingResearch = [
    {
      title: 'Edição Genética CRISPR',
      description: 'Aplicação de CRISPR-Cas9 em células-tronco',
      progress: 45
    },
    {
      title: 'Análise Proteômica',
      description: 'Estudo do proteoma em doenças neurodegenerativas',
      progress: 67
    },
    {
      title: 'Medicina Regenerativa',
      description: 'Desenvolvimento de scaffolds bioativos',
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
