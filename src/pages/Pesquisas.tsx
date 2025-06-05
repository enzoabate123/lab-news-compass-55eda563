
import React, { useState } from 'react';
import { Search, Filter, Calendar, Users, TrendingUp, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Pesquisas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const researches = [
    {
      id: 1,
      title: 'Análise de Biomarcadores Cardíacos',
      description: 'Estudo inovador sobre identificação precoce de doenças cardiovasculares através de biomarcadores específicos no sangue.',
      lab: 'Laboratório de Biotecnologia Avançada',
      researchers: 8,
      startDate: '2024-01-15',
      status: 'Em andamento',
      progress: 78,
      category: 'Cardiologia',
      publications: 3,
      funding: 'R$ 2.5M'
    },
    {
      id: 2,
      title: 'Terapia Genética para Doenças Raras',
      description: 'Desenvolvimento de novas técnicas de terapia genética utilizando CRISPR para tratamento de doenças genéticas raras.',
      lab: 'Centro de Pesquisa Genética',
      researchers: 12,
      startDate: '2023-08-20',
      status: 'Em andamento',
      progress: 92,
      category: 'Genética',
      publications: 7,
      funding: 'R$ 4.2M'
    },
    {
      id: 3,
      title: 'IA para Diagnóstico de Câncer',
      description: 'Sistema de inteligência artificial para detecção precoce e diagnóstico automatizado de diferentes tipos de câncer.',
      lab: 'Centro de Pesquisa em IA Médica',
      researchers: 15,
      startDate: '2023-12-01',
      status: 'Em andamento',
      progress: 65,
      category: 'Inteligência Artificial',
      publications: 2,
      funding: 'R$ 3.8M'
    },
    {
      id: 4,
      title: 'Nanotecnologia em Drug Delivery',
      description: 'Desenvolvimento de nanopartículas para entrega direcionada de medicamentos oncológicos.',
      lab: 'Instituto de Nanotecnologia',
      researchers: 10,
      startDate: '2024-02-10',
      status: 'Iniciando',
      progress: 25,
      category: 'Nanotecnologia',
      publications: 1,
      funding: 'R$ 1.9M'
    },
    {
      id: 5,
      title: 'Vacinas de RNA Mensageiro',
      description: 'Pesquisa sobre desenvolvimento de vacinas utilizando tecnologia de RNA mensageiro para doenças emergentes.',
      lab: 'Lab de Farmacologia Molecular',
      researchers: 20,
      startDate: '2023-06-15',
      status: 'Concluído',
      progress: 100,
      category: 'Farmacologia',
      publications: 12,
      funding: 'R$ 5.5M'
    }
  ];

  const statusOptions = ['all', 'Em andamento', 'Iniciando', 'Concluído', 'Pausado'];

  const filteredResearches = researches.filter(research => {
    const matchesSearch = research.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         research.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         research.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || research.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em andamento': return 'bg-blue-100 text-blue-700';
      case 'Iniciando': return 'bg-yellow-100 text-yellow-700';
      case 'Concluído': return 'bg-green-100 text-green-700';
      case 'Pausado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pesquisas</h1>
          <p className="text-gray-600">Acompanhe projetos de pesquisa em andamento e concluídos</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Nova Pesquisa
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar pesquisas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {statusOptions.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'Todos os status' : status}
              </option>
            ))}
          </select>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Mostrando {filteredResearches.length} pesquisa(s) de {researches.length}
      </div>

      {/* Research Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredResearches.map((research) => (
          <Card key={research.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                      {research.category}
                    </span>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(research.status)}`}>
                      {research.status}
                    </span>
                  </div>
                  <CardTitle className="text-lg mb-2">{research.title}</CardTitle>
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{research.description}</p>
              
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <strong>Laboratório:</strong> {research.lab}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {research.researchers} pesquisadores
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(research.startDate).toLocaleDateString('pt-BR')}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Publicações:</span>
                    <span className="ml-1 font-medium">{research.publications}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Financiamento:</span>
                    <span className="ml-1 font-medium">{research.funding}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-medium">{research.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${research.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredResearches.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma pesquisa encontrada</h3>
          <p className="text-gray-600 mb-4">Tente ajustar seus filtros ou termos de busca</p>
          <Button variant="outline">Limpar filtros</Button>
        </div>
      )}
    </div>
  );
};

export default Pesquisas;
