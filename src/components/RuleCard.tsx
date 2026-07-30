import { memo } from 'react';
import { Swords, Shield, Users } from 'lucide-react';

export const RuleCard = memo(() => {
  return (
    <div className="mb-5 bg-deep-void/90 border border-white/10 rounded-lg p-4">
      {/* Section title */}
      <div className="flex items-center gap-2 mb-3">
        <Swords size={14} className="text-arcane-light" />
        <span className="font-pixel text-[8px] text-white/40 tracking-wider">QUEST RULES</span>
      </div>

      {/* Main rule: Losers vs Winners */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="border border-crimson/30 bg-crimson/5 p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Shield size={12} className="text-crimson" />
            <span className="font-pixel text-[8px] text-crimson tracking-wider">LOSERS</span>
          </div>
          <p className="font-sans text-xs text-white/70">
            2 คนล่าง <span className="text-crimson font-bold">เจ้ามือ</span>
          </p>
        </div>

        <div className="border border-gold/30 bg-gold/5 p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Shield size={12} className="text-gold" />
            <span className="font-pixel text-[8px] text-gold tracking-wider">WINNERS</span>
          </div>
          <p className="font-sans text-xs text-white/70">
            2 คนบน <span className="text-gold font-bold">กินฟรี</span>
          </p>
        </div>
      </div>

      {/* Bonus rules */}
      <div className="space-y-1.5">
        <div className="flex items-start gap-2 p-2 border border-arcane/20 bg-arcane/5">
          <Users size={12} className="text-arcane-light mt-0.5 shrink-0" />
          <p className="font-sans text-[11px] text-white/60 leading-relaxed">
            ⭐ ถ้าคนสาย 0 นาที มากกว่า 2 คน → ทุกคนที่ 0 นาที ได้กินฟรี!
          </p>
        </div>
        <div className="flex items-start gap-2 p-2 border border-crimson/20 bg-crimson/5">
          <Users size={12} className="text-crimson mt-0.5 shrink-0" />
          <p className="font-sans text-[11px] text-white/60 leading-relaxed">
            💀 ถ้าเวลาสายเท่ากันคนแพ้ → แพ้ร่วมกัน
          </p>
        </div>
      </div>
    </div>
  );
});

RuleCard.displayName = 'RuleCard';
