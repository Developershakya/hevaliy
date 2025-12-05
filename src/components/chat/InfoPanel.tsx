import { Calendar,  X } from 'lucide-react';
// import Image from 'next/image';

const SessionCard = ({ time, date, isNext }: { time: string; date: string; isNext: boolean }) => (
  <div className={`p-4 rounded-xl ${
    isNext ? 'bg-orange-50 border-l-4 border-orange-500' : 'bg-green-50 border-l-4 border-green-500'
  }`}>
    <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
      <Calendar size={16} />
      <span className="font-bold">{isNext ? 'Next Session' : 'Upcoming Session'}</span>
    </div>
    <p className="text-sm font-semibold">{time}</p>
    <p className="text-xs text-gray-500 mb-3">{date}</p>
    
    <button className={`w-full py-2 rounded-lg text-sm font-semibold text-white transition ${
        isNext ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-500 hover:bg-green-600'
    }`}>
        View Details
    </button>
  </div>
);

export default function InfoPanel() {
  return (
    <div className="w-80 shrink-0 bg-white border-l border-gray-200 p-4 overflow-y-auto h-full">
      
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-lg font-bold">Chat Info</h2>
        <X size={18} className="cursor-pointer text-gray-500" />
      </div>

      {/* Therapist/User Profile */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 overflow-hidden">
            {/* <Image src="/path/to/ananya_therapist.jpg" alt="Ananya" width={80} height={80} /> */}
        </div>
        <p className="font-bold text-lg">Ananya Sharma</p>
        <p className="text-sm text-gray-600">Licensed Therapist</p>
        <span className="inline-block mt-2 bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold">
          Action Now
        </span>
      </div>

      {/* Session Cards */}
      <div className="space-y-6">
        <SessionCard 
          isNext={true} 
          time="Tomorrow, 3:00 PM" 
          date="26 Nov, 2025" 
        />
        <SessionCard 
          isNext={false} 
          time="1 Dec, 2:00 PM" 
          date="Upcoming" 
        />
      </div>

    </div>
  );
}