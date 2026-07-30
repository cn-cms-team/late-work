import { memo } from 'react';
import { Crown } from 'lucide-react';
import type { Employee, RankPosition } from '../types/employee';
import {
  getRankPosition,
  getRankStyle,
  getRankBadgeStyle,
  getHpPercent,
  getHpColor,
  getMaxLate,
} from '../utils/ranking';
import { RankBadge } from './RankBadge';

interface EmployeeCardProps {
  employee: Employee;
  index: number;
  total: number;
  employees: Employee[];
}

export const EmployeeCard = memo(({ employee, index, total, employees }: EmployeeCardProps) => {
  const position: RankPosition = getRankPosition(index, total, employees);
  const cardStyle = getRankStyle(position);
  const badgeStyle = getRankBadgeStyle(position);
  const maxLate = getMaxLate(employees);
  const hpPercent = getHpPercent(employee.lateMinutes, maxLate);
  const hpColor = getHpColor(hpPercent);
  const isWinner = position === 'winner';
  const isLoser = position === 'loser';

  return (
    <div
      className={`p-3 rounded transition-all duration-300 hover:brightness-125 ${cardStyle} ${isWinner ? 'glow-gold' : ''}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {/* Rank number */}
          <div
            className={`shrink-0 w-8 h-8 flex items-center justify-center font-pixel text-[10px] ${badgeStyle}`}
          >
            {index === 0 ? <Crown size={14} className="text-gold" /> : index + 1}
          </div>

          {/* Name & class */}
          <div>
            <h3
              className={`font-sans text-sm font-bold leading-tight ${isWinner ? 'text-gold' : isLoser ? 'text-crimson' : 'text-white/80'}`}
            >
              {employee.name}
            </h3>
            <p className="font-mono text-[9px] text-white/30 tracking-wider">
              LV.{index + 1} {employee.department}
            </p>
          </div>
        </div>

        {/* Damage number */}
        <div className="text-right">
          <div className="flex items-baseline gap-1">
            <span className={`font-pixel text-sm ${isLoser ? 'text-crimson' : 'text-white/70'}`}>
              {employee.lateMinutes}
            </span>
            <span className="font-mono text-[8px] text-white/30">DMG</span>
          </div>
          <div className="mt-1">
            <RankBadge position={position} />
          </div>
        </div>
      </div>

      {/* HP Bar */}
      <div className="h-2 bg-white/5 rounded-sm overflow-hidden">
        <div
          className={`h-full ${hpColor} rounded-sm transition-all duration-700 ease-out hp-bar-fill`}
          style={{ width: `${hpPercent}%` }}
        />
      </div>
      <div className="flex justify-between mt-0.5">
        <span className="font-mono text-[7px] text-white/20">HP</span>
        <span className="font-mono text-[7px] text-white/20">
          {employee.lateMinutes === 0 ? 'FULL' : `${Math.round(100 - hpPercent)}%`}
        </span>
      </div>
    </div>
  );
});

EmployeeCard.displayName = 'EmployeeCard';
