import { Utensils, AlertCircle } from 'lucide-react';
import type { RankPosition } from '../types/employee';

interface RankBadgeProps {
  position: RankPosition;
}

export const RankBadge = ({ position }: RankBadgeProps) => {
  if (position === 'winner') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-linear-to-r from-emerald-500 to-teal-500 px-3 py-1.5 rounded-full shadow-sm">
        <Utensils size={14} /> กินฟรี
      </span>
    );
  }

  if (position === 'loser') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-linear-to-r from-rose-500 to-red-600 px-3 py-1.5 rounded-full shadow-sm">
        <AlertCircle size={14} /> เจ้ามือ
      </span>
    );
  }

  return null;
};
