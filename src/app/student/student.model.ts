export interface Student {
  id?: number,
  matriculation: number;
  firstName: string,
  lastName: string,
  ects: number,
  semester: number,
  status: 'Enrolled' | 'Graduated' | 'Other',
}
