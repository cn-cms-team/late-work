import { Swords } from 'lucide-react';
import type { Employee } from '../types/employee';
import { EmployeeCard } from './EmployeeCard';

interface EmployeeListProps {
  employees: Employee[];
  loading: boolean;
}

export const EmployeeList = ({ employees, loading }: EmployeeListProps) => {
  if (loading) {
    return (
      <div className="py-16 flex flex-col items-center gap-3">
        <div className="animate-pulse">
          <Swords size={32} className="text-arcane-light" />
        </div>
        <span className="font-pixel text-[8px] text-white/30 tracking-wider animate-pulse">
          LOADING...
        </span>
      </div>
    );
  }

  if (employees.length === 0) {
    return (
      <div className="py-12 text-center border border-white/5 rounded bg-deep-void/60">
        <p className="font-pixel text-[8px] text-white/30 tracking-wider">
          NO DATA FOR THIS DUNGEON
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Leaderboard header */}
      <div className="flex items-center gap-2 mb-3">
        <Swords size={14} className="text-arcane-light" />
        <span className="font-pixel text-[8px] text-white/40 tracking-wider">LEADERBOARD</span>
        <div className="flex-1 h-px bg-linear-to-r from-arcane/30 to-transparent" />
      </div>

      <div className="space-y-2">
        {employees.map((employee, index) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            index={index}
            total={employees.length}
            employees={employees}
          />
        ))}
      </div>
    </div>
  );
};
