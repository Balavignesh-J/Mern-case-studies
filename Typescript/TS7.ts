enum Role {Doctor='Doctor', Nurse='Nurse', Admin='Admin'};

interface Staff {
    id:number,
    name:string,
    role:Role
}

let staff_member:Staff[] = [
    {
        id:1,
        name:"Kamal",
        role:Role.Doctor
    },{
        id:2,
        name:"Suriya",
        role:Role.Admin
    },{
        id:3,
        name:"Vijay",
        role:Role.Nurse
    }
];

function staff_details(staff:Staff[]):void {
    for (let index = 0; index < staff.length; index++) {
        let element:Staff | undefined = staff[index];
        console.log(`${element?.id}  ${element?.name} ${element?.role}`);
    }
}

staff_details(staff_member);