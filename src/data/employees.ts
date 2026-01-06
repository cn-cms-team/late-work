import type { Employee } from '../types/employee';

export const MONTHS = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม'] as const;

export const MOCK_EMPLOYEES: Employee[] = [
  // มกราคม
  { id: 1, name: 'คุณสมชาย', lateMinutes: 5, department: 'IT', month: 'มกราคม' },
  { id: 2, name: 'น้องพลอย', lateMinutes: 0, department: 'Marketing', month: 'มกราคม' },
  { id: 3, name: 'พี่วิชัย', lateMinutes: 45, department: 'Sales', month: 'มกราคม' },
  { id: 4, name: 'น้องมายด์', lateMinutes: 12, department: 'HR', month: 'มกราคม' },
  { id: 5, name: 'คุณเก่ง', lateMinutes: 120, department: 'Dev', month: 'มกราคม' },
  { id: 6, name: 'น้องบีม', lateMinutes: 2, department: 'Admin', month: 'มกราคม' },
  { id: 7, name: 'พี่เอก', lateMinutes: 95, department: 'Manager', month: 'มกราคม' },
  { id: 8, name: 'คุณนุ่น', lateMinutes: 0, department: 'Accounting', month: 'มกราคม' },

  // กุมภาพันธ์
  { id: 11, name: 'คุณสมชาย', lateMinutes: 15, department: 'IT', month: 'กุมภาพันธ์' },
  { id: 12, name: 'น้องพลอย', lateMinutes: 5, department: 'Marketing', month: 'กุมภาพันธ์' },
  { id: 13, name: 'พี่วิชัย', lateMinutes: 10, department: 'Sales', month: 'กุมภาพันธ์' },
  { id: 14, name: 'น้องมายด์', lateMinutes: 0, department: 'HR', month: 'กุมภาพันธ์' },
  { id: 15, name: 'คุณเก่ง', lateMinutes: 80, department: 'Dev', month: 'กุมภาพันธ์' },
  { id: 16, name: 'น้องบีม', lateMinutes: 0, department: 'Admin', month: 'กุมภาพันธ์' },
  { id: 17, name: 'พี่เอก', lateMinutes: 30, department: 'Manager', month: 'กุมภาพันธ์' },
  { id: 18, name: 'คุณนุ่น', lateMinutes: 100, department: 'Accounting', month: 'กุมภาพันธ์' },

  // มีนาคม
  { id: 21, name: 'คุณสมชาย', lateMinutes: 0, department: 'IT', month: 'มีนาคม' },
  { id: 22, name: 'น้องพลอย', lateMinutes: 2, department: 'Marketing', month: 'มีนาคม' },
  { id: 23, name: 'พี่วิชัย', lateMinutes: 120, department: 'Sales', month: 'มีนาคม' },
  { id: 24, name: 'น้องมายด์', lateMinutes: 5, department: 'HR', month: 'มีนาคม' },
  { id: 25, name: 'คุณเก่ง', lateMinutes: 60, department: 'Dev', month: 'มีนาคม' },
  { id: 26, name: 'น้องบีม', lateMinutes: 15, department: 'Admin', month: 'มีนาคม' },
  { id: 27, name: 'พี่เอก', lateMinutes: 45, department: 'Manager', month: 'มีนาคม' },
  { id: 28, name: 'คุณนุ่น', lateMinutes: 10, department: 'Accounting', month: 'มีนาคม' },
];
