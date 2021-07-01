import { Student } from "./student.model";

export const SeedStudents: Student[] = [
  {
    id: 1,
    matriculation: 123456,
    firstName: 'John',
    lastName: 'Doe',
    ects: 125,
    semester: 6,
    status: 'Enrolled'
  },
  {
    id: 2,
    matriculation: 987654,
    firstName: 'Alex',
    lastName: 'Farguson',
    ects: 210,
    semester: 9,
    status: 'Graduated'
  }
];