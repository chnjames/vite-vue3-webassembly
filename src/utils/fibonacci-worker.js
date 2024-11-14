// fibonacci-worker.js
self.onmessage = (e) => {
  const calculateFibonacci = (n) => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  const result = calculateFibonacci(e.data);
  self.postMessage(result);
};