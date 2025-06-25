import React from 'react';
import { MapPin, Calendar, Users, BookOpen, Award, Mail, Phone, Link as LinkIcon, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Perfil = () => {
  const user = {
    name: 'Dr. Marina Santos',
    title: 'Pesquisadora Principal',
    lab: 'Laboratório de Biotecnologia Avançada',
    location: 'São Paulo, SP',
    joinDate: '2020-03-15',
    email: 'marina.santos@biotech.usp.br',
    phone: '+55 (11) 99999-9999',
    website: 'www.marinasantos.research.br',
    bio: 'Doutora em Biotecnologia com mais de 10 anos de experiência em pesquisa de biomarcadores cardíacos. Especialista em desenvolvimento de terapias inovadoras para doenças cardiovasculares.',
    specialties: ['Biomarcadores', 'Cardiologia', 'Terapia Genética', 'Bioinformática'],
    stats: {
      publications: 47,
      citations: 1250,
      hIndex: 18,
      collaborators: 34
    }
  };

  const featuredResearch = [
    {
      title: 'Biomarcadores Cardíacos Inovadores',
      status: 'Em andamento',
      progress: 78,
      team: 8,
      publications: 3
    },
    {
      title: 'Terapia Genética para Cardiomiopatia',
      status: 'Concluído',
      progress: 100,
      team: 12,
      publications: 7
    },
    {
      title: 'IA para Diagnóstico Precoce',
      status: 'Planejamento',
      progress: 15,
      team: 6,
      publications: 0
    }
  ];

  const recentPublications = [
    {
      title: 'Novel Cardiac Biomarkers for Early Detection of Heart Disease',
      journal: 'Nature Medicine',
      year: 2024,
      citations: 23
    },
    {
      title: 'Gene Therapy Approaches in Cardiovascular Medicine',
      journal: 'Circulation Research',
      year: 2023,
      citations: 45
    },
    {
      title: 'AI-Driven Cardiac Risk Assessment',
      journal: 'Journal of the American College of Cardiology',
      year: 2023,
      citations: 67
    }
  ];

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em andamento': return 'bg-blue-100 text-blue-700';
      case 'Concluído': return 'bg-green-100 text-green-700';
      case 'Planejamento': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-32 h-32 bg-gradient-to-br from-[#008542] to-[#006298] rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                MS
              </div>
              <Button variant="outline" className="w-full md:w-auto">
                Editar Perfil
              </Button>
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h1>
                <p className="text-lg text-[#006298] font-medium mb-2">{user.title}</p>
                <p className="text-gray-600 mb-4">{user.lab}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {user.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Desde {new Date(user.joinDate).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  {user.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {user.phone}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{user.bio}</p>

              <div className="flex flex-wrap gap-2">
                {user.specialties.map((specialty, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-[#006298]">{user.stats.publications}</div>
            <div className="text-sm text-gray-600">Publicações</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-[#008542]">{user.stats.citations}</div>
            <div className="text-sm text-gray-600">Citações</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-[#fdc82f]">{user.stats.hIndex}</div>
            <div className="text-sm text-gray-600">Índice H</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-[#006298]">{user.stats.collaborators}</div>
            <div className="text-sm text-gray-600">Colaboradores</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Access Requests */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Clock className="w-5 h-5 mr-2 text-[#006298]" />
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
                      <Clock className="w-4 h-4 text-[#fdc82f]" />
                    ) : request.status === 'approved' ? (
                      <CheckCircle className="w-4 h-4 text-[#008542]" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </div>
                
                {request.status === 'pending' && (
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs h-7 border-[#008542] text-[#008542] hover:bg-[#008542] hover:text-white">
                      Aprovar
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs h-7">
                      Recusar
                    </Button>
                  </div>
                )}
              </div>
            ))}
            
            <Button variant="ghost" className="w-full text-sm text-[#006298]">
              Ver todas as solicitações
            </Button>
          </CardContent>
        </Card>

        {/* Featured Research */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Pesquisas em Destaque
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {featuredResearch.map((research, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{research.title}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(research.status)}`}>
                    {research.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {research.team} membros
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {research.publications} publicações
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-medium">{research.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#008542] to-[#006298] h-2 rounded-full"
                      style={{ width: `${research.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Publications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Publicações Recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPublications.map((publication, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-2">{publication.title}</h4>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="font-medium">{publication.journal}</span>
                  <span>{publication.year}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                  <span>{publication.citations} citações</span>
                  <LinkIcon className="w-4 h-4 cursor-pointer hover:text-[#006298]" />
                </div>
              </div>
            ))}
            
            <Button variant="ghost" className="w-full text-[#006298]">
              Ver todas as publicações
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Perfil;
