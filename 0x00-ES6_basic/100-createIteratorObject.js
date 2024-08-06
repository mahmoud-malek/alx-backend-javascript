/* eslint no-restricted-syntax: "off", no-param-reassign: "off" */
export default function createIteratorObject(report) {
  function* generator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return generator();
}
