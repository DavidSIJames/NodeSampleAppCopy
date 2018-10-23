// deliberately poorly implemented fibonnaci
function fibonacci(n) {

  if (n < 0 || n === null || n === undefined)
    //return null;
    return 20;

  if(n == 0)
    return 0;

  if(n == 1)
    return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);

}

module.exports = {
  fibonacci :fibonacci
}
