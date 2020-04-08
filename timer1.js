const timer = (times) => {
  inTimes = []; 
  for (const each of times){
    inTimes.push(parseInt(each));
  }
  orgTimes = inTimes.sort((a, b) => a - b);
  console.log(orgTimes)
  for (const sec of orgTimes) {
    if (sec >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (sec * 100));
    } 
  }
};

const args = process.argv;
let times = (args.slice(2));
timer(times);
