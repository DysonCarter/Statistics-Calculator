//Functions for redirect buttons
function goToHome(){
    window.location.href = "home.html";
}
function goToNormal(){
    window.location.href = "normal.html";
}
function goToBinomial(){
    window.location.href = "binomial.html";
}
function goToNB(){
    window.location.href = "nb.html";
}
function goToPoisson(){
    window.location.href = "poisson.html";
}
function goToExponential(){
    window.location.href = "exponential.html";
}
function goToGamma(){
    window.location.href = "gamma.html";
}
function goToChi(){
    window.location.href = "chi.html";
}
function goToToT(){
    window.location.href = "t.html";
}

//Functions for calculation
function binomial(){
    var x = parseInt(document.getElementById('x').value);
    var p = parseFloat(document.getElementById('p').value);
    var n = parseInt(document.getElementById('n').value);

    // Check if the input values are valid
    if (isNaN(p) || isNaN(n) || p < 0 || p > 1 || n <= 0 || x > n) {
        alert('Please enter valid values for p and n.');
        return;
    }

    var result = ( choose(n,x) * Math.pow(p,x) * Math.pow(1-p, n-x)) //by definition of binomial
    // Display the result
    document.getElementById('result').textContent = `Odds of ${x} wins in ${n} trials = ` + result.toFixed(4);  
}

//Math Functions
function choose(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function factorial(x) {
    if (x === 0 || x === 1) {
        return 1;
    }
    return x * factorial(x - 1);
}