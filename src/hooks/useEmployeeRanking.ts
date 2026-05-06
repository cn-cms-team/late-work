import { useState, useEffect, useCallback, useMemo } from 'react';
import type { Employee } from '../types/employee';
import { getLatestMonth, MOCK_EMPLOYEES, MONTHS } from '../data/employees';

const LOADING_DELAY = 600;


export const useEmployeeRanking = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [monthIndex, setMonthIndex] = useState(getLatestMonth());

  const currentMonth = monthIndex;
  const canGoPrev = monthIndex > 0;
  const canGoNext = monthIndex < MONTHS.length - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredData = MOCK_EMPLOYEES.filter((item) => item.month === currentMonth);
      const sortedData = [...filteredData].sort((a, b) => a.lateMinutes - b.lateMinutes);
      setEmployees(sortedData);
      setLoading(false);
    }, LOADING_DELAY);

    return () => clearTimeout(timer);
  }, [currentMonth]);

  const goToPrevMonth = useCallback(() => {
    if (canGoPrev) {
      setLoading(true);
      setMonthIndex((prev) => prev - 1);
    }
  }, [canGoPrev]);

  const goToNextMonth = useCallback(() => {
    if (canGoNext) {
      setLoading(true);
      setMonthIndex((prev) => prev + 1);
    }
  }, [canGoNext]);

  const cumulativeTeamLateMinutes = useMemo(() => {
    return MOCK_EMPLOYEES
      .filter((item) => item.month <= currentMonth)
      .reduce((total, item) => total + item.lateMinutes, 0);
  }, [currentMonth]);

  return {
    employees,
    loading,
    currentMonth,
    canGoPrev,
    canGoNext,
    goToPrevMonth,
    goToNextMonth,
    cumulativeTeamLateMinutes,
  };
};
