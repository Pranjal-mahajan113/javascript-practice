// Your tasks are to:

// ✅ Use filter() to get an array of all students who passed the exam.

// 📈 Use map() to get an array of strings in the format: "Alice scored 87 marks."

// 🧮 Use reduce() to calculate the average score of all students.

const students = [
  { name: "Alice", score: 87, passed: true },
  { name: "Bob", score: 35, passed: false },
  { name: "Charlie", score: 52, passed: true },
  { name: "David", score: 63, passed: true },
  { name: "Eve", score: 29, passed: false }
];

const pass = students.filter(student => student.passed);
console.log(pass);


console.log(students.map(student => `${student.name}`))


function Person(name,age,rollno){
   
    return  {
    
    name:name,
    age:age,
    rollno:rollno}
      }
 const person1 = Person("mos",21,6564)
  const person2 = Person("rin",25,543652)