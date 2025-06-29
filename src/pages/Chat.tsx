
import React, { useState } from 'react';
import { Send, Paperclip, Phone, Video, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const chats = [
    { id: 1, name: 'Laboratório Alpha', lastMessage: 'Novos resultados disponíveis', time: '14:30', unread: 3 },
    { id: 2, name: 'Pesquisa Beta', lastMessage: 'Reunião marcada para amanhã', time: '13:45', unread: 0 },
    { id: 3, name: 'Projeto Gamma', lastMessage: 'Dados processados com sucesso', time: '12:20', unread: 7 },
    { id: 4, name: 'Dr. Maria Silva', lastMessage: 'Preciso revisar os protocolos', time: '11:15', unread: 1 }
  ];

  const messages = [
    { id: 1, sender: 'Dr. Carlos Lima', content: 'Pessoal, temos novos resultados dos testes!', time: '14:25', isMe: false },
    { id: 2, sender: 'Você', content: 'Excelente! Pode compartilhar os dados?', time: '14:26', isMe: true },
    { id: 3, sender: 'Dra. Ana Costa', content: 'Estou analisando os biomarcadores agora', time: '14:28', isMe: false },
    { id: 4, sender: 'Dr. Carlos Lima', content: 'Claro! Já enviei no canal de documentos', time: '14:30', isMe: false }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex h-[calc(100vh-73px)] bg-white">
      {/* Chat List */}
      <Card className="w-80 rounded-none border-r border-l-0 border-t-0 border-b-0">
        <CardHeader className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Conversas</h2>
        </CardHeader>
        <CardContent className="p-0 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedChat === chat.id ? 'bg-gradient-to-r from-[#008542]/10 to-[#006298]/10 border-l-4 border-l-[#008542]' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-900">{chat.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{chat.time}</span>
                  {chat.unread > 0 && (
                    <span className="bg-[#fdc82f] text-black text-xs px-2 py-1 rounded-full font-medium">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <Card className="rounded-none border-l-0 border-r-0 border-t-0">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#008542] to-[#006298] rounded-full flex items-center justify-center text-white font-semibold">
                LA
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Laboratório Alpha</h3>
                <p className="text-sm text-gray-500">8 membros online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-[#006298]/20">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-[#006298]/20">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-[#006298]/20">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
              >
                <Card
                  className={`max-w-xs lg:max-w-md ${
                    msg.isMe
                      ? 'bg-gradient-to-r from-[#008542] to-[#006298] text-white border-none'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <CardContent className="p-4">
                    {!msg.isMe && (
                      <p className="text-xs font-medium text-[#006298] mb-1">{msg.sender}</p>
                    )}
                    <p className={`text-sm ${msg.isMe ? 'text-white' : 'text-gray-900'}`}>
                      {msg.content}
                    </p>
                    <p className={`text-xs mt-1 ${msg.isMe ? 'text-green-100' : 'text-gray-500'}`}>
                      {msg.time}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <Card className="rounded-none border-l-0 border-r-0 border-b-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-[#006298]/20">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Input
                type="text"
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 focus:ring-[#008542] focus:border-[#008542]"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-[#008542] to-[#006298] hover:from-[#006835] hover:to-[#004a7a] text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
