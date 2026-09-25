import students from "./index.js";
console.log(JSON.stringify(students));
let marks = students[0].marks;
let total = marks.reduce((sum,current)=> sum+current,0);
students.forEach(element => {
    console.log(element);
});
console.log(total);
let avg = total/marks.length;
console.log(avg);
function AverageCal(marks){
    total = marks.reduce((sum,curr)=>sum+curr,0);
    return total/marks.length;
}
console.log(`Avg Marks for Akash: ${AverageCal(students[0].marks)}`);
console.log(`Avg Marks for Stud2: ${AverageCal(students[1].marks)}`);
console.log(`Avg Marks for Stud3: ${AverageCal(students[2].marks)}`);


