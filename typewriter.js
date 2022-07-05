const sentence = "hello there from lighthouse labs\n";

let timeCurrent = 0;

for (const letter of sentence) {

  setTimeout(() => process.stdout.write(letter), timeCurrent);
  timeCurrent += 100;

};

