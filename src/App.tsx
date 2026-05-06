import { useEmployeeRanking } from './hooks/useEmployeeRanking';
import { MonthSelector } from './components/MonthSelector';
import { RuleCard } from './components/RuleCard';
import { EmployeeList } from './components/EmployeeList';
import teamPhoto from './assets/team-photo.jpg';
import { getLastUpdated } from './data/employees';

const App = () => {
  const { employees, loading, currentMonth, canGoPrev, canGoNext, goToPrevMonth, goToNextMonth, cumulativeTeamLateMinutes } =
    useEmployeeRanking();

  return (
    <div className="min-h-screen text-slate-800 p-4 md:p-8 font-sans relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${teamPhoto})` }}
      />
      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 backdrop-blur-xs bg-linear-to-r from-indigo-500/70 from-10% via-sky-500/70 via-30% to-pink-300/70 to-90%" />

      <div className="max-w-md mx-auto relative">
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse" />

        {/* Header */}
        <header className="mb-8 text-center pt-4">
          <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-sm tracking-wide">
            Late Ranking 2026
          </h1>

          <MonthSelector
            currentMonth={currentMonth}
            canGoPrev={canGoPrev}
            canGoNext={canGoNext}
            onPrev={goToPrevMonth}
            onNext={goToNextMonth}
          />
        </header>

        <RuleCard />

        <div className="mb-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/30 text-center">
          <h2 className="text-white/90 font-medium mb-1">เวลาการมาสายรวมกันของทีม (สะสม)</h2>
          <p className="text-4xl font-bold text-white drop-shadow-md">
            {loading ? '...' : `${cumulativeTeamLateMinutes} นาที`}
          </p>
        </div>

        <EmployeeList employees={employees} loading={loading} />

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 w-full p-4 bg-linear-to-t from-indigo-550 to-transparent text-center text-xs text-indigo-500/90 backdrop-blur-sm">
          <p>Updated: {getLastUpdated()}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
