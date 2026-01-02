interface Members {
    id:number,
    name:string,
    email?:string
}

const member1:Members=
    {
        id:1,
        name:"Kamal",
        email:"kamal@gmail.com"
    };
const member2:Members={
        id:2,
        name:"Rajini"
    };

function displayMember(id:number,name:string,email?:string):void {
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    if (email) console.log(`Email: ${email}`);
}

displayMember(member1.id,member1.name,member1.email);
displayMember(member2.id,member2.name);

let fines:number[]=[5, 10, 2.5];

function calculateFines(fines:number[]):number {
    let total:number=0;
    for (const fine of fines) {
        total+=fine;
    }
    return total;
}
console.log(calculateFines(fines));

let money:number=100;

function membershipFee(amount:number,discount:number=10):number {
    const discountdecimal:number=discount/100;
    const fee:number=amount-(amount*discountdecimal);
    return fee;
}

console.log(membershipFee(money));
console.log(membershipFee(money,20));

function vipGreet(name: string): string {
    return `Welcome VIP member ${name}`;
}

function consoleGreet(name: string): void {
    console.log(`Hello ${name}`);
}
const visitors: string[] = ["Alice", "Bob"];

for (const visitor of visitors) {
    console.log(vipGreet(visitor));
    consoleGreet(visitor);
}

function factorial(num:number):number {
    if ((num===0) || (num===1)){
        return 1;
    }
    return num*factorial(num-1);
}

console.log(factorial(5));

type Book = {
    title: string;
};

const books: Book[] = [
    { title: "1984" },
    { title: "Brave New World" }
];

function generateTextReport(items: Book[]): string {
    let report = "Book Report:\n";

    for (const item of items) {
        report += `- ${item.title}\n`;
    }

    return report;
}

function generateJsonReport(items: Book[]): string {
    return JSON.stringify(items, null, 2);
}

console.log(generateTextReport(books));
console.log(generateJsonReport(books));