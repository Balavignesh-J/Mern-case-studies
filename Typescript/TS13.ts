function describePerson(name:string,age?:number) {
    if(typeof age === "number"){
        console.log(`Name: ${name}, Age: ${age}`);
    }else{
        console.log(`Name: ${name}, Age: Unknown`);
    }
}

function calculatePrice(basePrice: number,discount: number = 0.1) {
    return basePrice-basePrice*discount;
}

describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));