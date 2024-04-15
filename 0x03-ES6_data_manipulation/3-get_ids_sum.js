export default function getStudentIdsSum(students) {
  return students.reduce((sum, obj) => sum + obj.id, 0);
}
