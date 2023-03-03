let button = document.querySelectorAll('#functionalButtons');
let evaluateButton = document.querySelector('#evaluateButton');
let clearButton = document.querySelector('#clearButton');
let result = document.querySelector('h1');


evaluateButton.addEventListener('click', function(){
    if(result.innerText !== ' '){
        let evaluation = result.innerText;
        result.innerText = eval(evaluation);
    }
})



button.forEach(button => {
    button.addEventListener('click', function(){
        result.innerText += button.value;
    })
})

clearButton.addEventListener('click', function(){
    result.innerHTML = "&nbsp;"
})




