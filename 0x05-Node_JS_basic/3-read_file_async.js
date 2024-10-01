const fs = require('node:fs/promises');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }).then((data) => {
      const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');
      console.log(`Number of students: ${lines.length}`);

      const students = lines.map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return {
          firstname,
          lastname,
          age,
          field,
        };
      });

      const groupedByField = students.reduce((acc, student) => {
        if (!acc[student.field]) {
          acc[student.field] = [];
        }
        acc[student.field].push(student);
        return acc;
      }, {});

      for (const [field, students] of Object.entries(groupedByField)) {
        const names = students.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${students.length}. List: ${names}`);
      }
      resolve();
    }).catch(() => {
      reject(new Error('Cannot load the database'));
    });
  });
}

module.exports = countStudents;
