interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee Break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "cannot work from home";
  }
  getCoffeeBreak(): string {
    return "cannot have a break";
  }
  workDirectorTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: string | number): Director | Teacher {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
}
console.log(createEmployee(500));
console.log(createEmployee(1000));

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) return workDirectorTasks();
  return workTeacherTasks();
}

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") return "Teaching Math";
  if (todayClass === "History") return "Teaching History";
}
console.log(teachClass("Math"));
console.log(teachClass("History"));
