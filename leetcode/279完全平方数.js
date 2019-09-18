/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  var dp = new Array(n+1).fill(0);  
  for(let i = 1; i <= n; i++){
    dp[i] = i;
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - (j * j)]+1);
    }
  }
  return dp[n];
};
console.log(numSquares(12));