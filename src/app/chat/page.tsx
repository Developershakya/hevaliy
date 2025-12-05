import Sidebar from '../../components/chat/Sidebar';
import MessageList from '../../components/chat/MessageList';
import ChatArea from '../../components/chat/ChatArea';
import InfoPanel from '../../components/chat/InfoPanel';
import Image from 'next/image';

// --- Top Header / Navbar component (for quick reference) ---
const TopHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
      
      {/* Left: Branding & General Chats */}
      <div className="flex items-center gap-4">
        {/* Heartivy Logo Placeholder */}
        <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
          <div className="w-10 h-10 relative">
              <Image 
                src="/images/logo.svg" // Replace with your logo path
                alt="Heartivy Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
          </div>
          <span className="text-gray-900 font-extrabold">Heartivy</span>
        </div>
        
        {/* Chat Title */}
        <div>
            <h1 className="text-lg font-bold text-gray-800">General Chats</h1>
            <p className="text-xs text-gray-400">25 November, 2025</p>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="grow max-w-xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-purple-300"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Right: User Info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm text-gray-600">
            <span className="font-bold text-lg text-orange-500">200</span>
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 4c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/></svg>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">Deepak Shakya</p>
            <p className="text-xs text-gray-500">GP | UK</p>
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
            {/* User Profile Image Placeholder */}
            {/* <Image src="/path/to/hitesh.jpg" alt="Hitesh" width={40} height={40} /> */}
          </div>
        </div>
      </div>
    </header>
  );
};


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* 1. Top Header: Hamesha Visible (Logo, Search, Profile) */}
      <TopHeader /> 
      
      {/* 2. Main Layout (Controls 3 Columns) */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT: Sidebar
           - md:flex: Tablet/Desktop par dikhega (yaani phone par chhipa rahega)
           - w-16: Mobile/default par chhota icon view (Agar aap mobile par bhi thoda navigation dikhana chahte hain)
           - lg:w-64: Desktop par poora chauda dikhega.
        */}
        <div className="hidden md:block lg:w-64">
           <Sidebar isResponsive={true} />
        </div>
        
        {/* CENTER/MAIN SECTION: Message List + Chat Area */}
        <div className="flex flex-1 overflow-x-hidden">
            
            {/* 2.1 Message List:
               - w-full: Mobile par poori screen cover karega (Jab ChatArea chhipa hoga).
               - sm:w-80: Tablet/Desktop par fixed width 80 (Aapke design ke hisaab se).
            */}
            <div className="w-full sm:w-80 shrink-0">
               <MessageList />
            </div>
            
            {/* 2.2 Chat Area:
               - hidden: Mobile par chhipa rahega.
               - sm:flex: Tablet aur upar dikhega.
               - flex-grow: Jo bacha hua space hai woh lega.
            */}
            <div className="hidden sm:flex grow">
               <ChatArea />
            </div>
        </div>

        {/* RIGHT: Info Panel (Chat Info)
           - hidden: Tablet/Mobile par chhipa rahega.
           - lg:block: Sirf large screens (Desktop) par dikhega.
        */}
        <div className="hidden lg:block w-80 shrink-0">
           <InfoPanel />
        </div>

      </div>
    </div>
  );
}