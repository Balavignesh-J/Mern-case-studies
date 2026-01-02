abstract class Content{
    public readonly course_url:string="http://courselink.com";
    public readonly course_Name:string="Data structures and Algorithms";
    protected published: boolean = false;

    publish(): void {
        this.published = true;
    }

    abstract getType():string;
}

type UserRole = "student" | "instructor";

class Assignment extends Content{
    private dueDate:Date|null=null;
    private assignment_name:string="Implement a dynamic stack";
    setDueDate(date:Date,isinstructor:UserRole="student"){
        if (this.published) {
            throw new Error("Cannot update due date after publishing");
        }

        if (isinstructor==="instructor") {
            this.dueDate=date;
        }else{
            throw new Error("you do not have access");
        }
    }

    getDueDate(): Date | null {
        return this.dueDate;
    }

    getType(): string {
        return "Assignment";
    }

    public getDetails():void {
        console.log(`Course name: ${this.course_Name} ,Course Link: ${this.course_url} ans Assignment: ${this.assignment_name}`);
    }

}

let assignment = new Assignment();
assignment.setDueDate(new Date(),"instructor");
console.log(assignment.getDueDate());
console.log(assignment.getType());
assignment.getDetails();

assignment.setDueDate(new Date(),"student");
assignment.getDetails();