
import React, { useState } from 'react';
import { Search, Filter, Calendar, ExternalLink, Bookmark, Share2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const news = [
    {
      id: 1,
      title: 'Breakthrough em Inteligência Artificial Médica Revoluciona Diagnósticos',
      summary: 'Nova pesquisa demonstra eficácia de 95% em diagnósticos automatizados de câncer de mama, superando métodos tradicionais.',
      content: 'Pesquisadores do MIT desenvolveram um sistema de IA que pode detectar câncer de mama com precisão de 95%, superando radiologistas experientes...',
      source: 'Nature Medicine',
      author: 'Dr. Sarah Johnson',
      publishedAt: '2024-06-05T08:30:00Z',
      category: 'IA Médica',
      tags: ['Inteligência Artificial', 'Câncer', 'Diagnóstico'],
      imageUrl: '/placeholder.svg',
      readTime: '4 min',
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'Nova Vacina de mRNA Mostra Resultados Promissores Contra Alzheimer',
      summary: 'Ensaios clínicos de fase II demonstram redução significativa na progressão da doença de Alzheimer.',
      content: 'Uma nova abordagem usando tecnologia de RNA mensageiro está mostrando resultados extraordinários no tratamento do Alzheimer...',
      source: 'Science Translational Medicine',
      author: 'Prof. Michael Chen',
      publishedAt: '2024-06-04T14:15:00Z',
      category: 'Vacinas',
      tags: ['mRNA', 'Alzheimer', 'Neurologia'],
      imageUrl: '/placeholder.svg',
      readTime: '6 min',
      views: 2100,
      likes: 156
    },
    {
      id: 3,
      title: 'Terapia Genética CRISPR Cura Primeira Paciente com Anemia Falciforme',
      summary: 'Marco histórico: primeira cura completa de anemia falciforme usando edição genética CRISPR.',
      content: 'Em um marco sem precedentes na medicina, uma paciente de 29 anos foi completamente curada da anemia falciforme...',
      source: 'New England Journal of Medicine',
      author: 'Dra. Emily Rodriguez',
      publishedAt: '2024-06-03T16:45:00Z',
      category: 'Terapia Genética',
      tags: ['CRISPR', 'Anemia Falciforme', 'Edição Genética'],
      imageUrl: '/placeholder.svg',
      readTime: '8 min',
      views: 3400,
      likes: 287
    },
    {
      id: 4,
      title: 'Nanotecnologia Permite Entrega Direcionada de Medicamentos Oncológicos',
      summary: 'Nanopartículas inteligentes reduzem efeitos colaterais da quimioterapia em 70% dos casos.',
      content: 'Cientistas desenvolveram nanopartículas que podem entregar medicamentos quimioterápicos diretamente às células cancerosas...',
      source: 'Nature Nanotechnology',
      author: 'Dr. James Liu',
      publishedAt: '2024-06-02T11:20:00Z',
      category: 'Nanotecnologia',
      tags: ['Nanotecnologia', 'Oncologia', 'Drug Delivery'],
      imageUrl: '/placeholder.svg',
      readTime: '5 min',
      views: 1800,
      likes: 134
    },
    {
      id: 5,
      title: 'Regulamentação de Pesquisas com IA: Novas Diretrizes do CFM',
      summary: 'Conselho Federal de Medicina estabelece novos protocolos para pesquisas envolvendo inteligência artificial.',
      content: 'O Conselho Federal de Medicina publicou novas diretrizes que regulamentam o uso de IA em pesquisas médicas...',
      source: 'Portal CFM',
      author: 'Redação CFM',
      publishedAt: '2024-06-01T09:00:00Z',
      category: 'Regulamentação',
      tags: ['CFM', 'Regulamentação', 'IA Médica'],
      imageUrl: '/placeholder.svg',
      readTime: '3 min',
      views: 950,
      likes: 67
    }
  ];

  const categories = ['all', 'IA Médica', 'Vacinas', 'Terapia Genética', 'Nanotecnologia', 'Regulamentação'];

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'IA Médica': 'bg-blue-100 text-blue-700',
      'Vacinas': 'bg-green-100 text-green-700',
      'Terapia Genética': 'bg-purple-100 text-purple-700',
      'Nanotecnologia': 'bg-orange-100 text-orange-700',
      'Regulamentação': 'bg-gray-100 text-gray-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notícias Científicas</h1>
          <p className="text-gray-600">Mantenha-se atualizado com as últimas descobertas e regulamentações</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bookmark className="w-4 h-4 mr-2" />
            Salvos
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Newsletter
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar notícias, tags, autores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Todas as categorias' : category}
              </option>
            ))}
          </select>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      {/* Featured Article */}
      {filteredNews.length > 0 && (
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-6xl font-bold text-blue-600 opacity-20">
                {filteredNews[0].category.split(' ').map(word => word[0]).join('')}
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(filteredNews[0].category)}`}>
                  {filteredNews[0].category}
                </span>
                <span className="text-xs text-gray-500">Destaque</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{filteredNews[0].title}</h2>
              <p className="text-gray-600 mb-4">{filteredNews[0].summary}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">{filteredNews[0].source}</span>
                  <span className="mx-2">•</span>
                  <span>{filteredNews[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{formatDate(filteredNews[0].publishedAt)}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{filteredNews[0].readTime}</span>
                  <span>{filteredNews[0].views} visualizações</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.slice(1).map((article) => (
          <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-400 opacity-30">
                {article.category.split(' ').map(word => word[0]).join('')}
              </div>
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
              <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{article.source}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatDate(article.publishedAt)}</span>
                  <div className="flex items-center gap-3">
                    <span>{article.views} views</span>
                    <span>{article.likes} likes</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 pt-2">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma notícia encontrada</h3>
          <p className="text-gray-600 mb-4">Tente ajustar seus filtros ou termos de busca</p>
          <Button variant="outline">Limpar filtros</Button>
        </div>
      )}
    </div>
  );
};

export default Noticias;
