console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name.toString().trim()}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('\nThis important software is now closing');
});
