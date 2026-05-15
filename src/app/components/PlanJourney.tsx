import { Header } from "./Header";
import { MapPin, Shield, CheckCircle2, Zap, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function PlanJourney() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header currentPage="Plan Journey" />

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Location Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 animate-slideDown">
          <div className="space-y-4 mb-5">
            <div>
              <label className="text-xs font-bold text-gray-600 mb-2 block uppercase tracking-wide">From</label>
              <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-3.5 bg-white hover:border-slate-300 transition-all duration-300">
                <MapPin className="w-5 h-5 text-slate-600" />
                <span className="text-base font-medium text-gray-900">Current Location</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600 mb-2 block uppercase tracking-wide">To</label>
              <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-3.5 bg-white hover:border-slate-300 transition-all duration-300">
                <MapPin className="w-5 h-5 text-slate-600" />
                <span className="text-base font-medium text-gray-900">The Good Centre, Aline Rd</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>SOS Detection ON</span>
            </div>
            <button className="px-4 py-2 border-2 border-gray-200 bg-white rounded-xl text-xs font-bold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 active:scale-95">
              Filters
            </button>
          </div>

          <button className="w-full px-5 py-4 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-900 transition-all duration-300 active:scale-95">
            Find Best Routes
          </button>
        </div>

        {/* Route Options */}
        <div className="space-y-4">
          {/* Well-lit Streets - Recommended */}
          <div className="bg-white rounded-2xl shadow-lg border-4 border-emerald-500 overflow-hidden animate-slideUp transition-all duration-300 active:scale-98">
            <div className="bg-emerald-600 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="text-sm font-bold text-white">RECOMMENDED</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-bold">
                #1 SAFEST
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl shadow-md">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Well-lit Streets</h3>
                  <p className="text-xs text-gray-600">Maximum safety priority</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                <div>
                  <div className="text-xs text-emerald-700 font-bold mb-1">Duration</div>
                  <div className="text-3xl font-bold text-gray-900">18<span className="text-lg"> min</span></div>
                </div>
                <div>
                  <div className="text-xs text-emerald-700 font-bold mb-1">Coverage</div>
                  <div className="text-3xl font-bold text-emerald-600">Full</div>
                </div>
              </div>

              <div className="mb-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="text-xs text-gray-500 font-bold mb-2 uppercase tracking-wide">Status</div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  ✓ No signal dead zones<br />
                  ✓ High street lighting<br />
                  ✓ Emergency access ready
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 h-24 flex items-center justify-center shadow-lg mb-4">
                <svg className="w-full h-full" viewBox="0 0 200 80">
                  <defs>
                    <linearGradient id="greenPath" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20,60 Q 50,45 80,40 Q 110,35 140,32 Q 160,30 180,28"
                    fill="none"
                    stroke="url(#greenPath)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="drop-shadow(0 0 6px rgba(16, 185, 129, 0.6))"
                  />
                  <circle cx="20" cy="60" r="5" fill="#10b981" filter="drop-shadow(0 0 3px #10b981)"/>
                  <circle cx="80" cy="40" r="5" fill="#059669" filter="drop-shadow(0 0 3px #059669)"/>
                  <circle cx="140" cy="32" r="5" fill="#047857" filter="drop-shadow(0 0 3px #047857)"/>
                  <circle cx="180" cy="28" r="5" fill="#065f46" filter="drop-shadow(0 0 3px #065f46)"/>
                </svg>
              </div>

              <button className="w-full px-5 py-3.5 bg-emerald-600 text-white rounded-xl font-bold shadow-md hover:bg-emerald-700 transition-all duration-300 active:scale-95">
                Choose This Route
              </button>
            </div>
          </div>

          {/* Standard Path */}
          <div className="bg-white rounded-2xl shadow-md border-2 border-gray-200 overflow-hidden animate-slideUp transition-all duration-300 active:scale-98">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl shadow-md">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Standard Path</h3>
                  <p className="text-xs text-gray-600">Balanced route</p>
                </div>
                <div className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-lg text-xs font-bold">
                  #2
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div>
                  <div className="text-xs text-blue-700 font-bold mb-1">Duration</div>
                  <div className="text-3xl font-bold text-gray-900">15<span className="text-lg"> min</span></div>
                </div>
                <div>
                  <div className="text-xs text-blue-700 font-bold mb-1">Coverage</div>
                  <div className="text-3xl font-bold text-blue-600">Partial</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 h-20 flex items-center justify-center shadow-lg mb-4">
                <svg className="w-full h-full" viewBox="0 0 200 60">
                  <path
                    d="M 20,40 Q 60,25 100,40 Q 140,55 180,40"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="5"
                    strokeLinecap="round"
                    filter="drop-shadow(0 0 6px rgba(245, 158, 11, 0.5))"
                  />
                  <circle cx="100" cy="40" r="6" fill="#fbbf24" filter="drop-shadow(0 0 3px #fbbf24)"/>
                </svg>
              </div>

              <button className="w-full px-5 py-3 border-2 border-blue-300 text-blue-700 bg-blue-50 rounded-xl font-bold hover:bg-blue-100 transition-all duration-300 active:scale-95">
                Select Route
              </button>
            </div>
          </div>

          {/* Direct Route */}
          <div className="bg-white rounded-2xl shadow-md border-2 border-gray-200 overflow-hidden animate-slideUp transition-all duration-300 active:scale-98">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl shadow-md">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Direct Route</h3>
                  <p className="text-xs text-gray-600">Fastest option</p>
                </div>
                <div className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-lg text-xs font-bold">
                  #3
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 bg-orange-50 rounded-xl p-4 border border-orange-200">
                <div>
                  <div className="text-xs text-orange-700 font-bold mb-1">Duration</div>
                  <div className="text-3xl font-bold text-gray-900">14<span className="text-lg"> min</span></div>
                </div>
                <div>
                  <div className="text-xs text-orange-700 font-bold mb-1">Coverage</div>
                  <div className="text-3xl font-bold text-red-600">⚠️</div>
                </div>
              </div>

              <div className="mb-4 bg-red-50 rounded-xl p-3 border-2 border-red-200">
                <div className="text-xs text-red-700 font-bold mb-1">⚠️ WARNING</div>
                <div className="text-xs text-gray-700 leading-relaxed">
                  30-mile no-service zone ahead
                </div>
              </div>

              <button className="w-full px-5 py-3 border-2 border-gray-300 text-gray-700 bg-gray-50 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 active:scale-95">
                Select Route
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Recommendation */}
        <div className="bg-emerald-50 rounded-2xl shadow-md border-2 border-emerald-300 p-5 animate-slideUp">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 rounded-xl flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-900 mb-1">
                Well-lit Streets Recommended
              </div>
              <div className="text-xs text-gray-700 leading-relaxed">
                Adds 4 minutes but avoids hazards with full coverage.
              </div>
            </div>
          </div>

          <Link
            to="/safety-score"
            className="w-full flex items-center justify-between bg-slate-800 text-white px-5 py-3.5 rounded-xl font-bold shadow-lg hover:bg-slate-900 transition-all duration-300 active:scale-95"
          >
            <span>Start Navigation</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
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

        .active\\:scale-98:active {
          transform: scale(0.98);
        }

        .active\\:scale-95:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}
