import { MoreVertical, Phone, Video, X } from 'lucide-react';

const ChatBubble = ({ message, time, isSender }: { message: string; time: string; isSender: boolean; status?: string }) => (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs md:max-w-md p-3 rounded-xl ${
            isSender ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-900 rounded-tl-none'
        }`}>
            <p className="text-sm">{message}</p>
            <div className={`text-xs mt-1 ${isSender ? 'text-blue-200' : 'text-gray-500'} flex items-center justify-end gap-1`}>
                 {time}
                 {/* Status placeholder if needed */}
            </div>
        </div>
    </div>
);

export default function ChatArea() {
    const messages = [
        { sender: 'Ananya Sharma', message: "Hi! How are you feeling today?", time: "10:33 AM", isSender: false },
        { sender: 'You', message: "Work has been tiring and anxious today.", time: "10:33 AM", isSender: true, status: 'sent' },
        { sender: 'Ananya Sharma', message: "I'm here to listen. Tell me, what's been making work anxious today?", time: "10:33 AM", isSender: false },
        { sender: 'You', message: "Work has been tiring and anxious today.", time: "10:33 AM", isSender: true, status: 'sent' },
        { sender: 'You', message: "I'm having trouble sleeping", time: "10:33 AM", isSender: true, status: 'sent' },
    ];
    
    return (
        <div className="grow flex flex-col bg-gray-50 border-r border-gray-200 relative">
            
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full relative">
                        {/* Avatar Placeholder */}
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">Ananya Sharma</p>
                        <p className="text-xs text-green-600">Online</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <Phone size={18} className="cursor-pointer hover:text-gray-800" />
                    <Video size={18} className="cursor-pointer hover:text-gray-800" />
                    <MoreVertical size={18} className="cursor-pointer hover:text-gray-800" />
                    <X size={18} className="cursor-pointer hover:text-gray-800" />
                </div>
            </div>
            
            {/* Chat Messages Area */}
            <div className="grow p-6 space-y-4 overflow-y-auto">
                <p className="text-center text-xs text-gray-400">Ananya Sharma</p>
                {messages.map((msg, index) => (
                    <ChatBubble 
                        key={index} 
                        message={msg.message} 
                        time={msg.time} 
                        isSender={msg.isSender}
                    />
                ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
                <div className="relative">
                    <textarea
                        rows={2}
                        placeholder="Type a message..."
                        className="w-full bg-gray-100 rounded-lg py-3 pl-4 pr-16 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-purple-300"
                    />
                    <button className="absolute right-3 bottom-3 bg-purple-600 hover:bg-purple-700 p-2 rounded-lg text-white transition">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                    <p className="absolute left-4 bottom-1 text-xs text-red-500">
                       <span className='line-through'>Type message and cast</span> <span className='font-bold'>curse</span>
                    </p>
                </div>
            </div>
        </div>
    );
}