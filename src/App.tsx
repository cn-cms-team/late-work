import { useEmployeeRanking } from './hooks/useEmployeeRanking';
import { MonthSelector } from './components/MonthSelector';
import { RuleCard } from './components/RuleCard';
import { EmployeeList } from './components/EmployeeList';
import { getLastUpdated } from './data/employees';
import { Swords } from 'lucide-react';

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 15}s`,
  duration: `${12 + Math.random() * 18}s`,
  size: `${2 + Math.random() * 3}px`,
}));

const App = () => {
  const {
    employees,
    loading,
    currentMonth,
    canGoPrev,
    canGoNext,
    goToPrevMonth,
    goToNextMonth,
    cumulativeTeamLateMinutes,
  } = useEmployeeRanking();

  return (
    <div className="min-h-screen bg-deep-void text-white font-sans relative overflow-x-hidden scanlines">
      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `float-up ${p.duration} ${p.delay} infinite linear`,
          }}
        />
      ))}

      <div className="max-w-lg mx-auto px-4 pb-24 relative z-10">
        {/* Header */}
        <header className="pt-6 pb-4 text-center">
          {/* Quest title with pixel accent */}
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-6 h-0.5 bg-arcane" />
            <Swords size={18} className="text-arcane-light" />
            <div className="w-6 h-0.5 bg-arcane" />
          </div>
          <h1 className="font-pixel text-xs md:text-sm text-gold tracking-wider mb-1">
            LATE QUEST
          </h1>
          <p className="font-pixel text-[8px] md:text-[10px] text-white/30 tracking-widest">
            ปี 2026
          </p>

          <MonthSelector
            currentMonth={currentMonth}
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
            onPrev={goToPrevMonth}
            onNext={goToNextMonth}
          />
        </header>

        {/* Party Total DMG panel */}
        <div className="mb-5 bg-deep-void/90 border border-arcane/30 rounded-lg p-4 pixel-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/50 font-pixel tracking-wider">PARTY TOTAL</span>
            <span className="text-[10px] text-white/30 font-pixel">DAMAGE</span>
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-pixel text-3xl text-arcane-light drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]">
              {loading ? '--' : cumulativeTeamLateMinutes}
            </span>
            <span className="font-mono text-xs text-white/40">นาที</span>
          </div>
          {/* Mini decorative bar */}
          <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-arcane to-arcane-light rounded-full transition-all duration-500"
              style={{ width: `${Math.min((cumulativeTeamLateMinutes / 500) * 100, 100)}%` }}
            />
          </div>
        </div>

        <RuleCard />

        <EmployeeList employees={employees} loading={loading} />

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 w-full p-3 bg-deep-void/95 border-t border-arcane/20 text-center z-20">
          <p className="font-mono text-[10px] text-white/20 tracking-wider">
            LAST SAVE: {getLastUpdated()}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
