// เรามี Array `studentInfo` ซึ่งบรรจุดชื่อนักเรียนและคะแนนสอบ
// ให้เขียน Algorithm ที่คัดกรองชื่อนักเรียนที่มีคะแนนสูงสุดออกมาแสดงบนหน้าจอ
const studentInfo = [
{"name": "Alice", "score": 85},
{"name": "Bob", "score": 92},
{"name": "Charlie", "score": 75},
{"name": "David", "score": 90}
]


let check = studentInfo[0];
console.log(check)
for(let i = 1; i < studentInfo.length; i++){
  console.log(i)
  if(studentInfo[i].score > check["score"]){
    check = studentInfo[i]
  } 
}

console.log(`${check.name} has the highest score, the score is ${check.score}`);
// ตัว Algorithm จะต้องแสดงผลลัพธ์ออกมาเป็น “Bob has the highest score, the score is 92”