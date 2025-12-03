import Link from 'next/link';
import { LayoutDashboard, MessageCircle, Users, Briefcase, Settings, HelpCircle, LogOut } from 'lucide-react';

const NavLink = ({ href, icon: Icon, text, badge }: { href: string; icon: React.ComponentType<{ size: number }>; text: string; badge?: number }) => (
  <Link href={href} className={`flex items-center justify-between p-3 rounded-lg transition ${
    text === 'Dashboard' ? 'bg-purple-100 text-purple-800 font-semibold' : 'text-gray-700 hover:bg-gray-100'
  } ${
    // Responsive padding and justification for small screens (hiding text)
    'lg:justify-start' 
  }`}>
    <div className="flex items-center gap-3">
      <Icon size={18} />
      <span className="hidden lg:inline">{text}</span> {/* Text hides on small screens */}
    </div>
    {badge && (
      <span className={`text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full 
        ${text === 'Dashboard' ? 'bg-white text-purple-800' : 'bg-red-500 text-white'}
        ${'lg:ml-auto'}
      `}>
        {badge}
      </span>
    )}
  </Link>
);

export default function Sidebar() {
  return (
    // Sidebar width is controlled in the parent DashboardPage component
    <aside className="bg-white border-r border-gray-200 p-4 flex flex-col justify-between h-full sticky top-0 self-start">
      
      {/* Top Section: Main Menu */}
      <div>
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3 hidden lg:block">Main Menu</h3>
        
        <nav className="space-y-1">
          <NavLink href="/dashboard" icon={LayoutDashboard} text="Dashboard" />
          <NavLink href="/private-chats" icon={MessageCircle} text="Private Chats" badge={1} />
          <NavLink href="/community-feed" icon={Users} text="Community Feed" badge={2} />
          <NavLink href="/sessions" icon={Briefcase} text="Sessions" badge={0} />
        </nav>

        {/* Need Immediate Support Section - Hide completely on small screens for space */}
        <div className="mt-8 p-3 bg-purple-50 rounded-lg text-center hidden lg:block">
          <p className="text-sm text-gray-700 mb-3 font-medium">Need immediate support?</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-sm flex items-center justify-center gap-2">
            <MessageCircle size={16} />
            Start Chat
          </button>
        </div>
      </div>

      {/* Bottom Section: Settings & Logout */}
      <nav className="space-y-2 mt-4">
        <Link href="/settings" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition">
          <Settings size={18} />
          <span className="hidden lg:inline">Settings</span>
        </Link>
        <Link href="/help" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition">
          <HelpCircle size={18} />
          <span className="hidden lg:inline">Help Center</span>
        </Link>
        <Link href="/logout" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition">
          <LogOut size={18} />
          <span className="hidden lg:inline">Sign Out</span>
        </Link>
      </nav>
    </aside>
  );
}