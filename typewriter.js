const sentence = "hello there from lighthouse labs";
let delay = 0;
let count = 0;

  for(let char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
        count++;
        if(count === sentence.length) process.stdout.write('\n');
      }, delay);
    delay += 60;
  }


