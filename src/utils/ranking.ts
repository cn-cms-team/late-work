import type { Employee, RankPosition } from '../types/employee';

const DEFAULT_WINNER_COUNT = 2;
const LOSER_COUNT = 2;
const ZERO_MINUTE_THRESHOLD = 2;

export const getWinnerCount = (employees: Employee[]): number => {
  const zeroMinuteCount = employees.filter((e) => e.lateMinutes === 0).length;
  if (zeroMinuteCount > ZERO_MINUTE_THRESHOLD) {
    return zeroMinuteCount;
  }
  return DEFAULT_WINNER_COUNT;
};

export const getRankPosition = (index: number, total: number, employees: Employee[]): RankPosition => {
  const winnerCount = getWinnerCount(employees);
  if (index < winnerCount) return 'winner';
  if (index >= total - LOSER_COUNT) return 'loser';
  return 'normal';
};

export const getRankStyle = (position: RankPosition): string => {
  const styles: Record<RankPosition, string> = {
    winner: 'bg-white/95 backdrop-blur shadow-lg border-l-4 border-yellow-400 translate-x-1',
    loser: 'bg-white/90 backdrop-blur shadow-md border-l-4 border-rose-500',
    normal: 'bg-white/80 backdrop-blur hover:bg-white/95 border-l-4 border-transparent',
  };
  return styles[position];
};

export const getRankBadgeStyle = (position: RankPosition): string => {
  const styles: Record<RankPosition, string> = {
    winner: 'bg-yellow-100 text-yellow-700',
    loser: 'bg-rose-100 text-rose-700',
    normal: 'bg-slate-100 text-slate-500',
  };
  return styles[position];
};
