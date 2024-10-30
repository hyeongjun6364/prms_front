var Employee = /** @class */ (function () {
    function Employee(name, age, job) {
        this.empName = '';
        this.age = 0;
        this.empJob = '';
        this.empName = name;
        this.age = age;
        this.empJob = job;
    }
    Employee.prototype.printEmp = function () {
        console.log("".concat(this.empName, "\uC740 ").concat(this.age, "\uC0B4\uC774\uACE0 \uC9C1\uC5C5\uC740 ").concat(this.empJob, "\uC785\uB2C8\uB2E4."));
    };
    return Employee;
}());
var jun = new Employee('jun', 25, '프론트엔드 개발자');
jun.printEmp();
