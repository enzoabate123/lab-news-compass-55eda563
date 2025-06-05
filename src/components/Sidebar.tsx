
import React, { useState } from 'react';
import { Users, MessageCircle, Hash, Settings, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('conversations');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const conversations = [
    { id: 1, name: 'Laboratório Alpha', unread: 3, type: 'lab', color: '#008542' },
    { id: 2, name: 'Pesquisa Beta', unread: 0, type: 'research', color: '#006298' },
    { id: 3, name: 'Projeto Gamma', unread: 7, type: 'project', color: '#fdc82f' },
    { id: 4, name: 'Análise Delta', unread: 1, type: 'analysis', color: '#008542' }
  ];

  const contacts = [
    { id: 1, name: 'Dr. Maria Silva', status: 'online', lab: 'Biotecnologia' },
    { id: 2, name: 'Prof. João Santos', status: 'away', lab: 'Física Quântica' },
    { id: 3, name: 'Dra. Ana Costa', status: 'offline', lab: 'Química Aplicada' }
  ];

  const handleChatClick = () => {
    navigate('/chat');
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen flex flex-col transition-all duration-300`}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        {!isCollapsed && <h2 className="text-lg font-semibold text-[#fdc82f]">Aba</h2>}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:bg-slate-700 p-1"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Tab Controls - Hidden when collapsed */}
      {!isCollapsed && (
        <div className="flex p-2 bg-slate-800/50">
          <Button
            variant={activeTab === 'conversations' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('conversations')}
            className="flex-1 text-xs bg-[#008542] hover:bg-[#006835]"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Conversas
          </Button>
          <Button
            variant={activeTab === 'contacts' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('contacts')}
            className="flex-1 text-xs bg-[#008542] hover:bg-[#006835]"
          >
            <Users className="w-4 h-4 mr-1" />
            Contatos
          </Button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-2">
        {isCollapsed ? (
          // Collapsed view - show simplified bubbles
          <div className="space-y-2">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={handleChatClick}
                className="relative flex items-center justify-center cursor-pointer group"
                title={conv.name}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold hover:scale-110 transition-transform"
                  style={{ backgroundColor: conv.color }}
                >
                  {conv.name.charAt(0)}
                </div>
                {conv.unread > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#fdc82f] text-black text-xs px-1.5 py-0.5 rounded-full font-medium min-w-[18px] h-[18px] flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Expanded view
          <>
            {activeTab === 'conversations' && (
              <div className="space-y-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase text-slate-400 font-semibold">Grupos de Pesquisa</span>
                  <Plus className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                </div>
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={handleChatClick}
                    className={`flex items-center p-2 rounded hover:bg-slate-700 cursor-pointer group ${
                      location.pathname === '/chat' ? 'bg-slate-700' : ''
                    }`}
                  >
                    <Hash className="w-4 h-4 mr-2 text-slate-400" />
                    <span className="flex-1 text-sm truncate">{conv.name}</span>
                    {conv.unread > 0 && (
                      <span className="bg-[#fdc82f] text-black text-xs px-1.5 py-0.5 rounded-full font-medium">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="space-y-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase text-slate-400 font-semibold">Pesquisadores Online</span>
                </div>
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={handleChatClick}
                    className="flex items-center p-2 rounded hover:bg-slate-700 cursor-pointer"
                  >
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#006298] to-[#008542] rounded-full flex items-center justify-center text-sm font-semibold">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-slate-800 rounded-full ${
                        contact.status === 'online' ? 'bg-[#008542]' : 
                        contact.status === 'away' ? 'bg-[#fdc82f]' : 'bg-gray-400'
                      }`} />
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="text-sm font-medium">{contact.name}</div>
                      <div className="text-xs text-slate-400">{contact.lab}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Settings - Hidden when collapsed */}
      {!isCollapsed && (
        <div className="p-3 border-t border-slate-700">
          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
