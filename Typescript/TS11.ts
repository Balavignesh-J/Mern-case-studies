//For Loop
type Transactiontype = "checkout" | "return" | "priority" | "cancelled";

let transactions:Transactiontype[] = ["checkout", "return", "priority", "cancelled", "return", "priority", "cancelled" ,"priority", "cancelled", "priority"];

let transactionCounter:Record<Transactiontype, number>={
    checkout:0,
    return:0,
    priority:0,
    cancelled:0
};

for (let i = 0; i < transactions.length; i++) {
    const element = transactions[i]!;
    transactionCounter[element]++;
}

console.log(transactionCounter)

//While Loop
let j:number=0;
while (true) {
    if (j===transactions.length) {
        break;
    }
    if (transactions[j]==="priority"){
        break;
    }
    j++;
}

console.log(j);

//Do While
let returnQueue: string[] = ["return1", "return2"];

do {
    const currentReturn = returnQueue.shift();
    console.log("Processing return:", currentReturn);

    if (Math.random() > 0.6) {
        const newReturn = "return" + (returnQueue.length + 1);
        returnQueue.push(newReturn);
    }

} while (returnQueue.length > 0);

//For in
const inventory:Record<string,number> = { apples: 50, oranges: 20, bananas: 15 };

for (const key in inventory) {
    inventory[key]=0;
}
console.log(inventory);


//For of
const visitors:string[] = ['Alice', 'Bob', 'Charlie', 'David'];
let reversevisitors:string[] = [];

for (const element of visitors) {
    reversevisitors.unshift(element);
}

console.log(reversevisitors);