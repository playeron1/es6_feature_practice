import students from "./index.js";

function AverageCal(marks) {
    const total = marks.reduce((sum, curr) => sum + curr, 0);
    return total / marks.length;
}

const results = students.map((student) => {

    const avg = AverageCal(student.marks);

    return {
        ...student,
        avg: avg,
        status: avg >= 50 ? "Pass" : "Fail"
    };
});
const passStuds = results.filter(r=> r.status==='Pass')
console.log(results);
console.log(passStuds);
const topper = results.reduce((highest,current)=>{
    return current.avg>highest.avg? current:highest
})
console.log(topper.name);

