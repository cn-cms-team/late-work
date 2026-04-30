import type { Employee } from '../types/employee';

export const MONTHS = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม',
] as const;

export const MOCK_EMPLOYEES: Employee[] = [
  // มกราคม
  { id: 1, name: 'นุ๊กเกอร์', lateMinutes: 0, department: 'Dev', month: 0 },
  { id: 2, name: 'ตุ๋ง', lateMinutes: 104, department: 'Dev', month: 0 },
  { id: 3, name: 'บอส', lateMinutes: 0, department: 'Dev', month: 0 },
  { id: 4, name: 'เอิร์ธ', lateMinutes: 0, department: 'Dev', month: 0 },
  { id: 5, name: 'กู้', lateMinutes: 0, department: 'Dev', month: 0 },
  { id: 6, name: 'โย', lateMinutes: 15, department: 'Dev', month: 0 },
  { id: 7, name: 'เอ็ม', lateMinutes: 21, department: 'Dev', month: 0 },
  { id: 8, name: 'ตี๋', lateMinutes: 1, department: 'Dev', month: 0 },

    // กุมภาพันธ์
  { id: 11, name: 'นุ๊กเกอร์', lateMinutes: 0, department: 'Dev', month: 1 },
  { id: 12, name: 'ตุ๋ง', lateMinutes: 143, department: 'Dev', month: 1 },
  { id: 13, name: 'บอส', lateMinutes: 15, department: 'Dev', month: 1 },
  { id: 14, name: 'เอิร์ธ', lateMinutes: 0, department: 'Dev', month: 1 },
  { id: 15, name: 'กู้', lateMinutes: 0, department: 'Dev', month: 1 },
  { id: 16, name: 'โย', lateMinutes: 15, department: 'Dev', month: 1 },
  { id: 17, name: 'เอ็ม', lateMinutes: 7, department: 'Dev', month: 1 },
  { id: 18, name: 'ตี๋', lateMinutes: 3, department: 'Dev', month: 1 },

  // มีนาคม 
  { id: 19, name: 'นุ๊กเกอร์', lateMinutes: 0, department: 'Dev', month: 2 },
  { id: 20, name: 'ตุ๋ง', lateMinutes: 162, department: 'Dev', month: 2 },
  { id: 21, name: 'บอส', lateMinutes: 12, department: 'Dev', month: 2 },
  { id: 22, name: 'เอิร์ธ', lateMinutes: 0, department: 'Dev', month: 2 },
  { id: 23, name: 'กู้', lateMinutes: 0, department: 'Dev', month: 2 },
  { id: 24, name: 'โย', lateMinutes: 22, department: 'Dev', month: 2 },
  { id: 25, name: 'เอ็ม', lateMinutes: 0, department: 'Dev', month: 2 },
  { id: 26, name: 'ตี๋', lateMinutes: 0, department: 'Dev', month: 2 },

    // เมษายน 
  { id: 27, name: 'นุ๊กเกอร์', lateMinutes: 0, department: 'Dev', month: 3 },
  { id: 28, name: 'ตุ๋ง', lateMinutes: 102, department: 'Dev', month: 3 },
  { id: 29, name: 'บอส', lateMinutes: 12, department: 'Dev', month: 3 },
  { id: 30, name: 'เอิร์ธ', lateMinutes: 0, department: 'Dev', month: 3 },
  { id: 31, name: 'กู้', lateMinutes: 0, department: 'Dev', month: 3 },
  { id: 32, name: 'โย', lateMinutes: 44, department: 'Dev', month: 3 },
  { id: 33, name: 'เอ็ม', lateMinutes: 15, department: 'Dev', month: 3 },
  { id: 34, name: 'ตี๋', lateMinutes: 0, department: 'Dev', month: 3 },
];

export const getLastUpdated = (): string => {
  // For demo purposes, we return a fixed date in a human-readable format.
  const date = new Date('2026-02-11T10:30:00');
  return date.toLocaleString('en-EN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getLatestMonth = () => {
  return Math.max(...MOCK_EMPLOYEES.map((e) => e.month));
};
