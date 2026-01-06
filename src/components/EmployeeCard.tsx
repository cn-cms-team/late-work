import { Trophy } from 'lucide-react';
import type { Employee, RankPosition } from '../types/employee';
import { getRankPosition, getRankStyle, getRankBadgeStyle } from '../utils/ranking';
import { RankBadge } from './RankBadge';

interface EmployeeCardProps {
  employee: Employee;
  index: number;
  total: number;
}

export const EmployeeCard = ({ employee, index, total }: EmployeeCardProps) => {
  const position: RankPosition = getRankPosition(index, total);
  const cardStyle = getRankStyle(position);
  const badgeStyle = getRankBadgeStyle(position);

  return (
    <div
      className={`p-4 rounded-2xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] ${cardStyle}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm shadow-sm ${badgeStyle}`}
        >
          {index === 0 ? <Trophy size={18} className="text-yellow-600" /> : index + 1}
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-lg leading-tight">{employee.name}</h3>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-0.5">
            {employee.department}
          </p>
        </div>
      </div>

      <div className="text-right">
        <div className="text-2xl font-bold text-slate-700 tabular-nums tracking-tight">
          {employee.lateMinutes}
          <span className="text-xs font-medium text-slate-400 ml-1 align-top relative top-1">
            min
          </span>
        </div>
        <div className="mt-2 flex justify-end">
          <RankBadge position={position} />
        </div>
      </div>
    </div>
  );
};
