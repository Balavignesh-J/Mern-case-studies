type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

type InstructorOrAdmin = Instructor | Admin;

type Assignment = { title: string; dueDate: Date; points: number};

type ReadonlyAssignment = Readonly<Assignment>;

type LearnerStats = { quizzes: number; videos: number; assignments: number};