function showNumber(num){
    if(document.getElementById('display').innerText == 0){
        document.getElementById('display').innerText = num;
    }
    else{
        document.getElementById('display').innerText += num;
    }
    // if(document.getElementById('display').innerText == 0){
    //     document.getElementById('clear').innerText = 0;
    // }
}
function calculate(){
    let userCalculation = document.getElementById('display').innerText;
    
    let result = eval(userCalculation);
    document.getElementById('display').innerText = result;
}
function clr(){
    document.getElementById('display').innerText = '0';
}
function del(){
    document.getElementById('display').innerText = document.getElementById('display').innerText.substr(document.getElementById('display').value-1, 0)
}