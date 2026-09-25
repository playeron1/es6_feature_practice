import students from "./index.js";
console.log(JSON.stringify(students));
let total =students.reduce((sum,current)=> acc+current,0);
students.forEach(element => {
    console.log(students);
});
console.log(total);

