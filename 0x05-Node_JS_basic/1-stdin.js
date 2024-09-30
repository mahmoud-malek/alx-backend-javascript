console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name.toString().trim()}\n`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing');
});
