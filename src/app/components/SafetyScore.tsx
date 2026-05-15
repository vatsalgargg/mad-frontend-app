import { Header } from "./Header";
import { AlertTriangle, AlertCircle, TrendingUp, Zap, Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function SafetyScore() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header currentPage="Safety Score" />

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Safety Score Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center animate-scaleIn">
          <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-3">Route Safety Score</div>

          <div className="relative inline-block mb-6">
            <svg className="w-32 h-32" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#10b981"
                strokeWidth="8"
                strokeDasharray="339.292"
                strokeDashoffset="67.858"
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl font-bold text-emerald-600">78</div>
            </div>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-6 font-medium">
            Moderately safe for night commute on MG Road Corridor
          </p>

          <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div>
              <div className="text-xs text-gray-500 font-bold mb-1">Updated</div>
              <div className="text-sm font-semibold text-gray-900">2m ago</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-bold mb-1">Area</div>
              <div className="text-sm font-semibold text-gray-900">MG Road</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-bold mb-1">Time</div>
              <div className="text-sm font-semibold text-gray-900">Night</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 animate-slideUp">
          <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-3">Coverage Status</div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Route Indexed</span>
            <span className="text-sm font-bold text-emerald-600">100%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: "100%" }}></div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 animate-slideUp">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-all duration-300 active:scale-95">
            <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-xl mb-3 mx-auto">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-xs text-gray-500 font-bold mb-1 text-center">Potholes</div>
            <div className="text-2xl font-bold text-gray-900 text-center mb-2">9.4</div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: "30%" }}></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-all duration-300 active:scale-95">
            <div className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-xl mb-3 mx-auto">
              <Zap className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-xs text-gray-500 font-bold mb-1 text-center">Lights</div>
            <div className="text-2xl font-bold text-gray-900 text-center mb-2">7.6</div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: "35%" }}></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transition-all duration-300 active:scale-95">
            <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-xl mb-3 mx-auto">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
            <div className="text-xs text-gray-500 font-bold mb-1 text-center">Theft</div>
            <div className="text-2xl font-bold text-gray-900 text-center mb-2">3</div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: "33%" }}></div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-3 animate-slideUp">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 shadow-sm">
            <div className="flex gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-xl flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-900 mb-1">Route Forecast</div>
                <div className="text-xs text-gray-700 leading-relaxed">
                  Church Street predicts slow traffic. Expect delays in this corridor.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 shadow-sm">
            <div className="flex gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-blue-900 mb-1">Recommendation</div>
                <div className="text-xs text-gray-700 leading-relaxed">
                  Choose the route with stronger lighting for better safety.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 animate-slideUp">
          <div className="text-sm font-bold text-gray-900 mb-4">Route Visualization</div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 h-48 flex items-center justify-center shadow-lg mb-5">
            <svg className="w-full h-full" viewBox="0 0 300 180">
              <defs>
                <linearGradient id="mapRoute" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
              </defs>
              <path
                d="M 40,150 Q 80,120 120,100 Q 160,80 200,65 Q 240,50 280,40"
                fill="none"
                stroke="url(#mapRoute)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))"
              />
              <circle cx="40" cy="150" r="6" fill="#10b981" filter="drop-shadow(0 0 4px #10b981)"/>
              <circle cx="120" cy="100" r="6" fill="#059669" filter="drop-shadow(0 0 4px #059669)"/>
              <circle cx="200" cy="65" r="6" fill="#047857" filter="drop-shadow(0 0 4px #047857)"/>
              <circle cx="280" cy="40" r="6" fill="#065f46" filter="drop-shadow(0 0 4px #065f46)"/>

              <g transform="translate(120, 90)">
                <path d="M 0,-8 L 5,0 L 0,7 L -5,0 Z" fill="#059669" />
              </g>
              <g transform="translate(200, 55)">
                <path d="M 0,-8 L 5,0 L 0,7 L -5,0 Z" fill="#047857" />
              </g>
            </svg>
          </div>

          <div className="flex gap-3">
            <Link
              to="/guardian-mode"
              className="flex-1 px-5 py-3.5 bg-slate-800 text-white rounded-xl font-bold text-center shadow-lg hover:bg-slate-900 transition-all duration-300 active:scale-95"
            >
              View Route
            </Link>
            <button className="flex-1 px-5 py-3.5 border-2 border-gray-300 bg-white rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all duration-300 active:scale-95">
              Share
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 animate-slideUp">
          <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-4">Last 7 Days</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 font-medium">Potholes Reported</span>
              <span className="text-sm font-bold text-blue-600">+5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 font-medium">Lights Active</span>
              <span className="text-sm font-bold text-gray-900">73%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 font-medium">Theft Incidents</span>
              <span className="text-sm font-bold text-gray-900">3</span>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .active\\:scale-95:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}
