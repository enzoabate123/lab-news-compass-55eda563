
import React, { useState } from 'react';
import { Users, MessageCircle, Settings, Plus, ChevronLeft, ChevronRight, Pin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('conversations');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [pinnedChats, setPinnedChats] = useState<number[]>([1, 3]);
  const navigate = useNavigate();
  const location = useLocation();

  const conversations = [
    { id: 1, name: 'Análise Delta', unread: 1, type: 'analysis', isPinned: true },
    { id: 2, name: 'Laboratório Alpha', unread: 3, type: 'lab', isPinned: false },
    { id: 3, name: 'Projeto Gamma', unread: 7, type: 'project', isPinned: true },
    { id: 4, name: 'Pesquisa Beta', unread: 0, type: 'research', isPinned: false }
  ];

  const contacts = [
    { id: 1, name: 'Dr. Maria Silva', status: 'online', lab: 'Biotecnologia' },
    { id: 2, name: 'Dra. Ana Costa', status: 'offline', lab: 'Química Aplicada' },
    { id: 3, name: 'Prof. João Santos', status: 'away', lab: 'Física Quântica' }
  ];

  // Organizar chats: primeiro os fixados (alfabético), depois os outros (alfabético)
  const sortedConversations = [
    ...conversations.filter(conv => pinnedChats.includes(conv.id)).sort((a, b) => a.name.localeCompare(b.name)),
    ...conversations.filter(conv => !pinnedChats.includes(conv.id)).sort((a, b) => a.name.localeCompare(b.name))
  ];

  const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

  const togglePin = (chatId: number) => {
    setPinnedChats(prev => 
      prev.includes(chatId) 
        ? prev.filter(id => id !== chatId)
        : [...prev, chatId]
    );
  };

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
        <div className="flex p-3 bg-slate-800/50 gap-2">
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
      <div className="flex-1 overflow-y-auto p-3">
        {isCollapsed ? (
          // Collapsed view - show simplified bubbles
          <div className="space-y-3">
            {sortedConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={handleChatClick}
                className="relative flex items-center justify-center cursor-pointer group"
                title={conv.name}
              >
                <div className="w-10 h-10 bg-[#006298] rounded-full flex items-center justify-center text-white text-sm font-semibold hover:scale-110 transition-transform">
                  {conv.name.charAt(0)}
                </div>
                {conv.unread > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#fdc82f] text-black text-xs px-1.5 py-0.5 rounded-full font-medium min-w-[18px] h-[18px] flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
                {pinnedChats.includes(conv.id) && (
                  <Pin className="absolute -bottom-1 -left-1 w-3 h-3 text-[#fdc82f]" />
                )}
              </div>
            ))}
          </div>
        ) : (
          // Expanded view
          <>
            {activeTab === 'conversations' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase text-slate-400 font-semibold">Grupos de Pesquisa</span>
                  <Plus className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                </div>
                {sortedConversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`flex items-center p-3 rounded-lg hover:bg-slate-700 cursor-pointer group ${
                      location.pathname === '/chat' ? 'bg-slate-700' : ''
                    } mb-2`}
                  >
                    <div className="w-10 h-10 bg-[#006298] rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                      {conv.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0" onClick={handleChatClick}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium truncate">{conv.name}</span>
                        <div className="flex items-center space-x-2">
                          {conv.unread > 0 && (
                            <span className="bg-[#fdc82f] text-black text-xs px-2 py-1 rounded-full font-medium">
                              {conv.unread}
                            </span>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePin(conv.id);
                            }}
                            className={`p-1 h-6 w-6 ${pinnedChats.includes(conv.id) ? 'text-[#fdc82f]' : 'text-slate-400'} hover:text-white opacity-0 group-hover:opacity-100 transition-opacity`}
                          >
                            <Pin className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase text-slate-400 font-semibold">Pesquisadores Online</span>
                </div>
                {sortedContacts.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={handleChatClick}
                    className="flex items-center p-3 rounded-lg hover:bg-slate-700 cursor-pointer mb-2"
                  >
                    <div className="relative mr-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#006298] to-[#008542] rounded-full flex items-center justify-center text-sm font-semibold">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-slate-800 rounded-full ${
                        contact.status === 'online' ? 'bg-[#008542]' : 
                        contact.status === 'away' ? 'bg-[#fdc82f]' : 'bg-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{contact.name}</div>
                      <div className="text-xs text-slate-400 truncate">{contact.lab}</div>
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
        <div className="p-4 border-t border-slate-700">
          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:bg-slate-700">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
