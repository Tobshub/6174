function evaluate(i, target, steps = 0) {
  const diff = SplitSort(i) - SplitSort(i, true);
  return diff === target ? steps : evaluate(diff, target, steps + 1);
}

function SplitSort(x, reverse = false) {
  return (
    parseInt(
      Math.abs(x)
        .toString()
        .split("")
        .sort((a, b) => (reverse ? b - a : a - b))
        .join("")
    ) * Math.sign(x)
  );
}

function IsUniqueDigits(x) {
  x = x.toString();
  return new Set(x.split("")).size === x.length;
}

function main() {
  let [num, end, target] = process.argv.slice(2).map((x) => parseInt(x.trim()));

  if (!num || !end) {
    return console.log(`Usage: 
\tnode 6174.js <start> <end> <target>
\tnode 6174.js <num> <target>`);
  }

  if (!target) {
    if (!IsUniqueDigits(num)) {
      return console.log(`Num must consist of unique digits`);
    }
    return console.log(
      `${num} took ${evaluate(num, end)} steps to get to ${end}`
    );
  }

  let maxSteps = -Infinity;
  let iWithMaxSteps = [];
  while (num <= end) {
    if (!IsUniqueDigits(num)) {
      num++;
      continue;
    }
    const step = evaluate(num, target);
    console.log(`${num} took ${step} steps`);
    if (step > maxSteps) {
      maxSteps = step;
      iWithMaxSteps = [num];
    } else if (step === maxSteps) {
      iWithMaxSteps.push(num);
    }
    num++;
  }

  console.log(`
Number with max steps before reaching ${target}

Numbers(${iWithMaxSteps.length}): ${iWithMaxSteps}
Steps: ${maxSteps}`);
}

main();
