import { Link, useLocation } from "react-router";
import { MapPin, Home, Route, Shield, Radio } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage }: HeaderProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-2 shadow-md">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">SafeRoute</div>
              <div className="text-xs font-semibold text-gray-800 -mt-0.5">
                {currentPage || "Your Safety Partner"}
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
        <div className="max-w-md mx-auto px-2 py-2">
          <div className="flex items-center justify-around">
            <Link
              to="/"
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/')
                  ? 'bg-slate-800 text-white scale-105 shadow-lg'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-[10px] font-semibold">Home</span>
            </Link>

            <Link
              to="/plan-journey"
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/plan-journey')
                  ? 'bg-slate-800 text-white scale-105 shadow-lg'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Route className="w-5 h-5" />
              <span className="text-[10px] font-semibold">Routes</span>
            </Link>

            <Link
              to="/safety-score"
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/safety-score')
                  ? 'bg-slate-800 text-white scale-105 shadow-lg'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-5 h-5" />
              <span className="text-[10px] font-semibold">Safety</span>
            </Link>

            <Link
              to="/guardian-mode"
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/guardian-mode')
                  ? 'bg-slate-800 text-white scale-105 shadow-lg'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Radio className="w-5 h-5" />
              <span className="text-[10px] font-semibold">Guardian</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
