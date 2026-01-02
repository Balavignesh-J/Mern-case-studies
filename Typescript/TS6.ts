function throwInvalidAmount(msg:string):never {
    throw new Error(msg);
    
}

function processTransaction(amount :number, description?:string ,isCredit:boolean=true):void {
    if (amount<0){
        throwInvalidAmount("Amount cannot be negative");
    }

    const finalDescription:string = description ?? "No description available";

    const type:string = isCredit?"credit":"debit";

    console.log(`Type: ${type}`);
    console.log(`Amount: ₹${amount}`);
    console.log(`Description: ${finalDescription}`);
}

processTransaction(1500,"Grocery Bill",false)