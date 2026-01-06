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
  { id: 1, name: 'คุณสมชาย', lateMinutes: 5, department: 'IT', month: 0 },
  { id: 2, name: 'น้องพลอย', lateMinutes: 0, department: 'Marketing', month: 0 },
  { id: 3, name: 'พี่วิชัย', lateMinutes: 45, department: 'Sales', month: 0 },
  { id: 4, name: 'น้องมายด์', lateMinutes: 12, department: 'HR', month: 0 },
  { id: 5, name: 'คุณเก่ง', lateMinutes: 120, department: 'Dev', month: 0 },
  { id: 6, name: 'น้องบีม', lateMinutes: 2, department: 'Admin', month: 0 },
  { id: 7, name: 'พี่เอก', lateMinutes: 95, department: 'Manager', month: 0 },
  { id: 8, name: 'คุณนุ่น', lateMinutes: 0, department: 'Accounting', month: 0 },

  // กุมภาพันธ์
  { id: 11, name: 'คุณสมชาย', lateMinutes: 15, department: 'IT', month: 1 },
  { id: 12, name: 'น้องพลอย', lateMinutes: 5, department: 'Marketing', month: 1 },
  { id: 13, name: 'พี่วิชัย', lateMinutes: 10, department: 'Sales', month: 1 },
  { id: 14, name: 'น้องมายด์', lateMinutes: 0, department: 'HR', month: 1 },
  { id: 15, name: 'คุณเก่ง', lateMinutes: 80, department: 'Dev', month: 1 },
  { id: 16, name: 'น้องบีม', lateMinutes: 0, department: 'Admin', month: 1 },
  { id: 17, name: 'พี่เอก', lateMinutes: 30, department: 'Manager', month: 1 },
  { id: 18, name: 'คุณนุ่น', lateMinutes: 100, department: 'Accounting', month: 1 },

  // มีนาคม
  { id: 21, name: 'คุณสมชาย', lateMinutes: 0, department: 'IT', month: 2 },
  { id: 22, name: 'น้องพลอย', lateMinutes: 2, department: 'Marketing', month: 2 },
  { id: 23, name: 'พี่วิชัย', lateMinutes: 120, department: 'Sales', month: 2 },
  { id: 24, name: 'น้องมายด์', lateMinutes: 5, department: 'HR', month: 2 },
  { id: 25, name: 'คุณเก่ง', lateMinutes: 60, department: 'Dev', month: 2 },
  { id: 26, name: 'น้องบีม', lateMinutes: 15, department: 'Admin', month: 2 },
  { id: 27, name: 'พี่เอก', lateMinutes: 45, department: 'Manager', month: 2 },
  { id: 28, name: 'คุณนุ่น', lateMinutes: 10, department: 'Accounting', month: 2 },
];
