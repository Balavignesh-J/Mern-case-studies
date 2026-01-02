function recordAnswer(question_id:any,answer:any):{ question_id: any; answer: any }{
    return {question_id,answer}
}

let type1=recordAnswer(1,"1");
let type2=recordAnswer(2,2);
let type3=recordAnswer(3,[3]);

console.log(type1,type2,type3);