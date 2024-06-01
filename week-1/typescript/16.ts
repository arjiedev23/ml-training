/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */

const Students = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];

function ComputeAverages () {
  for (var i = 0; i < Students.length; i++) {
    if (Students[i].mark < 60) {
      console.log(Students[i].name + " " + Students[i].mark + " - E" );
    } else if (Students[i].mark >= 60 && Students[i].mark < 70) {
      console.log(Students[i].name + " " + Students[i].mark + " - D" );
    } else if (Students[i].mark >= 70 && Students[i].mark < 80) {
      console.log(Students[i].name + " " + Students[i].mark + " - C" );
    } else if (Students[i].mark >= 80 && Students[i].mark < 90) {
      console.log(Students[i].name + " " + Students[i].mark + " - B" );
    } else if (Students[i].mark >= 90) {
      console.log(Students[i].name + " " + Students[i].mark + " - A" );
    }
  }
}

ComputeAverages();