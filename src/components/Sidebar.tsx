
import React, { useState } from 'react';
import { Users, MessageCircle, User, Plus, ChevronLeft, ChevronRight, Pin, Bell, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('conversations');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [pinnedChats, setPinnedChats] = useState<number[]>([1, 3]);
  const navigate = useNavigate();
  const location = useLocation();

  const conversations = [
    { id: 1, name: 'Análise Petroquímica', unread: 1, type: 'analysis', isPinned: true },
    { id: 2, name: 'Laboratório Geológico', unread: 3, type: 'lab', isPinned: false },
    { id: 3, name: 'Projeto Extração', unread: 7, type: 'project', isPinned: true },
    { id: 4, name: 'Exploração Mineral', unread: 0, type: 'research', isPinned: false }
  ];

  const contacts = [
    { id: 1, name: 'Dr. Carlos Pereira', status: 'online', lab: 'Geoquímica' },
    { id: 2, name: 'Dra. Ana Rocha', status: 'offline', lab: 'Petróleo e Gás' },
    { id: 3, name: 'Prof. João Mineral', status: 'away', lab: 'Mineralogia' }
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
    <div className={`${isCollapsed ? 'w-16' : 'w-80'} bg-white border-l border-gray-200 h-full flex flex-col transition-all duration-300`}>
      {/* Tab Controls - Fixed width to prevent overflow */}
      {!isCollapsed && (
        <div className="flex p-3 border-b border-gray-100 gap-1">
          <Button
            variant={activeTab === 'conversations' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('conversations')}
            className={`flex-1 text-xs min-w-0 ${
              activeTab === 'conversations' 
                ? 'bg-gradient-to-r from-[#008542] to-[#006298] text-white hover:from-[#006835] hover:to-[#004a7a]' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MessageCircle className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">Conversas</span>
          </Button>
          <Button
            variant={activeTab === 'contacts' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('contacts')}
            className={`flex-1 text-xs min-w-0 ${
              activeTab === 'contacts' 
                ? 'bg-gradient-to-r from-[#008542] to-[#006298] text-white hover:from-[#006835] hover:to-[#004a7a]' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">Contatos</span>
          </Button>
        </div>
      )}

      {/* Content - Main scrollable area */}
      <div className="flex-1 overflow-y-auto p-3">
        {isCollapsed ? (
          // Collapsed view - show simplified bubbles
          <div className="space-y-3">
            {/* Conversations */}
            {sortedConversations.slice(0, 4).map((conv) => (
              <div
                key={conv.id}
                onClick={handleChatClick}
                className="relative flex items-center justify-center cursor-pointer group"
                title={conv.name}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#008542] to-[#006298] rounded-full flex items-center justify-center text-white text-sm font-semibold hover:scale-105 transition-transform">
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
          <div className="space-y-4">
            {activeTab === 'conversations' && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase text-gray-500 font-medium">Laboratórios de Pesquisa</span>
                  <Plus className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
                <div className="space-y-2">
                  {sortedConversations.map((conv) => (
                    <div
                      key={conv.id}
                      className={`flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer group ${
                        location.pathname === '/chat' ? 'bg-gray-50' : ''
                      }`}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#008542] to-[#006298] rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3 flex-shrink-0">
                        {conv.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0" onClick={handleChatClick}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium truncate text-gray-900">{conv.name}</span>
                          <div className="flex items-center space-x-2 ml-2">
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
                              className={`p-1 h-6 w-6 ${pinnedChats.includes(conv.id) ? 'text-[#fdc82f]' : 'text-gray-400'} hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity`}
                            >
                              <Pin className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase text-gray-500 font-medium">Especialistas Online</span>
                </div>
                <div className="space-y-2">
                  {sortedContacts.map((contact) => (
                    <div
                      key={contact.id}
                      onClick={handleChatClick}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="relative mr-3 flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#006298] to-[#008542] rounded-full flex items-center justify-center text-sm font-semibold text-white">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-white rounded-full ${
                          contact.status === 'online' ? 'bg-[#008542]' : 
                          contact.status === 'away' ? 'bg-[#fdc82f]' : 'bg-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate text-gray-900">{contact.name}</div>
                        <div className="text-xs text-gray-500 truncate">{contact.lab}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Collapse/Expand Button - Moved to bottom */}
      <div className="p-3 border-t border-gray-100">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full text-gray-600 hover:bg-gray-100 justify-center"
        >
          {isCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
