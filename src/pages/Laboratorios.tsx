
import React, { useState } from 'react';
import { Search, Filter, MapPin, Users, Calendar, Plus, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Laboratorios = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const laboratories = [
    {
      id: 1,
      name: 'Laboratório de Geoquímica Avançada',
      description: 'Especializado em análises geoquímicas de rochas sedimentares e caracterização de reservatórios petrolíferos.',
      location: 'São Paulo, SP',
      researchers: 25,
      projects: 12,
      founded: '2018',
      category: 'Geoquímica',
      image: '/placeholder.svg',
      status: 'Ativo'
    },
    {
      id: 2,
      name: 'Centro de Pesquisa em Exploração Offshore',
      description: 'Desenvolvimento de tecnologias para exploração de petróleo e gás em águas profundas.',
      location: 'Rio de Janeiro, RJ',
      researchers: 18,
      projects: 8,
      founded: '2020',
      category: 'Exploração',
      image: '/placeholder.svg',
      status: 'Ativo'
    },
    {
      id: 3,
      name: 'Instituto de Mineralogia Aplicada',
      description: 'Pesquisa e desenvolvimento em caracterização mineral e processamento de minérios.',
      location: 'Campinas, SP',
      researchers: 32,
      projects: 15,
      founded: '2015',
      category: 'Mineralogia',
      image: '/placeholder.svg',
      status: 'Ativo'
    },
    {
      id: 4,
      name: 'Lab de Engenharia de Reservatórios',
      description: 'Estudos avançados em simulação e otimização de produção de hidrocarbonetos.',
      location: 'Belo Horizonte, MG',
      researchers: 22,
      projects: 10,
      founded: '2017',
      category: 'Engenharia',
      image: '/placeholder.svg',
      status: 'Ativo'
    },
    {
      id: 5,
      name: 'Centro de Tecnologia em Cimentação de Poços',
      description: 'Especializado no desenvolvimento de pastas de cimento e aditivos para cimentação primária e secundária em poços petrolíferos.',
      location: 'Rio de Janeiro, RJ',
      researchers: 28,
      projects: 16,
      founded: '2019',
      category: 'Cimentação',
      image: '/placeholder.svg',
      status: 'Ativo'
    },
    {
      id: 6,
      name: 'Laboratório de Materiais para Completação',
      description: 'Pesquisa e teste de materiais cimentícios para operações de completação em águas ultraprofundas.',
      location: 'Santos, SP',
      researchers: 15,
      projects: 9,
      founded: '2021',
      category: 'Cimentação',
      image: '/placeholder.svg',
      status: 'Ativo'
    },
    {
      id: 7,
      name: 'Instituto de Cimentos Especiais para Petróleo',
      description: 'Desenvolvimento de formulações de cimento resistentes a altas temperaturas e pressões para o pré-sal.',
      location: 'Salvador, BA',
      researchers: 20,
      projects: 11,
      founded: '2020',
      category: 'Cimentação',
      image: '/placeholder.svg',
      status: 'Ativo'
    },
    {
      id: 8,
      name: 'Lab de Aditivos para Cimentação Offshore',
      description: 'Especializado em aditivos químicos para pastas de cimento em operações offshore no Brasil.',
      location: 'Macaé, RJ',
      researchers: 12,
      projects: 7,
      founded: '2022',
      category: 'Cimentação',
      image: '/placeholder.svg',
      status: 'Ativo'
    },
    {
      id: 9,
      name: 'Centro de Integridade de Barreiras Cimentícias',
      description: 'Avaliação da integridade e durabilidade de barreiras de cimento em poços de petróleo e gás.',
      location: 'Natal, RN',
      researchers: 18,
      projects: 13,
      founded: '2018',
      category: 'Cimentação',
      image: '/placeholder.svg',
      status: 'Ativo'
    }
  ];

  const categories = ['all', 'Geoquímica', 'Exploração', 'Mineralogia', 'Engenharia', 'Cimentação'];

  const filteredLabs = laboratories.filter(lab => {
    const matchesSearch = lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lab.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || lab.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Laboratórios</h1>
          <p className="text-gray-600">Explore laboratórios de pesquisa em petróleo, gás e mineração</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Novo Laboratório
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar laboratórios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filtros
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {categories.map(category => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={filterCategory === category ? 'bg-gray-100' : ''}
                >
                  {category === 'all' ? 'Todas as categorias' : category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Mostrando {filteredLabs.length} laboratório(s) de {laboratories.length}
      </div>

      {/* Laboratory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => (
          <Card key={lab.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
              <div className="text-4xl font-bold text-blue-600 opacity-20">
                {lab.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
              </div>
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full mb-2">
                    {lab.category}
                  </span>
                  <CardTitle className="text-lg mb-2">{lab.name}</CardTitle>
                </div>
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{lab.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {lab.location}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {lab.researchers} pesquisadores
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Desde {lab.founded}
                  </div>
                </div>
                <div className="pt-2">
                  <span className="text-sm font-medium text-blue-600">
                    {lab.projects} projetos ativos
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredLabs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum laboratório encontrado</h3>
          <p className="text-gray-600 mb-4">Tente ajustar seus filtros ou termos de busca</p>
          <Button variant="outline">Limpar filtros</Button>
        </div>
      )}
    </div>
  );
};

export default Laboratorios;
