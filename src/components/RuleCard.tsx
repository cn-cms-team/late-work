import { memo } from 'react';
import { ArrowDown } from 'lucide-react';

export const RuleCard = memo(() => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 mb-8 border border-white/20 shadow-xl text-white">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-center flex-1 p-3 bg-rose-500/70 rounded-xl border border-rose-500/30">
          <span className="text-rose-200 text-xs font-light uppercase mb-1">Losers Pay</span>
          <div className="flex items-center gap-1 font-bold text-rose-100">
            <span>2 คนล่าง</span>
            <ArrowDown size={14} />
          </div>
        </div>

        <div className="text-white/40">
          <ArrowDown size={24} className="-rotate-90" />
        </div>

        <div className="flex flex-col items-center flex-1 p-3 bg-emerald-500/70 rounded-xl border border-emerald-500/30">
          <span className="text-emerald-200 text-xs font-light uppercase mb-1">Winners Eat</span>
          <div className="flex items-center gap-1 font-bold text-emerald-100">
            <ArrowDown size={14} className="rotate-180" />
            <span>2 คนบน</span>
          </div>
        </div>
      </div>
    </div>
  );
});

RuleCard.displayName = 'RuleCard';
