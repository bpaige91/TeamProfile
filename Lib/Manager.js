const Employee = require("./Employee.js");
// In addition to `Employee' properties and methods, `Manager` will also have the following:
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;