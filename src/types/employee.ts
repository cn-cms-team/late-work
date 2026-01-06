export interface Employee {
  id: number;
  name: string;
  lateMinutes: number;
  department: string;
  month: number;
}

export type RankPosition = 'winner' | 'loser' | 'normal';
