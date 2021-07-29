
// function submit()
// {
//     var pass = document.getElementById("inputPassword4").value;
//     console.log(pass);
   
// }

function new_element(c){
    var node = document.getElementById('new');
    var code = `<label for="result"><b>Result</b></label><div id="result">${c}</div>`;
    node.innerHTML=code;
}

function add(a,b){
    c = a + b;
    new_element(c);
}

function sub(a,b){
    c = a - b;
    new_element(c);
}

function mul(a,b){
    c = a * b;
    new_element(c);
}

function div(a,b){
    c = a / b;
    new_element(c);
}

