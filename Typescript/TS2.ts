let fruit: string = "Apple";
console.log(fruit);

function doublenum(a:number):void{
    console.log(a*2);
}
doublenum(5);

//single line comment
/*  multi line comment
    multi line comment
    multi line comment  */

class Person{

    public sayHello():void{
        console.log("Hello Everyone");
    }
}

let p:any =new Person();
p.sayHello();