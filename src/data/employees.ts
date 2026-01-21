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
  { id: 1, name: 'นุ๊กเกอร์', lateMinutes: 5, department: 'Dev', month: 0 },
  { id: 2, name: 'ตุ๋ง', lateMinutes: 0, department: 'Dev', month: 0 },
  { id: 3, name: 'บอส', lateMinutes: 45, department: 'Dev', month: 0 },
  { id: 4, name: 'เอิร์ธ', lateMinutes: 12, department: 'Dev', month: 0 },
  { id: 5, name: 'กู้', lateMinutes: 120, department: 'Dev', month: 0 },
  { id: 6, name: 'โย', lateMinutes: 2, department: 'Dev', month: 0 },
  { id: 7, name: 'เอ็ม', lateMinutes: 95, department: 'Dev', month: 0 },
  { id: 8, name: 'ตี๋', lateMinutes: 0, department: 'Dev', month: 0 },

  // กุมภาพันธ์
  { id: 11, name: 'นุ๊กเกอร์', lateMinutes: 15, department: 'Dev', month: 1 },
  { id: 12, name: 'ตุ๋ง', lateMinutes: 5, department: 'Dev', month: 1 },
  { id: 13, name: 'บอส', lateMinutes: 10, department: 'Dev', month: 1 },
  { id: 14, name: 'เอิร์ธ', lateMinutes: 0, department: 'Dev', month: 1 },
  { id: 15, name: 'กู้', lateMinutes: 80, department: 'Dev', month: 1 },
  { id: 16, name: 'โย', lateMinutes: 0, department: 'Dev', month: 1 },
  { id: 17, name: 'เอ็ม', lateMinutes: 30, department: 'Dev', month: 1 },
  { id: 18, name: 'ตี๋', lateMinutes: 100, department: 'Dev', month: 1 },

  // มีนาคม
  { id: 21, name: 'นุ๊กเกอร์', lateMinutes: 0, department: 'Dev', month: 2 },
  { id: 22, name: 'ตุ๋ง', lateMinutes: 2, department: 'Dev', month: 2 },
  { id: 23, name: 'บอส', lateMinutes: 120, department: 'Dev', month: 2 },
  { id: 24, name: 'เอิร์ธ', lateMinutes: 5, department: 'Dev', month: 2 },
  { id: 25, name: 'กู้', lateMinutes: 60, department: 'Dev', month: 2 },
  { id: 26, name: 'โย', lateMinutes: 15, department: 'Dev', month: 2 },
  { id: 27, name: 'เอ็ม', lateMinutes: 45, department: 'Dev', month: 2 },
  { id: 28, name: 'ตี๋', lateMinutes: 10, department: 'Dev', month: 2 },
];
