import { Header } from "./Header";
import { MapPin, AlertTriangle, Shield, Clock, Users, ChevronRight, Zap } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Hero Section */}
        <div className="animate-fadeIn">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-slate-100 p-1.5 rounded-lg">
              <MapPin className="w-4 h-4 text-slate-700" />
            </div>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Smart Navigation</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-900">
            Your safest route,
            <br />
            every time.
          </h1>

          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            Navigate safely with intelligent routing that considers lighting, road quality, incidents, and emergency access.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <Link
              to="/plan-journey"
              className="w-full px-6 py-4 bg-slate-800 text-white rounded-xl font-semibold shadow-lg hover:bg-slate-900 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Get Started
            </Link>
            <button className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-300 active:scale-95">
              Continue as Guest
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 animate-slideUp">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md active:scale-95">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl mb-3 mx-auto">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-xs text-gray-500 font-semibold mb-1 text-center">Users</div>
            <div className="text-2xl font-bold text-gray-900 text-center">1.2K+</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md active:scale-95">
            <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-xl mb-3 mx-auto">
              <Clock className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-xs text-gray-500 font-semibold mb-1 text-center">Support</div>
            <div className="text-2xl font-bold text-gray-900 text-center">24/7</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md active:scale-95">
            <div className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-xl mb-3 mx-auto">
              <Shield className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-xs text-gray-500 font-semibold mb-1 text-center">Safety</div>
            <div className="text-2xl font-bold text-gray-900 text-center">Solo</div>
          </div>
        </div>

        {/* Live Map Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 animate-slideUp transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Live Monitoring</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Sentinel Protocol Active</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Your area has active lighting coverage, secure traffic flow, and reliable mobile network service.
          </p>

          {/* Map Preview */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 via-gray-100 to-slate-50 h-48 mb-6 shadow-inner border border-gray-200">
            <svg className="w-full h-full" viewBox="0 0 320 180">
              <defs>
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
              </defs>

              <line x1="0" y1="45" x2="320" y2="45" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
              <line x1="0" y1="90" x2="320" y2="90" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
              <line x1="0" y1="135" x2="320" y2="135" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
              <line x1="80" y1="0" x2="80" y2="180" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
              <line x1="160" y1="0" x2="160" y2="180" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
              <line x1="240" y1="0" x2="240" y2="180" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>

              <path
                d="M 40,150 Q 80,120 120,110 Q 160,100 200,90 Q 240,80 280,70"
                fill="none"
                stroke="url(#routeGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))"
              />

              <circle cx="40" cy="150" r="6" fill="#10b981" filter="drop-shadow(0 0 3px #10b981)"/>
              <circle cx="120" cy="110" r="6" fill="#059669" filter="drop-shadow(0 0 3px #059669)"/>
              <circle cx="200" cy="90" r="6" fill="#047857" filter="drop-shadow(0 0 3px #047857)"/>
              <circle cx="280" cy="70" r="6" fill="#065f46" filter="drop-shadow(0 0 3px #065f46)"/>
            </svg>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200">
              <div className="text-xs text-emerald-700 font-bold mb-1">Safe Route</div>
              <div className="text-sm font-semibold text-gray-900">MG Road</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
              <div className="text-xs text-blue-700 font-bold mb-1">Guardian</div>
              <div className="text-sm font-semibold text-gray-900">Available</div>
            </div>
          </div>

          <Link
            to="/plan-journey"
            className="w-full flex items-center justify-between bg-slate-800 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-slate-900 transition-all duration-300 active:scale-95"
          >
            <span>Plan Your Journey</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Alert Card */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 shadow-sm animate-slideUp transition-all duration-300 hover:shadow-md">
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-xl flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-sm font-bold text-amber-900 mb-1.5">SOS Deadzone Alert</div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Get warned about areas with weak cell coverage before you start your journey.
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
