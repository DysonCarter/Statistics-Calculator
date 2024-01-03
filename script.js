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
    if (isNaN(p) || isNaN(n) || isNaN(x) || p < 0 || p > 1 || n <= 0 || x < 0 || x > n) {
        alert('Please enter valid values for p and n.');
        return;
    }

    var result = ( choose(n,x) * Math.pow(p,x) * Math.pow(1-p, n-x)) //by definition of binomial
    // Display the result
    document.getElementById('result').textContent = `Odds of ${x} wins in ${n} trials = ` + result.toFixed(4);  
}

function nb() {
    var x = parseInt(document.getElementById('x').value);
    var k = parseInt(document.getElementById('k').value);
    var p = parseFloat(document.getElementById('p').value);
    var r = parseInt(document.getElementById('r').value);

    if(isNaN(k)){
        k = x - r;
    }

    // Check if the input values are valid
    if (isNaN(p) || isNaN(r) || (isNaN(k)) || p < 0 || p > 1 || r <= 0 || k < r){
        alert('Please enter valid values for p, r, and k/x.');
        return;
    }

    var result = (choose(k + r - 1, k) * Math.pow(1 - p, k) * Math.pow(p, r)); // by definition of negative binomial

    // Display the result
    document.getElementById('result').textContent = `Odds of ${r} successes given ${k} failures = ` + result.toFixed(4);
}

function poisson(){
    var lambda = parseFloat(document.getElementById("lambda").value);
    var x = parseInt(document.getElementById('x').value);
    var e = 2.71828;

    // Check if the input values are valid
    if (isNaN(lambda) || isNaN(x) || lambda < 0 || x < 0){
        alert('Please enter valid values for λ and x');
        return;
    }

    var result = (Math.pow(lambda, x) * Math.pow(e, -1 * lambda))/factorial(x);

    // Display the result
    document.getElementById('result').textContent = `Odds of ${x} events in the given time = ` + result.toFixed(4);
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