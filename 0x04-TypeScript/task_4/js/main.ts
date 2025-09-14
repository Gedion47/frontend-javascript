/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Teacher objects with specific experience for each subject
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

const javaTeacher: Subjects.Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  experienceTeachingJava: 5,
};

const reactTeacher: Subjects.Teacher = {
  firstName: "Emily",
  lastName: "Johnson",
  experienceTeachingReact: 3,
};

// Create subject instances
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// ----------- CPP -------------
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ----------- Java ------------
console.log("Java");
java.setTeacher(javaTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ----------- React -----------
console.log("React");
react.setTeacher(reactTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
