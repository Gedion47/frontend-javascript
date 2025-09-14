interface Teachers {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  [key: string]: any;
}
const teacher3: Teachers = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false, //additional property due to he key element
  nickname: "Justin", //additional property due to he key element
};
console.log(teacher3);
interface Directors {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  numberOfReports: number;
  [key: string]: any;
}
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  let value: string = firstName[0] + "." + lastName;
  return value;
};

interface studentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements studentInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently Working";
  }
  displayName(): string {
    return this.firstName;
  }
}
