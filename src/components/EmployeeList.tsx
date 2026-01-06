import { Clock } from 'lucide-react';
import type { Employee } from '../types/employee';
import { EmployeeCard } from './EmployeeCard';

interface EmployeeListProps {
  employees: Employee[];
  loading: boolean;
}

export const EmployeeList = ({ employees, loading }: EmployeeListProps) => {
  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="animate-spin text-white/50">
          <Clock size={40} />
        </div>
      </div>
    );
  }

  if (employees.length === 0) {
    return <div className="text-center py-10 text-white/50">ไม่มีข้อมูลสำหรับเดือนนี้</div>;
  }

  return (
    <div className="space-y-3 pb-20">
      {employees.map((employee, index) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          index={index}
          total={employees.length}
        />
      ))}
    </div>
  );
};
