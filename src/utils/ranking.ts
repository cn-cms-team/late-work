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

export const getLoserCount = (employees: Employee[], total: number): number => {
  if (total <= LOSER_COUNT) {
    return employees[0]?.lateMinutes;
  }
  const loserIndex = total - LOSER_COUNT;
  return employees[loserIndex].lateMinutes;
};

export const getRankPosition = (
  index: number,
  total: number,
  employees: Employee[]
): RankPosition => {
  const winnerCount = getWinnerCount(employees);
  const loserCount = getLoserCount(employees, total);
  if (index < winnerCount) return 'winner';
  if (employees[index].lateMinutes >= loserCount) return 'loser';
  return 'normal';
};

/** Calculate HP bar percentage (0% = no late = full HP, 100% = max late = zero HP) */
export const getHpPercent = (lateMinutes: number, maxLate: number): number => {
  if (maxLate === 0) return 0;
  return Math.min((lateMinutes / maxLate) * 100, 100);
};

/** Get HP bar color based on damage taken */
export const getHpColor = (percent: number): string => {
  if (percent <= 25) return 'bg-emerald-400';
  if (percent <= 50) return 'bg-yellow-400';
  if (percent <= 75) return 'bg-orange-400';
  return 'bg-red-500';
};

/** Get the max late minutes among employees for HP bar scaling */
export const getMaxLate = (employees: Employee[]): number => {
  return Math.max(...employees.map((e) => e.lateMinutes), 1);
};

export const getRankStyle = (position: RankPosition): string => {
  const styles: Record<RankPosition, string> = {
    winner: 'bg-deep-void/80 border border-arcane/30',
    loser: 'bg-deep-void/80 border border-crimson/30',
    normal: 'bg-deep-void/60 border border-white/5',
  };
  return styles[position];
};

export const getRankBadgeStyle = (position: RankPosition): string => {
  const styles: Record<RankPosition, string> = {
    winner: 'bg-gold/20 text-gold border border-gold/30',
    loser: 'bg-crimson/20 text-crimson border border-crimson/30',
    normal: 'bg-white/5 text-white/40 border border-white/10',
  };
  return styles[position];
};
