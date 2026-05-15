import { Header } from "./Header";
import { MapPin, AlertTriangle, Radio, Phone, MessageSquare, Navigation, Clock } from "lucide-react";

export function GuardianMode() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header currentPage="Guardian Mode" />

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Trip Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 animate-slideDown">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-gray-500 font-bold mb-1">Tracked Trip</div>
              <h2 className="text-xl font-bold text-gray-900">Aarav to Hospital</h2>
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 px-3 py-2 rounded-xl">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
              <span className="text-xs font-bold text-emerald-700">LIVE</span>
            </div>
          </div>

          {/* Live Map */}
          <div className="bg-gray-100 rounded-xl h-80 mb-6 relative overflow-hidden shadow-inner border border-gray-200">
            <svg className="w-full h-full" viewBox="0 0 320 280">
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="320" height="280" fill="url(#gridPattern)"/>

              {/* Route - upcoming (dashed) */}
              <path
                d="M 50,230 Q 80,200 110,180 Q 140,160 170,145 Q 200,130 230,120 Q 260,110 290,100"
                fill="none"
                stroke="#93c5fd"
                strokeWidth="3"
                strokeDasharray="6,6"
                opacity="0.6"
              />

              {/* Route - completed (solid) */}
              <path
                d="M 50,230 Q 80,200 110,180 Q 140,160 170,145"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeLinecap="round"
                filter="drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))"
              />

              {/* Start marker */}
              <circle cx="50" cy="230" r="8" fill="#3b82f6" stroke="white" strokeWidth="2.5" />
              <text x="50" y="252" fontSize="10" textAnchor="middle" fontWeight="600" fill="#374151">Start</text>

              {/* Current position - animated */}
              <circle cx="170" cy="145" r="10" fill="#10b981" stroke="white" strokeWidth="3">
                <animate attributeName="r" values="10;13;10" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="170" cy="145" r="20" fill="#10b981" opacity="0.2">
                <animate attributeName="r" values="20;26;20" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Accident warning */}
              <g transform="translate(230, 120)">
                <circle r="22" fill="#ef4444" opacity="0.15" />
                <circle r="12" fill="#ef4444" />
                <text x="0" y="5" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">!</text>
              </g>
              <rect x="130" y="90" width="100" height="45" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="drop-shadow(0 1px 4px rgba(0,0,0,0.1))"/>
              <text x="137" y="105" fontSize="9" fontWeight="600" fill="#374151">Accident Alert</text>
              <text x="137" y="117" fontSize="8" fill="#6b7280">Minor crash</text>
              <text x="137" y="127" fontSize="8" fill="#6b7280">120m ahead</text>

              {/* SOS warning */}
              <g transform="translate(200, 130)">
                <circle r="22" fill="#f59e0b" opacity="0.15" />
                <circle r="12" fill="#f59e0b" />
                <path d="M -3,-3 L 3,3 M 3,-3 L -3,3" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </g>
              <rect x="80" y="165" width="100" height="45" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="drop-shadow(0 1px 4px rgba(0,0,0,0.1))"/>
              <text x="87" y="180" fontSize="9" fontWeight="600" fill="#374151">SOS Warning</text>
              <text x="87" y="192" fontSize="8" fill="#6b7280">Signal may drop</text>
              <text x="87" y="202" fontSize="8" fill="#6b7280">in 30 miles</text>

              {/* Destination */}
              <circle cx="290" cy="100" r="8" fill="#ef4444" stroke="white" strokeWidth="2.5" />
              <text x="290" y="88" fontSize="10" textAnchor="middle" fontWeight="600" fill="#374151">End</text>
            </svg>
          </div>

          {/* Trip Stats */}
          <div className="grid grid-cols-4 gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="text-center">
              <div className="text-xs text-gray-500 font-bold mb-1">Start</div>
              <div className="text-sm font-bold text-gray-900">8:03</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 font-bold mb-1">Taken</div>
              <div className="text-sm font-bold text-gray-900">27m</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-blue-600 font-bold mb-1">Left</div>
              <div className="text-sm font-bold text-blue-600">12m</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 font-bold mb-1">ETA</div>
              <div className="text-sm font-bold text-gray-900">8:42</div>
            </div>
          </div>
        </div>

        {/* Trip Status */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 animate-slideUp">
          <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-3">Trip Status</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Journey is Stable</h3>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-200">
              <span className="text-sm text-gray-700 font-medium">Current Speed</span>
              <span className="text-base font-bold text-gray-900">22 km/h</span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-200">
              <span className="text-sm text-gray-700 font-medium">Distance Left</span>
              <span className="text-base font-bold text-gray-900">2.8 km</span>
            </div>
            <div className="flex items-center justify-between bg-blue-50 rounded-xl p-3 border border-blue-200">
              <span className="text-sm text-gray-700 font-medium">Route Status</span>
              <span className="text-base font-bold text-blue-600">On Track</span>
            </div>
            <div className="flex items-center justify-between bg-amber-50 rounded-xl p-3 border border-amber-200">
              <span className="text-sm text-gray-700 font-medium">Coverage</span>
              <span className="text-base font-bold text-amber-600">⚠️ Zone Ahead</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="px-5 py-3.5 bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-slate-900 transition-all duration-300 active:scale-95">
              <Phone className="w-4 h-4" />
              Call
            </button>
            <button className="px-5 py-3.5 border-2 border-gray-300 bg-white rounded-xl font-bold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-300 active:scale-95">
              <MessageSquare className="w-4 h-4" />
              Message
            </button>
          </div>
        </div>

        {/* Live Alerts */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 animate-slideUp">
          <div className="flex items-center justify-between mb-5">
            <div className="text-sm font-bold text-gray-900">Live Alerts</div>
            <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-xs font-bold">2 Active</div>
          </div>

          <div className="space-y-3">
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-xl flex-shrink-0">
                  <Navigation className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-red-900 mb-1">Accident Ahead</div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    Crash near Richmond Circle. ETA updated to 8:42 PM.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-900 mb-1">Alternate Route</div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    Adds 3 min but avoids blocked section.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-xl flex-shrink-0">
                  <Radio className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <div className="text-sm font-bold text-amber-900 mb-1">Coverage Loss</div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    30-mile no-service zone. Alerts may be delayed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 animate-slideUp">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center transition-all duration-300 active:scale-95">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-3 mx-auto">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-xs font-bold text-gray-900 mb-1">Accident</div>
            <div className="text-xs text-gray-600">Real-time alerts</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center transition-all duration-300 active:scale-95">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3 mx-auto">
              <Radio className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-xs font-bold text-gray-900 mb-1">Guardian</div>
            <div className="text-xs text-gray-600">Live tracking</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center transition-all duration-300 active:scale-95">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-3 mx-auto">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-xs font-bold text-gray-900 mb-1">Time</div>
            <div className="text-xs text-gray-600">Accurate ETA</div>
          </div>
        </div>

        {/* Guardian Actions */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 animate-slideUp">
          <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-4">Quick Actions</div>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl p-4 border border-gray-200 transition-all duration-300 active:scale-98">
              <span className="text-sm font-bold text-gray-900">View Trip History</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full flex items-center justify-between bg-red-50 hover:bg-red-100 rounded-xl p-4 border-2 border-red-300 transition-all duration-300 active:scale-98">
              <span className="text-sm font-bold text-red-900">Emergency Contact</span>
              <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .active\\:scale-95:active {
          transform: scale(0.95);
        }

        .active\\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}
