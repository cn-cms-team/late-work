import { memo } from 'react';
import { ArrowDown, Users } from 'lucide-react';

export const RuleCard = memo(() => {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-5 mb-8 border border-white/20 shadow-xl text-white">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-center flex-1 p-3 bg-rose-600/80 rounded-xl border border-rose-400/40 shadow-md">
          <span className="text-white/90 text-xs font-semibold uppercase tracking-wide mb-1 drop-shadow">Losers Pay</span>
          <div className="flex items-center gap-1 font-extrabold text-white drop-shadow-md">
            <span>2 คนล่าง</span>
            <ArrowDown size={14} />
          </div>
        </div>

        <div className="text-white/70">
          <ArrowDown size={24} className="-rotate-90" />
        </div>

        <div className="flex flex-col items-center flex-1 p-3 bg-emerald-600/80 rounded-xl border border-emerald-400/40 shadow-md">
          <span className="text-white/90 text-xs font-semibold uppercase tracking-wide mb-1 drop-shadow">Winners Eat</span>
          <div className="flex items-center gap-1 font-extrabold text-white drop-shadow-md">
            <ArrowDown size={14} className="rotate-180" />
            <span>2 คนบน</span>
          </div>
        </div>
      </div>

      {/* Zero-minute bonus rule */}
      <div className="mt-3 flex items-center gap-2 p-3 bg-amber-500/30 rounded-xl border border-amber-400/40 shadow-md">
        <Users size={16} className="text-amber-300 shrink-0 drop-shadow" />
        <p className="text-xs text-white font-semibold drop-shadow">
          ⭐ ถ้าคนสาย 0 นาที มากกว่า 2 คน → ทุกคนที่ 0 นาที ได้กินฟรี!
        </p>
        
      </div>

      <div className="mt-2 flex items-center gap-2 p-3 bg-rose-500/30 rounded-xl border border-rose-400/40 shadow-md">
        <Users size={16} className="text-rose-300 shrink-0 drop-shadow" />
        <p className="text-xs text-white font-semibold drop-shadow">
          💀 ถ้าเวลาสายเท่ากันคนแพ้ → แพ้ร่วมกัน
        </p>
      </div>
    </div>
  );
});

RuleCard.displayName = 'RuleCard';

