function fibs(seqNum) {
    try {
        if(seqNum <= 0 || !Number.isInteger(seqNum)) {
            throw new Error("Please use a natural number!");
        }

        const seq = [0, 1];
        if(seqNum === 1) return [seq[0]];
        for(let seqIter = 2; seqIter < seqNum; seqIter++) {
            seq.push(seq.at(-1) + seq.at(-2));
        }
        return seq;

    } catch(error) {
        console.error(`Caught an error: ${error.message}`);
    }
}

function fibsRec(seqNum, seq = [0, 1]) {
    console.log("This was printed recursively");
    try {
        if (seqNum <= 0 || !Number.isInteger(seqNum)) {
            throw new Error("Please use a natural number!");
        }
        if (seqNum <= seq.length) {
            return seq.slice(0, seqNum);
        }
        return fibsRec(seqNum, [...seq, seq.at(-1) + seq.at(-2)]);

    } catch(error) {
        console.error(`Caught an error: ${error.message}`);
    }
}

console.log(fibsRec(8));
// console.log(fibsRec(1));
// console.log(fibsRec(0));
// console.log(fibsRec(83.4));
// console.log(fibsRec(-5));