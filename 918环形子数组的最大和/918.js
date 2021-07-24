var maxSubarraySumCircular = function (A) {
  let sumA = A.reduce((sum, n) => sum + n, 0)
  let maxNoCircle = getMax(A)

  A = A.map(item => -item)
  let maxHasCircle = sumA + getMax(A)
  if (maxHasCircle === 0) {
    return maxNoCircle
  }
  else {
    return Math.max(maxHasCircle, maxNoCircle)
  }

  function getMax(A) {
    let dp = [A[0]]
    for (let i = 1; i < A.length; i++) {
      dp[i] = Math.max(dp[i - 1] + A[i], A[i])
    }
    return Math.max(...dp)
  }
};