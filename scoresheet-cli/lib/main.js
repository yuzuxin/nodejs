const cli = require('cli-interact');
let stuInfo = [];

function main(){
    let answer = cli.question(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`)

    switch(answer){
        case '1':
            addStudent();
            break;
        case '2':
            printReport();
            break;
        case '3':
            process.exit(1);
    }
}
function addStudent(){
    let input = cli.question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n");
    let inputArr = input.split(",");
    if(inputArr.length != 8){
        let input = cli.question("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n");
    }else{
        let student = {};
        let sum = 0;
        for(let i = 4;i < inputArr.length;i++){
            sum +=parseInt(inputArr[i].split(":")[1]);
        }
        let average = sum/4;
        student.name = inputArr[0];
        student.Id = inputArr[1];
        student.nation = inputArr[2];
        student.klass = inputArr[3];
        student.math = inputArr[4].split(":")[1];
        student.chinese = inputArr[5].split(":")[1];
        student.english = inputArr[6].split(":")[1];
        student.program = inputArr[7].split(":")[1];
        student.average = average;
        student.sum = sum;

        stuInfo.push(student);
        console.log("\n\n学生"+ input.split(",")[0] + "的成绩被添加\n\n");
    }
    main();
}

function printReport(){
    let input = cli.question("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n");
    let inputArr = input.split(",");
    let scoreList = "";
    if(isNaN(parseInt(inputArr))){
        let input = cli.question("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n");
        
        }else{
        console.log("成绩单");
        console.log("姓名|数学|语文|英语|编程|平均分|总分 ");
        console.log("=====================================");
        for(let j = 0;j < stuInfo.length;j++){
            scoreList += stuInfo[j].name + "|" + stuInfo[j].math + "|" + stuInfo[j].chinese + "|" + stuInfo[j].english + "|" + stuInfo[j].program + "|" + stuInfo[j].average + "|" + stuInfo[j].sum + "\n";
            continue;
        }
    }
    console.log(scoreList);
    console.log("全班总分平均数：");
    console.log("全班总分中位数：");
    main();
}
// function median(scoreList){
// 	for(let i=0;i< scoreList.length ;i++){
//         for(let j =i; j< scoreList.length ; j++){
//             if(scoreList[i]< scoreList[j]){
//                 let temp = scoreList[i];
//                 scoreList[i] = scoreList[j];
//                 scoreList[j] = temp;
//             }
//         }
//     }
// return scoreList[parseInt(scoreList.length/2)]
// }

module.exports = main;
