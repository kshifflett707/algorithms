function stream() {
  function * nextPrime(value) {
    if (value > 2) {
      var i, q;
      do {
        i = 3;
        value += 2;
        q = Math.floor(Math.sqrt(value));
        while (i <= q && value % i) {
          i += 2;
        }
      } while (i <= q);
      yield value;
    }
    yield value === 2 ? 3 : 2;
  }

  function * numbers(start) {
    while(true) {
      yield start++
    }
  }

  function* primes() {
    var seq = numbers(2);
    var prime;

    while (true) {
        prime = seq.next().value;
        yield prime;
        seq = nextPrime(prime);
    }
  }

  function * take(limit, seq) {
    for (let p of seq) {
      if (limit <= 0) return
      yield p
      limit--
    }
  }

}

stream()
