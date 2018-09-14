function pf(n) {
  let r = [];
  let b = 1;
  let p = 2;

  while (p < n) {
    if (n % p === 0) {
      r.push(p);
      n = n / p;
    } else {
      p = p + b;
      b = 2;
    }
  }

  r.push(n);
  return r;
}

module.exports = function getZerosCount(number, base) {
  let count = 0;

  let pp = pf(base);
  let p = new Map();
  for (let i of pp) p.set(i, p.has(i) ? p.get(i) + 1 : 1);
  p = [...p.entries()];

  let c = Array(p.length).fill(0);
  for (let i = 0; i < p.length; i++) {
    let j = p[i][0];
    let k = j;
    while (number / k >= 1) {
      c[i] += Math.floor(number / k);
      k *= j;
    }
  }

  return Math.min(...c.map((x, i) => Math.floor(x / p[i][1])));
};
