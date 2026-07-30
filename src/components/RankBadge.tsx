import { Trophy, Skull } from 'lucide-react';
import type { RankPosition } from '../types/employee';

interface RankBadgeProps {
  position: RankPosition;
}

export const RankBadge = ({ position }: RankBadgeProps) => {
  if (position === 'winner') {
    return (
      <span className="inline-flex items-center gap-1 font-pixel text-[8px] text-gold bg-gold/10 border border-gold/30 px-2 py-1">
        <Trophy size={10} />
        กินฟรี
      </span>
    );
  }

  if (position === 'loser') {
    return (
      <span className="inline-flex items-center gap-1 font-pixel text-[8px] text-crimson bg-crimson/10 border border-crimson/30 px-2 py-1">
        <Skull size={10} />
        เจ้ามือ
      </span>
    );
  }

  return null;
};
