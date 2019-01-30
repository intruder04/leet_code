const fact = (n) => {
    let result = 1;
    while (n > 0) {
      result *= n;
      n--;
    }
    return result;
}

fact(5);

const factRec = (n, accum = 1) => {
    if (n === 1) {
        return accum;
    }
    return factRec(n - 1, n * accum); 
}

factRec(3);