let student = {
name : "Prajwal Patil",
age: 22,
cgpa: 7.1,
isPass: true
};

for(let key in student){
    console.log("key: "+key, "value: "+student[key]);
}