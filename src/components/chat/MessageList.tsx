// import Image from 'next/image';
import { Search, Plus, MessageSquare } from 'lucide-react';

const ChatListItem = ({ name, lastMessage, time, isOnline, unreadCount }: { name: string; lastMessage: string; time: string; isOnline: boolean; unreadCount: number; avatarSrc: string }) => (
  <div className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition ${
    name === 'Ananya Sharma' ? 'bg-purple-50 border-r-4 border-purple-600' : 'hover:bg-gray-50'
  }`}>
    
    {/* Avatar */}
    <div className="relative">
      <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
        {/* <Image src={avatarSrc} alt={name} width={40} height={40} className="object-cover" /> */}
      </div>
      {isOnline && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>}
    </div>
    
    {/* Text Content */}
    <div className="grow min-w-0">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-sm truncate">{name}</p>
        {unreadCount > 0 && (
          <span className="text-xs bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 truncate">{lastMessage}</p>
      <p className="text-xs text-gray-400 mt-0.5">{time}</p>
    </div>
  </div>
);


export default function MessageList() {
  const users = [
    { name: "Ananya Sharma", lastMessage: "Hi! How are you feeling today?", time: "Online", isOnline: true, unreadCount: 0, avatarSrc: '/path/to/ananya.jpg' },
    { name: "Siya Iyer", lastMessage: "Keep stretching yourself, ye... read more...", time: "10:33 AM", isOnline: false, unreadCount: 1, avatarSrc: '/path/to/siya.jpg' },
    { name: "Meera Nambiar", lastMessage: "Please ensure your friend...", time: "10:33 AM", isOnline: false, unreadCount: 1, avatarSrc: '/path/to/meera.jpg' },
    { name: "Shaan Malik", lastMessage: "Fixed issues, 3 base...", time: "10:33 AM", isOnline: false, unreadCount: 1, avatarSrc: '/path/to/shaan.jpg' },
  ];

  const moreUsers = [
    { name: "Fiaa/Mikus9", lastMessage: "Help me overcome anxiety and worry, read more...", time: "", isOnline: false, unreadCount: 1, avatarSrc: '/path/to/fiaa.jpg' },
    { name: "Meera Nambiar", lastMessage: "Please ensure your friend...", time: "", isOnline: false, unreadCount: 0, avatarSrc: '/path/to/meera.jpg' },
    { name: "Kunal Rathore", lastMessage: "Keep stretching yourself, ye... read more...", time: "", isOnline: false, unreadCount: 0, avatarSrc: '/path/to/kunal.jpg' },
    { name: "Teesha Raakar", lastMessage: "Hello I'm under stress, read more...", time: "", isOnline: false, unreadCount: 0, avatarSrc: '/path/to/tees.jpg' },
  ];
  
  return (
    <div className="w-80 shrink-0 bg-white border-r border-gray-200 overflow-y-auto h-full p-4">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Messages</h2>
        <div className="flex items-center gap-3 text-gray-600">
          <Search size={18} className="cursor-pointer" />
          <Plus size={18} className="cursor-pointer" />
        </div>
      </div>
      
      {/* Search Input for Messages */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-100 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-300"
        />
        <MessageSquare size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Primary Message List */}
      <div className="space-y-2 mb-6">
        {users.map((user, index) => (
          <ChatListItem key={index} {...user} />
        ))}
      </div>

      <h3 className="text-sm font-bold text-gray-800 mb-3">Messages</h3>
      
      {/* Secondary Message List */}
      <div className="space-y-2">
        {moreUsers.map((user, index) => (
          <ChatListItem key={index} {...user} />
        ))}
      </div>

    </div>
  );
}