class Student {
  constructor (StudentObj){
    this.name = StudentObj.name;
    this.age = StudentObj.age;
    this.scores = [];
  }
  logScore(grades){
    this.scores.unshift(88, 74)
  }
}

module.exports = Student
