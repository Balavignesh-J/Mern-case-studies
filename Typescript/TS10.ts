function checkSign(num: number): void{
    if (num>0){
        console.log("Positive");
    }
    else if(num<0){
        console.log("Negative");
    }else{
        console.log("Zero");
    }
}

function evenOrOdd(num: number): void{
    if (num%2===0) {
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}

function getGrade(score: number): string{
    if (score>=90) {
        return "A";
    }
    else if (score>=80) {
        return "B";
    }
    else if (score>=70) {
        return "C";
    }
    else if (score>=60) {
        return "D";
    }else{
        return "F";
    }
}

function provideFeedback(grade: string): void{
    switch (grade) {
        case "A":
            console.log("Exceptional work!");
            break;
        case "B":
            console.log("Great job");
            break;
        case "C":
            console.log("Satisfactory effort");
            break;
        case "D":
            console.log("Below expectations");
            break;
        case "F":
            console.log("Insufficient");
            break;
        default:
            console.log("Wrong Value");
            break;
    }
}