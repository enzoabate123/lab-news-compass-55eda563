
import React, { useState } from 'react';
import { Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Laboratórios', path: '/laboratorios' },
    { label: 'Pesquisas', path: '/pesquisas' },
    { label: 'Notícias', path: '/noticias' }
  ];

  const notifications = [
    { id: 1, title: 'Nova pesquisa publicada', message: 'Análise de Biomarcadores foi atualizada', time: '2h atrás' },
    { id: 2, title: 'Convite para laboratório', message: 'Dr. Silva te convidou para Biotecnologia Avançada', time: '4h atrás' },
    { id: 3, title: 'Comentário em pesquisa', message: 'Nova resposta em Terapia Genética', time: '1d atrás' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-white bg-[#008542]'
                    : 'text-gray-600 hover:text-white hover:bg-[#006298]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar laboratórios, pesquisas, notícias..."
              className="pl-10 pr-4 py-2 w-full focus:ring-[#008542] focus:border-[#008542]"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="relative hover:bg-[#fdc82f]/20">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#fdc82f] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  3
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">Notificações</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                    <h4 className="font-medium text-sm text-gray-900">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <span className="text-xs text-gray-400 mt-2 block">{notification.time}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Button variant="ghost" className="w-full text-sm text-[#006298]">
                  Ver todas as notificações
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/perfil')}
            className="flex items-center space-x-2 hover:bg-[#006298]/20"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#008542] to-[#006298] rounded-full flex items-center justify-center text-white text-sm font-semibold">
              U
            </div>
            <span className="text-sm font-medium">Usuário</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
