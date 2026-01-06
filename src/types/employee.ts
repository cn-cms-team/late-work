export interface Employee {
  id: number;
  name: string;
  lateMinutes: number;
  department: string;
  month: string;
}

export type RankPosition = 'winner' | 'loser' | 'normal';
