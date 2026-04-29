const calculator = document.querySelector('.calculator');
const screen = document.getElementById('screen')
const button = document.querySelectorAll('.buttons button')
let inputf = ""
button.forEach(element => {
    element.addEventListener('click',function(e){
    const value = e.target.value;
    if(value ==='AC'){
        inputf=''
        screen.innerText= '0'
    }
    else if(value==='DEL'){
        inputf=inputf.slice(0,-1);
        if(inputf == ''){
            screen.innerText='0'
        }else{
            screen.innerText= inputf;
        }
    }
    else if (value === "=") {
        try {
            let result = eval(inputf).toString();
            screen.innerText = result;
            return inputf=''
        } catch {
            screen.innerText = "Error";
        }
    } 
    else{
        inputf+=value
        screen.innerText = inputf
        }
    })
});
