class Employee {
  #empName: string = '';
  #age: number = 0;
  #empJob: string = '';
  constructor(name: string, age: number, job: string) {
    this.#empName = name;
    this.#age = age;
    this.#empJob = job;
  }
  printEmp(): void {
    console.log(
      `${this.#empName}은 ${this.#age}살이고 직업은 ${this.#empJob}입니다.`
    );
  }
}
const jun = new Employee('jun', 25, '프론트엔드 개발자');
jun.printEmp();
