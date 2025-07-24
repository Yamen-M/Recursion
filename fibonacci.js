//Iterative Fibonacci
function fibs(num){
    let resultArr = [0, 1];

    if(num === 0) return [];
    if(num === 1) return [0];

    for(let i = 2; i < num; i++)
    {
        resultArr.push(resultArr[i - 1] + resultArr[i - 2]);
    }

    return resultArr;
}

//Recursive Fibonacci
function Recursivefib(num){
    if(num === 0) return [];
    if(num === 1) return [0];
    if(num === 2) return [0,1];

    const prevFibSeq = Recursivefib(num - 1);
    let len = prevFibSeq.length;
    const nextFib = prevFibSeq[len - 1] + prevFibSeq[len - 2];
    return [...prevFibSeq, nextFib]
}

console.log(fibs(8));
console.log(Recursivefib(8));